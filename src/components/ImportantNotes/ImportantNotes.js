import './ImportantNotes.css';
import html from './ImportantNotes.html?raw';

export function initImportantNotes(mountId) {
    const container = document.getElementById(mountId);
    if (!container) return;
    container.innerHTML = html;
}
