<template>
  <Layout>
    <section class="section is-paddinless">
      <Breadcrumb
        :categorie="$page.article.categories[0].title"
        :article="$page.article.title"
      />
    </section>
    <!-- header image  -->
    <section
      class="hero is-large columns is-vcentered"
      :style="{
        backgroundImage: `url('${$page.article.coverImage.file.url}')`,
      }"
    >
      <div class="column is-12 opacity">
        <div class="hero-head" />

        <div class="sub-title">
          <div class="has-text-centered">
            <h1 class="section title has-text-white has-text-left">
              {{ $page.article.categories[0].title | Upper }}
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-text-centered is-paddingless container">
      <!-- Article title -->
      <div class="columns is-centered">
        <div class="column is-8">
          <h1>
            <strong>{{ $page.article.title }}</strong>
          </h1>
        </div>
      </div>
      <br />
      <br />
      <!-- Artcile header -->

      <div class="columns is-multiline is-mobile has-text-centered is-centered">
        <div class="column is-narrow">
          <figure class="image is-128x128">
            <g-image class="is-rounded" :src="author.image" />
          </figure>
        </div>
        <div
          class="column is-5-desktop is-12-mobile has-text-left is-hidden-mobile"
        >
          <h2>
            <strong>{{ $page.article.author }}</strong>
          </h2>
          <br />
          <span class="content-14">
            {{ format_date($page.article.date) }} -
            {{ $page.article.timeToRead }} min à lire
          </span>
        </div>
        <div class="column is-5-desktop is-12-mobile is-hidden-desktop">
          <h2>
            <strong>{{ $page.article.author }}</strong>
          </h2>
          <br />
          <span class="content-14">
            {{ format_date($page.article.date) }} -
            {{ $page.article.timeToRead }} min à lire
          </span>
        </div>
        <div class="column is-narrow is-pulled-right">
          <ul style="display: inline">
            <li>
              <a href="https://www.linkedin.com/company/linkedindestudely">
                <b-icon
                  pack="fab"
                  icon="linkedin"
                  type="is-black"
                  size="is-medium"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCpd-GbAseIuTLtutXSy8dAA"
              >
                <b-icon
                  pack="fab"
                  icon="youtube"
                  type="is-black"
                  size="is-medium"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/studelyofficiel">
                <b-icon
                  pack="fab"
                  icon="twitter"
                  type="is-black"
                  size="is-medium"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/studelyofficiel/">
                <b-icon
                  pack="fab"
                  icon="instagram"
                  type="is-black"
                  size="is-medium"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/StudelyFrance/">
                <b-icon
                  pack="fab"
                  icon="facebook"
                  type="is-black"
                  size="is-medium"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="columns is-centered is-mobile has-text-left">
        <div class="column is-8 content-14">{{ $page.article.excerpt }}</div>
      </div>
      <div
        v-if="$page.article.coverImage"
        class="columns is-multiline is-centered is-mobile"
      >
        <div class="column is-8">
          <figure class="image">
            <g-image
              :src="$page.article.coverImage.file.url"
              fit="inside"
              width="800"
            />
          </figure>
        </div>
      </div>
    </section>

    <article class="section container">
      <div class="columns is-centered has-text-justify is-multiline">
        <div class="column is-8">
          <vue-markdown class="content">{{
            $page.article.content
          }}</vue-markdown>
        </div>
        <div class="column is-8">
          <b-taglist>
            <b-tag
              v-for="tag in $page.article.tags"
              :key="tag.id"
              type="is-primary"
              size="is-small"
              rounded
            >
              <g-link :to="tag.path">
                <div class="has-text-white">{{ tag.title }}</div>
              </g-link>
            </b-tag>
          </b-taglist>
        </div>
        <div class="column is-8">
          <vue-disqus
            shortname="studely-1"
            :identifier="$page.article.title"
          ></vue-disqus>
        </div>
      </div>
    </article>

    <section class="section container">
      <div class="columns is-multiline">
        <div class="column is-12">
          <h1>
            <strong>A lire également</strong>
          </h1>
        </div>
        <div class="column is-12">
          <div class="columns is-variable is-mobile">
            <b-carousel-list
              :v-model="test"
              :data="$page.articles.edges"
              :arrow="arrow"
              :arrow-hover="arrowHover"
              :items-to-list="perList"
              :repeat="repeat"
              :has-drag="drag"
              :has-grayscale="gray"
              :has-opacity="opacity"
              :items-to-show="1"
              style="box-shadow: unset"
              class="is-hidden-tablet"
            >
              <template slot="item" slot-scope="props">
                <div class="column">
                  <PostCard :article="props.list.node" />
                </div>
              </template>
            </b-carousel-list>

            <b-carousel-list
              :v-model="test"
              :data="$page.articles.edges"
              :arrow="arrow"
              :arrow-hover="arrowHover"
              :items-to-list="perList"
              :repeat="repeat"
              :has-drag="drag"
              :has-grayscale="gray"
              :has-opacity="opacity"
              :items-to-show="3"
              style="box-shadow: unset"
              class="is-hidden-mobile"
            >
              <template slot="item" slot-scope="props">
                <div class="column">
                  <PostCard :article="props.list.node" />
                </div>
              </template>
            </b-carousel-list>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query ArticlePage($path: String!) {
    article: contentfulPost (path: $path) {
      title
      categories {
        id
        title
      }
      tags {
        id
        title
        path
      }
      author
      date
      excerpt
      timeToRead
      coverImage {
        file {
          url
        }
      }
      content
      seoTitle
      metaDescription
    }
      articles: allContentfulPost(filter: { path: { nin: [$path] } }) {
      edges {
        node {
          id
          title
          path
          date
          excerpt
          author
          timeToRead
          categories {
            id
            title
          }
          coverImage {
            file {
              url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";

import VueMarkdown from "vue-markdown";
import moment from "moment";

export default {
  components: {
    PostCard,
    Breadcrumb,
    VueMarkdown,
  },
  metaInfo() {
    return {
      title: this.$page.article.seoTitle,
      meta: [
        { name: "description", content: this.$page.article.excerpt },

        // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:description",
          content: this.$page.article.excerpt,
        },
        { name: "twitter:title", content: this.$page.article.title },
        { name: "twitter:site", content: "@StudelyOfficiel" },
        {
          name: "twitter:image",
          content: "https:" + this.$page.article.coverImage.file.url,
        },
        { name: "twitter:creator", content: "@StudelyOfficiel" },

        // facebook-card
        { name: "og:description", content: this.$page.article.excerpt },
        { name: "og:title", content: this.$page.article.title },
        { name: "og:url", content: "https://www.studely.com/" },
        {
          name: "og:image",
          content: "https:" + this.$page.article.coverImage.file.url,
        },
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }],
    };
  },
  filters: {
    // Filter definitions
    Upper(value) {
      const leftletter = value.substring(0, 1);
      const rightvalue = value.substring(1);
      return leftletter.toUpperCase() + rightvalue;
    },
  },
  data() {
    return {
      author: {
        image: "",
      },
    };
  },
  mounted() {
    this.getAuthor();
  },
  methods: {
    getAuthor() {
      const images = ["/blog/blog_avatar_1.svg", "/blog/blog_avatar_2.svg"];

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
a {
  color: $black-studely;
}

.hero {
  background-size: cover;
  height: 10em;
  //  opacity: 0.6;
}

.opacity {
  background-color: $black-studely;
  opacity: 0.6;
  height: 10em;
}

ul > li {
  float: left;
  margin: 0.5em;
}
</style>
