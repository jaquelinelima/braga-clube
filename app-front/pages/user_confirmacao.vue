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
      <b-button @click="$router.push('/user_lista')" variant="primary">Voltar</b-button>

      <h1 class="titulo">Confirme Sua Atividade</h1>

    <ol class="nav">
      <li>
        <img class="imagem" src="../static/fut.jpg">
        <p class="texto_imagem">Area de futsal, Sexta-Feira 14:00 até 19:00</p>
        <p2 class="botao" type="submit">Confirme Sua Atividade</p2>

        <!-- Eu não tive tempo de colocar um spam confirmando a atividade --> 
      
      </li>
    </ol>
    <div>
      <h>Horario de entrada: 17 horas</h>
      <h>Horario de saida: 21 horas</h>
    </div>

</body>
</template>

<script>
export default {
  name: 'IndexPage'
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