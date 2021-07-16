<template>
  <div class="hero-head has-background-primary">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand py-2">
          <g-link to="/">
            <figure class="">
              <g-image src="~/assets/logo.svg" fit="inside" />
            </figure>
          </g-link>
          <b-icon
            class="is-hidden-desktop"
            type="is-white"
            pack="fa"
            icon="question-circle"
            size="is-large"
          />
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <span class="navbar-item">
              <g-link class="has-text-white" to="/">
                <span>Comment ça marche ?</span>
              </g-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import "../variables.scss";

.navbar-brand {
  justify-content: space-around;
  align-items: center;
}
</style>