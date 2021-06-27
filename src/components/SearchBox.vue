<template>
  <div class="search-box-container">
    <div class="search-box">
      <div class="search">{Add icon} Search</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
 
};
</script>

<style scoped lang="scss">

.search-box-container {
  flex: 1;
  margin-top: 120px;
  padding-right: 30px;

  .search-box {
    padding: 40px 0px;
    background-color: white;

    .search{
      color:#dff43d;
      border-bottom: 1px solid #dff43d;
      margin: 0 20px;
      font-size:20px;
    }
  }
}
</style>