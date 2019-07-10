<template>
  <div>
    <h1>Vuex Module Decorators Test</h1>
    <pre><code>{{ posts }}</code></pre>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "nuxt-property-decorator";
import { Post } from "~/store";

@Component
export default class HomePage extends Vue {
  get posts() {
    return Post.list$getter;
  }

  fetch() {
    // console.log(Post);
    Post.list$fetch();
  }
}
</script>
