<template>
  <div id="summary-container" class="default-container">
    <div class="default-component__header">
      <h2>Summary</h2>
      <button class="opt-btn">
        <img class="opt-icon" alt="more options icon" src="@/assets/dots-menu-icon.svg" />
      </button>
    </div>
    <div id="summary_main-chart"></div>
    <legend>
      <span id="current-balance__legend-item-container">
        <span class="legend-dot" id="current-balance__legend-dot-1"></span>
      </span>
      <span id="current-balance__legend-item-container">
        <span class="legend-dot" id="current-balance__legend-dot-2"></span>
      </span>
    </legend>
  </div>
</template>
