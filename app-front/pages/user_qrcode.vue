<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <b-button @click="$router.push('/user_home')" variant="primary">Voltar</b-button>
    <div class="wrapper">
      <h1 class="title">NOVO - Leitor de QrCode</h1>
      <div class="center">
        <div class="flex">
          <div><svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.5q1.875 0 3.188-1.312Q16.5 14.875 16.5 13q0-1.875-1.312-3.188Q13.875 8.5 12 8.5q-1.875 0-3.188 1.312Q7.5 11.125 7.5 13q0 1.875 1.312 3.188Q10.125 17.5 12 17.5ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.4 3.65q.275-.325.662-.488Q9.45 3 9.875 3h4.25q.425 0 .813.162q.387.163.662.488L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Zm16-2V7H4v12Zm-8-6Z"/></svg></div>
          <div>
            <b-button class="botao wrapper">Ler QrCode</b-button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h5 class="left">Recentemente instalamos um sistema de QRcode para identificação das atividades no nosso clube.</h5>
      <h5 class="leftplus">Aproveitem! :3</h5>
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
.botao{
  position: relative;
  background: #7C2CFF;
  border-radius: 8px;
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
.leftplus{
  margin-left: 45%;
}
.left{
  margin-left: 20%;
}
.wrapper{
  margin-top: 5%;
  display: grid;
}
.center{
margin-left: 28%;
}
svg {
  width: 100px;
  margin-left: 250px;
  margin-right: 150px;
}
</style>
