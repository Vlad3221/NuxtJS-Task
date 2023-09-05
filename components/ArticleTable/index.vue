<template>
  <div>
    <div class="d-flex align-items-center justify-content-center">
      <div class="article-table">
        <h3>Список актуальных статей</h3>

        <hr>

        <div class="article-state d-block" v-for="table in posts" :key="table.id">
          <div>
            <span>{{table.name}}</span>
            <span class="article_state--mail">({{table.mail}})</span>
          </div>
          <div>
            <span class="article-state__text-block">
              <span class="grey">Тема: «</span>
              {{table.themesTitle}}
              <span class="grey">»</span>
            </span>
          </div>
          <nuxt-link :to="'/postPersonalPage/' + table.id" class="article__information-link">Подробнее</nuxt-link>
        </div>

        <hr>

        <div class="article__navigation">
          <button class="prev" :disabled="disablePrev" @click="goPrev()">Назад</button>
          <div class="d-flex">
            <nuxt-link class="article-pagination__link" v-for="numPage in pages" :to="'/' + numPage">{{numPage}}</nuxt-link>
          </div>
          <button class="next" :disabled="disableNext" @click="goNext()" >Далее</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>
