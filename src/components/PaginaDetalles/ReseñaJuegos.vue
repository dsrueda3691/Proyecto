<template>
  <section class="reseñas-juego">
    <h2>Reseñas</h2>
    <ul>
      <li v-for="reseña in reseñas" :key="reseña.id" class="reseña-card">
        <div class="usuario-info">
          <img :src="reseña.foto" alt="Foto de perfil" />
          <div>
            <p class="nombre">{{ reseña.usuario }}</p>
            <div class="estrellas">
              <span>★★★★★</span
              >
            </div>
          </div>
        </div>
        <p class="comentario">{{ reseña.comentario }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reseñas: [
        {
          id: 1,
          usuario: "Terminator_69",
          comentario:
            "Un clásico inolvidable, con una jugabilidad que aún se siente fresca.",
          puntuacion: 5,
          foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbE7VlS_Xv9oKdelMWUWAIOgTyh9Z5jcwrg&s",
        },
        {
          id: 2,
          usuario: "YU_loka3000",
          comentario:
            "La música y los gráficos me transportan a mi infancia. ¡Una joya!",
          puntuacion: 4,
          foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbE7VlS_Xv9oKdelMWUWAIOgTyh9Z5jcwrg&s",
        },
        {
          id: 3,
          usuario: "Mamaburra1234",
          comentario:
            "Perfecto para sesiones cortas o maratones. No decepciona.",
          puntuacion: 5,
          foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbE7VlS_Xv9oKdelMWUWAIOgTyh9Z5jcwrg&s",
        },
        {
          id: 4,
          usuario: "Ghost_Master",
          comentario:
            "Excelente emulación y controles precisos. Muy recomendado.",
          puntuacion: 4,
          foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbE7VlS_Xv9oKdelMWUWAIOgTyh9Z5jcwrg&s",
        },
        {
          id: 5,
          usuario: "Rayo_Mcqueen",
          comentario:
            "Los detalles y la historia superan a muchos juegos modernos.",
          puntuacion: 5,
          foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbE7VlS_Xv9oKdelMWUWAIOgTyh9Z5jcwrg&s",
        },
      ],
    };
  },
};
</script>

<style scoped>
.reseñas-juego {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #1a1a1a;
  border-radius: 1rem;
  color: #e0e0e0;
}

.reseñas-juego h2 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.5rem;
}

.reseña-card {
  background-color: #2a2a2a;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.usuario-info {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 0.75rem;
}

.usuario-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #444;
}

.nombre {
  font-weight: bold;
  color: #fff;
  margin: 0;
}

.estrellas {
  font-size: 1rem;
  color: #facc15; 
}




.comentario {
  margin-top: 0.5rem;
  line-height: 1.5;
  color: #d4d4d4;
}
</style>
