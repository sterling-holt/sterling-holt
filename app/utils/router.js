export default async function Router(path) {
    let pageModule
    let importPath = './pages'

    
    if (path === '/') {
        path = '/index'
    } else {

        const segments = path.split('/').filter(Boolean)

        segments.forEach((segment, index) => {
            if (Number.isNaN(Number(segment)) === false) {
                segments[index] = '[id]'
            }
        })

        importPath += `/${segments.join('/')}.js`
    }

    try {
        pageModule = await import(`../pages${path}.js`)
    } catch (err) {
        pageModule = await import(`../pages/404.js`)
    }

    return pageModule.default()
}