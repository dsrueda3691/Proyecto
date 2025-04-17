<template>
  <div class="Body">
    <HeaderComponents />
    <main>
      <HomeOfertas />
      <OfertasGrid />
      <Oferta />
    </main>
    <FooterProyecto />
  </div>
</template>

<script>
import FooterProyecto from "@/components/Componentes+/FooterProyecto.vue";
import HeaderComponents from "@/components/Componentes+/HeaderComponents.vue";
import HomeOfertas from "@/components/PaginaOfertas/HomeOfertas.vue";
import Oferta from "@/components/PaginaOfertas/Oferta.vue";
import OfertasGrid from "@/components/PaginaOfertas/OfertasGrid.vue";

export default {
  name: "ProyectoView",
  components: {
    HeaderComponents,
    FooterProyecto,
    HomeOfertas,
    OfertasGrid,
    Oferta,
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

main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
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
