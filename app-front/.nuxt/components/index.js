export { default as Aside } from '../..\\components\\aside.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'
export { default as UserAsideAuth } from '../..\\components\\user\\asideAuth.vue'
export { default as UserFormLogin } from '../..\\components\\user\\formLogin.vue'
export { default as UserFormRedefinirSenha } from '../..\\components\\user\\formRedefinirSenha.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
