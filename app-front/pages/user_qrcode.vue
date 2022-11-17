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
      <h1 class="titulo">  NOVO - Leitor de QrCode</h1>

    <div class="nav">
      <img class="imagem" src="../static/camera.svg">

      <div class="botao">
        <p class="texto">Recentemente instalamos um sistema de QRcode para identificação das atividades no nosso clube.</p>
        <p2 class="texto">Aproveitem! :3</p2>
      </div>
    </div>
    

</body>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>
.titulo{
  font-size: 36px;
  line-height: 44px;
  align-items: center;
  text-align: center;
  color: #000000;
}

.imagem{
  max-width:100%;
  max-height:100%;
  width: 200px;
  margin: 10px;
  height: 200px;
  object-fit: contain;
}

.nav{
  align-items:center;
  text-align: center;
  border: #000000;
  border-radius: 10px;
}

.botao{
  position: relative;
  background: #7C2CFF;
  border-radius: 8px;
}
</style>