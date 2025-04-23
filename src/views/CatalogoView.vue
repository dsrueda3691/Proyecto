<template>
  <div class="body">
    <HeaderProyecto></HeaderProyecto>
    <CatalogoMain></CatalogoMain>
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

import CatalogoMain from "@/components/PaginaCatalogo/CatalogoMain.vue";
import MultiPlataforma from "@/components/PaginaCatalogo/MultiPlataforma.vue";
import Novedades from "@/components/PaginaCatalogo/Novedades.vue";
import Agotados from "@/components/PaginaCatalogo/Agotados.vue";

export default {
  components: {
    CatalogoComponent,
    FooterProyecto,
    HeaderProyecto,
    CatalogoMain,
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
