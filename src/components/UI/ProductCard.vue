<template>
  <div
    class="product-card"
    :class="{ 'product-card--unavailable': isUnavailable }"
  >
    <div class="product-card__container">
      <div class="product-card__status">
        {{ product.status }}
        <img :src="product.statusImg" alt="status icon" />
      </div>
      <img :src="product.hero" alt="product hero" class="product-card__hero" />
      <div class="product-card__discount">{{ product.discount }}</div>
    </div>
    <div class="product-card__body">
      <div class="product-card__info">
        <span class="product-card__brand">{{ product.brand }}</span>
        <p class="product-card__desc">{{ product.desc }}</p>
      </div>
      <div class="product-card__prices">
        <span class="product-card__current-price">{{
          product.currentPrice
        }}</span>
        <span class="product-card__previous-price">{{
          product.previousPrice
        }}</span>
      </div>
      <Btn
        :btnType="'button'"
        :border="isUnavailable ? '1px solid gray' : '1px solid #73aff4'"
        :content="isUnavailable ? 'Сообщить о поступлении' : 'Купить'"
        :isUnavailable="isUnavailable"
      ></Btn>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/UI/Btn.vue";

export default {
  name: "ProductCard",
  components: { Btn },
  props: {
    product: {
      type: Object,
      required: true,
    },
    isUnavailable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/app.scss";

.product-card {
  @include flex-column;
  gap: 0.75rem;

  &--unavailable {
    opacity: 50%;
    pointer-events: none;
  }
  &__container {
    position: relative;
    @include flex-centered;
    background-color: $--color-card-hero-bgcolor;
    padding: 0.75rem;
    height: 200px;
    cursor: pointer;
  }
  &__status {
    position: absolute;
    @include flex-centered;
    gap: 0.25rem;
    width: 112px;
    height: 32px;
    background-color: $--color-white;
    border: 1px solid $--color-border;
    top: 0.75rem;
    left: 0.75rem;
    border-radius: 4px;
    font-family: "PTSans Regular";
    font-size: 0.875rem;
  }
  &__discount {
    position: absolute;
    background-color: $--color-brand;
    border-radius: 4px;
    padding: 0.375rem 0.625rem;
    width: fit-content;
    left: 0.75rem;
    bottom: 0.75rem;
    font-family: "PTSans Bold";
    font-size: 0.875rem;
    color: $--color-white;
  }
  &__body {
    @include flex-column;
    gap: 0.75rem;
  }
  &__info {
    @include flex-column;
    gap: 0.5rem;
    cursor: pointer;
  }
  &__brand {
    font-family: "PTSans Regular";
    font-size: 0.875rem;
    color: $--color-font-second;
  }
  &__desc {
    font-family: "PTSans Regular";
    font-size: 0.875rem;
    color: $--color-font-main;
    transition: color 0.3s ease;
  }
  &__prices {
    @include flex-align;
    gap: 0.5rem;
  }
  &__current-price {
    font-family: "PTSans Bold";
    color: $--color-font-main;
  }
  &__previous-price {
    font-family: "PTSans Regular";
    font-size: 0.75rem;
    color: $--color-font-second;
    text-decoration: line-through;
  }
}
.product-card__info:hover .product-card__desc {
  color: $--color-font-hover;
}
</style>
