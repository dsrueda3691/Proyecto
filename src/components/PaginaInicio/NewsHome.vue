<template>
  <div class="news">
    <h2 v-animate-vue="{ enterClass: 'zoomin' }">Últimas Noticias</h2>
    <div class="news-grid">
      <article v-animate-vue="{ enterClass: 'fadeinup' }">
        <h3>E3 2024: Lo que esperamos ver</h3>
        <p>La feria de videojuegos más importante del año se acerca. Descubre
            nuestras predicciones y los anuncios más esperados.</p>
        <a href="#">Leer más</a>
      </article>

      <article v-animate-vue="{ enterClass: 'fadeinup' }">
        <h3>Top 10 juegos más esperados</h3>
        <p> Repasamos los títulos que prometen revolucionar la industria en
            los próximos meses. ¿Cuál es tu favorito?</p>
        <a href="#">Leer más</a>
      </article>

      <article v-animate-vue="{ enterClass: 'fadeinup' }">
        <h3>El futuro de los eSports</h3>
        <p>
            Analizamos las tendencias y el crecimiento de los deportes
            electrónicos. ¿Serán olímpicos en 2028?
        </p>
        <a href="#">Leer más</a>
      </article>

      <article v-animate-vue="{ enterClass: 'fadeinup' }">
        <h3>Otra noticia destacada</h3>
        <p>Contenido interesante...</p>
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
  margin: 15rem 0;
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
  background-color: #ffffff;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.217);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  text-align: start;
  display: flex;
  flex-direction: column; /* Mantiene el contenido ordenado */
}

article h3 {
  font-size: 1.2rem;
  color: #4b0082;
  margin-bottom: 0.5rem;
}

article p {
  font-size: 1rem;
  color: #333333;
  margin-bottom: 1rem;
}

article a {
  color: #8a2be2;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

article a:hover {
  color: #4b0082;
}

article:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
h2 {
  color: #4b0082;
  margin: 0 2rem 2rem 2rem;
  font-size: 3.5rem;
}
</style>
