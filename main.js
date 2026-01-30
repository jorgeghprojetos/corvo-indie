import './src/styles/variables.css';
import './style.css';

// Importando componentes
import { initHeader } from './src/components/Header/Header.js';
import { initHero } from './src/components/Hero/Hero.js';
import { initFeatures } from './src/components/Features/Features.js';
import { initCatalog } from './src/components/Catalog/Catalog.js';
import { initImportantNotes } from './src/components/ImportantNotes/ImportantNotes.js';
import { initFooter } from './src/components/Footer/Footer.js';
import { initI18n } from './src/i18n/i18n.js';

// Inicializando componentes
document.addEventListener('DOMContentLoaded', () => {
    initHeader('header-root');
    initHero('hero-root');
    initFeatures('features-root');
    initCatalog('catalog-root');
    initImportantNotes('important-notes-root');
    initFooter('footer-root');

    // Inicializa i18n depois de carregar todo o HTML
    initI18n();
});
