<template>
  <div
    class="hero-head"
    v-bind:class="{
      'has-background-primary': typeNavbar === 'is-white',
    }"
  >
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <g-link to="/">
            <figure class="">
              <g-image src="~/assets/logo.svg" fit="inside" />
            </figure>
          </g-link>
          <span
            class="navbar-burger burger has-text-white"
            data-target="navbarMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <g-link class="button is-white is-outlined" to="/">
                <span class="icon">
                  <b-icon pack="fa" icon="question-circle" size="is-small" />
                </span>
                <span>Comment ça marche</span>
              </g-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      typeNavbar: "is-info",
    };
  },
  mounted() {
    var url = location.href; // = location.href
    var parts = url.split("/").slice(2);
    if (parts[1] === "") {
      this.typeNavbar = "is-info";
    } else {
      this.typeNavbar = "is-white";
    }
  },
};
</script>