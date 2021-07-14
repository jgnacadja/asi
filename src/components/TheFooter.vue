<template>
  <div class="hero-footer">
    <div class="column is-8 is-offset-2">
      <br />
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <small class="level-item" style="color: var(--textLight)">
              2020&copy; ASI powered by RINTIO
            </small>
          </div>
        </div>
        <div class="level-right has-text-centered">
          <small class="has-level-item" style="color: var(--textLight)">
            <g-link
              v-bind:class="{
                'has-text-black': typeNavbar === 'is-white',
                'has-text-white': typeNavbar === 'is-info',
              }"
              to="/cgu/"
              >CGU</g-link
            >
          </small>
          <small class="has-level-item" style="color: var(--textLight)">
            <g-link
              v-bind:class="{
                'has-text-black': typeNavbar === 'is-white',
                'has-text-white': typeNavbar === 'is-info',
              }"
              to="/mentions-legales/"
              >Mentions légales</g-link
            >
          </small>
        </div>
      </nav>
    </div>
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

<style scoped lang="scss">
@import "../variables.scss";

.has-level-item {
  margin-left: 10px;
  margin-right: 10px;
}

@media (min-width: 768px) {
  .has-level-item {
    align-items: center;
    display: flex;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
  }
}
</style>
