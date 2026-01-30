import './Features.css';
import html from './Features.html?raw';

export function initFeatures(mountId) {
    const container = document.getElementById(mountId);
    if (!container) return;
    container.innerHTML = html;
}
