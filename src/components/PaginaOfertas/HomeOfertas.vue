<template>
  <section style="height: 600px">
    <div id="homejuegos-grid">
      <div id="imagen" >
        <img
          class="imagen-baratos"
          :src="require(`@/assets/juegos.png`)"
          alt="Juegos"
        />
      </div>
      <div id="contenido">
        <h1 style="text-align: center; font-size: 50px; color: #4b0082">
          RetroRealms: Ofertas Especiales
        </h1>
        Bienvenido a RetroRealms, tu paraíso gamer. Explora nuestras ofertas
        especiales en una amplia variedad de videojuegos, desde los clásicos
        retro que marcaron una era hasta los lanzamientos más recientes. Ya sea
        que estés buscando un juego de tu infancia o el último éxito, nuestras
        promociones exclusivas te permiten disfrutarlo todo sin gastar de más.
        ¡Descubre nuestras ofertas y encuentra tu próxima aventura en
        RetroRealms!
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeOfertas",
};
</script>
<style scoped>
#homejuegos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 100%;
}

#imagen,
#contenido {
  padding: 1rem;
}

.imagen-baratos {
  width: 100%;
  height: 100%;
  border-radius: 10% 10% 0 0;
  object-fit: cover;
}
</style>
