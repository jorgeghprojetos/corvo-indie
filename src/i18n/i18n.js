import pt from './locales/pt.json';
import en from './locales/en.json';

const translations = { pt, en };
const DEFAULT_LANG = 'pt';

export function initI18n() {
    // 1. Determina idioma (Salvo no localStorage > Idioma Navegador > Default)
    let lang = localStorage.getItem('corvo-indie-lang') ||
        navigator.language.split('-')[0] ||
        DEFAULT_LANG;

    // Se o idioma detectado não estiver disponível, usa o default
    if (!translations[lang]) lang = DEFAULT_LANG;

    applyTranslations(lang);
    initLanguageSelector();
}

export function applyTranslations(lang) {
    localStorage.setItem('corvo-indie-lang', lang);
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);

        if (translation) {
            // Se for um atributo (ex: placeholder:key), traduz o atributo
            if (key.includes(':')) {
                const [attr, realKey] = key.split(':');
                const attrTranslation = getNestedTranslation(translations[lang], realKey);
                el.setAttribute(attr, attrTranslation);
            } else {
                el.innerHTML = translation;
            }
        }
    });

    // Atualiza estado visual do seletor
    updateSelectorUI(lang);
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((p, c) => p && p[c], obj);
}

function initLanguageSelector() {
    const btns = document.querySelectorAll('.lang-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyTranslations(lang);
        });
    });
}

function updateSelectorUI(lang) {
    const btns = document.querySelectorAll('.lang-btn');
    btns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}
