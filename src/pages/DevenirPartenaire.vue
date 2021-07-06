<template>
  <Layout>
    <div class="container has-text-centered">
      <section class="section">
        <div class="container">
          <div class="columns is-multiline has-text-centered">
            <div class="column is-12 has-text-primary">
              <h1>Intégrez le cercle des partenaires de Studely</h1>
            </div>
            <div class="column is-12 subtitle">
              Participez à la concrétisation de milliers de projets d’étudiants
              internationaux !
            </div>
          </div>
        </div>
      </section>
    </div>

    <Form />
  </Layout>
</template>

<script>
import Form from "~/components/utils/Form.vue";

export default {
  components: {
    Form,
  },
  metaInfo: {
    title: "Devenir Partenaire",
    meta: [
      {
        name: "description",
        content:
          "Découvrez notre présence en Afrique et contactez dès maintenant votre conseiller Studely",
      },
    ],
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
</style>