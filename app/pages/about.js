// About.js
export default function About() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement('div');
    element.textContent = 'This is About';
    fragment.appendChild(element);
    return fragment;
}