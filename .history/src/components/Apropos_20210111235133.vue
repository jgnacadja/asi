<template>
  <div>
    <div
      class="columns main-box pt-5 is-12 is-mobile has-text-left"
      style="margin-bottom: -2em"
    >
      <div class="column is-10">
        <span class="title main-box-title">{{ about.aboutSection.title }}</span>
      </div>
      <div class="column extern-link is-2 mt-3">
        <b-icon
          pack="fas"
          icon="chevron-right"
          size="is-large"
          type="is-white"
        />
      </div>
    </div>
    <g-link to="/qui-sommes-nous">
      <div class="columns is-12 main-box is-mobile">
        <div
          class="column is-center-mobile ADN-g-image is-3-desktop is-4-mobile"
        >
          <g-image src="~/assets/index/leaders/leader-cameroun.png" />
        </div>
        <div class="column is-9-desktop is-8-mobile mt-6 isMobile">
          <div class="columns is-12">
            <div class="column is-10 has-text-left mb-4 is-director-side">
              <div class="columns is-12 is-mobile is-hidden-touch">
                <div class="column is-10">
                  <span class="title main-box-title">{{
                    about.aboutSection.title
                  }}</span>
                </div>
                <div class="column extern-link is-2 mt-3">
                  <b-icon
                    pack="fas"
                    icon="chevron-right"
                    size="is-large"
                    type="is-white"
                  />
                </div>
              </div>
              <div class="column is-paddingless main-box-sub">
                <span class="title main-box-subtitle">{{
                  about.aboutSection.subtitle
                }}</span>
              </div>
              <div class="column content-12 is-paddingless">
                <vue-markdown
                  class="content"
                  :source="source"
                  id="dataSource"
                  :html="html"
                ></vue-markdown>
              </div>
              <!-- <div class="column content-12-link is-paddingless">
                <g-link>{{ about.aboutSection.button.title }}</g-link>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </g-link>

    <div class="columns is-12">
      <div class="column is-5 is-12-mobile main-box-left">
        <div class="columns is-12">
          <div class="column is-12 has-text-left">
            <div class="columns is-12 is-mobile">
              <div class="column is-10 mt-3">
                <span class="title main-box-title">{{ about.team.title }}</span>
              </div>
              <div class="column is-2 mt-3 external-link">
                <g-link>
                  <b-icon
                    pack="fas"
                    icon="chevron-right"
                    size="is-large"
                    type="is-white"
                  />
                </g-link>
              </div>
            </div>

            <div class="columns is-12 is-mobile partner-height">
              <div class="column is-6 left-team">
                <div class="column">
                  <g-image class="image" :src="about.team.teamOne.file.url" />
                </div>
                <div class="column">
                  <g-image class="image" :src="about.team.teamTwo.file.url" />
                </div>
              </div>
              <div class="column is-6 right-team">
                <div class="column">
                  <g-image class="image" :src="about.team.teamTwo.file.url" />
                </div>
                <div class="column">
                  <g-image class="image" :src="about.team.teamOne.file.url" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-7 main-box-right">
        <div class="columns is-12 full-height">
          <div class="column is-12 has-text-left">
            <div class="column mt-2">
              <span class="title main-box-title">
                {{ about.events.title }}</span
              >
            </div>
            <div class="column full-height">
              <Calendar :eventsList="events" :headerProps="headerEvent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from "~/components/calendar/Calendar.vue";
import VueMarkdown from "vue-markdown";

export default {
  components: {
    Calendar,
    VueMarkdown,
  },
  props: {
    about: {
      type: Object,
      default: () => [],
    },
    events: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      headerEvent: {
        bgcolor: "white",
        color: "#1b66a9",
        class: "is-about",
      },
      readMore: `<a class="" id="readMoreIndex" href="#"> lire plus</a>`,
      readMoreActivated: false,
      source: "",
    };
  },
  created() {
    this.source = this.limit();
  },
  mounted: function () {
    let readmore = document.getElementById("readMoreIndex");
    let dataSource = document.getElementById("dataSource");

    readmore.addEventListener("click", () => {
      this.readMoreActivated = true;
      this.source = this.limit(80);
    });
  },
  methods: {
    // Filter definitions
    limit() {
      let part = this.about.aboutSection.description;
      //console.log(this.director.description);

      let maxLength = 240; // maximum number of characters to extract

      if (typeof navigator !== "undefined") {
        if (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)
        ) {
          maxLength = 80; // maximum number of characters to extract
        }
      }

      //Trim and re-trim only when necessary (prevent re-trim when string is shorted than maxLength, it causes last word cut)
      if (part.length > maxLength) {
        //trim the string to the maximum length
        var trimmedString = part.substr(0, maxLength);
        var trimmedStringEnd = part.substr(maxLength);

        //re-trim if we are in the middle of a word and
        //trimmedString = trimmedString.substr(
        //  0,
        //  Math.min(trimmedString.length, trimmedString.lastIndexOf("."))
        //);

        //trimmedStringEnd = part.substr(Math.min(maxLength));

        trimmedStringEnd = part.replace(trimmedString, "");
      }

      let lastReturn;

      if (this.readMoreActivated === true) {
        lastReturn = trimmedString + trimmedStringEnd;
      } else {
        lastReturn = trimmedString + "..." + this.readMore;
      }

      return lastReturn;
    },
  },
};
</script>
<style scoped lang="scss">
.main-box {
  background-color: #0e3b64;
}

.main-box-left {
  background-color: #3d8cd1;
}

.main-box-right {
  background-color: #1b66a9;
}

.main-box-title {
  font-size: 2em;
  color: white;
}

.main-box-subtitle {
  font-size: 1em;
  color: white;
}

.content-12 {
  color: white;
}

.extern-link {
  text-align: end;
  margin-left: 10%;
}

.is-director-side {
  margin-bottom: 6em !important;
}

/*.left-team {
  margin-right: -3em;
  margin-left: 4em;
}

.right-team {
  margin-left: -1em;
}*/

@media only screen and (min-width: 1024px) {
  /*.image-team {
    max-width: 75%;
  }*/
}

@media only screen and (max-width: 768px) {
  .extern-link {
    text-align: end;
    margin-left: -7%;
    margin-top: 0% !important;
  }
}

@media only screen and (max-width: 414px) {
  .isMobile {
    margin-top: 1.6em !important;
  }

  .main-box-subtitle {
    font-size: 0.8em;
    color: white;
  }

  .content-12 {
    font-size: 0.7em;
  }

  .content-12-link {
    font-size: 0.7em;
  }

  .extern-link {
    text-align: end;
    margin-left: -2%;
    margin-top: 0% !important;
  }

  .is-center-mobile {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .adn-description {
    padding-left: unset;
    padding-top: 1em;
    padding-right: unset;
  }

  .main-box-title {
    font-size: 1em;
  }

  .external-link {
    font-size: 0.8em;
    text-align: end;
    margin-top: 0.3em !important;
  }

  .extern-link {
    margin-top: -0.8em !important;
  }
}

.ADN-g-image {
  transform: translateY(10%);
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.main-box-sub {
  margin-top: -1em;
  margin-bottom: 1em;
}

@media only screen and (min-width: 769px) {
  .full-height {
    height: 100%;
  }

  .partner-height {
    margin-top: -4ex;
  }
}
</style>

