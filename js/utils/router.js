export default async function Router(path) {

    console.log(path)
    
    let pageModule

    try {
        pageModule = await import(`../pages${path}.js`)
    } catch (err) {
        pageModule = await import(`../pages/404.js`)
    }
}