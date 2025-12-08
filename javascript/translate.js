// Translate page logic with dropdown language selection
// Using MyMemory Translation API (free and fast)

const inputEl = document.getElementById('translate-input');
const outputEl = document.getElementById('translate-output');
const charCountEl = document.getElementById('char-count');
const translateBtn = document.getElementById('translate-btn');
const copyBtn = document.getElementById('copy-btn');
const fromLangBtn = document.getElementById('from-lang-btn');
const toLangBtn = document.getElementById('to-lang-btn');
const swapBtn = document.getElementById('swap-lang-btn');

const MAX_CHARS = 250;

// Supported languages - expanded list
const SUPPORTED_LANGUAGES = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'vi', label: 'Vietnamese', native: 'Tiếng Việt' },
    { code: 'es', label: 'Spanish', native: 'Español' },
    { code: 'fr', label: 'French', native: 'Français' },
    { code: 'de', label: 'German', native: 'Deutsch' },
    { code: 'it', label: 'Italian', native: 'Italiano' },
    { code: 'pt', label: 'Portuguese', native: 'Português' },
    { code: 'ru', label: 'Russian', native: 'Русский' },
    { code: 'zh', label: 'Chinese (Simplified)', native: '中文 (简体)' },
    { code: 'ja', label: 'Japanese', native: '日本語' },
    { code: 'ko', label: 'Korean', native: '한국어' },
    { code: 'ar', label: 'Arabic', native: 'العربية' },
    { code: 'th', label: 'Thai', native: 'ไทย' },
    { code: 'id', label: 'Indonesian', native: 'Bahasa Indonesia' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'tr', label: 'Turkish', native: 'Türkçe' },
    { code: 'pl', label: 'Polish', native: 'Polski' },
    { code: 'nl', label: 'Dutch', native: 'Nederlands' },
    { code: 'sv', label: 'Swedish', native: 'Svenska' },
    { code: 'cs', label: 'Czech', native: 'Čeština' }
];

// Update character counter
if (inputEl && charCountEl) {
    const updateCounter = () => {
        const len = inputEl.value.length;
        charCountEl.textContent = `${len} / ${MAX_CHARS}`;
    };
    inputEl.addEventListener('input', updateCounter);
    updateCounter();
}

// Helper: set button language by code
function setButtonLanguage(btn, code) {
    if (!btn) return;
    const lang = SUPPORTED_LANGUAGES.find(l => l.code === code);
    if (!lang) return;
    btn.dataset.lang = lang.code;
    const labelEl = btn.querySelector('.translate-lang-label');
    if (labelEl) {
        labelEl.textContent = lang.label;
    }
}

// Initialize language dropdowns
function initLanguageDropdown(btnId, dropdownId, listId, searchId, defaultLang) {
    const btn = document.getElementById(btnId);
    const dropdown = document.getElementById(dropdownId);
    const list = document.getElementById(listId);
    const search = document.getElementById(searchId);
    
    if (!btn || !dropdown || !list || !search) return;

    // Render language list
    function renderList(filter = '') {
        const filtered = SUPPORTED_LANGUAGES.filter(lang => {
            const searchTerm = filter.toLowerCase();
            return lang.label.toLowerCase().includes(searchTerm) ||
                   lang.native.toLowerCase().includes(searchTerm) ||
                   lang.code.toLowerCase().includes(searchTerm);
        });

        list.innerHTML = filtered.map(lang => {
            const isActive = btn.dataset.lang === lang.code;
            return `
                <div class="translate-lang-item ${isActive ? 'active' : ''}" data-code="${lang.code}">
                    <span class="translate-lang-item-label">${lang.label}</span>
                    <span class="translate-lang-item-native">${lang.native}</span>
                </div>
            `;
        }).join('');

        // Attach click handlers
        list.querySelectorAll('.translate-lang-item').forEach(item => {
            item.addEventListener('click', () => {
                const code = item.dataset.code;
                setButtonLanguage(btn, code);
                closeDropdown();
            });
        });
    }

    function openDropdown() {
        dropdown.classList.add('active');
        renderList();
        search.value = '';
        search.focus();
    }

    function closeDropdown() {
        dropdown.classList.remove('active');
    }

    // Toggle dropdown on button click
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (dropdown.classList.contains('active')) {
            closeDropdown();
        } else {
            // Close other dropdowns
            document.querySelectorAll('.translate-lang-dropdown').forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });
            openDropdown();
        }
    });

    // Search functionality
    search.addEventListener('input', (e) => {
        renderList(e.target.value);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            closeDropdown();
        }
    });

    // Initialize with default language
    setButtonLanguage(btn, defaultLang);
}

