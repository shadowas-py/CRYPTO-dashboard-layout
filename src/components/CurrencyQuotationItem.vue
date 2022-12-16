<template>
  <tbody class="currency-quotation-item">
    <tr>
      <th rowspan="2" class="currency-quotation-item__logo-col">
        <span class="logo-frame">
          <img src="@/assets/Bitcoin.png" alt="Logo" />
        </span>
      </th>
      <th class="currency-quotation-item__col">BTC</th>
      <th class="currency-quotation-item__col">Price</th>
      <th class="currency-quotation-item__col">Change</th>
      <th class="currency-quotation-item__chart-col chart" rowspan="2">Chart...</th>
      <th class="currency-quotation-item__btn-col" rowspan="2">
        <button class="btn--secondary">Sell</button>
        <button class="btn--primary">Buy</button>
      </th>
    </tr>
    <tr>
      <td>Bitcoin</td>
      <td>100</td>
      <td>+2%</td>
    </tr>
  </tbody>
</template>

<script setup></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// $currency-quotation-item-height: 80px;
</style>
