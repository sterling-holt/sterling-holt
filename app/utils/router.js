export default async function Router(path) {
    let pageModule
    let importPath = './pages'

    
    if (path === '/') {
        path = '/page'
    } else {

        const segments = path.split('/').filter(Boolean)

        segments.forEach((segment, index) => {
            if (Number.isNaN(Number(segment)) === false) {
                segments[index] = '[id]'
                console.log(segments[index])
            }
        })
        console.log(segments.join)
        //  importPath += `/${segments.join('/')}page.js`
    }

    try {
        pageModule = await import(`../pages${path}.js`)
    } catch (err) {
        pageModule = await import(`../pages/404.js`)
    }

    return pageModule.default()
}