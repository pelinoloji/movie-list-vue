<template>
  <form class="search-container">
    <input type="text" class="search-box" id="search-box" v-model="query" />
    <label for="search-box">
      <img
        :src="require('../assets/search-icon.png')"
        alt="search icon"
        witdh="20"
        height="20"
        class="search-icon"
      />
    </label>
    <div
      class="search-result hidden"
      :class="{ display: searchResult }"
      v-for="searchResult in handleSearch"
      :key="searchResult"
    >
      <router-link
        class="link"
        :to="{ name: 'app', params: { title: searchResult } }"
      >
        {{ searchResult }}
      </router-link>
    </div>
    <input type="submit" id="search-submit" />
  </form>
</template>

<script>
import { computed, reactive, toRefs } from "vue";

export default {
  props: {
    movieListNames: {
      type: Array,
    },
  },

  setup(props) {
    const pelin = reactive({
      query: "",
      handleSearch: computed(() => {
        let regex = new RegExp(pelin.query, "gi");
        return pelin.query.length
          ? props.movieListNames.filter((movie) => movie.match(regex))
          : "";
      }),
    });
    return { ...toRefs(pelin) };
  },
};
</script>

<style scoped lang="scss">
.search-container {
  margin-bottom: 20px;

  .search-box {
    transition: width 0.6s, border-radius 0.6s, background 0.6s, box-shadow 0.6s;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background: #fff;

    &:hover {
      color: white;
      background: #fff;
      box-shadow: 0 0 0 5px #37d9ac;
    }

    &:focus {
      transition: width 0.6s, border-radius 0.6s, background 0.6s;
      border: none;
      outline: none;
      box-shadow: none;
      padding-left: 15px;
      cursor: text;
      width: 300px;
      border-radius: auto;
      background: #fff;
      color: black;
    }

    &:not(:focus) {
      text-indent: -5000px;
    }
  }

  #search-submit {
    display: none;
  }

  .search-icon {
    position: relative;
    right: 30px;
    top: 7px;
    color: white;
    cursor: pointer;
  }

  .search-result {
    background: #fff;
    padding: 10px;

    .link {
      text-decoration: none;
      color: #37d9ac;
    }
  }
  .hidden {
    display: none;
  }
  .display {
    display: block;
  }
}
</style>
