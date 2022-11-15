import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe3485da = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _7e057425 = () => interopDefault(import('..\\pages\\cadastro.vue' /* webpackChunkName: "pages/cadastro" */))
const _191e0c2d = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _0aad0b54 = () => interopDefault(import('..\\pages\\login1.vue' /* webpackChunkName: "pages/login1" */))
const _53e3c444 = () => interopDefault(import('..\\pages\\redefinir.vue' /* webpackChunkName: "pages/redefinir" */))
const _4f766916 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _fe3485da,
    name: "admin"
  }, {
    path: "/cadastro",
    component: _7e057425,
    name: "cadastro"
  }, {
    path: "/login",
    component: _191e0c2d,
    name: "login"
  }, {
    path: "/login1",
    component: _0aad0b54,
    name: "login1"
  }, {
    path: "/redefinir",
    component: _53e3c444,
    name: "redefinir"
  }, {
    path: "/",
    component: _4f766916,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
