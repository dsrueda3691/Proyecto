<template>
  <div>
    <h2 v-animate-vue="{ enterClass: 'fadeinright' }">Novedad</h2>
  
    <div class="oferta-destacada" v-animate-vue="{ enterClass: 'fadeinup' }">
    
      <div class="oferta-info " v-animate-vue="{ enterClass: 'fadeinleft' }">
        <h3>Grand Theft Auto VI</h3>
        <p class="descripcion">Incluye el juego base y todas las expansiones</p>
        <p class="precio-original">Precio original: $129.99</p>
        <p class="precio-oferta">Precio oferta: $109.99</p>

        <div class="game-actions">
          <button class="action-btn comprar">Detalles</button>
          <button class="action-btn">Compra y Envío</button>
          <button class="action-btn">Regalar</button>
        </div>
      </div>

      <div class="imagen-oferta">
        <img
          class="fondo"
          :src="require('@/assets/miami.jpg')"
          alt="Fondo Miami"
        />
        <img class="juego" :src="require('@/assets/gta6.jpg')" alt="GTA 6" v-animate-vue="{ enterClass: 'fadeinup' }" />

        <div class="plataformas " v-animate-vue="{ enterClass: 'fadeinup' }">
          <img :src="require('@/assets/ps5.png')" alt="PS5" />
          <img src="@/assets/xbox.png" alt="Xbox" />
          <img src="@/assets/nintendo.png" alt="Nintendo" />
          <img src="@/assets/steam.png" alt="Steam" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameDestacado",
};
</script>

<style scoped>
h2 {
  position: relative;
  top: 2rem;
  text-align: end;
  font-size: 3.5rem;
  color: #00ffff; /* Cyan brillante */
  margin: 4rem 4rem 3rem 0;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif; /* Tipografía futurista */
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff; /* Sombra de texto neón */
  transition: text-shadow 0.3s ease;
}

h2:hover {
  text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff; /* Efecto de resplandor al pasar */
}

.oferta-destacada {
  font-family: "Arial", sans-serif;
  width: 90%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #222; 
  color: #f0f0f0; 
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  height: 400px;
  margin-bottom: 7rem;
}

.oferta-info {
  flex: 1;
  padding: 1.5rem;
}

h3 {
  font-size: 2.4rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: #00ffff; /* Cyan brillante */
  text-shadow: 0 0 5px #00ffff, 0 0 15px #00ffff; /* Sombra de texto neón */
}

.descripcion {
  font-size: 1rem;
  color: #ccc; /* Gris claro */
  margin-bottom: 1rem;
}

.precio-original {
  font-size: 1rem;
  color: #888;
  text-decoration: line-through;
}

.precio-oferta {
  font-size: 1.4rem;
  font-weight: bold;
  color: #d9534f;
  margin-top: 0.5rem;
}

.game-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.action-btn {
  padding: 0.8rem 1.5rem;
  background-color: transparent;
  border: 2px solid #00ffff; /* Borde neón */
  color: #00ffff; /* Texto neón */
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.action-btn:hover {
  transform: scale(1.05);
  background-color: #00ffff; /* Fondo de hover */
  color: #311545; /* Texto oscuro en hover */
}

.comprar {
  background-color: #00ffff; /* Fondo cyan */
  color: #311545;
  border: none;
}

.imagen-oferta {
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}

.imagen-oferta .fondo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.imagen-oferta .juego {
  position: absolute;
  bottom: 10px;
  left: 24px;
  width: 120px;
  height: auto;
  z-index: 2;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.523);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.imagen-oferta .juego:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.737);
}

.imagen-oferta::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(34, 34, 34, 1) 5%, /* Fondo oscuro */
    rgba(34, 34, 34, 0) 70%
  );
  z-index: 1;
  pointer-events: none;
}

.plataformas {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 3;
}

.plataformas img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  padding: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  object-fit: contain;
}

.plataformas img:hover {
  transform: scale(1.15);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .oferta-destacada {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .imagen-oferta {
    width: 100%;
    height: auto;
  }

  .game-actions {
    flex-direction: column;
    gap: 0.5rem;
  }

  .action-btn {
    width: 100%;
  }

  .imagen-oferta .juego {
    width: 100px;
  }

  .plataformas {
    justify-content: center;
    bottom: 0.5rem;
    right: auto;
    left: 0;
    right: 0;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 2rem;
    margin: 2rem 1rem 2rem 0;
    text-align: center;
  }

  h3 {
    font-size: 1.8rem;
  }

  .descripcion,
  .precio-original,
  .precio-oferta {
    font-size: 0.9rem;
  }

  .action-btn {
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
  }

  .imagen-oferta .juego {
    width: 80px;
    left: 10px;
    bottom: 8px;
  }

  .plataformas img {
    width: 30px;
    height: 30px;
    padding: 4px;
  }
}
</style>
