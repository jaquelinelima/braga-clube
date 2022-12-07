<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="wrapper">
      <h1 class="title">Bem Vindo, Clubber!</h1>
      <div class="center">
        <b-button @click="$router.push('/adm_principal')" class="botao">ADM</b-button>
        <b-button @click="$router.push('/user_home')" class="botao">Clubber</b-button>
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
.wrapper{
  margin-top: 5%;
  display: grid;
}
.center{
margin-left: 28%;
}
</style>
