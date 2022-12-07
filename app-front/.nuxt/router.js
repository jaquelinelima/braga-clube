import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a926443e = () => interopDefault(import('..\\pages\\adm_area.vue' /* webpackChunkName: "pages/adm_area" */))
const _ee54f406 = () => interopDefault(import('..\\pages\\adm_cadastro-area.vue' /* webpackChunkName: "pages/adm_cadastro-area" */))
const _4e74580a = () => interopDefault(import('..\\pages\\adm_principal.vue' /* webpackChunkName: "pages/adm_principal" */))
const _62e8d30f = () => interopDefault(import('..\\pages\\adm_reservas.vue' /* webpackChunkName: "pages/adm_reservas" */))
const _73351057 = () => interopDefault(import('..\\pages\\adm_utilizacao.vue' /* webpackChunkName: "pages/adm_utilizacao" */))
const _5cabdb98 = () => interopDefault(import('..\\pages\\cadastro.vue' /* webpackChunkName: "pages/cadastro" */))
const _434f119a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4a0a4b31 = () => interopDefault(import('..\\pages\\redefinir.vue' /* webpackChunkName: "pages/redefinir" */))
const _2afeaefb = () => interopDefault(import('..\\pages\\user_confirmacao.vue' /* webpackChunkName: "pages/user_confirmacao" */))
const _2d513b15 = () => interopDefault(import('..\\pages\\user_contato.vue' /* webpackChunkName: "pages/user_contato" */))
const _432c1184 = () => interopDefault(import('..\\pages\\user_home.vue' /* webpackChunkName: "pages/user_home" */))
const _5dccdcae = () => interopDefault(import('..\\pages\\user_lista.vue' /* webpackChunkName: "pages/user_lista" */))
const _4dce7d1a = () => interopDefault(import('..\\pages\\user_qrcode.vue' /* webpackChunkName: "pages/user_qrcode" */))
const _9e27aaba = () => interopDefault(import('..\\pages\\user_reserva.vue' /* webpackChunkName: "pages/user_reserva" */))
const _79a76e83 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a926443e,
    name: "adm_area"
  }, {
    path: "/adm_cadastro-area",
    component: _ee54f406,
    name: "adm_cadastro-area"
  }, {
    path: "/adm_principal",
    component: _4e74580a,
    name: "adm_principal"
  }, {
    path: "/adm_reservas",
    component: _62e8d30f,
    name: "adm_reservas"
  }, {
    path: "/adm_utilizacao",
    component: _73351057,
    name: "adm_utilizacao"
  }, {
    path: "/cadastro",
    component: _5cabdb98,
    name: "cadastro"
  }, {
    path: "/login",
    component: _434f119a,
    name: "login"
  }, {
    path: "/redefinir",
    component: _4a0a4b31,
    name: "redefinir"
  }, {
    path: "/user_confirmacao",
    component: _2afeaefb,
    name: "user_confirmacao"
  }, {
    path: "/user_contato",
    component: _2d513b15,
    name: "user_contato"
  }, {
    path: "/user_home",
    component: _432c1184,
    name: "user_home"
  }, {
    path: "/user_lista",
    component: _5dccdcae,
    name: "user_lista"
  }, {
    path: "/user_qrcode",
    component: _4dce7d1a,
    name: "user_qrcode"
  }, {
    path: "/user_reserva",
    component: _9e27aaba,
    name: "user_reserva"
  }, {
    path: "/",
    component: _79a76e83,
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
