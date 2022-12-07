<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="wrapper">
      <h1 class="title">Cadastrar Área de Lazer</h1>
      <div class="center">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-input class="input" v-model="form.name" type="name" placeholder="Nome" required></b-form-input>
          <b-form-input class="input" v-model="form.horarios" placeholder="Horários Disponíveis" required></b-form-input>
          <b-button type="submit" @click="$router.push('/')" class="botao">Salvar</b-button>
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
  components: {
    NavbarComponent,
    FooterComponent
  },
  data() {
    return {
      form: {
        name: '',
        horarios: '',
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
      this.form.name = ''
      this.form.horarios = ''
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style>
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
.input{
  width: 60%;
  margin-bottom: 10px;
}
.wrapper{
  margin-top: 5%;
  display: grid;
}
.center{
margin-left: 28%;
}
</style>
