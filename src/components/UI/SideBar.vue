<template>
  <aside class="sidebar">
    <div class="sidebar__categories">
      <button class="sidebar__category-btn" @click="toggleCategoryList">
        <span class="sidebar__category-name">Название категории</span>
        <span class="sidebar__category-count">3</span>
      </button>
      <div class="sidebar__category-list sidebar__category-list--is-open">
        <div
          v-show="isCategoryListOpen"
          class="sidebar__category-item"
          v-for="(category, index) in categories"
          :key="index"
        >
          <span class="sidebar__category-name">{{ category.name }}</span>
          <span class="sidebar__category-count">{{ category.count }}</span>
        </div>
      </div>
    </div>
    <div class="sidebar__prices-slider-range">
      <span class="sidebar__prices-title">Цена</span>
      <div class="sidebar__slider-range-body">
        <div class="sidebar__slider-field-container">
          <span class="sidebar__slider-range-label">от</span>
          <input
            type="number"
            placeholder="5 500 ₽"
            class="sidebar__slider-range-field"
          />
        </div>
        <div class="sidebar__slider-range-border"></div>
        <div class="sidebar__slider-field-container">
          <span class="sidebar__slider-range-label">от</span>
          <input
            type="number"
            placeholder="5 500 ₽"
            class="sidebar__slider-range-field"
          />
        </div>
      </div>
    </div>
    <div class="sidebar__filters">
      <div class="sidebar__filters-body">
        <span class="sidebar__filters-title">Бренд</span>
        <button class="sidebar__filters-reset-btn">Очистить</button>
      </div>
      <div class="sidebar__filters-field-body">
        <img
          class="sidebar__filters-search-icon"
          src="/imgs/brand-search-icon.svg"
          alt="search icon"
        />
        <input type="text" placeholder="Поиск" class="sidebar__filters-field" />
      </div>
      <div class="sidebar__filters-list">
        <div
          v-for="(brand, index) in brands"
          :key="brand.name + '-' + index"
          class="sidebar__filters-item"
        >
          <div class="sidebar__filters-attribute-body">
            <input
              type="checkbox"
              class="sidebar__filters-checkbox"
              :value="brand.name"
              :id="'sidebar__filters-checkbox-' + index"
            />
            <label
              class="sidebar__filters-name"
              :for="'sidebar__filters-checkbox-' + index"
              >{{ brand.name }}</label
            >
          </div>
          <span class="sidebar__filters-count">{{ brand.count }}</span>
        </div>
      </div>
    </div>
    <span class="sidebar__filters-title sidebar__filters-title--centered"
      >Размер</span
    >
    <div class="sidebar__filters-list">
      <div
        v-for="(size, index) in sizes"
        :key="size.name + '-' + index"
        class="sidebar__filters-item"
      >
        <div class="sidebar__filters-attribute-body">
          <input
            type="checkbox"
            class="sidebar__filters-checkbox"
            :value="size.name"
            :id="'sidebar__filters-sizes-checkbox-' + index"
          />
          <label
            class="sidebar__filters-name"
            :for="'sidebar__filters-sizes-checkbox-' + index"
            >{{ size.name }}</label
          >
        </div>
        <span class="sidebar__filters-count">{{ size.count }}</span>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isCategoryListOpen: false,
      categories: [
        { name: "Название категории", count: 3 },
        { name: "Название категории", count: 3 },
        { name: "Название категории", count: 3 },
      ],
      brands: [
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
      ],
      selectedBrands: [],
      sizes: [
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
        { name: "Атрибут", count: 3 },
      ],
      selectedSizes: [],
    };
  },
  methods: {
    toggleCategoryList() {
      this.isCategoryListOpen = !this.isCategoryListOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/app.scss";

.sidebar {
  display: none;
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    &__category-btn {
      @include btn;
      gap: 7.813rem;
      width: 280px;
      white-space: nowrap;
      padding: 0.438rem 1rem 0.438rem 0.5rem;
    }
    &__category-item {
      display: flex;
      gap: 6.313rem;
      white-space: nowrap;
      padding: 0.438rem 1rem 0.438rem 2rem;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: $--color-font-bg;
      }
    }
    &__category-name {
      font-family: "PTSans Regular";
      font-size: 0.875rem;
      color: $--color-font-main;
    }
    &__category-count {
      font-family: "PTSans Regular";
      font-size: 0.75rem;
      color: $--color-font-second;
    }
    &__prices-title {
      display: block;
      text-align: center;
      font-family: "PTSans Bold";
      color: $--color-font-main;
      margin-bottom: 1rem;
    }
    &__slider-range-body {
      @include flex-centered;
      gap: 1rem;
    }
    &__slider-field-container {
      position: relative;
    }
    &__slider-range-label {
      font-family: "PTSans Regular";
      font-size: 0.75rem;
      color: $--color-font-second;
      position: absolute;
      left: 0.6rem;
      top: 50%;
      transform: translateY(-50%);
    }
    &__slider-range-field {
      width: 119px;
      height: 36px;
      border-radius: 4px;
      padding: 0.625rem 0 0.625rem 1.625rem;
      border: 1px solid $--color-border;
      outline: none;

      &::placeholder {
        font-family: "PTSans Regular";
        font-size: 0.875rem;
        color: $--color-font-main;
      }
      &[type="number"] {
        -moz-appearance: textfield;
      }
      &[type="number"]::-webkit-inner-spin-button,
      &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }
    }
    &__slider-range-border {
      width: 10px;
      border: 1px solid $--color-border;
    }
    &__filters {
      @include flex-column;
      gap: 1rem;
    }
    &__filters-body {
      display: flex;
      align-items: end;
      justify-content: space-between;
    }
    &__filters-title {
      font-family: "PTSans Bold";
      color: $--color-font-main;

      &--centered {
        text-align: center;
        margin-bottom: -0.75rem;
      }
    }
    &__filters-reset-btn {
      @include btn;
      font-family: "PTSans Regular";
      font-size: 0.75rem;
      color: $--color-font-second;
      text-decoration: underline;
    }
    &__filters-field-body {
      @include flex-align;
    }
    &__filters-search-icon {
      position: absolute;
      width: 16px;
      height: 16px;
      margin-left: 0.75rem;
    }
    &__filters-field {
      @include input;
      border: 1px solid $--color-border;
      border-radius: 4px;
      padding: 0.625rem 0.75rem 0.625rem 2.25rem;
      width: 100%;
      font-family: "PTSans Regular";
      font-size: 0.875rem;
      color: $--color-font-main;

      &::placeholder {
        color: $--color-font-second;
      }
    }
    &__filters-list {
      @include flex-column;
      gap: 0.75rem;
      max-height: 180px;
      overflow-y: hidden;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: $--color-icons;
        border-radius: 10px;
      }
    }
    &__filters-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 0.813rem;
    }
    &__filters-attribute-body {
      @include flex-centered;
      gap: 0.75rem;
    }
    &__filters-checkbox[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 20px;
      height: 20px;
      border: 1px solid $--color-border;
      border-radius: 3px;
      margin: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      &[type="checkbox"]:checked {
        border: none;
      }
      &[type="checkbox"]:checked:before {
        content: "";
        background: url("@/assets/tick.svg") no-repeat center center;
        display: flex;
        width: 100%;
        height: 100%;
        color: #fff;
        background-color: $--color-brand;
        border-radius: 3px;
        font-size: 1rem;
        text-align: center;
      }
    }
    &__filters-name {
      font-family: "PTSans Regular";
      font-size: 0.875rem;
      color: $--color-font-main;
      cursor: pointer;
    }
    &__filters-count {
      font-family: "PTSans Regular";
      font-size: 0.75rem;
      color: $--color-font-second;
    }
  }
}
</style>
