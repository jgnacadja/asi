<template>
  <div class="columns is-variable is-2 is-vcentered">
    <div ref="breadcrumb" class="column is-12">
      Blog Studely
      <span v-if="categorie != ''">
        &nbsp;&nbsp;
        <b-icon pack="fas" icon="less-than" type="is-black" size="is-small" />
        &nbsp;&nbsp;
        {{ categorie | Upper }}
      </span>
      <span v-if="tag != ''">
        &nbsp;&nbsp;
        <b-icon pack="fas" icon="less-than" type="is-black" size="is-small" />
        &nbsp;&nbsp;
        {{ tag | Upper }}
      </span>
      <span v-if="article != ''">
        &nbsp;&nbsp;
        <b-icon pack="fas" icon="less-than" type="is-black" size="is-small" />
        &nbsp;&nbsp;
        {{ article | Upper }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categorie: {
      type: String,
      default() {
        return "";
      },
    },
    tag: {
      type: String,
      default() {
        return "";
      },
    },
    article: {
      type: String,
      default() {
        return "";
      },
    },
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
      breads: "",
    };
  },
  mounted() {
    this.$refs["breadcrumb"].lastElementChild.className = "has-text-primary";
  },
};
</script>
<style scoped lang="scss">
@import "../variables.scss";
</style>
