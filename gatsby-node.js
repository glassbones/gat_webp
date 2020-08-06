//https://www.gatsbyjs.org/tutorial/part-seven/   <- documentation

/*
exports.createPages = async function({actions, graphql}) {

    // graphQL screen shot
    // https://drive.google.com/file/d/1tPdEmKHpXG5Xwf0r_x3suW9zwCab6wbN/view?usp=sharing
    const {data} = await graphql`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                  frontmatter {
                    slug
                  }
                  id
                }
            }
        }        
    `
// create paginated pages for posts

    // how many posts per page
    const postPerPage = 3
    //how many pages need to be made?               
    const numPages = 
    // roundUp number of edges that return and divide that number by post per page
    // so if 4 edges return... ( 4/3 = 1.33 ) -> round that up and 2 pages are created
    Math.ceil(data.allMdx.nodes.length / postPerPage)
    
    //create new array from numPages
    Array.from({ length: numPages })
    //forEach page in numPages
    .forEach((page, i) => {
        //call createPage Api (passed in on line: 4)
        actions.createPages({
            //if ( index = 0 ) path = /
            //else path = /(i+1)
            path: i === 0 ? `/` : `/${i + 1}`,
            // points to template component
            component: require.resolve("./src/templates/allPosts.js"),
            // values attached
            context: {
                limit: postPerPage,
                skip: i * postPerPage,
                numPages,
                currentPage: i + 1,
            }
        })
    })


// create single blog posts

    // for each edge returned
    data.allMdx.edges.forEach(edge => {
        //find slug
        const slug = edge.node.frontmatter.slug
        //find id
        const id = edge.node.id
        //call createPage Api (passed in on line: 4)
        actions.createPages({
            // path = slug
            path: slug,
            // points to component
            component: require.resolve(`./src/templates/singlePost.js`),
            // values attached
            context: {id},
        })
    })



}
*/