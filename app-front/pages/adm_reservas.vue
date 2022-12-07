<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="wrapper">
      <h1 class="title">Áreas Reservadas</h1>
      <div class="center">
        <b-button @click="$router.push('/')" class="botao">Carregar Áreas</b-button>
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
.wrapper {
  margin-top: 5%;
  display: grid;
}
.center {
margin-left: 28%;
}
</style>
