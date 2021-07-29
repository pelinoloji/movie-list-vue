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
          <div class="movie-genre">{{ genreIds.filter((a)=>movie.genre_ids.includes(a.id)).map(x=>x.name).join(' | ') }}</div>
          <div class="movie-vote">{{ movie.vote_average }}</div>
          <div class="movie-overview">{{ movie.overview }}</div>
          <div class="movie-release-date">{{ movie.release_date }}</div>
        </div>
      </div>
    </div>
    <div class="filter-container">
      <SearchBox :movieListNames="movieListNames" />
      <FilterBox :movieList="movieList" />
    </div>
  </div>
</template>

<script>
import SearchBox from "./SearchBox.vue";
import FilterBox from "./FilterBox.vue";
import { computed, reactive, onMounted, toRefs } from "vue";

export default {
  components: { SearchBox, FilterBox },
  setup() {
    onMounted(() => {
      getMovies();
      getGenres();
    });
    const pelin = reactive({
      movieList: [],
      genres: [],
      movieListNames: computed(() => {
        //bu ne yapiyor yav
        return pelin.movieList.map((movie) => (movie = movie.title));
      }),
      genreIds: computed(() => {
        const genres = pelin.genres.map((genreId) => genreId);
        // const movieGenreArr = pelin.movieList.map((movie) => movie.genre_ids.map((a) => a));

        // console.log(genres.map(a=>a), "genre");
        // console.log(movieGenreArr, "movieGenreArr");

        return genres;
      }),
    });

    function getMovies() {
      try {
        const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=248dc9b40688a8465ea9fe1b81ae549c`; //todo use process.env
        fetch(`${baseUrl}`)
          .then((response) => response.json())
          .then((data) => {
            pelin.movieList = data.results;
          });
      } catch (error) {
        console.log(error);
      }
    }

    function getGenres() {
      try {
        const baseUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=248dc9b40688a8465ea9fe1b81ae549c`;
        fetch(`${baseUrl}`)
          .then((response) => response.json())
          .then((data) => {
            pelin.genres = data.genres;
          });
      } catch (error) {
        console.log(error);
      }
    }

    return { ...toRefs(pelin), getMovies, getGenres };
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
      width: 800px;

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
          color: #37d9ac;
        }
        .movie-vote {
          position: absolute;
          right: 0;
          top: 0;
          padding: 5px;
          border-radius: 5px;
          background-color: #37d9ac;
        }
        .movie-overview {
          margin: 10px 0px;
        }

        .movie-release-date {
          color: #37d9ac;
        }
      }
    }
  }
  .filter-container {
    flex: 2;
    margin-top: 120px;
    padding-right: 30px;
  }
}
</style>
