<template>
  <Layout>
    <section class="section container">
        <h1 class="has-text-weight-normal	m-0 my-2 is-3">Suggérer une modification</h1>
        <p>
          Si vous repérez des informations inexactes ou inexistantes dans les résultats de 
          recherche d'une startup, vous pouvez nous le signaler. <br/>
          <strong>Attention !!!</strong> Nous examinons toutes les modifications. Par conséquent, la mise à jour des résultats de recherche peut prendre un certain temps.
        </p>
        <form class="mt-4 px-3 py-5 modify_request">
        </form>
    </section>
  </Layout>
</template>
<script>

export default {
  components: {
  },
  metaInfo: {
    title: "Suggérer une modification",
    meta: [
      {
        name: "Suggérer une modification",
        content: "Suggérer une modification",
      },
    ],
  },
};
</script>
<style lang="scss">
@import "../variables.scss";
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";
.modify_request {
     border: 1px solid gray;
}
button.btn.btn-outline-secondary {
    margin-right: 10px;
}
</style>