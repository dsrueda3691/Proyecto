<template>
  <div class="body">
    <div v-if="usuario">
      <HeaderProyecto :usuario="usuario" />
    </div>
    
    <PerfilSection :usuario="usuario" @actualizarUsuario="actualizarUsuario" />
    <div v-if="usuario">
      <CompradosComponet />
    </div>
    <div v-if="usuario">
      <FooterProyecto />
    </div>
    
  </div>
</template>

<script>

import PerfilSection from "@/components/PaginaPerfil/PerfilSection.vue";
import CompradosComponet from "@/components/PaginaPerfil/CompradosComponet.vue";
import FooterProyecto from "@/components/Componentes+/FooterProyecto.vue";
import HeaderProyecto from "@/components/Componentes+/HeaderProyecto.vue";


export default {
  name: "PerfilView",
  components: {
    HeaderProyecto,
    PerfilSection,
    CompradosComponet,
    FooterProyecto,
  },
  data() {
    return {
      usuario: JSON.parse(localStorage.getItem("usuario")) || null,
    };
  },
  methods: {
    actualizarUsuario(usuario) {
      this.usuario = usuario;
      if (usuario) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
      } else {
        localStorage.removeItem("usuario");
      }
    },
  },
};
</script>
