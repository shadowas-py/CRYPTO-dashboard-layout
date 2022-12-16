<template>
  <div id="dashboard">
    <NavbarComponent />
    <main>
      <CurrentBalanceComponent />
      <SummaryComponent />
      <div id="main-data-container">
        <div id="main-data-tabs">
          <button class="tab-btn">Summary</button>
          <button class="tab-btn">Table</button>
          <button class="tab-btn">Charts</button>
          <button class="tab-btn">Reporting</button>
          <button class="tab-btn">Analysis</button>
        </div>
        <hr />
        <table id="main-data__table-container">
          <CurrencyQuotationItem v-for="i in 4" :key="i" />
        </table>
      </div>
    </main>
  </div>
</template>

<script setup>
import CurrencyQuotationItem from "@/components/CurrencyQuotationItem.vue";
import SummaryComponent from "@/components/SummaryComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import CurrentBalanceComponent from "@/components/CurrentBalanceComponent.vue";

// CONFIG
const axios = require("axios");

console.log(process.env);
const { VUE_APP_API_KEY } = process.env;
const options = {
  method: "GET",
  headers: {
    "X-CMC_PRO_API_KEY": VUE_APP_API_KEY,
    "Access-Control-Allow-Origin": "*",
  },
};
const LIMIT = 5;
const PROXY_CORS = "https://cors-anywhere.herokuapp.com/";
const SOURCE_URL = "https://pro-api.coinmarketcap.com/";
async function getDataFromAPI() {
  try {
    const response = await axios.get(
      `${PROXY_CORS}${SOURCE_URL}v1/cryptocurrency/map?sort=cmc_rank&limit=${LIMIT}`,
      // eslint-disable-next-line comma-dangle
      [options]
    );
    const { data } = response;
    console.log(data);
  } catch (e) {
    console.error(e);
  }
  console.log(this.data);
}

getDataFromAPI();
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/sf-pro-display");

$main-color: #ffffff;
$secondary-color: #f7f7f9;
$primary-btn-color: #7445fb;
$main-font-color: #0a041c;
$border-color: #ebebf3;
$main-inactive-color: #9896a1;
$increase-value-color: #2dc78f;
$decrease-value-color: #ea4d4d;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background: #1e1e1e;
  display: flex;
  justify-content: center;
}
h2 {
  font-size: 20px;
  height: 24px;
}
button {
  color: $secondary-color;
  border: none;
  cursor: pointer;
}

.btn {
  border-radius: 4px;
  height: 40px;
  padding: 8px 16px;
  margin-right: 8px;
  &--primary {
    @extend .btn;
    background: $primary-btn-color;
    color: $main-color;
  }
  &--secondary {
    @extend .btn;
    background: $main-color;
    color: $primary-btn-color;
    border: 1px solid $border-color;
  }
}

.opt-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 48px;
  aspect-ratio: 1/1;
  margin: 16px;
  background: $secondary-color;
  color: $main-inactive-color;
  margin: 8px;
  padding: 16px;
}

#dashboard {
  padding: 0 68px;
  background: $main-color;
  font-family: "SF Pro Display";
  display: flex;
  flex-wrap: wrap;
  width: 1176px;
  justify-content: center;
  nav {
    width: 1040px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-item {
      background: $secondary-color;
      border-radius: 8px;
      height: 48px;
      border: none;
      outline: none;
    }
    .search-field-container {
      background: $secondary-color;
      width: 232px;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .search-field {
        line-height: 24px;
        font-size: 14px;
        margin-left: 10px;
      }
    }
    .nav__button-container {
      display: flex;
      width: fit-content;
      height: max-content;
      .opt-btn {
        margin: 8px;
        padding: 16px;
      }
    }
  }
  main {
    background: $main-color;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    width: 1440px;
    height: 1000px;
    color: $main-font-color;
    // padding-left: 68px;
    > :first-child {
      margin-right: 32px;
    }
    > * {
      border-radius: 16px;
      padding: 32px;
    }
  }
  #summary-container {
    width: 499px;
    height: 336px;
  }

  #current-balance {
    width: 509px;
    height: 336px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    #current-balance__main-value {
      font-size: 56px;
      line-height: 56px;
      span {
        color: $main-inactive-color;
        font-weight: 300;
      }
    }
    #current-balance__main-value--extras {
      display: flex;
      color: $increase-value-color;
      font-size: 18px;
      margin-bottom: 72px;
      margin-top: 16px;
    }
  }

  #main-data-container {
    margin-top: 32px;
    overflow: hidden hidden;
    width: 1040px;
    height: 504px;
    background: $secondary-color;
    #main-data-tabs {
      width: 50%;
      line-height: 24px;
      .tab-btn {
        margin-right: 24px;
        padding-bottom: 11px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: $main-inactive-color;
        background-color: inherit;
      }
      .tab-btn:active {
        color: $main-font-color;
        padding-bottom: 7px;
        font-weight: 500;
        border-bottom: 4px solid #7445fb;
      }
      .tab-btn:hover {
        color: $main-font-color;
        padding-bottom: 7px;
        font-weight: 500;
        border-bottom: 4px solid #7445fb;
      }
    }
  }
  hr {
    color: $border-color;
    overflow-x: visible;
    width: 1008px;
  }
}

.default-container {
  background: $secondary-color;
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  > *:not(button) {
    width: 100%;
  }
  .default-component__header {
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: flex-start;
    justify-items: center;
    margin-bottom: 40px;
    .opt-btn {
      aspect-ratio: 2/1;
      margin: 0;
      padding: 0;
    }
  }
}

#main-data__table-container {
  width: 100%;
  overflow: hidden;
  .currency-quotation-item:first-of-type {
    margin-top: 32px;
  }
  .currency-quotation-item {
    position: relative;
    font-weight: 600;
    padding: 10px;
    font-size: 14px;
    display: table;
    width: 976px;
    height: 80px;
    background-color: $main-color;
    border: 1px solid $border-color;
    border-radius: 8px;
    margin: 8px 0;
    th,
    td {
      text-align: left;
      padding: 0 4px;
      height: min-content;
      white-space: nowrap;
    }
    th {
      color: $main-inactive-color;
      font-weight: 400;
    }
    &__logo-col {
      padding-right: 20px;
      width: 70px;
      .logo-frame {
        display: flex;
        width: 48px;
        height: 48px;
        border: 1px solid $border-color;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
        overflow: visible;
      }
    }
    &__col {
      width: 15%;
    }
    &__btn-col {
      width: 136px;
      // transform: translateY(-50%);
    }
    th.currency-quotation-item__chart-col {
      width: fit-content;
      text-align: center;
    }
  }
}

#hamburger-btn {
  position: relative;
  .hamburger-menu {
    position: absolute;
    min-width: 200px;
    background: $secondary-color;
    left: 0px;
    top: 0px;
    transform: translate(-75%, 25%);
    li {
      list-style: none;
      border: 1px solid black;
      height: 32px;
    }
  }
}
</style>
