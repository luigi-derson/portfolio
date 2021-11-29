exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  })
}

exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  if (process.env.MAINTENANCE_MODE) {
    createRedirect({
      fromPath: `/`,
      toPath: `/coming-soon`,
      isPermanent: true,
      redirectInBrowser: true,
    })
  }
}
