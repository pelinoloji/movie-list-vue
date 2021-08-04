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
          <div class="movie-genre">
            {{
              genreIds
                .filter((a) => movie.genre_ids.includes(a.id)) // put this in a computed
                .map((x) => x.name)
                .join(" | ")
            }}
          </div>
          <div class="movie-vote">{{ movie.vote_average }}</div>
          <div class="movie-overview">{{ movie.overview }}</div>
          <div class="movie-release-date">{{ movie.release_date }}</div>
          <button class="button-primary">View details</button>
        </div>
      </div>
      <div class="pagination">
        <span class="page-item">
          <button
            type="button"
            class="pagination-number"
            @click="previousPage()"
          >
            Previous
          </button>
        </span>
        <span class="page-item">
          <button type="button" class="pagination-number">{{ page }}</button>
        </span>
        <span class="page-item">
          <button type="button" class="pagination-number" @click="nextPage()">
            Next
          </button>
        </span>
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

// TODO => pagination
// TODO => Filter

export default {
  //use destructuring instead of data
  components: { SearchBox, FilterBox },
  setup() {
    onMounted(() => {
      getMovies();
      getGenres();
    });
    const pelin = reactive({
      movieList: [],
      genres: [],
      totalPage: null,
      page: 0,
      movieListNames: computed(() => {
        return pelin.movieList.map((movie) => movie.title);
      }),
      genreIds: computed(() => {
        const genres = pelin.genres.map((genreId) => genreId);
        return genres;
      }),
    });

    function getMovies() {
      try {
        const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=248dc9b40688a8465ea9fe1b81ae549c`; //todo use process.env
        fetch(`${baseUrl}`)
          .then((response) => response.json())
          .then(({ results, total_pages, page }) => {
            pelin.movieList = results;
            pelin.totalPage = total_pages;
            pelin.page = page;
          });
      } catch (error) {
        console.log(error);
      }
    }

    function getGenres() {
      try {
        const baseUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=248dc9b40688a8465ea9fe1b81ae549c`; //todo use process.env
        fetch(`${baseUrl}`)
          .then((response) => response.json())
          .then(({ genres }) => {
            pelin.genres = genres;
          });
      } catch (error) {
        console.log(error);
      }
    }

    function nextPage() {
      pelin.page < pelin.totalPage && pelin.page++;
    }
    function previousPage() {
      pelin.page > 1 && pelin.page--;
    }

    return { ...toRefs(pelin), getMovies, getGenres, nextPage, previousPage };
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
      border-radius: 5px;

      .movie-image {
        flex: 1;
        img {
          width: 70%;
        }
      }
      .movie-details {
        position: relative;
        flex: 2;
        padding-right: 30px;

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
        .button-primary {
          margin-top: 80px;
          background-color: #37d9ac;
          cursor: pointer;
          border-radius: 5px;
          border: none;
          padding: 10px;
          font-size: 16px;
          &:hover {
            background-color: #34f3;
          }
        }
      }
    }
    .pagination {
      text-align: center;

      .pagination-number {
        color: #37d9ac;
        background-color: transparent;
        border: 1px solid #37d9ac;
        &:hover {
          background-color: #37d9ac;
          color: #fff;
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
