<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <nav>
    <form class="search-form">
      <div class="search-field-container nav-item">
        <img src="@/assets/search-icon.jpg" alt="search icon" class="search-icon" />
        <input
          class="search-field nav-item"
          type="search"
          placeholder="Search"
          aria-label="Write what you search for"
        />
      </div>
    </form>
    <div class="nav__button-container">
      <button id="notification-btn" class="opt-btn nav-item">
        <img class="opt-icon" alt="notification icon" src="@/assets/alarm-bell-icon.svg" />
      </button>
      <button id="hamburger-btn" class="opt-btn nav-item" @click="toggleHamburger">
        <img class="opt-icon" alt="hamburger menu icon" src="@/assets/hamburger-menu-icon.svg" />
        <ul v-show="isHamburgerVisible" class="hamburger-menu">
          <li class="hamburget-item" v-for="i in 5" :key="i">Element {i}</li>
        </ul>
      </button>
    </div>
  </nav>
</template>

<script setup>
// eslint-disable-next-line quotes
import { ref } from "vue";

const isHamburgerVisible = ref(false);

function toggleHamburger() {
  isHamburgerVisible.value = !isHamburgerVisible.value;
}
</script>
