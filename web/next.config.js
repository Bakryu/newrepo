const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const client = require('./client')

const isProduction = process.env.NODE_ENV === 'production'
const query = `
{
  "routes": *[_type == "route"] {
    ...,
    "slug":page->pageSlug,
    disallowRobot,
    includeInSitemap,
    pagesList->{
      _id,
      title,
      _createdAt,
      _updatedAt
  }}
}
`
const reduceRoutes = (obj, route) => {
  const {page = {}, slug = {}} = route
  const {_createdAt, _updatedAt} = page
  const {includeInSitemap, disallowRobot} = route
  const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`
  obj[path] = {
    query: {
      slug: slug.current
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: '/'
  }
  return obj
}

module.exports = withCSS(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'
    },
    exportPathMap: function () {
      return client.fetch(query).then((res) => {
        const {routes = []} = res
        console.log(res)
        const nextRoutes = {
          // Routes imported from sanity
          ...routes
            .filter(({slug}) => {
              return slug.current
            })
            .reduce(reduceRoutes, {}),
          '/': {page: '/'}
        }
        return nextRoutes
      })
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })

      return config
    }
  })
)
