<template>
  <div class="container">s</div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: "https://asi.dev.rintio.com/detail/",
      attribute: "market",
      query: "commerce",
      results: [],
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    parseUri(objectId) {
      const parseId = escape(objectId);
      return `${this.baseUrl}${parseId}`;
    },
    // make an axios request to the server with the current search query
    search: function () {
      var axios = require("axios");

      console.log(`client search query = ${JSON.stringify(this.query)}`);
      axios
        .get(
          `${process.env.GRIDSOME_ELASTICSEARCH_API}/${process.env.GRIDSOME_ELASTICSEARCH_API_INDEX_NAME}/_search&q=${this.query}`
        )
        .then((response) => {
          console.log(`client search response = ${JSON.stringify(response)}`);
          this.results = response.data;
        })
        .catch((error) => {
          console.log(`client search error = ${JSON.stringify(error)}`);
        });
    },
  },
  watch: {
    // watch for change in the query string and recall the search method
    query: function () {
      this.search();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

/* .post-item:hover{
  background-color: rgba(28, 102, 172, 0.1);
} */

li {
  list-style-type: none;
}

.result {
  padding-top: 1rem;
  border-top: 1px solid #dedede;
}

.custom-size {
  width: 12%;
}

@media screen and (min-width: 1024px) {
  .result {
    margin-right: 1rem;
  }
}

@media screen and (max-width: 767px) {
  .custom-size-mobile {
    font-size: 0.5rem;
  }

  .custom-size {
    width: 25% !important;
  }
}

.select {
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  box-sizing: inherit;
  margin: 0;
  font-family: poppins, sans-serif;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  align-items: center;
  border: 1px solid transparent;
  box-shadow: none;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
  border-color: transparent;
  border-radius: 4px;
  color: #363636;
  cursor: pointer;
  display: block;
  font-size: 1em;
  width: 12em;
  outline: none;
  text-rendering: auto !important;
  height: 3.5em;
  padding-right: 0px;
  background: transparent;
  -webkit-transition: 0.5s; /* For Safari 3.1 to 6.0 */
  transition: 0.5s;
}

.select:hover {
  background: #f5f5f5;
}

.select::after,
.select::before {
  color: red !important;
  border-color: #485fc7 !important;
}

.rm-raduis-select {
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

.rm-raduis-input {
  border-radius: 0px;
}

.is-borderless {
  border: transparent;
  box-shadow: none;
}

.rm-raduis-search {
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  background: #ff9b26;
}

.post-vote {
  margin-top: -1rem;
}

@media (max-width: 768px) {
  .post-vote {
    margin-top: 0rem;
  }

  .custom-hr {
    border-bottom: 1px solid #c4c4c4;
    margin-bottom: 1rem;
  }

  .custom-hr-top {
    margin-top: -1rem;
  }

  .custom-hr-bottom {
    margin-bottom: -1.2rem;
  }
}

.custom-hr {
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 1rem;
}

.is-paddingless,
.is-marginless {
  padding: 0 !important;
}

.is-fullwidth {
  width: 100%;
}

@media (max-width: 768px) {
  .mobile-input {
    margin-left: 0.6rem;
  }
}

p input::placeholder {
  font-style: italic;
}
</style>

