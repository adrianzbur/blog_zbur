<script setup>
let articles = useArticles().articles.value;
console.log(articles)
let sportArticles = articles.filter(item => item.id < 4);
let modaArticles = articles.filter(item => item.id > 3 && item.id < 7);
let muzikaArticles = articles.filter(item => item.id > 6 && item.id < 10);
console.log(articles)
</script>

<template>
  <div class="text">
    <h1>Home</h1>
    <div>
      <NuxtLink to="/about">about</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/articles">articles</NuxtLink>
    </div>
    <div class="titles"> 
    <h2>
        Sport
    </h2>
    <div v-for="item of sportArticles" v-bind:key="item.id">
        <NuxtLink :to="{path:`/articles/${item.id}`, params:{id:item.id}}">
        {{ item.title }}
      </NuxtLink>
    
    </div>
    <h2>
        Spravy
    </h2>
    <div v-for="item of modaArticles" v-bind:key="item.id">
    <NuxtLink :to="{path:`/articles/${item.id}`, params:{id:item.id}}">
        {{ item.title }}
      </NuxtLink>    
      </div>
    <h2>
        Moda
    </h2>
    <div v-for="item of muzikaArticles" v-bind:key="item.id">
        <NuxtLink :to="{path:`/articles/${item.id}`, params:{id:item.id}}">
        {{ item.title }}
      </NuxtLink>
    </div>
    </div>
  </div>
</template>

<style scoped>

.titles {
    column-count: 3;
}

.text {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
</style>