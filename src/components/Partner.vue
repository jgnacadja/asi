<template>
  <div
    class="columns is-variable is-partner-wrapper is-2 is-vcentered is-centered"
  >
    <b-carousel-list
      class="is-hidden-desktop"
      :data="partenaires.slides"
      :arrow="partenaires.arrow"
      :has-drag="partenaires.drag"
      :has-grayscale="partenaires.gray"
      :has-opacity="partenaires.opacity"
      :refresh="partenaires.refresh"
      :icon-pack="partenaires.iconPack"
      :icon-size="partenaires.iconSize"
      :items-to-show="1"
      :autoplay="true"
      :interval="10000"
      :arrow-hover="arrowHover"
      :pause-hover="false"
      style="box-shadow: unset"
    >
      <template slot="item" slot-scope="props">
        <div class="column is-12-desktop is-12-mobile is-partner">
          <figure class="image section">
            <g-image :src="props.list.image" fit="inside" />
          </figure>
        </div>
      </template>
    </b-carousel-list>

    <b-carousel-list
      class="is-hidden-touch"
      :data="partenaires.slides"
      :arrow="partenaires.arrow"
      :has-drag="partenaires.drag"
      :has-grayscale="partenaires.gray"
      :has-opacity="partenaires.opacity"
      :refresh="partenaires.refresh"
      :icon-pack="partenaires.iconPack"
      :icon-size="partenaires.iconSize"
      :autoplay="true"
      :interval="10000"
      :arrow-hover="arrowHover"
      :pause-hover="false"
      style="box-shadow: unset"
    >
      <template slot="item" slot-scope="props">
        <div class="column is-12-desktop is-10-mobile is-partner">
          <figure class="image">
            <g-image :src="props.list.image" fit="inside" />
          </figure>
        </div>
      </template>
    </b-carousel-list>
  </div>
</template>

<script>
export default {
  props: {
    partners: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      arrowHover: false,
      isImageModalActive: false,
      isCardModalActive: false,
      iconPack: "fas",
      iconSize: "is-large",
      pauseHover: false,
      partenaires: {
        refresh: true,
        arrow: true,
        drag: true,
        gray: false,
        opacity: false,
        values: "3",
        repeat: true,
        iconPack: "fas",
        iconSize: "is-large",
        perList: 4,
        slides: [],
      },
    };
  },
  mounted() {
    this.getPartners();
  },
  methods: {
    getPartners() {
      let items = [];

      let partners = this.partners;
      partners.forEach(function (item) {
        let objet = {
          image: item.file.url,
        };
        items.push(objet);
      });

      this.partenaires.slides = items;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";

@media only screen and (min-width: 1024px) {
  .is-partner {
    padding: 25% !important;
  }

  .is-partner-wrapper {
    margin-top: -5em;
  }
}

.resize-partner {
  height: 100px;
  width: 100px;
}

@media only screen and (max-width: 768px) {
  .is-partner {
    //text-align: -webkit-center;
    padding: 2em !important;
  }

  .is-partner-wrapper {
    margin-top: -5em;
  }
}
</style>