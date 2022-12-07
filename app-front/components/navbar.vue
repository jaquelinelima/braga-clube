<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" id="navbar">
      <b-navbar-brand href="/"><strong>BragaClube</strong></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
              <img src="https://placekitten.com/g/30/30" alt="Kitten" class="avatar">
            </template>
            <b-dropdown-item href="#">Minha Conta</b-dropdown-item>
            <b-dropdown-item href="#">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>
<style>
  #navbar {
    background-color: #7C2CFF !important;
  }
  .avatar {
    border-radius: 50%;
  }
</style>
