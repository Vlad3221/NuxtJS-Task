<template>
  <div>
    <div class="article">
      <button class="article__create-article-button" @click="openPopup = true">Создать статью</button>
    </div>

    <div class="admin-article d-flex align-items-center justify-content-center" v-if="underСonsideration.length > 0">
      <div class="article-table red">
        <h3>Список статей на рассмотрении администрации</h3>
        <hr>

        <div class="article-state adminState d-block red" v-for="table in underСonsideration" :key="table.id">
          <div>
            <span>{{table.name}}</span>
            <span class="article_state--mail">({{table.mail}})</span>
          </div>
          <div>
            <span class="article-state__text-block">
              <span class="grey">Тема: «</span>
              {{table.themesTitle}}
              <span class="grey">»</span>
              <span class="grey">Содержание: «</span>
                <span>{{table.themesText}}</span>
              <span class="grey">»</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="article__popup-sceleton" :class="{open: openPopup}">
      <div class="article__popup-window">
        <div class="article__popup-header">
          <h4 class="article__popup-title">Создание статьи</h4>
          <button class="article__popup-button-close" @click="openPopup = false">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="article__popup-content">
          <form v-on:submit.prevent="addNewTodo()">
            <input type="email" name="mail" v-model="mail" placeholder="Введите Ваш @mail">
            <input type="text" name="userName" v-model="userName" placeholder="Введите Ваше имя">
            <input type="text" name="theme" v-model="theme" placeholder="Введите тему статьи">
            <textarea name="details" rows="7" v-model="details" placeholder="Введите дополнительную информацию"></textarea>
            <button class="article__create-article-button">Создать</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>
