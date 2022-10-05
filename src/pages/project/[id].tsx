// pages/project/[id].js



//  Generates `/posts/1` and `/posts/2`
//  ------------------------
    //  async function getStaticPaths() {
    //      return {
    //        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    //        fallback: false, // can also be true or 'blocking'
    //      }
    //  }
    //  // `getStaticPaths` requires using `getStaticProps`
    //  async function getStaticProps() {
    //      return {
    //        // Passed to the page component as props
    //        props: { post: {} },
    //      }
    //  }

const Project = () => {
    // Render post...



    return <>
        <section>
            <article>
                <h1>Title</h1>

                <p>big block of text goes here</p>
            </article>
        </section>
    </>
}

const Sidebar = () => {

}

export default Project
//  export { getStaticPaths, getStaticProps }