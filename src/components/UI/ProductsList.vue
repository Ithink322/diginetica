<template>
  <div class="content">
    <h1 class="content__title">Название категории</h1>
    <div class="content__products-list">
      <ProductCard
        v-for="product in products"
        :product="product"
        :key="product.id"
        :isUnavailable="product.availability === 'Out of Stock'"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/UI/ProductCard";
import products from "@/data/products.json";

export default {
  name: "ProductsList",
  components: { ProductCard },
  data() {
    return {
      products: products,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/app.scss";

.content {
  &__title {
    font-family: "PTSans Regular";
    font-size: 1.375rem;
    color: $--color-font-main;
    margin: 0.75rem 0 0.75rem 0.5rem;
  }
  &__products-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.75rem;
    row-gap: 1rem;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .content {
    &__products-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .content {
    &__products-list {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1.5rem;
      row-gap: 1.5rem;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .content {
    &__title {
      display: none;
    }
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
}
</style>
