new Vue({
  computed: {
    count(){
      return store.state.count
    }
  },
  
<template>
  <body>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">BragaClube</b-navbar-brand>
  
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
          <b-collapse id="nav-collapse" is-nav>
  
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
  
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>User</em>
  
          <b-navbar-brand href="#">
            <img src="https://placekitten.com/g/30/30" alt="Kitten" class="imagem">
          </b-navbar-brand>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <b-button @click="$router.push('/user_home')" variant="primary">Voltar</b-button>
      
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
    

</body>
</template>

<script>
import NavbarComponent from '../components/navbar.vue'
  export default {

    name: 'IndexPage',
  components: {
NavbarComponent},
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
.espacamento{
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
}
.titulo{

  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
.imagem {
  border-radius: 50px;
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