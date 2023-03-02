<script setup></script>

<template>
  <div>
    <h1>About</h1>
    <NuxtLink to="/">Späť</NuxtLink>
  </div>
  
  <div>
    <h2>Socialne siete</h2>
    <a href="https://www.instagram.com/adrian_zbur/" target="_blank"><img src="~/assets/ig.png" alt="ig"></a><div class="texts">Instagram</div><br>
    <a href="https://www.facebook.com/adrian.zbur/" target="_blank"><img src ="~/assets/fb.png" alt="fb"></a><div class="texts">Facebook</div> <br>
    <a href="https://open.spotify.com/user/wi4308mpry18jaufu2piglq7s?si=131f7781b3f64da6" target="_blank"><img src ="~/assets/spotify.png" alt="sp"></a><div class="texts">Spotify</div>
  </div>

    <div class="mapouter"><div class="gmap_canvas"><iframe width="750" height="350" id="gmap_canvas" 
    src="https://maps.google.com/maps?q=Kosice%20Nad%20Jazerom&t=&z=13&ie=UTF8&iwloc=&output=embed" 
    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br></div></div>
    
</template>



<style>

div{

  font-family: Georgia, 'Times New Roman', Times, serif;
  
}

img {
  width: 40px;

}

.texts {
  display: inline;
  margin-left: 15px;
  font-family: Arial, Helvetica, sans-serif;
}
.mapouter{
  padding-inline:20%;
  position:relative;
  text-align: left;
  height:350px;
  width:750px;

}

.gmap_canvas {
  
  overflow:hidden;
  background:none!important;
  height:350px;
  width:750px;}

</style>
