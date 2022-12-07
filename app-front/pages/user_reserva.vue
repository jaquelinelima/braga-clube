<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <div class="wrapper">
      <h1 class="title">Reserva</h1>
      <div class="center">
        <div class="form">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label-for="input-1">
              <p>Hora de Entrada:</p>
              <b-form-input id="input-1" v-model="form.email" type="email" placeholder="..." required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <p>Hora de Saida:</p>
              <b-form-input id="input-2" v-model="form.name" placeholder="..." required></b-form-input>
            </b-form-group>
            <input type="checkbox" id="contactChoice1" name="contact" value="email" />
            <label for="contactChoice1">Deseja um saco de carvão 5kg?</label>
            </b-form>
        </div>
        <b-button @click="$router.push('/')" class="botao">Confirmar Atividade</b-button>
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
  .nav-bar{
    background-color: #7C2CFF;
  }
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
.form {
margin-left: 15%;
width: 70%;
}
.center {
text-align: center;
align-items: center;

}
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
