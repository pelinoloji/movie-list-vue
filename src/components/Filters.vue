<template>
  <div class="filter-container">
    <SearchBox />
    <FilterBox />
  </div>
</template>

<script>
import FilterBox from "../components/FilterBox.vue";
import SearchBox from "../components/SearchBox.vue";

export default {
  name: "Filters",
  components: { SearchBox, FilterBox },
};
</script>

<style scoped lang="scss">

.filter-container{
  flex: 2;
  margin-top: 120px;
  padding-right: 30px;
  
}

</style>