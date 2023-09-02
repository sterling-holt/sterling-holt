import Router from './utils/router.js'
let router = Router(window.location.pathname === '/' ? '/index' : window.location.pathname )

console.log(router)



let nav = document.createElement('nav')
nav.innerHTML = 'navigation'
let footer = document.createElement('nav')
footer.innerHTML = 'footer'

const _document = document.getElementsByTagName('body')[0]

console.log(router)
let content = document.createDocumentFragment()
content.appendChild(nav)
content.appendChild(footer)
_document.prepend(content)