import './Footer.css';
import html from './Footer.html?raw';

export function initFooter(mountId) {
    const container = document.getElementById(mountId);
    if (!container) return;
    container.innerHTML = html;
}
