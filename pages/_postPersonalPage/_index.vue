<template>
  <div>
    <div v-for="dats in configTable.filter(dats => dats.id == Number($route.params.index))" :key="dats.id">
      <h3 class="article-private__title">Тема: {{ dats.themesTitle }}</h3>
      <div class="container">
        <span class="grey">Автор:</span>
        <span>{{ dats.name }}</span>
      </div>
      <div class="container">
        <span class="grey">({{ dats.mail }})</span>
      </div>
      <hr>
      <div class="container">
        <span>{{ dats.themesText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>
