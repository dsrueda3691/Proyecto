<template>
  <header :class="{ 'transparent-header': isVideoVisible }">
    <nav class="brand-nav">
      <router-link v-animate-vue="{ enterClass: 'zoomin' }" class="navbar-brand" to="/">
        <img :src="require(`@/assets/logo copy.png`)" alt="Logo de Retro Realms" />
        <span>Retro Realms</span>
      </router-link>
    </nav>
    <nav class="menu-nav">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/ofertas">Ofertas</router-link></li>
        <li><router-link to="/catalogo">Catálogo</router-link></li>
        <li><ButtonVue v-animate-vue="{ enterClass: 'fadeinright' }" class="user" label="Perfil" icon="pi pi-user" style="background-color: #4c00829a; color: #00ffff; border-color: #00ffff;" /></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderProyecto",
  data() {
    return {
      isVideoVisible: true,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isVideoVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    const videoSection = document.querySelector(".video-home");
    if (videoSection) observer.observe(videoSection);
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 98.78vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 16vh;
  padding: 0 2rem;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
  background-color: #4b0082;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.transparent-header {
  background-color: transparent;
  box-shadow: none;
}

.brand-nav {
  display: flex;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
}

.navbar-brand img {
  height: 40px;
}

.navbar-brand span {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.menu-nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.menu-nav ul li a {
  color: #f0f0f0;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(-10px);
  animation: slideIn 0.6s ease forwards;
}

.menu-nav ul li:nth-child(1) a { animation-delay: 0.2s; }
.menu-nav ul li:nth-child(2) a { animation-delay: 0.4s; }
.menu-nav ul li:nth-child(3) a { animation-delay: 0.6s; }

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-nav ul li a:hover {
  color: #00ffff;
}

/* Estilo personalizado para el botón */
.user {
  background-color: #4c00829a;
  color: #00ffff;
  border: 2px solid #00ffff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px #00ffff44;
  text-shadow: 0 0 5px #00ffffaa;
}

.user:hover {
  background-color: #00ffff;
  color: #311545;
  transform: scale(1.1);
  box-shadow: 0 0 15px #00ffffaa, 0 0 25px #00ffff88;
}

@media (max-width: 1024px) {
  header {

    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 1rem 2rem;
  }

  .menu-nav ul {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .navbar-brand span {
    font-size: 1.2rem;
    align-items: center;
  }

  .navbar-brand img {
    height: 35px;
  }

  .menu-nav ul {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0.8rem;
  }

  .menu-nav ul li {
    width: 100%;
  }

  .menu-nav ul li a {
    font-size: 1rem;
    display: block;
    width: 100%;
  }

  .user {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
    width: 100%;
  }
}

@media (max-width: 480px) {
  header {
    padding: 0.5rem 1rem;
    align-items: center;
  }

  .navbar-brand span {
    font-size: 1rem;
  }

  .navbar-brand img {
    height: 30px;
  }

  .menu-nav ul li a {
    font-size: 0.95rem;
  }

  .user {
    font-size: 0.85rem;
    padding: 0.3rem 0.6rem;
  }
}

</style>
