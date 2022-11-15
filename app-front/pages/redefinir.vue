<template>
  <div>
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
        <b-button type="submit" variant="primary">Confirmar</b-button>
        <p><strong @click="$router.push('/')">Voltar ao ínicio.</strong></p>
      </b-form>
    </div>
    <div>
    </div>
  </div>
</template>

<!-- <script> -->
<!-- export default {
  name: 'IndexPage'
} -->
<script>
  export default {

    name: 'IndexPage',
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
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
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
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
botao{
  position: absolute;
  width: 546.21px;
  height: 52.89px;
  left: 68.79px;
  top: 550.73px;
  background: #7C2CFF;
  border-radius: 8px;
}
</style>
