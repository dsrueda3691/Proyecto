<template>
  <header
    :class="{ 'transparent-header': isMediaVisible, 'hidden-header': hideHeader }"
  >
    <!-- Branding -->
    <nav class="brand-nav">
      <router-link v-animate-vue="{ enterClass: 'zoomin' }" class="navbar-brand" to="/">
        <img :src="require(`@/assets/logo copy.png`)" alt="Logo de Retro Realms" />
        <span>RetroRealms</span>
      </router-link>
    </nav>

    <!-- Menú de navegación -->
    <nav class="menu-nav">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/ofertas">Ofertas</router-link></li>
        <li><router-link to="/catalogo">Catálogo</router-link></li>
        <li><router-link to="/admin">Admin</router-link></li>
        <li>
          <router-link to="/perfil">
            <ButtonVue
              v-animate-vue="{ enterClass: 'fadeinright' }"
              class="user"
              :label="usuario ? usuario.nombre : 'Perfil'"
              icon="pi pi-user"
            />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderProyecto",
  data() {
    return {
      usuario: JSON.parse(localStorage.getItem("usuario")) || null, // Cargar datos desde localStorage
      isMediaVisible: false,
      hideHeader: false,
      lastScrollTop: 0,
    };
  },
  mounted() {
    const mediaSection = document.querySelector(".video-home") || document.querySelector(".oferta-main");
    if (mediaSection) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          this.isMediaVisible = entry.isIntersecting;
        },
        { threshold: 0.1 }
      );
      observer.observe(mediaSection);
    }
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > this.lastScrollTop && currentScrollTop > 100) {
        this.hideHeader = true; // Ocultar el header mientras se desplaza hacia abajo
      } else if (currentScrollTop < this.lastScrollTop) {
        this.hideHeader = false; // Mostrar el header al desplazarse hacia arriba
      }
      this.lastScrollTop = Math.max(currentScrollTop, 0);
    },
  },
};
</script>

<style scoped>
/* Estilo del Header */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 11vh;
  padding: 0 2rem;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  z-index: 1000;
  background-color: #1f1f1f; /* Fondo oscuro */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hidden-header {
  transform: translateY(-100%);
}

.transparent-header {
  background-color: transparent;
  box-shadow: none;
}

/* Branding */
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
  color: #f0f0f0; /* Blanco */
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

/* Menú de navegación */
.menu-nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.menu-nav ul li a {
  color: #f0f0f0; /* Blanco */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(-10px);
  animation: slideIn 0.6s ease forwards;
}

.menu-nav ul li:nth-child(1) a {
  animation-delay: 0.2s;
}
.menu-nav ul li:nth-child(2) a {
  animation-delay: 0.4s;
}
.menu-nav ul li:nth-child(3) a {
  animation-delay: 0.6s;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.menu-nav ul li a:hover {
  color: #00ffff; /* Cyan para hover */
}

/* Estilo del botón de perfil */
.user {
  background-color: #d6d6d69a; /* Morado oscuro */
  color: #ffffff; /* Cyan para el texto */
  border: 2px solid #ffffff;
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
  color: #afafaf;
  transform: scale(1.1);
  box-shadow: 0 0 15px #00ffffaa, 0 0 25px #00ffff88;
}

.user:focus,
.user:hover {
  background-color: #ffffff9a !important;
  color: #00ffff !important;
  border-color: #00ffff !important;
}

.transparent-header .user {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-color: #dddddd;
  box-shadow: none;
  text-shadow: none;
  transition: all 0.3s ease;
}

.transparent-header .user:hover {
  background-color: rgba(255, 255, 255, 0.4);
  color: #00ffff;
  border-color: #00ffff;
  transform: scale(1.05);
  box-shadow: 0 0 15px #00ffffaa, 0 0 25px #00ffff88;
}

.transparent-header .user:focus,
.transparent-header .user:hover {
  background-color: rgba(255, 255, 255, 0.4) !important;
  color: #00ffff !important;
  border-color: #00ffff !important;
}

@media (max-width: 1024px) {
  header {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }

  .menu-nav ul {
    gap: 1rem;
    margin-top: 0.5rem;
  }
}

@media (max-width: 768px) {
  .navbar-brand span {
    font-size: 1.2rem;
  }

  .navbar-brand img {
    height: 35px;
  }

  .menu-nav ul {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .menu-nav ul li a {
    font-size: 1rem;
  }

  .user {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 480px) {
  header {
    padding: 0.5rem 1rem;
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
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>
