import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0693f963 = () => interopDefault(import('..\\pages\\adm_area.vue' /* webpackChunkName: "pages/adm_area" */))
const _d46f868a = () => interopDefault(import('..\\pages\\adm_cadastro-area.vue' /* webpackChunkName: "pages/adm_cadastro-area" */))
const _7747c470 = () => interopDefault(import('..\\pages\\adm_principal.vue' /* webpackChunkName: "pages/adm_principal" */))
const _56325d91 = () => interopDefault(import('..\\pages\\adm_reservas.vue' /* webpackChunkName: "pages/adm_reservas" */))
const _8b73fb4e = () => interopDefault(import('..\\pages\\adm_utilizacao.vue' /* webpackChunkName: "pages/adm_utilizacao" */))
const _905a11cc = () => interopDefault(import('..\\pages\\cadastro.vue' /* webpackChunkName: "pages/cadastro" */))
const _677f7558 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _ef0e70ee = () => interopDefault(import('..\\pages\\login1.vue' /* webpackChunkName: "pages/login1" */))
const _53c69fef = () => interopDefault(import('..\\pages\\redefinir.vue' /* webpackChunkName: "pages/redefinir" */))
const _1cc9af06 = () => interopDefault(import('..\\pages\\user_confirmacao.vue' /* webpackChunkName: "pages/user_confirmacao" */))
const _209ac597 = () => interopDefault(import('..\\pages\\user_contato.vue' /* webpackChunkName: "pages/user_contato" */))
const _4ce86642 = () => interopDefault(import('..\\pages\\user_home.vue' /* webpackChunkName: "pages/user_home" */))
const _e8c9c0a0 = () => interopDefault(import('..\\pages\\user_lista.vue' /* webpackChunkName: "pages/user_lista" */))
const _6512deb1 = () => interopDefault(import('..\\pages\\user_qrcode.vue' /* webpackChunkName: "pages/user_qrcode" */))
const _b79495b6 = () => interopDefault(import('..\\pages\\user_reserva.vue' /* webpackChunkName: "pages/user_reserva" */))
const _c4505b7e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/adm_area",
    component: _0693f963,
    name: "adm_area"
  }, {
    path: "/adm_cadastro-area",
    component: _d46f868a,
    name: "adm_cadastro-area"
  }, {
    path: "/adm_principal",
    component: _7747c470,
    name: "adm_principal"
  }, {
    path: "/adm_reservas",
    component: _56325d91,
    name: "adm_reservas"
  }, {
    path: "/adm_utilizacao",
    component: _8b73fb4e,
    name: "adm_utilizacao"
  }, {
    path: "/cadastro",
    component: _905a11cc,
    name: "cadastro"
  }, {
    path: "/login",
    component: _677f7558,
    name: "login"
  }, {
    path: "/login1",
    component: _ef0e70ee,
    name: "login1"
  }, {
    path: "/redefinir",
    component: _53c69fef,
    name: "redefinir"
  }, {
    path: "/user_confirmacao",
    component: _1cc9af06,
    name: "user_confirmacao"
  }, {
    path: "/user_contato",
    component: _209ac597,
    name: "user_contato"
  }, {
    path: "/user_home",
    component: _4ce86642,
    name: "user_home"
  }, {
    path: "/user_lista",
    component: _e8c9c0a0,
    name: "user_lista"
  }, {
    path: "/user_qrcode",
    component: _6512deb1,
    name: "user_qrcode"
  }, {
    path: "/user_reserva",
    component: _b79495b6,
    name: "user_reserva"
  }, {
    path: "/",
    component: _c4505b7e,
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
