<template>
  <section class="oferta-especial" >
    <div class="decor decor1" v-animate-vue="{ enterClass: 'fadeinleft' }">
      <img src="https://i.blogs.es/acd8d1/unnamed-4-/450_1000.jpeg" alt="" />
    </div>
    <div class="decor decor2" v-animate-vue="{ enterClass: 'fadeinbottom' }">
      <img src="https://spinecard-com-s3.s3.dualstack.eu-west-1.amazonaws.com/original/3X/c/b/cb77d44c231a830aa82477698fab61ef80319af4.jpeg" alt="" />
    </div>
    <div class="decor decor3" v-animate-vue="{ enterClass: 'fadeinright' }">
      <img src="https://i.blogs.es/249f91/nintendo-switch-caratula-03/1366_2000.webp" alt="" />
    </div>
    <div class="decor decor4" v-animate-vue="{ enterClass: 'fadeinup' }">
      <img src="https://i0.wp.com/alexstombraider.blog/wp-content/uploads/2017/03/174538_front.jpg?w=326&h=375&ssl=1" alt="" />
    </div>

    <div class="oferta-texto" >
      <small>Oferta exclusiva</small>
      <h2>Disfruta de un 25% de descuento</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "DescuentoOfertas",
};
</script>

<style scoped>
.oferta-especial {
  position: relative;
  background: rgba(0, 0, 0, 0.505);
  overflow: hidden;
  height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
}

.oferta-texto {
  position: absolute;
  z-index: 20;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) ;

  font-family: "Montserrat", sans-serif;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.473);
  border-radius: 12px;

  box-shadow: 0 0 20px rgba(255, 255, 255, 0.306);
}

.oferta-texto small {
  font-size: 0.9rem;
  color: #00ffff;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 1rem;
}

.oferta-texto h2 {
  font-size: 2.8rem;
  color: #ffffff;
  font-weight: bold;

}

.decor {
  position: absolute;
  z-index: 5;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.4));
}

.decor img {
  border-radius: 8px;
  object-fit: cover;
}

.decor1 {
  top: 5%;
  left: 10%;
}
.decor1 img {
  width: 220px;
  height: 240px;
}

.decor2 {
  top: 25%;
  right: 5%;
}
.decor2 img {
  width: 160px;
  height: 220px;
}

.decor3 {
  bottom: 10%;
  left: 5%;
}
.decor3 img {
  width: 120px;
  height: 190px;
}

.decor4 {
  bottom: 5%;
  right: 15%;
}
.decor4 img {
  width: 210px;
  height: 220px;
}

@media (max-width: 768px) {
  .oferta-especial {
    height: 500px;
    border-radius: 12px;
  }

  .oferta-texto {
    padding: 1rem;
  }

  .oferta-texto h2 {
    font-size: 2rem;
  }

  .decor img {
    width: 100px !important;
    height: auto !important;
  }
}
</style>
