<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="wrapper">
      <h1 class="title">Entre em Contato</h1>
      <div class="center">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input id="input-1" class="input" v-model="form.email" type="email" placeholder="Nome..." required></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input id="input-2" class="input" style="height: 10rem" v-model="form.name" placeholder="Escreva sua mensagem..." required></b-form-input>
          </b-form-group>
          <b-button type="submit" class="botao">Enviar</b-button>
        </b-form>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import NavbarComponent from '../components/navbar.vue'
import FooterComponent from '../components/footer.vue'
export default {
  name: 'ContactPage',
  components: {
    NavbarComponent,
    FooterComponent
  },
  data() {
    return {
      form: {
        email: '',
        name: ''
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
      this.form.name = ''
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

    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
  .input{
    width: 600px;
  }
.title{
  text-align: center;
  margin-bottom: 5%;
}
.botao{
  background-color: #7C2CFF;
  border-radius: 8px;
  width: 60%;
  margin: 2px;
}
.wrapper {
  margin-top: 5%;
  display: grid;
}
.center {
margin-left: 28%;
}
  </style>
