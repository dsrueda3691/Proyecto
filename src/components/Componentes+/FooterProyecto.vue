<template>
  <footer>
    <div class="footer-content">
      <!-- Sección de la marca -->
      <div
        class="footer-section brand-section"
        v-animate-vue="{ enterClass: 'fadeinup' }"
      >
        <a class="navbar-brand" href="proyecto">
          <img :src="require(`@/assets/logo copy.png`)" alt="Logo de Retro Realms" />
          <span>Retro Realms</span>
        </a>
        <p>Tu destino para los mejores juegos y las últimas novedades en el mundo del gaming.</p>
        <p v-if="usuario">¡Gracias por visitarnos, {{ usuario.nombre }}!</p>
      </div>

      <!-- Enlaces rápidos -->
      <div
        class="footer-section"
        v-animate-vue="{ enterClass: 'fadeinup' }"
      >
        <h4>Enlaces rápidos</h4>
        <ul>
          <li>
            <a href="/">
              <i class="fas fa-home"></i> Inicio
            </a>
          </li>
          <li>
            <a href="ofertas">
              <i class="fas fa-tags"></i> Ofertas
            </a>
          </li>
          <li>
            <a href="catalogo">
              <i class="fas fa-th-list"></i> Catálogo
            </a>
          </li>
          <li>
            <!-- Mostrar Perfil o Iniciar Sesión dinámicamente -->
            <router-link to="/perfil">
              <i class="fas fa-user-circle"></i>
              {{ usuario ? "Perfil" : "Iniciar Sesión" }}
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Contacto y redes sociales -->
      <div
        class="footer-section"
        v-animate-vue="{ enterClass: 'fadeinup' }"
      >
        <h4>Contacto</h4>
        <p>Email: info@RetroRealms.com</p>
        <p>Teléfono: (123) 456-7890</p>
        <div class="social-media">
          <a href="https://facebook.com" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Línea inferior -->
    <div
      class="footer-bottom"
      v-animate-vue="{ enterClass: 'fadeinbottom' }"
    >
      &copy; 2024 RetroRealms. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterProyecto",
  data() {
    return {
      usuario: JSON.parse(localStorage.getItem("usuario")) || null, // Cargar datos de usuario desde localStorage
    };
  },
};
</script>

<style scoped>
/* General */
footer {
  background-color: #1f1f1f; /* Gris oscuro */
  color: #e0e0e0; /* Texto claro */
  padding: 2rem 0;
  margin-top: 0;
  border-top: 2px solid #00ffff; /* Línea superior de neón */
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Sección de la marca */
.brand-section {
  text-align: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  justify-content: center;
  margin-bottom: 1rem;
}

.navbar-brand img {
  width: 50px;
  height: auto;
}

.navbar-brand span {
  font-weight: bold;
  font-size: 1.4rem;
  color: #ffffff;
}

/* Enlaces rápidos */
.footer-section h4 {
  color: #00ffff; /* Cyan para los títulos */
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #e0e0e0; /* Blanco para los enlaces */
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-section ul li a:hover {
  color: #00ffff; /* Cyan al pasar el mouse */
  transform: translateX(5px); /* Animación de desplazamiento */
}

/* Redes sociales */
.social-media {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-media a {
  color: #e0e0e0;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-media a:hover {
  color: #00ffff; /* Cyan al pasar el mouse */
  transform: scale(1.2); /* Zoom al pasar el mouse */
}

/* Pie de página inferior */
.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  color: #808080; /* Gris medio */
  font-size: 0.9rem;
  border-top: 1px solid #333333;
  padding-top: 1rem;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 1rem;
  }

  .footer-section {
    margin-bottom: 2rem;
  }

  .navbar-brand {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .navbar-brand span {
    font-size: 1.2rem;
  }

  .footer-section h4 {
    font-size: 1rem;
  }

  .footer-section p,
  .footer-section ul li {
    font-size: 0.9rem;
  }

  .social-media a {
    font-size: 1.3rem;
  }
}
</style>
