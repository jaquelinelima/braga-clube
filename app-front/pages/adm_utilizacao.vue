<template>
    <div>
      <NavbarComponent></NavbarComponent>
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

      <b-button @click="$router.push('/adm_principal')" variant="primary">Voltar</b-button>

      <div>
        <p class="titulo">Áreas Mais Utilizadas</p>
      </div>
      <div class="espacamento">
    <b-button class="botao" @click="$router.push('/')" variant="primary">Carregar Áreas</b-button>
  </div>
    </div>
  </template>
  
  <!-- <script> -->
  <!-- export default {
    name: 'IndexPage'
  } -->
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
    color: #7C2CFF;
    border-radius: 8px;
  }
</style>
  