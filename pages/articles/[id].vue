<script setup>
//const save = useSave().articles.value;
const articles = useArticles().articles.value;
const {deleteById} = useArticles();
//const {saveById} = useSave();
const id = useRoute().params.id;
</script>

<template>
  <div>
    <pre>
      {{articles.filter((item)=>item.id==id)[0].title}}
      {{articles.filter((item)=>item.id==id)[0].content}}
    </pre>
    <div class="button1" v-on:click="deleteById(id)">Delete</div><br>
    <div class="button2" v-on:click="saveById(id)">Save</div>
  </div>
</template>

<style>
.button1 {
  display: inline-block;
  padding: 12px 24px;
  margin: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: #00bcbf;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button1:hover {
  background-color: #6b6b6b;
  
}

.button2 {
  display: inline-block;
  padding: 12px 24px;
  margin: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: #00091a;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button2:hover {
  background-color: #6b6b6b;
  
}

</style>