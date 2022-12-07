<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="wrapper">
      <h1 class="title">Confirme Sua Atividade</h1>
      <div class="center">
        <div class="flex">
          <div><svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm143 304h-45.22a8 8 0 0 1-6.91-4l-16.14-27.68a8 8 0 0 1-.86-6l14.86-59.92a8 8 0 0 1 4.65-5.45l28.1-11.9a8 8 0 0 1 8.34 1.3l41.63 35.82a8 8 0 0 1 2.69 7.26a174.75 174.75 0 0 1-24.28 66.68A8 8 0 0 1 399 352ZM134.52 237.13l28.1 11.9a8 8 0 0 1 4.65 5.45l14.86 59.92a8 8 0 0 1-.86 6L165.13 348a8 8 0 0 1-6.91 4H113a8 8 0 0 1-6.82-3.81a174.75 174.75 0 0 1-24.28-66.68a8 8 0 0 1 2.69-7.26l41.63-35.82a8 8 0 0 1 8.3-1.3Zm256.94-87.24l-18.07 51.38A8 8 0 0 1 369 206l-29.58 12.53a8 8 0 0 1-8.26-1.24L274.9 170.1a8 8 0 0 1-2.9-6.1v-33.58a8 8 0 0 1 3.56-6.65l42.83-28.54a8 8 0 0 1 7.66-.67A176.92 176.92 0 0 1 390 142a8 8 0 0 1 1.46 7.89ZM193.6 95.23l42.84 28.54a8 8 0 0 1 3.56 6.65V164a8 8 0 0 1-2.86 6.13l-56.26 47.19a8 8 0 0 1-8.26 1.24L143 206a8 8 0 0 1-4.43-4.72L120.5 149.9a8 8 0 0 1 1.5-7.9a176.92 176.92 0 0 1 64-47.48a8 8 0 0 1 7.6.71Zm17.31 327.46L191.18 373a8 8 0 0 1 .52-7l15.17-26a8 8 0 0 1 6.91-4h84.44a8 8 0 0 1 6.91 4l15.18 26a8 8 0 0 1 .53 7l-19.59 49.67a8 8 0 0 1-5.69 4.87a176.58 176.58 0 0 1-79 0a8 8 0 0 1-5.65-4.85Z"/></svg></div>
          <div>
            <b-button class="botao wrapper">Área de futsal, Sexta-Feira 14:00 até 19:00</b-button>
            <b-button @click="$router.push('/')" class="botao">Confirmar Atividade</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <h5>Horario de entrada: 17 horas</h5>
      <h5>Horario de saida: 21 horas</h5>
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
svg {
  width: 200px;
  margin-left: 150px;
  margin-right: 150px;
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
.wrapper {
  margin-top: 5%;
  display: grid;
}
.flex {
  /* margin-top: 5%; */
  margin-left: 10%;
  display: flex;
}
.title{
  text-align: center;
  margin-bottom: 5%;
}
.botao{
  background-color: #7C2CFF;
  border-radius: 8px;
  width: 600px;
  margin: 5px;
}
.center {
text-align: center;
align-items: center;

}
</style>
