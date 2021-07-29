<template>
  <div class="sidebar">
    <div class="sidebar-item">
      <div class="sidebar-title">Watched</div>
      <h4>Movies</h4>
    </div>
    <div class="sidebar-item">
      <div class="sidebar-title">Saved</div>
      <h4>Movies</h4>
    </div>
    <div class="sidebar-item">
      <div class="sidebar-title">Favorites</div>
      <h4>Movies</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss">
.sidebar {
  flex: 1;
  padding: 20px;
  color: white;
  background-color: #2d283d;

  .sidebar-item {
    margin: 50px 0px;
    .sidebar-title {
      border-bottom: 1px solid lightgrey;
      padding-bottom: 10px;
      font-size: 24px;
    }
  }
}
</style>