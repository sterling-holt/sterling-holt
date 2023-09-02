const Page = () => {
    let _document = document.createDocumentFragment()
    let component = document.createElement('div')
    component.innerHTML = 'This is a test from pages/projects/index.js'


    document.appendChild(component)

    return _document
}
export default Page()