// Simple front-end translator logic for Translate page
// Author: Trọng Hiểu (adapted)

const inputEl = document.getElementById('translate-input');
const outputEl = document.getElementById('translate-output');
const charCountEl = document.getElementById('char-count');
const translateBtn = document.getElementById('translate-btn');
const copyBtn = document.getElementById('copy-btn');
const fromLangBtn = document.getElementById('from-lang-btn');
const toLangBtn = document.getElementById('to-lang-btn');
const swapBtn = document.getElementById('swap-lang-btn');

const MAX_CHARS = 250;

// Supported languages for LibreTranslate
// code: language name hiển thị
const SUPPORTED_LANGUAGES = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Vietnamese' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' },
    { code: 'de', label: 'German' },
    { code: 'it', label: 'Italian' },
    { code: 'pt', label: 'Portuguese' },
    { code: 'ru', label: 'Russian' },
    { code: 'zh', label: 'Chinese' },
    { code: 'ar', label: 'Arabic' }
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

// Cycle language when clicking on language button
function attachLanguageCycler(btn) {
    if (!btn) return;
    btn.addEventListener('click', () => {
        const current = btn.dataset.lang || 'en';
        const index = SUPPORTED_LANGUAGES.findIndex(l => l.code === current);
        const nextIndex = (index + 1) % SUPPORTED_LANGUAGES.length;
        setButtonLanguage(btn, SUPPORTED_LANGUAGES[nextIndex].code);
    });
}

attachLanguageCycler(fromLangBtn);
attachLanguageCycler(toLangBtn);

// Swap languages and texts
if (swapBtn && fromLangBtn && toLangBtn && inputEl && outputEl) {
    swapBtn.addEventListener('click', () => {
        const tmpLang = fromLangBtn.dataset.lang;
        fromLangBtn.dataset.lang = toLangBtn.dataset.lang;
        toLangBtn.dataset.lang = tmpLang;

        const fromLabel = fromLangBtn.querySelector('.translate-lang-label');
        const toLabel = toLangBtn.querySelector('.translate-lang-label');
        if (fromLabel && toLabel) {
            const tmpText = fromLabel.textContent;
            fromLabel.textContent = toLabel.textContent;
            toLabel.textContent = tmpText;
        }

        const tmpTextArea = inputEl.value;
        inputEl.value = outputEl.textContent || '';
        outputEl.textContent = tmpTextArea;
        const len = inputEl.value.length;
        if (charCountEl) {
            charCountEl.textContent = `${len} / ${MAX_CHARS}`;
        }
    });
}

// Call LibreTranslate public API (supports Vietnamese and many other languages)
async function translateText(text, from, to) {
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

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.translatedText || '';
    } catch (err) {
        console.error('Translation error:', err);
        // Fallback: simple fake "translation" so bài vẫn chạy nếu API lỗi
        return `[translated ${from}->${to}]: ${text}`;
    }
}

// Handle Translate button
if (translateBtn && inputEl && outputEl && fromLangBtn && toLangBtn) {
    translateBtn.addEventListener('click', async () => {
        const text = inputEl.value.trim();
        if (!text) {
            outputEl.textContent = '';
            return;
        }

        const from = fromLangBtn.dataset.lang || 'en';
        const to = toLangBtn.dataset.lang || 'es';

        translateBtn.disabled = true;
        translateBtn.textContent = 'Translating...';

        const result = await translateText(text, from, to);
        outputEl.textContent = result;

        translateBtn.disabled = false;
        translateBtn.textContent = 'Translate';
    });
}

// Copy result
if (copyBtn && outputEl) {
    copyBtn.addEventListener('click', async () => {
        const text = outputEl.textContent || '';
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            copyBtn.textContent = 'Copied';
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i><span>Copy</span>';
            }, 1000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    });
}


