<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <h1 class="titulo">As Nossas Atividades</h1>

    <ol class="nav">
      <li>
        <img class="imagem" src="../static/swin.jpg">
        <p2 class="texto_imagem">Area da piscina, seg a domingo 8:00 até 20:00</p2>
        <button class="botao" @click="$router.push('/user_reserva')" type="submit">Marcar Horario</button>
      </li>

      <li>
        <img class="imagem" src="../static/gym.jpg">
        <p2 class="texto_imagem">Area de academia,seg a sexta 7:00 até 18:00</p2>
        <button class="botao" @click="$router.push('/user_reserva')" type="submit">Marcar Horario</button>
      </li>

      <li>
        <img class="imagem" src="../static/fut.jpg">
        <p2 class="texto_imagem">Area de futsal,seg/quarta/sexta 14:00 até 19:00</p2>
        <button class="botao" @click="$router.push('/user_reserva')" type="submit">Marcar Horario</button>
      </li>
    </ol>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavbarComponent from '../components/navbar.vue'
import FooterComponent from '../components/footer.vue'
  export default {

    name: 'IndexPage',
  components: {
NavbarComponent,
FooterComponent
},
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
.title{
  text-align: center;
  margin-bottom: 5%;
}
</style>
