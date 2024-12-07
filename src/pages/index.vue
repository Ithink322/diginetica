<template>
  <div>
    <Header></Header>
    <main class="container">
      <SideBar></SideBar>
      <ProductsList></ProductsList>
    </main>
  </div>
</template>

<script>
import Header from "@/components/UI/Header.vue";
import ProductsList from "@/components/UI/ProductsList.vue";
import SideBar from "@/components/UI/SideBar.vue";

export default {
  name: "Catalog",
  components: { Header, ProductsList, SideBar },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 1rem;
}
/* 768px = 48em */
@media (min-width: 48em) {
  .container {
    padding: 0 1.563rem;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    display: flex;
    gap: 2.25rem;
    padding: 0.75rem 6.25rem;
  }
}
</style>
