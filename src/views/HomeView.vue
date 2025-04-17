<template>


  
  <div class="body">
    <HeaderProyecto></HeaderProyecto>
    
    <HomeVideo></HomeVideo>
    <GameDestacado></GameDestacado>
    <GameHome></GameHome>
    
    <NewsHome></NewsHome>
    <FooterProyecto ></FooterProyecto>
  </div>
</template>

<script>
import FooterProyecto from "@/components/Componentes+/FooterProyecto.vue";
import HeaderProyecto from "@/components/Componentes+/HeaderProyecto.vue";
import GameHome from "@/components/PaginaInicio/GameHome.vue";
import NewsHome from "@/components/PaginaInicio/NewsHome.vue";
import HomeVideo from "@/components/PaginaInicio/HomeVideo.vue";
import GameDestacado from "@/components/PaginaInicio/GameDestacado.vue";



export default {
  name: "HomeView",
  components: {
    FooterProyecto,
    HeaderProyecto,
    GameHome,
    NewsHome,
    HomeVideo,
    GameDestacado,
    
  },
};
</script>
<style scoped>
.body {
  font-family: 'Roboto', sans-serif;
  background-color: #b7b4b4;
  color: #333333;

}







</style>
