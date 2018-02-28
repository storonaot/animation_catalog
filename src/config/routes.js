import App from 'App'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err)
}
const loadRoute = cb => module => cb(null, module.default)

const routes = {
  component: App,
  routes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('Index')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    },
    {
      path: '/hello',
      getComponent(location, cb) {
        System.import('Hello')
          .then(loadRoute(cb))
          .catch(errorLoading)
      }
    }
  ]
}

export default routes
