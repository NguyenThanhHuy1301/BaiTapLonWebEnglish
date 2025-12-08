// =======================
// UTC2 Writing Checker JavaScript
// LanguageTool API Integration
// =======================

// DOM Elements
const writingInput = document.getElementById("writingInput");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");
const wordCountEl = document.getElementById("wordCount");
const sentenceCountEl = document.getElementById("sentenceCount");
const errorCountEl = document.getElementById("errorCount");
const highlightedOutput = document.getElementById("highlightedOutput");
const rewriteOutput = document.getElementById("rewriteOutput");
const errorList = document.getElementById("errorList");

// LanguageTool API Configuration
const LANGUAGETOOL_API_URL = 'https://api.languagetool.org/v2/check';
const LANGUAGE_CODE = 'en-US'; // English (US)

// State
let currentErrors = [];
let originalText = '';

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    checkBtn.addEventListener('click', handleCheck);
    clearBtn.addEventListener('click', handleClear);
    
    // Real-time word count
    writingInput.addEventListener('input', updateWordCount);
});

// Handle Check Button
async function handleCheck() {
    const text = writingInput.value.trim();
    
    if (!text) {
        alert('Vui lòng nhập đoạn văn để kiểm tra.');
        return;
    }
    
    // Show loading state
    checkBtn.disabled = true;
    checkBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Checking...';
    
    try {
        await analyzeText(text);
    } catch (error) {
        console.error('Error checking text:', error);
        alert('Có lỗi xảy ra khi kiểm tra. Vui lòng thử lại.');
    } finally {
        // Reset button state
        checkBtn.disabled = false;
        checkBtn.innerHTML = '<i class="fa-solid fa-spell-check"></i> Check Writing';
    }
}

// Handle Clear Button
function handleClear() {
    writingInput.value = '';
    highlightedOutput.innerHTML = '';
    rewriteOutput.textContent = '';
    errorList.innerHTML = '';
    updateStatistics(0, 0, 0);
}

// Update Word Count (real-time)
function updateWordCount() {
    const text = writingInput.value.trim();
    const words = text ? text.split(/\s+/).filter(word => word.length > 0) : [];
    wordCountEl.textContent = words.length;
}

// Analyze Text with LanguageTool API
async function analyzeText(text) {
    originalText = text;
    
    // Calculate statistics
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const sentenceCount = sentences.length;
    
    // Check with LanguageTool API
    const errors = await checkWithLanguageTool(text);
    currentErrors = errors;
    const errorCount = errors.length;
    
    // Update statistics
    updateStatistics(wordCount, sentenceCount, errorCount);
    
    // Highlight text
    const highlighted = highlightText(text, errors);
    highlightedOutput.innerHTML = highlighted;
    
    // Generate rewrite
    const rewrite = generateRewrite(text, errors);
    rewriteOutput.textContent = rewrite;
    
    // Render errors
    renderErrors(errors);
}

// Check Text with LanguageTool API
async function checkWithLanguageTool(text) {
    try {
        const formData = new URLSearchParams();
        formData.append('text', text);
        formData.append('language', LANGUAGE_CODE);
        
        const response = await fetch(LANGUAGETOOL_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Convert LanguageTool errors to our format
        const errors = data.matches.map(match => {
            const errorText = text.substring(match.offset, match.offset + match.length);
            const suggestion = match.replacements && match.replacements.length > 0 
                ? match.replacements[0].value 
                : errorText;
            
            // Determine error type
            let errorType = 'Grammar';
            if (match.rule && match.rule.category) {
                const category = match.rule.category.id;
                if (category === 'TYPOS' || category === 'SPELLING') {
                    errorType = 'Spelling';
                } else if (category === 'STYLE' || category === 'TYPOGRAPHY') {
                    errorType = 'Style';
                } else {
                    errorType = 'Grammar';
                }
            }
            
            return {
                type: errorType,
                original: errorText,
                suggestion: suggestion,
                message: match.message || match.rule?.description || 'Error detected',
                position: match.offset,
                length: match.length,
                context: match.context || {}
            };
        });
        
        // Also check for basic local errors (double spaces, etc.)
        const localErrors = findLocalErrors(text);
        errors.push(...localErrors);
        
        // Sort by position
        return errors.sort((a, b) => a.position - b.position);
        
    } catch (error) {
        console.error('LanguageTool API error:', error);
        // Fallback to local checking if API fails
        return findLocalErrors(text);
    }
}

// Find Local Errors (fallback and additional checks)
function findLocalErrors(text) {
    const errors = [];
    
    // Check for double spaces
    if (text.includes('  ')) {
        const matches = text.matchAll(/\s{2,}/g);
        for (const match of matches) {
            errors.push({
                type: 'Style',
                original: match[0],
                suggestion: ' ',
                message: 'Double or multiple spaces detected',
                position: match.index,
                length: match[0].length
            });
        }
    }
    
    // Check for repeated words
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i].toLowerCase().replace(/[.,!?;:]/g, '');
        const nextWord = words[i + 1].toLowerCase().replace(/[.,!?;:]/g, '');
        
        if (currentWord === nextWord && currentWord.length > 2) {
            const searchText = words[i] + ' ' + words[i + 1];
            const position = text.indexOf(searchText);
            if (position !== -1) {
                errors.push({
                    type: 'Style',
                    original: searchText,
                    suggestion: words[i],
                    message: `Repeated word: "${currentWord}"`,
                    position: position,
                    length: searchText.length
                });
            }
        }
    }
    
    return errors;
}


