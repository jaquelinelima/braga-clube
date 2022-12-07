<template>
  <div style="background-color: #f2f2f2">
    <div>
      <img class="imagem" src="../static/hero.png" alt="BragaClube Propaganda">
    </div>
    <div>
      <p class="titulo">Entrar</p>
    </div>
    <div class="nav">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group class="input"  id="input-group-1" label-for="input-1">
          <b-form-input id="input-1" class="input" v-model="form.email" type="email" placeholder="E-mail..." required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Senha..." required></b-form-input>
        </b-form-group>
        <p @click="$router.push('/redefinir')" class="esqueci"><u>Esqueci a senha.</u></p>
        <b-button type="submit" class="botao" variant="primary">Entrar</b-button>
        <p class="text center">Não tem conta? <strong @click="$router.push('/cadastro')">Cadastre-se já.</strong></p>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      type: {
        password: ''
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
      this.form.password = ''
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
  width: 142px;
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
.nav_titulo{
  font-size: 24px;
  line-height: 29px;
  display: block;
  align-items: center;
  text-align: center;
  margin: 0 10px 5px 5px;
  color: #000000;
}
.nav_titulo2{
  font-size: 24px;
  line-height: 29px;
  display: block;
  align-items: center;
  text-align: center;
  color: #000000;
  margin: 0 10px 5px 5px;
}
.botao{
  background-color: #7C2CFF;
  border-radius: 8px;
  width: 500px;
}
.esqueci{
  margin-top: -15px;
  color: #A1A1A1 !important;
  align-items: right !important;
  text-align: right !important;
}
.text{
  color: #A1A1A1 !important;
  text-align: center;
  margin-top: 5px;
}
.input{
width: 500px !important;
}
</style>
