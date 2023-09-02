export const Page = () => {
    let _document = document.createDocumentFragment()
    let p = document.createElement('p')
    p.innerHTML = 'This is a test'
    _document.appendChild(p)
    return _document
}