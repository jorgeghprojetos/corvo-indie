import './Hero.css';
import html from './Hero.html?raw';

export function initHero(mountId) {
    const container = document.getElementById(mountId);
    if (!container) return;
    container.innerHTML = html;
}
