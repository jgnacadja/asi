<template>
  <div
    class="columns is-multiline is-white card is-mobile"
    style="height: 500px"
  >
    <div class="column is-12">
      <div class="columns is-variable is-3 is-vcentered is-mobile">
        <div class="column is-narrow">
          <figure class="image is-32x32">
            <g-image class="is-rounded" :src="author.image" />
          </figure>
        </div>
        <div
          class="column is-5 has-text-left is-paddingless"
          style="font-size=0.6em;"
        >
          <strong>{{ article.author }}</strong>
          <br />
          <span>{{ format_date(article.date) }}</span>
        </div>
        <div
          class="column has-text-right is-pull-right"
          style="font-size: 0.8em"
        >
          {{ article.timeToRead }} min à lire
        </div>
      </div>
    </div>
    <div class="column is-12">
      <div class="card-image">
        <g-link :to="article.path">
          <figure class="image is-3by2">
            <g-image :src="article.coverImage.file.url" />
          </figure>
        </g-link>
      </div>
      <div class="card-content content-14">
        <strong>{{ article.title }}</strong>
        <br />
        <div style="min-height: 3em" v-if="article.excerpt">
          {{ article.excerpt | Limit }}
        </div>
        <div style="min-height: 1em" v-show="!article.excerpt"></div>
        <span>
          <b-icon
            pack="far"
            icon="heart"
            type="is-danger"
            size="is-small"
          />J'aime
        </span>
        <span class="is-pulled-right">
          <g-link :to="article.path">Lire Plus</g-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    article: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      author: {
        image: "",
      },
    };
  },
  filters: {
    // Filter definitions
    Limit(value) {
      let valueToString = value;
      if (valueToString.length !== 1) {
        var leftpart = valueToString;

        var maxLength = 50; // maximum number of characters to extract

        //Trim and re-trim only when necessary (prevent re-trim when string is shorted than maxLength, it causes last word cut)
        if (leftpart.length > maxLength) {
          //trim the string to the maximum length
          var trimmedString = leftpart.substr(0, maxLength);

          //re-trim if we are in the middle of a word and
          trimmedString = trimmedString.substr(
            0,
            Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
          );
        }

        return trimmedString.toUpperCase() + "...";
      }
    },
  },
  mounted() {
    this.getAuthor();
  },
  methods: {
    getAuthor() {
      const images = ["/blog/blog_avatar_11.svg", "/blog/blog_avatar_21.svg"];
      this.author.image = images[0];
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD MMMM YYYY");
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
</style>

