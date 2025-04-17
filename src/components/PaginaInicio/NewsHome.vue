<template>
  <div class="news">
    <h2 v-animate-vue="{ enterClass: 'zoomin' }">Últimas Noticias</h2>
    <div class="news-grid">
      <article v-animate-vue="{ enterClass: 'fadeinup' }">
        <h3> Remake de <strong>Metal Gear Solid</strong>  anunciado</h3>
        <p>Konami confirma el esperado remake del clásico, con gráficos renovados y mejoras en jugabilidad.</p>
        <a href="#">Leer más</a>
      </article>

      <article v-animate-vue="{ enterClass: 'fadeinup' }">
        <h3><strong>The Legend of Zelda: Echoes of Time</strong> revelado</h3>
        <p>Nintendo presenta una nueva entrega de Zelda con un enfoque en viajes temporales y mundo abierto expandido.</p>
        <a href="#">Leer más</a>
      </article>

      <article v-animate-vue="{ enterClass: 'fadeinup' }">
        <h3><strong>SteamDeck 2:</strong> llega en 2025</h3>
        <p>Valve anuncia la nueva generación de su consola portátil, con más potencia y una pantalla OLED.</p>
        <a href="#">Leer más</a>
      </article>

      <article v-animate-vue="{ enterClass: 'fadeinup' }">
        <h3><strong>GTA VI:</strong>  muestra gameplay extendido</h3>
        <p>Rockstar libera un nuevo avance de 10 minutos mostrando el mapa, vehículos y nuevas mecánicas.</p>
        <a href="#">Leer más</a>
      </article>

      <article v-animate-vue="{ enterClass: 'fadeinup' }">
        <h3>Xbox y Bethesda: fusión creativa total</h3>
        <p>El futuro de franquicias como <strong>DOOM</strong>  y *Starfield* se redefine tras una reestructuración interna.</p>
        <a href="#">Leer más</a>
      </article>

      <article v-animate-vue="{ enterClass: 'fadeinup' }">
        <h3>Realidad Virtual: ¿el nuevo estándar?</h3>
        <p>Con nuevos dispositivos en camino, los estudios apuestan fuerte por experiencias inmersivas.</p>
        <a href="#">Leer más</a>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsHome",
};
</script>

<style scoped>
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  height: 100%;
}

.news-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 85%;
  gap: 2rem;
  margin: 0 1rem;
}

article {
  background-color: #222222; /* Fondo oscuro */
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.217);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  text-align: start;
  display: flex;
  flex-direction: column;
}

article h3 {
  font-size: 1.2rem;
  color: #00ffff; /* Cian brillante */
  margin-bottom: 0.5rem;
}

article p {
  font-size: 1rem;
  color: #f0f0f0; /* Gris claro */
  margin-bottom: 1rem;
}

article a {
  color: #00ffff; /* Cian brillante */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

article a:hover {
  color: #d9534f; /* Rojo brillante */
}

article:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 3.4rem;
  font-weight: 600;
  margin: 0 0 4rem 4rem;
  color: #00ffff; /* Cyan brillante */
  text-shadow: 0 0 5px #00ffff, 0 0 15px #00ffff; /* Sombra de texto neón */
}
</style>
