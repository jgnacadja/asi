<template>
  <div class="hero-footer has-background-grey">
    <div class="container py-4">
      <br />
      <nav class="level">
        <div class="level-left">
          <div class="level-item">
            <small class="level-item has-text-weight-bold has-text-black">
              2020&copy; ASI powered by RINTIO
            </small>
          </div>
        </div>
        <div class="level-right has-text-centered">
          <small class="has-level-item" style="color: var(--textLight)">
            <g-link class="has-text-black has-text-weight-bold" to="/cgu/"
              >CGU</g-link
            >
          </small>
          <small class="has-level-item" style="color: var(--textLight)">
            <g-link
              class="has-text-black has-text-weight-bold"
              to="/mentions-legales/"
              >Mentions légales</g-link
            >
          </small>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../variables.scss";

.has-level-item {
  margin-left: 10px;
  margin-right: 10px;
}

.has-background-primary{
  opacity: 30%;
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
