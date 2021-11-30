exports.onClientEntry = () => {
  if (
    process.env.GATSBY_MAINTENANCE_MODE &&
    window.location.pathname !== '/coming-soon'
  ) {
    window.location = '/coming-soon'
  }
}

exports.onRouteUpdate = ({ location }) => {
  if (
    process.env.GATSBY_MAINTENANCE_MODE &&
    location.pathname !== '/coming-soon'
  ) {
    location = '/maintenance'
  }
}
