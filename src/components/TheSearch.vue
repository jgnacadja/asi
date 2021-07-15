<template>
  <div class="result">
    <smooth-scrollbar class="box-result">
      <div class="box">
        <div class="hits">
          <li>
            <ul>
              <li>
                <div
                  class="
                    columns
                    post-item
                    is-marginless is-paddingless is-mobile
                  "
                >
                  <div class="column is-2 post-cover">
                    <g-image
                      class="post-coverImage"
                      src="~/assets/fintech.png"
                      fit="inside"
                    />
                  </div>
                  <div
                    class="
                      column
                      is-8-desktop is-7
                      has-text-left has-text-weight-bold
                    "
                  >
                    SkyeMail.com

                    <br />
                    <small class="post-author has-text-primary">
                      Fintech
                    </small>
                    <small class="post-location">
                      <b-icon pack="fa" icon="map-marker" size="is-small" />
                      Accra, Ghana
                    </small>
                    <!-- <hr> -->
                  </div>

                  <div class="column is-2-desktop is-3">
                    <div
                      class="
                        has-text-weight-bold
                        is-size-3-desktop is-size-4-mobile
                      "
                      style="margin-top: -1rem"
                    >
                      3.5
                    </div>
                    <div class="post-location">250 votes</div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="
                    columns
                    post-item
                    is-marginless is-paddingless is-mobile
                  "
                >
                  <div class="column is-2 post-cover">
                    <g-image
                      class="post-coverImage"
                      src="~/assets/fintech.png"
                      fit="inside"
                    />
                  </div>
                  <div
                    class="
                      column
                      is-8-desktop is-7
                      has-text-left has-text-weight-bold
                    "
                  >
                    SkyeMail.com

                    <br />
                    <small class="post-author has-text-primary">
                      Fintech
                    </small>
                    <small class="post-location">
                      <b-icon pack="fa" icon="map-marker" size="is-small" />
                      Accra, Ghana
                    </small>
                    <!-- <hr> -->
                  </div>

                  <div class="column is-2-desktop is-3">
                    <div
                      class="
                        has-text-weight-bold
                        is-size-3-desktop is-size-4-mobile
                      "
                      style="margin-top: -1rem"
                    >
                      3.5
                    </div>
                    <div class="post-location">250 votes</div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="
                    columns
                    post-item
                    is-marginless is-paddingless is-mobile
                  "
                >
                  <div class="column is-2 post-cover">
                    <g-image
                      class="post-coverImage"
                      src="~/assets/fintech.png"
                      fit="inside"
                    />
                  </div>
                  <div
                    class="
                      column
                      is-8-desktop is-7
                      has-text-left has-text-weight-bold
                    "
                  >
                    SkyeMail.com

                    <br />
                    <small class="post-author has-text-primary">
                      Fintech
                    </small>
                    <small class="post-location">
                      <b-icon pack="fa" icon="map-marker" size="is-small" />
                      Accra, Ghana
                    </small>
                    <!-- <hr> -->
                  </div>

                  <div class="column is-2-desktop is-3">
                    <div
                      class="
                        has-text-weight-bold
                        is-size-3-desktop is-size-4-mobile
                      "
                      style="margin-top: -1rem"
                    >
                      3.5
                    </div>
                    <div class="post-location">250 votes</div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </smooth-scrollbar>
  </div>
</template>

