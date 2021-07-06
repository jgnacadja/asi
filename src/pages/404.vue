<template>
  <Layout>
    <section class="section hero">
      <div id="mainDiv" class="columns">
        <div class="column center-over-1920">
          <video class="video-banner hero" playsinline autoplay muted loop>
            <source src="404/404_vf.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  </Layout>
</template>



<script>
export default {
  metaInfo: {
    title: "404",
    meta: [
      {
        name: "404",
        content: "Désolé. Nous ne pouvons satisfaire a cette requete.",
      },
    ],
  },
};
</script>


<style scoped lang="scss">
@import "../variables.scss";

.hero {
  background-size: cover;
}

@media (max-width: 1023px) and (min-width: 769px) {
  .hero {
    min-height: 50em;
  }
}

@media only screen and (min-width: 1921px) {
  .center-over-1920 {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 1024px) {
  #loading {
    margin-top: 8% !important;
  }
}

#loading {
  margin-left: auto;
  margin-right: auto;
}
</style>

