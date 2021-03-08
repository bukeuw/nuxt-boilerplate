export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'element-ui/lib/theme-chalk/index.css'
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '@/plugins/element-ui.js'
    '@/plugins/bootstrap-vue.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseUrl: 'http://blog0-erakomp.co.id:8081'
  },

  // Auth module
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'https://www.erakomp.co.id:4443/api/user', method: 'post', propertyName: 'token' },
          logout: { url: 'http://blog0-erakomp.co.id:8081/api/auth/logout', method: 'post' },
          user: { url: 'https://www.erakomp.co.id:4443/api/user', method: 'get', propertyName: 'data' }
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
