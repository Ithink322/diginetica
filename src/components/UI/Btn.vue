<template>
  <button
    class="btn"
    :type="btnType"
    :style="{
      border: border,
    }"
    :class="{ 'btn--unavailable': isUnavailable }"
  >
    <span class="btn__text">{{ content }}</span>
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    btnType: {
      type: String,
      required: false,
    },
    border: {
      type: String,
      required: false,
    },
    fontColor: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
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

.btn {
  @include btn;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  width: 75px;
  height: 38px;
  color: #7397f5;

  &__text {
    font-family: "PTSans Bold";
    font-size: 0.875rem;
  }
  &--unavailable {
    border: $--color-border;
    color: $--color-font-second;
    width: fit-content;
    height: auto;
  }
}
/* 419px = 26.188em */
@media (min-width: 26.188em) {
  .btn {
    &--unavailable {
      height: 38px;
      width: 100%;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .btn {
    transition: all 0.3s ease;

    &:hover {
      background-color: $--color-brand;
      color: $--color-white;
    }
  }
}
</style>
