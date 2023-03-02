<template>
  <div>
    <header>
      <NuxtLink to="/"><img class="img" src="~/assets/adologo.jpg" alt="Logo">
      </NuxtLink>
      <div class="nav"><NuxtLink to="/articles">
        <div class="bar">Article</div>
      </NuxtLink>
      </div>
      <div class="nav"><NuxtLink to="/about">
        <div class="bar">Contact</div> 
      </NuxtLink>
      </div>
  
    </header>
    <NuxtPage/>
    <footer><div>Adrian Zbur</div>
    
    </footer>
  </div>
</template>

<style>

.img {
  width: 70px;

}

.nav {
  text-align: center;
  margin-left: 50px;
  display: inline-block;
}

.bar {
  display: inline-block;
  background-color: #00d0ff;
  color: rgb(0, 0, 0);
  padding: 10px 12px;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.bar:hover {
  background-color: #00f2ff3e;
}


footer {
  text-align: center;
  position:absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
}

button {
  background-color: #f2f2f2;
  border: none;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
}

.button:hover {
  background-color: #ddd;
}

.button:active {
  background-color: #ccc;
  box-shadow: none;
}

</style>
  
