const Error = () => {
    let _document = document.createDocumentFragment()
    let component = document.createElement('div')
    component.innerHTML = 'Error 404'
    component.innerHTML = 'Page Not Found'
    _document.appendChild(component)
    return _document
}

export default Error