<script>
export default {
  component: {},
  props: {
    state: {
      type: String,
      default() {
        return "input-desktop-hidden";
      },
    },
  },
  data() {
    return {
      rating: 4,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

li {
  list-style-type: none;
}

.box {
  margin-left: 1rem;
  margin-right: 1rem;
}

.box-result {
  height: 20em;
}

.result {
  margin-top: -3rem;
}

@media (min-width: 768px) {
  .result {
    margin-top: -2rem;
  }
}

.field:not(:last-child) {
  margin-bottom: 0rem !important;
}

input.border-round {
  border-radius: 1em !important;
}

.input-mobile {
  background-image: url("../../static/search-solid.svg");
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 15px;
}

.input-mobile:focus {
  //background-image: url('../../static/search-solid.svg');
  background-repeat: no-repeat;
  background-position: 110% center;
  background-size: 15px;
  //border: 2px solid #48c774;box-shadow: none;
}

.input-desktop {
  background-image: url("../../static/search-solid.svg");
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 15px;
}

.input-desktop:focus {
  //background-image: url('../../static/search-solid.svg');
  background-repeat: no-repeat;
  background-position: 110% center;
  background-size: 15px;
  border: var(--color-hover);
  box-shadow: none;
}

.post-location {
  padding-left: 5%;
}

.post-item {
  padding-top: 5%;
}

/*.post-cover {
  //position: absolute;
  //margin-left: -15%;
  //margin-top: 2%;
}*/

/*.post-coverImage {
  width: 30px;
}*/

.smooth-scroll-area-d {
  height: 300px;
  color: black;
  width: 500px;
  position: absolute;
  margin-top: 18%;
  right: -10%;
  //padding-left: 1%;
  padding-right: 5%;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  box-sizing: border-box;
  background-color: #fff !important;
  border-radius: 0.25rem !important;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.smooth-scroll-area-m {
  height: 300px;
  color: black;
  width: 99%;
  position: absolute;
  margin-top: 1%;
  left: 4%;
  padding-left: 5%;
  padding-right: 5%;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  box-sizing: border-box;
  background-color: #fff !important;
  border-radius: 0.25rem !important;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  z-index: 1;
}

@media only screen and (max-width: 415px) {
  .input {
    background-image: url("../../static/search-solid.svg");
    background-repeat: no-repeat;
    background-position: 95% center;
    background-size: 15px;
  }

  .input:focus {
    //background-image: url('../../static/search-solid.svg');
    background-repeat: no-repeat;
    background-position: 110% center;
    background-size: 15px;
  }
}

@media only screen and (max-width: 768px) {
  .input {
    background-image: url("../../static/search-solid.svg");
    background-repeat: no-repeat;
    background-position: 98% center;
    background-size: 15px;
  }

  .input:focus {
    //background-image: url('../../static/search-solid.svg');
    background-repeat: no-repeat;
    background-position: 110% center;
    background-size: 15px;
  }
}

@media only screen and (max-width: 1023px) {
  .input {
    background-image: url("../../static/search-solid.svg");
    background-repeat: no-repeat;
    background-position: 98% center;
    background-size: 15px;
  }

  .input:focus {
    //background-image: url('../../static/search-solid.svg');
    background-repeat: no-repeat;
    background-position: 110% center;
    background-size: 15px;
  }
}

@media only screen and (min-width: 1280px) {
  .b-field {
    right: 12%;
    position: absolute;
  }
}

@media only screen and (min-width: 414px) and (max-width: 768px) {
  .smooth-scroll-area-m {
    height: 300px;
    color: black;
    width: 99%;
    position: absolute;
    margin-top: 1%;
    left: 2%;
    padding-left: 5%;
    padding-right: 5%;
    -webkit-tap-highlight-color: transparent;
    text-align: left;
    box-sizing: border-box;
    background-color: #fff !important;
    border-radius: 0.25rem !important;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1024px) {
  #searchform {
    width: 95%;
  }
}

@media only screen and (min-width: 1085px) and (max-width: 1279px) {
  .input-desktop-display {
    transform: translateX(-40%) !important;
  }
}

@media only screen and (min-width: 1084px) and (max-width: 1546px) {
  .input-desktop-hidden {
    transition: transform 0.5s ease;
    transform: translateX(120%);
    z-index: -1;
    -webkit-opacity: 0;
    -moz-opacity: 0;
    opacity: 0;
    -webkit-transition: all 0.5 ease-in-out;
    -moz-transition: all 0.5 ease-in-out;
    -ms-transition: all 0.5 ease-in-out;
    -o-transition: all 0.5 ease-in-out;
  }

  .input-desktop-display {
    display: block;
    transition: transform 0.5s ease;
    transform: translateX(-10%);
    z-index: 1;
    -webkit-opacity: 1;
    -moz-opacity: 1;
    opacity: 1;
    -webkit-transition: all 0.5 ease-in;
    -moz-transition: all 0.5 ease-in;
    -ms-transition: all 0.5 ease-in;
    -o-transition: all 0.5 ease-in;
  }
}

@media only screen and (min-width: 1366px) and (max-width: 1366px) {
  #searchform {
    margin-left: 10%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1096px) {
  .input-desktop {
    display: none;
  }
}
</style>