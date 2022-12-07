<template>
  <div style="background-color: #f2f2f2">
    <div>
      <img class="imagem" src="../static/hero.png" alt="BragaClube Propaganda">
    </div>
    <div>
      <p class="titulo">Redefinir a senha</p>
    </div>
    <div class="nav">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder="E-mail..." required></b-form-input>
        </b-form-group>
        <b-button type="submit" class="botao" variant="primary">Confirmar</b-button>
        <p class="text"><strong @click="$router.push('/')">Voltar ao ínicio.</strong></p>
      </b-form>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RedefinirPage',
  data() {
    return {
      form: {
        email: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      this.form.email = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style>
.titulo{
  position: absolute;
  width: 400px;
  height: 29px;
  left: 65px;
  top: 200px;

  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
.imagem {
  position: fixed;
  right: 0pt;
  max-height: 100%;
  max-width: 100%;
  padding-right: 40px;
}
.nav{
  position: absolute;
  width: 546px;
  height: 57px;
  left: 69px;
  top: 250px;
}
.botao{
  background-color: #7C2CFF;
  border-radius: 8px;
  width: 500px;
}
.text{
  color: #A1A1A1 !important;
  text-align: center !important;
  align-items: center !important;
  margin-top: 15px;
}
</style>
