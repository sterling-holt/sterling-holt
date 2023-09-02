// Home.js
export default function Home() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement('div');
    element.textContent = 'This is Home';
    fragment.appendChild(element);


    
    return fragment;
}