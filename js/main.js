import Router from './utils/router.js'

let nav = document.createElement('nav');
const body = document.getElementsByTagName('body')[0];
body.append('Hello from main.js');

let content = document.createDocumentFragment();



Router(window.location.pathname)
body.appendChild(content); // Append the content to the body



window.addEventListener('popstate', async (e) => {
    e.preventDefault()
    const state = { page_id: 1, user_id: 5 }
    const url = window.location.href

    history.pushState(state, '', url)
    console.log('no')
})