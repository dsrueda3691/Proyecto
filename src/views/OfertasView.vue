<template>
  <div class="Body">
    <HeaderProyecto />
  
 
      <OfertaMain />
      <DescuentoOfertas />
      <OfertasGrid />
      <Oferta />
      
 
    <FooterProyecto />
  </div>
</template>

<script>
import FooterProyecto from "@/components/Componentes+/FooterProyecto.vue";
import HeaderProyecto from "@/components/Componentes+/HeaderProyecto.vue";

import DescuentoOfertas from "@/components/PaginaOfertas/DescuentoOfertas.vue";

import Oferta from "@/components/PaginaOfertas/Oferta.vue";
import OfertaMain from "@/components/PaginaOfertas/OfertaMain.vue";
import OfertasGrid from "@/components/PaginaOfertas/OfertasGrid.vue";


export default {
  name: "ProyectoView",
  components: {
    HeaderProyecto,
    
    FooterProyecto,

    OfertasGrid,
    Oferta,
    DescuentoOfertas,
    OfertaMain,
  },
};
</script>

<style scoped>
.Body {
  font-family: "Roboto", sans-serif;
  background-color: #f0f0f0;
  color: #333;
  max-width: 100%; 
}



@media (max-width: 768px) {
  main {
    padding: 0 1rem;
    margin: 1rem auto;
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
