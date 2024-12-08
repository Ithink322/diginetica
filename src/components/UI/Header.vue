<template>
  <header class="header">
    <div class="header__content">
      <button class="header__go-back-btn">
        <img src="/imgs/ArrowLeft.svg" alt="Arrow Left" />
      </button>
      <div class="header__container">
        <img class="header__logo" src="/imgs/logo.svg" alt="logo" />
        <button class="header__catalog-btn">Каталог</button>
      </div>
      <form @submit.prevent class="header__search-form">
        <div class="header__search-icon-body">
          <img
            class="header__search-icon"
            src="/imgs/search-icon.svg"
            alt="search icon"
          />
        </div>
        <input
          v-model="inputValue"
          @focus="isActive = true"
          @blur="isActive = false"
          type="text"
          :placeholder="placeholder"
          class="header__search"
        />
        <div
          @mousedown.prevent
          class="header__body"
          :class="{ 'header__body--active': isActive }"
        >
          <button @click="clearInput" class="header__close-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711Z"
                  fill="#333333"
                />
              </g>
            </svg>
          </button>
          <button class="header__search-btn">Найти</button>
        </div>
      </form>
      <ul class="header__list">
        <li class="header__title"><a href="#">Информация о компании</a></li>
        <li class="header__title"><a href="#">Контакты</a></li>
        <li class="header__title"><a href="#">Полезные ссылки</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      placeholder:
        window.innerWidth < 768 ? "Запрос" : "Поиск по 100 000 товаров",
      isActive: false,
      inputValue: "",
    };
  },
  methods: {
    updatePlaceholder() {
      this.placeholder =
        window.innerWidth < 768 ? "Запрос" : "Поиск по 100 000 товаров";
    },
    clearInput() {
      this.inputValue = "";
    },
  },
  mounted() {
    window.addEventListener("resize", this.updatePlaceholder);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updatePlaceholder);
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/app.scss";

.header {
  padding: 0 1rem;

  &__content {
    @include flex-align;
    gap: 1rem;
  }
  &__go-back-btn {
    @include btn;
    width: 20px;
    height: 20px;
  }
  &__search-form {
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid $--color-border;
    padding: 0.5rem 0 0.375rem 0;
    width: 100%;
  }
  &__search-icon-body,
  &__catalog-btn,
  &__logo {
    display: none;
  }
  &__search {
    @include input;
    font-family: "Inter Regular";
    font-size: 1rem;
    width: 100%;
  }
  &__body {
    display: flex;
    gap: 1rem;
  }
  &__close-btn {
    @include btn;
  }
  &__search-btn {
    @include btn;
    background-color: $--color-brand;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    height: 38px;
    font-family: "PTSans Regular";
    font-size: 1rem;
    color: $--color-white;
  }
  &__list {
    display: none;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .header {
    padding: 0.75rem 1.563rem;

    &__content {
      gap: 1.5rem;
    }
    &__go-back-btn {
      display: none;
    }
    &__container {
      display: flex;
      gap: 0.5rem;
    }
    &__logo {
      display: block;
    }
    &__catalog-btn {
      @include btn;
      padding: 1.5rem 0.969rem;
      border: 1px solid $--color-border-w-radius;
      border-radius: 8px;
      width: 104px;
      height: 48px;
      font-family: "Inter Medium";
      font-size: 0.875rem;
      color: $--color-black;
    }
    &__search-form {
      align-items: center;
      border: 1px solid $--color-border-w-radius;
      border-bottom: 1px solid $--color-border-w-radius;
      gap: 0.5rem;
      padding: 0.75rem 0.25rem 0.75rem 1rem;
      border-radius: 10px;
      height: 48px;
    }
    &__search-icon-body {
      @include flex-centered;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
    &__search-icon {
      width: 17px;
      height: 17px;
    }
    &__body {
      display: none;
      gap: 0.5rem;

      &--active {
        display: flex;
      }
    }
  }
}
/* 1200px = 75em */
@media (min-width: 75em) {
  .header {
    &__list {
      @include ul;
      display: flex;
      gap: 1.25rem;
    }
    &__title {
      font-family: "Inter Regular";
      font-size: 0.875rem;
      white-space: nowrap;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .header {
    padding: 0.75rem 8rem;

    &__catalog-btn {
      transition: all 0.3s ease;

      &:hover {
        background-color: $--color-brand;
        color: $--color-white;
      }
    }
    &__close-btn {
      svg:hover g {
        transition: opacity 0.3s ease;
        opacity: 1;
      }
    }
    &__search-btn {
      transition: background-color 0.3s ease;

      &:hover {
        background-color: $--color-font-hover;
      }
    }
    &__list {
      li a {
        transition: color 0.3s ease;

        &:hover {
          color: $--color-font-hover;
        }
      }
    }
  }
}
</style>
