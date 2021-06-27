<template>
  <div class="container">
    <div class="card-container">
      <h1>Movie List</h1>
      <div class="card" v-for="movie in movieList" :key="movie.id">
        <div class="movie-image">
          <img
            class="movie-img"
            :src="`https://www.themoviedb.org/t/p/w1280/${movie.poster_path}`"
            :alt="`${movie.title} poster`"
          />
        </div>
        <div class="movie-details">
          <div class="movie-title">{{ movie.title }}</div>
          <div class="movie-genre">{{ movie.genre_ids }}</div>
          <div class="movie-vote">{{ movie.vote_average }}</div>
          <div class="movie-overview">{{ movie.overview }}</div>
          <div class="movie-release-date">{{ movie.release_date }}</div>
        </div>
      </div>
    </div>
    <div>
    <SearchBox />
    <FilterBox :movieList="movieList"/>
    </div>
  </div>
</template>

<script>
import SearchBox from "./SearchBox.vue";
import FilterBox from "./FilterBox.vue";
export default {
  components: { SearchBox, FilterBox },
  data() {
    return {
      movieList: [],
      // movie: [],
    };
  },
  mounted() {
    try {
      const apiKey = "248dc9b40688a8465ea9fe1b81ae549c";
      const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
      fetch(`${baseUrl}`)
        .then((response) => response.json())
        .then((data) => {
          this.movieList = data.results;
          console.log(data.results);
        });
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex: 5;
  background-color: #f2f2f4;
  position: relative;

  .card-container {
    flex: 2;
    padding: 0 40px;

    h1 {
      padding: 20px 0px;
    }
    .card {
      margin-bottom: 30px;
      padding: 20px;
      display: flex;
      background-color: white;

      .movie-image {
        flex: 1;
        img {
          width: 70%;
        }
      }
      .movie-details {
        position: relative;
        flex: 2;
        .movie-title {
          font-size: 25px;
          font-weight: bold;
        }
        .movie-genre {
          margin: 10px 0px;
          color: #dff43d;
        }
        .movie-vote {
          position: absolute;
          right: 0;
          top: 0;
          padding: 5px;
          border-radius: 5px;
          background-color: #dff43d;
        }
        .movie-overview {
          margin: 10px 0px;
        }

        .movie-release-date {
          color: #dff43d;
        }
      }
    }
  }
}
</style>
