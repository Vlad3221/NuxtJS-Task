<template>
  <div>
    <ArticlePopup
      @updateData="splicePost"
    />
    <ArticleTable
      :disablePrev="disablePrev"
      :disableNext="disableNext"
      :posts="posts"
      :pages="pages"
      :page="page"
      @updateData="splicePost"
    />
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>
