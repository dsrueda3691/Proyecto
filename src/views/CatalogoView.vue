<template>
  <div class="body">
    <HeaderProyecto></HeaderProyecto>
    <OfertaMain></OfertaMain>
    <CatalogoComponent></CatalogoComponent>
    <MultiPlataforma></MultiPlataforma>
    <Novedades></Novedades>
    <Agotados></Agotados>
    <FooterProyecto></FooterProyecto>
  </div>
</template>

<script>
import CatalogoComponent from "@/components/PaginaCatalogo/MasVendidos.vue";
import FooterProyecto from "@/components/Componentes+/FooterProyecto.vue";
import HeaderProyecto from "@/components/Componentes+/HeaderProyecto.vue";

import OfertaMain from "@/components/PaginaOfertas/OfertaMain.vue";
import MultiPlataforma from "@/components/PaginaCatalogo/MultiPlataforma.vue";
import Novedades from "@/components/PaginaCatalogo/Novedades.vue";
import Agotados from "@/components/PaginaCatalogo/Agotados.vue";

export default {
  components: {
    CatalogoComponent,
    FooterProyecto,
    HeaderProyecto,
    OfertaMain,
    MultiPlataforma,
    Novedades,
    Agotados,
  },
};
</script>

<style>
.body {
  font-family: "Roboto", sans-serif;
  background-color: #141414;
  color: #333;
  margin: 0;
}
</style>