// Initialize both dropdowns
initLanguageDropdown('from-lang-btn', 'from-lang-dropdown', 'from-lang-list', 'from-lang-search', 'en');
initLanguageDropdown('to-lang-btn', 'to-lang-dropdown', 'to-lang-list', 'to-lang-search', 'vi');

// Swap languages and texts
if (swapBtn && fromLangBtn && toLangBtn && inputEl && outputEl) {
    swapBtn.addEventListener('click', () => {
        const tmpLang = fromLangBtn.dataset.lang;
        setButtonLanguage(fromLangBtn, toLangBtn.dataset.lang);
        setButtonLanguage(toLangBtn, tmpLang);

        const tmpTextArea = inputEl.value;
        inputEl.value = outputEl.textContent || '';
        outputEl.textContent = tmpTextArea;
        const len = inputEl.value.length;
        if (charCountEl) {
            charCountEl.textContent = `${len} / ${MAX_CHARS}`;
        }
    });
}

// Translate using MyMemory API (free, fast, no API key required)
async function translateText(text, from, to) {
    try {
        // MyMemory Translation API - free and fast
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        if (data.responseStatus === 200 && data.responseData) {
            return data.responseData.translatedText || '';
        } else {
            throw new Error(data.responseStatus || 'Translation failed');
        }
    } catch (err) {
        console.error('Translation error:', err);
        // Fallback: try LibreTranslate
        try {
            const response = await fetch('https://libretranslate.com/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    q: text,
                    source: from,
                    target: to,
                    format: 'text'
                })
            });

            if (response.ok) {
                const data = await response.json();
                return data.translatedText || '';
            }
        } catch (fallbackErr) {
            console.error('Fallback translation error:', fallbackErr);
        }
        
        return `[Lỗi dịch: ${err.message}]`;
    }
}

// Handle Translate button
if (translateBtn && inputEl && outputEl && fromLangBtn && toLangBtn) {
    translateBtn.addEventListener('click', async () => {
        const text = inputEl.value.trim();
        if (!text) {
            outputEl.textContent = '';
            outputEl.classList.remove('loading', 'error');
            return;
        }

        const from = fromLangBtn.dataset.lang || 'en';
        const to = toLangBtn.dataset.lang || 'vi';

        if (from === to) {
            outputEl.textContent = text;
            outputEl.classList.remove('loading', 'error');
            return;
        }

        translateBtn.disabled = true;
        translateBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Translating...';
        outputEl.classList.add('loading');
        outputEl.classList.remove('error');
        outputEl.textContent = '';

        try {
            const result = await translateText(text, from, to);
            outputEl.textContent = result;
            outputEl.classList.remove('loading', 'error');
        } catch (err) {
            outputEl.textContent = `Lỗi: Không thể dịch văn bản. Vui lòng thử lại.`;
            outputEl.classList.remove('loading');
            outputEl.classList.add('error');
        } finally {
            translateBtn.disabled = false;
            translateBtn.innerHTML = 'Translate';
        }
    });
}

// Copy result
if (copyBtn && outputEl) {
    copyBtn.addEventListener('click', async () => {
        const text = outputEl.textContent || '';
        if (!text || outputEl.classList.contains('loading')) return;
        try {
            await navigator.clipboard.writeText(text);
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fa-solid fa-check"></i><span>Copied!</span>';
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
            }, 2000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    });
}
