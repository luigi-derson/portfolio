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

  if (process.env.MAITENANCE_MODE) {
    createRedirect({
      fromPath: `/*`,
      toPath: `/coming-soon`,
      isPermanent: true,
      ignoreCase: true,
      statusCode: 302,
    })
  }
}
