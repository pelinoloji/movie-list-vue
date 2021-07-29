<template>
  <div class="search-box">
    <div class="search" @click="handleSearch">
      <img :src="require('../assets/search-icon.png')" alt="search icon" />
      Search
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  props: {
    movieList: {
      type: Array,
    },
  },
  methods: {
    handleSearch() {
      console.log("here",this.movieList);
    },
  },
};
</script>

<style scoped lang="scss">
.search-box {
  padding: 40px 0px;
  background-color: white;

  .search {
    color: #dff43d;
    border-bottom: 1px solid #dff43d;
    margin: 0 20px;
    font-size: 20px;

    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>