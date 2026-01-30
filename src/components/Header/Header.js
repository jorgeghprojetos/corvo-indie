import './Header.css';
import html from './Header.html?raw';

export function initHeader(mountId) {
    const container = document.getElementById(mountId);
    if (!container) return;

    container.innerHTML = html;

    // Lógica para o menu mobile
    const toggle = container.querySelector('.mobile-menu-toggle');
    const nav = container.querySelector('.nav-menu');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}
