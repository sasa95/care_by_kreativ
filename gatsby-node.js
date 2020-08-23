const path = require('path')
const projectsData = require('./src/data/projects.json')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve('./src/templates/project-template.js')

  projectsData.forEach((item) => {
    const path = item.slug

    createPage({
      path: `/projects/${path}`,
      component: projectTemplate,
      context: {
        item,
        imagesPath: `projects/${item.slug}/post`,
        logoPath: `projects/${item.slug}/post/logo`,
      },
    })
  })
}