// Highlight Text
function highlightText(text, errors) {
    if (errors.length === 0) {
        return text.replace(/\n/g, '<br>');
    }
    
    // Sort errors by position (descending) to avoid index shifting
    const sortedErrors = [...errors].sort((a, b) => b.position - a.position);
    
    let highlighted = text;
    
    sortedErrors.forEach(error => {
        const start = error.position;
        const length = error.length || error.original.length;
        const end = start + length;
        const before = highlighted.substring(0, start);
        const errorText = highlighted.substring(start, end);
        const after = highlighted.substring(end);
        
        // Escape HTML in error text
        const escapedErrorText = errorText
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        
        highlighted = before + 
            `<span class="error-highlight" title="${escapeHtml(error.message)}">${escapedErrorText}</span>` + 
            after;
    });
    
    return highlighted.replace(/\n/g, '<br>');
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Generate Rewrite
function generateRewrite(text, errors) {
    if (errors.length === 0) {
        return text;
    }
    
    // Sort errors by position (descending) to apply fixes from end to start
    const sortedErrors = [...errors].sort((a, b) => b.position - a.position);
    let rewrite = text;
    
    // Apply fixes from LanguageTool suggestions
    sortedErrors.forEach(error => {
        const start = error.position;
        const length = error.length || error.original.length;
        const end = start + length;
        
        // Only apply fixes that have valid suggestions
        if (error.suggestion && error.suggestion !== error.original) {
            const before = rewrite.substring(0, start);
            const after = rewrite.substring(end);
            rewrite = before + error.suggestion + after;
        }
    });
    
    // Fix double spaces
    rewrite = rewrite.replace(/\s{2,}/g, ' ');
    
    // Clean up
    rewrite = rewrite.trim();
    
    return rewrite;
}

// Render Errors
function renderErrors(errors) {
    errorList.innerHTML = '';
    
    if (errors.length === 0) {
        errorList.innerHTML = `
            <div class="writing-error-empty">
                <i class="fa-solid fa-check-circle"></i>
                <p>No errors found! Your writing looks good.</p>
            </div>
        `;
        return;
    }
    
    errors.forEach((error, index) => {
        const errorItem = document.createElement('div');
        errorItem.className = 'writing-error-item';
        
        const typeIcon = error.type === 'Spelling' ? 'fa-spell-check' :
                        error.type === 'Grammar' ? 'fa-book' : 'fa-pen';
        
        // Show context if available
        const contextText = error.context?.text || '';
        const contextBefore = contextText.substring(0, error.context?.offset || 0);
        const contextAfter = contextText.substring((error.context?.offset || 0) + (error.length || error.original.length));
        
        errorItem.innerHTML = `
            <div class="writing-error-type">
                <i class="fa-solid ${typeIcon}"></i>
                ${escapeHtml(error.type)}
            </div>
            <div class="writing-error-message">${escapeHtml(error.message)}</div>
            <div class="writing-error-detail">
                <div class="writing-error-original">
                    <strong>Original:</strong> "${escapeHtml(error.original)}"
                </div>
                <div class="writing-error-suggestion">
                    <strong>Suggestion:</strong> "${escapeHtml(error.suggestion || error.original)}"
                </div>
                ${contextText ? `
                <div class="writing-error-context" style="margin-top: 8px; font-size: 0.85rem; color: #888; font-style: italic;">
                    Context: ...${escapeHtml(contextBefore)}<strong>${escapeHtml(error.original)}</strong>${escapeHtml(contextAfter)}...
                </div>
                ` : ''}
            </div>
        `;
        
        errorList.appendChild(errorItem);
    });
}

// Update Statistics
function updateStatistics(wordCount, sentenceCount, errorCount) {
    wordCountEl.textContent = wordCount;
    sentenceCountEl.textContent = sentenceCount;
    errorCountEl.textContent = errorCount;
}

