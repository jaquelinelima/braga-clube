<template>
  <body>
    <div>
      <img 
      class="imagem"
      src="../static/hero.png"
      alt="BragaClube Propaganda"
      >
    </div>
    
    <div>
      <p
      class="titulo">
      Entrar
      </p>
    </div>

    <div class="nav">
      <label class="nav_titulo" for="name">Email:</label>
      <input id="name" type="email" placeholder="aaaa@mail.com" data-sb-validations="required" />

      <label class="nav_titulo2" for="name">Senha:</label>
      <input id="name" type="email" data-sb-validations="required" placeholder="**********"/> <button class="botao" type="submit">esqueci minha senha</button>

      <button class="botao" type="submit">Entrar</button>
      <button class="botao" type="submit">Criar conta</button>
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
.imagem {
  position: fixed;
  right: 0pt;
  max-height: 100%;
  max-width: 100%;
  padding-right: 40px;
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