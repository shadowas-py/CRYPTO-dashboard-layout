<template>
  <div id="current-balance" class="default-container">
    <div class="default-component__header">
      <h2>Current Balance</h2>
      <button class="opt-btn">
        <img class="opt-icon" alt="more options icon" src="@/assets/dots-menu-icon.svg" />
      </button>
    </div>
    <p id="current-balance__main-value">
      <span>$</span>
      <strong>21 432.23</strong>
    </p>
    <div id="current-balance__main-value--extras">
      <img class="trend-description" alt="." />
      <p class="trend-description">12% vs last month</p>
    </div>
    <div class="current-balance__button-container">
      <button class="btn--primary">Quick Invest</button>
      <button class="btn--secondary">Show Report</button>
    </div>
  </div>
</template>
