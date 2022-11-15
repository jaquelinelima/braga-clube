<template>
  <div style="background-color: #f2f2f2">
    <div>
      <p class="titulo">Entrar</p>
    </div>
    <b-container id="ContainerLogin">
      <b-row align-v="start" id="rowLogin">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="login-form">
          <b-col id="colLogin" class="center">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input id="input-1" v-model="form.email" type="text" placeholder="E-mail" required></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Senha"></b-form-input>
            </b-form-group>
            <h4 id="esqueciMinhaSenha" style="margin: 5px"><b-link @click="$router.push('/cadastro')" style="padding-left: 3px; color: gray !important;">Esqueci minha senha.</b-link></h4>
            <b-button  type="submit" variant="primary" id="LoginButton">Login</b-button>
            <h4 id="h4CrieUmaConta" style="margin: 5px">Não tem uma conta? <b-link @click="$router.push('/cadastro')" style="padding-left: 3px; color: gray !important;"><strong>Crie agora.</strong></b-link></h4>
          </b-col>
        </b-form>
        <AsideComponent></AsideComponent>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AsideComponent from "../aside.vue"
export default {
  name: 'FormLogin',
  components:{
    AsideComponent
  },
  data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        const self = this
        event.preventDefault()
        this.$axios.post('http://localhost:3000/login', {
          username: this.form.username,
          password: this.form.password
        })
        .then(function (response) {
          document.cookie = `token=${response.data.token}`;
          document.cookie = `user_id=${response.data.user._id}`;
          self.$router.push('/');
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
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
.titulo{
  position: absolute;
  width: 142px;
  height: 29px;
  left: 65px;
  top: 200px;

  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
#LoginButton {
  background-color: #7C2CFF !important;
  border-color: #7C2CFF !important;
  border-radius: 8px;
}
#colLogin {
  margin-top: 35%;
  margin-right: 10%;
  margin-left: 10%;
}
#colDivis {
  width: 10px;
}
#h4CrieUmaConta {
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 0.8rem;
  color: gray !important;
  padding-top: 5px;
}
#esqueciMinhaSenha {
  display: flex;
  align-content: center;
  justify-content: right;
  font-size: 0.8rem;
  font-style: normal;
  padding-top: 2px;
}
#imgLogin {
  height: 100%;
  width: 100%;
  background-position: right !important;
  background-color: #7C2CFF;
}
#rowLogin {
  height: 100vh;
}
/* .center {
  position: relative;
  display: flex;
  align-items: center;
} */
</style>
