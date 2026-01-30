import './Catalog.css';
import html from './Catalog.html?raw';

export function initCatalog(mountId) {
    const container = document.getElementById(mountId);
    if (!container) return;
    container.innerHTML = html;
}
