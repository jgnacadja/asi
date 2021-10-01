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
              <froala :tag="'textarea'" :config="config" v-model="model">Init text</froala>

        </form>
    </section>
  </Layout>
</template>
<script>
import VueFroala from 'vue-froala-wysiwyg';
export default {
  components: { VueFroala
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
  data () {
    return {
      config: {
        placeholderText: 'Edit Your Content Here!',
      },
      model: 'Edit Your Content Here!'
    }
  }
};
</script>
<style lang="scss">
@import "../variables.scss";
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/derived-variables";
@import "~bulma/sass/utilities/mixins";
a#fr-logo {
    display: none;
}
.fr-box.fr-basic .fr-element{
  height: 50vh;
}
.modify_request {
     border: 1px solid gray;
}
button.btn.btn-outline-secondary {
    margin-right: 10px;
}
</style>