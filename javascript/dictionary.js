// Dictionary Page JavaScript - Two-way English-Vietnamese Dictionary
// API: Free Dictionary API + LibreTranslate API

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('dictionary-search-input');
    const searchBtn = document.getElementById('dictionary-search-btn');
    const resultContainer = document.getElementById('dictionary-result');
    const langSelector = document.getElementById('dictionary-lang-selector');
    const modeButtons = document.querySelectorAll('.dict-mode-btn');
    
    // Dictionary mode: 'en-vi', 'vi-en', 'en-en'
    let dictionaryMode = 'en-vi';
    
    // Initialize
    updateModeFromSelector();
    updatePlaceholder();
    setActiveModeButton();
    
    // Update mode when selector changes
    if (langSelector) {
        langSelector.addEventListener('change', function() {
            dictionaryMode = this.value;
            updatePlaceholder();
            setActiveModeButton();
            if (searchInput.value.trim()) {
                searchWord(searchInput.value.trim());
            }
        });
    }
    
    // Update mode when mode button is clicked
    modeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            dictionaryMode = this.dataset.mode;
            if (langSelector) {
                langSelector.value = dictionaryMode;
            }
            updatePlaceholder();
            setActiveModeButton();
            if (searchInput.value.trim()) {
                searchWord(searchInput.value.trim());
            }
        });
    });
    
    function updateModeFromSelector() {
        if (langSelector) {
            dictionaryMode = langSelector.value;
        }
    }
    
    function setActiveModeButton() {
        modeButtons.forEach(btn => {
            if (btn.dataset.mode === dictionaryMode) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    function updatePlaceholder() {
        if (!searchInput) return;
        
        switch(dictionaryMode) {
            case 'en-vi':
                searchInput.placeholder = 'Nhập từ tiếng Anh...';
                break;
            case 'vi-en':
                searchInput.placeholder = 'Nhập từ tiếng Việt...';
                break;
            case 'en-en':
                searchInput.placeholder = 'Enter English word...';
                break;
            default:
                searchInput.placeholder = 'Nhập từ cần tra...';
        }
    }
    
    // Function to translate text using multiple APIs as fallback
    async function translateText(text, from, to) {
        if (!text || text.trim() === '') return '';
        
        // Try MyMemory Translation API first (free, no key required)
        try {
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`
            );
            
            if (response.ok) {
                const data = await response.json();
                if (data.responseData && data.responseData.translatedText) {
                    return data.responseData.translatedText;
                }
            }
        } catch (error) {
            console.error('MyMemory API error:', error);
        }
        
        // Fallback to LibreTranslate API
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
                return data.translatedText || text;
            }
        } catch (error) {
            console.error('LibreTranslate API error:', error);
        }
        
        return null;
    }
    
    // Function to get Vietnamese meaning directly from dictionary
    async function getVietnameseMeaning(word) {
        // Try to get direct Vietnamese translation of the word
        try {
            const translation = await translateText(word, 'en', 'vi');
            return translation;
        } catch (error) {
            console.error('Error getting Vietnamese meaning:', error);
            return null;
        }
    }
    
    // Function to search word based on mode
    async function searchWord(word) {
        if (!word || word.trim() === '') {
            return;
        }

        const searchTerm = word.trim();
        
        // Show loading state
        showLoading();
        
        try {
            if (dictionaryMode === 'en-vi') {
                // English to Vietnamese: Get English definition, then translate to Vietnamese
                await searchEnglishToVietnamese(searchTerm);
            } else if (dictionaryMode === 'vi-en') {
                // Vietnamese to English: Translate to English, then get definition
                await searchVietnameseToEnglish(searchTerm);
            } else if (dictionaryMode === 'en-en') {
                // English to English: Just show English definition
                await searchEnglishOnly(searchTerm);
            }
        } catch (error) {
            console.error('Error searching word:', error);
            showError('Lỗi', 'Có lỗi xảy ra khi tra cứu từ. Vui lòng thử lại sau.');
        }
    }
    
    // Search English to Vietnamese
    async function searchEnglishToVietnamese(word) {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
            
            if (!response.ok) {
                if (response.status === 404) {
                    showError('Không tìm thấy từ', `Xin lỗi, không tìm thấy từ "${word}". Vui lòng kiểm tra chính tả và thử lại.`);
                } else {
                    throw new Error('Failed to fetch word definition');
                }
                return;
            }
            
            const data = await response.json();
            
            if (data && data.length > 0) {
                await displayWordResultEnVi(data[0], word);
            } else {
                showError('Không tìm thấy từ', `Xin lỗi, không tìm thấy từ "${word}".`);
            }
        } catch (error) {
            console.error('Error fetching English word:', error);
            showError('Lỗi', 'Có lỗi xảy ra khi tra cứu từ. Vui lòng thử lại sau.');
        }
    }
    
    // Search Vietnamese to English
    async function searchVietnameseToEnglish(word) {
        try {
            // First, translate Vietnamese word to English
            const englishWord = await translateText(word, 'vi', 'en');
            
            if (!englishWord || englishWord === word) {
                showError('Không tìm thấy từ', `Không thể dịch từ "${word}" sang tiếng Anh. Vui lòng thử lại.`);
                return;
            }
            
            // Then search for English definition
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${englishWord.toLowerCase()}`);
            
            if (!response.ok) {
                showError('Không tìm thấy từ', `Không tìm thấy từ "${word}" trong từ điển.`);
                return;
            }
            
            const data = await response.json();
            
            if (data && data.length > 0) {
                await displayWordResultViEn(data[0], word, englishWord);
            } else {
                showError('Không tìm thấy từ', `Không tìm thấy từ "${word}" trong từ điển.`);
            }
        } catch (error) {
            console.error('Error fetching Vietnamese word:', error);
            showError('Lỗi', 'Có lỗi xảy ra khi tra cứu từ. Vui lòng thử lại sau.');
        }
    }
    
    // Search English only
    async function searchEnglishOnly(word) {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
            
            if (!response.ok) {
                if (response.status === 404) {
                    showError('Word not found', `Sorry, we couldn't find the word "${word}". Please check the spelling and try again.`);
                } else {
                    throw new Error('Failed to fetch word definition');
                }
                return;
            }
            
            const data = await response.json();
            
            if (data && data.length > 0) {
                displayWordResultEnEn(data[0]);
            } else {
                showError('Word not found', `Sorry, we couldn't find the word "${word}".`);
            }
        } catch (error) {
            console.error('Error fetching word:', error);
            showError('Error', 'Sorry, there was an error searching for the word. Please try again later.');
        }
    }
    
    // Display result for English to Vietnamese
    async function displayWordResultEnVi(wordData, originalWord) {
        const word = wordData.word;
        const phonetic = wordData.phonetic || (wordData.phonetics && wordData.phonetics.length > 0 
            ? wordData.phonetics.find(p => p.text)?.text : '');
        const phonetics = wordData.phonetics || [];
        const meanings = wordData.meanings || [];
        
        // Get quick Vietnamese translation of the word itself
        const vietnameseWord = await getVietnameseMeaning(word);
        
        // Get phonetic with audio
        let phoneticHtml = '';
        if (phonetics && phonetics.length > 0) {
            const phoneticWithAudio = phonetics.find(p => p.audio && p.text);
            const phoneticText = phoneticWithAudio ? phoneticWithAudio.text : phonetic;
            
            if (phoneticText || phoneticWithAudio) {
                phoneticHtml = `
                    <div class="dictionary-phonetic">
                        <div class="dictionary-phonetic-item">
                            <span class="dictionary-phonetic-text">${phoneticText || phonetic}</span>
                            ${phoneticWithAudio && phoneticWithAudio.audio ? `
                                <button class="dictionary-audio-btn" onclick="playAudio('${phoneticWithAudio.audio}')" aria-label="Play pronunciation">
                                    <i class="fa-solid fa-volume-low"></i>
                                </button>
                            ` : ''}
                        </div>
                    </div>
                `;
            }
        } else if (phonetic) {
            phoneticHtml = `
                <div class="dictionary-phonetic">
                    <div class="dictionary-phonetic-item">
                        <span class="dictionary-phonetic-text">${phonetic}</span>
                    </div>
                </div>
            `;
        }
        
        let html = `
            <div class="dictionary-word-card">
                <div class="dictionary-word-header">
                    <div class="dictionary-word-title">
                        <h2>${word}</h2>
                        ${vietnameseWord ? `
                            <div class="dictionary-vietnamese-word">${vietnameseWord}</div>
                        ` : ''}
                    </div>
                    ${phoneticHtml}
                </div>
                
                <div class="dictionary-meanings">
        `;
        
        // Process all meanings
        for (const meaning of meanings) {
            const partOfSpeech = meaning.partOfSpeech || '';
            const definitions = meaning.definitions || [];
            const synonyms = meaning.synonyms || [];
            
            // Translate part of speech to Vietnamese
            let partOfSpeechVi = '';
            if (partOfSpeech) {
                const posMap = {
                    'noun': 'Danh từ',
                    'verb': 'Động từ',
                    'adjective': 'Tính từ',
                    'adverb': 'Trạng từ',
                    'pronoun': 'Đại từ',
                    'preposition': 'Giới từ',
                    'conjunction': 'Liên từ',
                    'interjection': 'Thán từ',
                    'determiner': 'Từ hạn định',
                    'article': 'Mạo từ'
                };
                partOfSpeechVi = posMap[partOfSpeech.toLowerCase()] || partOfSpeech;
            }
            
            html += `
                <div class="dictionary-meaning">
                    ${partOfSpeech ? `
                        <div class="dictionary-meaning-title">
                            <span>${partOfSpeech.charAt(0).toUpperCase() + partOfSpeech.slice(1)}${partOfSpeechVi ? ` (${partOfSpeechVi})` : ''}</span>
                        </div>
                    ` : ''}
                    
                    <ul class="dictionary-definition-list">
            `;
            
            const definitionsToShow = definitions.slice(0, 5);
            
            for (const def of definitionsToShow) {
                const definitionText = def.definition || '';
                const exampleText = def.example || '';
                
                // Translate to Vietnamese - try multiple times if needed
                let vietnameseDefinition = '';
                let vietnameseExample = '';
                
                if (definitionText) {
                    vietnameseDefinition = await translateText(definitionText, 'en', 'vi');
                    // If translation failed, try again with shorter text
                    if (!vietnameseDefinition || vietnameseDefinition === definitionText) {
                        // Try translating first sentence only
                        const firstSentence = definitionText.split('.')[0];
                        if (firstSentence && firstSentence !== definitionText) {
                            vietnameseDefinition = await translateText(firstSentence + '.', 'en', 'vi');
                        }
                    }
                }
                
                if (exampleText) {
                    vietnameseExample = await translateText(exampleText, 'en', 'vi');
                }
                
                html += `
                    <li class="dictionary-definition-item">
                        ${vietnameseDefinition ? `
                            <div class="dictionary-definition-vietnamese-main">${vietnameseDefinition}</div>
                        ` : ''}
                        <div class="dictionary-definition-text">${definitionText}</div>
                        ${exampleText ? `
                            <div class="dictionary-example">
                                <span class="dictionary-example-en">"${exampleText}"</span>
                                ${vietnameseExample ? `
                                    <span class="dictionary-example-vi">"${vietnameseExample}"</span>
                                ` : ''}
                            </div>
                        ` : ''}
                    </li>
                `;
            }
            
            html += `
                    </ul>
            `;
            
            if (synonyms.length > 0) {
                html += `
                    <div class="dictionary-synonyms">
                        <div class="dictionary-synonyms-title">Từ đồng nghĩa:</div>
                        <div class="dictionary-synonyms-list">${synonyms.slice(0, 5).join(', ')}</div>
                    </div>
                `;
            }
            
            html += `
                </div>
            `;
        }
        
        html += `
                </div>
            </div>
        `;
        
        resultContainer.innerHTML = html;
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Display result for Vietnamese to English
    async function displayWordResultViEn(wordData, vietnameseWord, englishWord) {
        const phonetic = wordData.phonetic || (wordData.phonetics && wordData.phonetics.length > 0 
            ? wordData.phonetics.find(p => p.text)?.text : '');
        const phonetics = wordData.phonetics || [];
        const meanings = wordData.meanings || [];
        
        // Get phonetic with audio
        let phoneticHtml = '';
        if (phonetics && phonetics.length > 0) {
            const phoneticWithAudio = phonetics.find(p => p.audio && p.text);
            const phoneticText = phoneticWithAudio ? phoneticWithAudio.text : phonetic;
            
            if (phoneticText || phoneticWithAudio) {
                phoneticHtml = `
                    <div class="dictionary-phonetic">
                        <div class="dictionary-phonetic-item">
                            <span class="dictionary-phonetic-text">${phoneticText || phonetic}</span>
                            ${phoneticWithAudio && phoneticWithAudio.audio ? `
                                <button class="dictionary-audio-btn" onclick="playAudio('${phoneticWithAudio.audio}')" aria-label="Play pronunciation">
                                    <i class="fa-solid fa-volume-low"></i>
                                </button>
                            ` : ''}
                        </div>
                    </div>
                `;
            }
        } else if (phonetic) {
            phoneticHtml = `
                <div class="dictionary-phonetic">
                    <div class="dictionary-phonetic-item">
                        <span class="dictionary-phonetic-text">${phonetic}</span>
                    </div>
                </div>
            `;
        }
        
        let html = `
            <div class="dictionary-word-card">
                <div class="dictionary-word-header">
                    <div class="dictionary-word-title">
                        <h2>${vietnameseWord}</h2>
                        <div class="dictionary-english-word">(${englishWord})</div>
                    </div>
                    ${phoneticHtml}
                </div>
                
                <div class="dictionary-meanings">
        `;
        
        // Process all meanings - show English definitions for Vietnamese word
        for (const meaning of meanings) {
            const partOfSpeech = meaning.partOfSpeech || '';
            const definitions = meaning.definitions || [];
            
            html += `
                <div class="dictionary-meaning">
                    ${partOfSpeech ? `
                        <div class="dictionary-meaning-title">
                            <span>${partOfSpeech.charAt(0).toUpperCase() + partOfSpeech.slice(1)}</span>
                        </div>
                    ` : ''}
                    
                    <ul class="dictionary-definition-list">
            `;
            
            const definitionsToShow = definitions.slice(0, 5);
            
            for (const def of definitionsToShow) {
                const definitionText = def.definition || '';
                const exampleText = def.example || '';
                
                html += `
                    <li class="dictionary-definition-item">
                        <div class="dictionary-definition-text">${definitionText}</div>
                        ${exampleText ? `
                            <div class="dictionary-example">"${exampleText}"</div>
                        ` : ''}
                    </li>
                `;
            }
            
            html += `
                    </ul>
                </div>
            `;
        }
        
        html += `
                </div>
            </div>
        `;
        
        resultContainer.innerHTML = html;
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Display result for English only
    function displayWordResultEnEn(wordData) {
        const word = wordData.word;
        const phonetic = wordData.phonetic || (wordData.phonetics && wordData.phonetics.length > 0 
            ? wordData.phonetics.find(p => p.text)?.text : '');
        const phonetics = wordData.phonetics || [];
        const meanings = wordData.meanings || [];
        
        // Get phonetic with audio
        let phoneticHtml = '';
        if (phonetics && phonetics.length > 0) {
            const phoneticWithAudio = phonetics.find(p => p.audio && p.text);
            const phoneticText = phoneticWithAudio ? phoneticWithAudio.text : phonetic;
            
            if (phoneticText || phoneticWithAudio) {
                phoneticHtml = `
                    <div class="dictionary-phonetic">
                        <div class="dictionary-phonetic-item">
                            <span class="dictionary-phonetic-text">${phoneticText || phonetic}</span>
                            ${phoneticWithAudio && phoneticWithAudio.audio ? `
                                <button class="dictionary-audio-btn" onclick="playAudio('${phoneticWithAudio.audio}')" aria-label="Play pronunciation">
                                    <i class="fa-solid fa-volume-low"></i>
                                </button>
                            ` : ''}
                        </div>
                    </div>
                `;
            }
        } else if (phonetic) {
            phoneticHtml = `
                <div class="dictionary-phonetic">
                    <div class="dictionary-phonetic-item">
                        <span class="dictionary-phonetic-text">${phonetic}</span>
                    </div>
                </div>
            `;
        }
        
        let html = `
            <div class="dictionary-word-card">
                <div class="dictionary-word-header">
                    <div class="dictionary-word-title">
                        <h2>${word}</h2>
                    </div>
                    ${phoneticHtml}
                </div>
                
                <div class="dictionary-meanings">
        `;
        
        meanings.forEach((meaning) => {
            const partOfSpeech = meaning.partOfSpeech || '';
            const definitions = meaning.definitions || [];
            const synonyms = meaning.synonyms || [];
            
            html += `
                <div class="dictionary-meaning">
                    ${partOfSpeech ? `
                        <div class="dictionary-meaning-title">
                            <span>${partOfSpeech.charAt(0).toUpperCase() + partOfSpeech.slice(1)}</span>
                        </div>
                    ` : ''}
                    
                    <ul class="dictionary-definition-list">
            `;
            
            definitions.slice(0, 5).forEach((def) => {
                const definitionText = def.definition || '';
                const exampleText = def.example || '';
                
                html += `
                    <li class="dictionary-definition-item">
                        <div class="dictionary-definition-text">${definitionText}</div>
                        ${exampleText ? `
                            <div class="dictionary-example">"${exampleText}"</div>
                        ` : ''}
                    </li>
                `;
            });
            
            html += `
                    </ul>
            `;
            
            if (synonyms.length > 0) {
                html += `
                    <div class="dictionary-synonyms">
                        <div class="dictionary-synonyms-title">Synonyms:</div>
                        <div class="dictionary-synonyms-list">${synonyms.slice(0, 5).join(', ')}</div>
                    </div>
                `;
            }
            
            html += `
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        resultContainer.innerHTML = html;
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Function to show loading state
    function showLoading() {
        resultContainer.innerHTML = `
            <div class="dictionary-loading">
                <div class="dictionary-loading-spinner"></div>
                <p>Đang tra cứu từ...</p>
            </div>
        `;
    }
    
    // Function to show error state
    function showError(title, message) {
        resultContainer.innerHTML = `
            <div class="dictionary-error">
                <div class="dictionary-error-icon">
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
                <h3>${title}</h3>
                <p>${message}</p>
            </div>
        `;
    }
    
    // Function to show empty/welcome state
    function showWelcome() {
        resultContainer.innerHTML = `
            <div class="dictionary-welcome">
                <h1>Tra cứu từ điển Anh-Việt</h1>
                <p>Chọn chế độ tra cứu và nhập từ cần tra vào ô tìm kiếm.</p>
                
                <div class="dictionary-types">
                    <div class="dictionary-type-card">
                        <h2>Chế độ tra cứu</h2>
                        <p>Từ điển hỗ trợ tra cứu 2 chiều: từ tiếng Anh sang tiếng Việt và ngược lại. Bạn có thể chọn chế độ phù hợp với nhu cầu của mình.</p>
                        <div class="dictionary-links">
                            <a href="#" class="dictionary-link">Anh - Việt</a>
                            <a href="#" class="dictionary-link">Việt - Anh</a>
                            <a href="#" class="dictionary-link">Anh - Anh</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Function to play audio
    window.playAudio = function(audioUrl) {
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        }
    };
    
    // Event listeners
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const word = searchInput.value.trim();
            if (word) {
                searchWord(word);
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const word = this.value.trim();
                if (word) {
                    searchWord(word);
                }
            }
        });
        
        searchInput.addEventListener('input', function() {
            if (this.value.trim() === '') {
                showWelcome();
            }
        });
    }
    
    // Initialize welcome screen
    showWelcome();
});
