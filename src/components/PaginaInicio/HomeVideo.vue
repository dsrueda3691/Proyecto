<template>
  <div class="video-home">
    <div class="home-video">
      <video
        :src="require(`@/assets/fondo1.mp4`)"
        autoplay
        loop
        muted
        playsinline
      ></video>
      <div class="overlay"></div>
      <div class="video-context">
        <p class="video-subtitle">RetroRealms</p>
        <h1 class="video-title">Líderes en la industria gaming</h1>
        <router-link to="/catalogo"><button class="main-button">Catalogo</button></router-link>
      </div>
      <div class="video-footer">
        <div class="platforms"  v-animate-vue="{ enterClass: 'zoomin' }">
          <span>PlayStation</span>
          <span>Xbox</span>
          <span>Nintendo</span>
          <span>PC</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeVideo",
};
</script>

<style scoped>
.video-home {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.home-video {
  position: relative;
  width: 100%;
  height: 100%;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
  top: 0;
  left: 0;
  z-index: 1;
}

.video-context {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.video-subtitle {
  font-size: 1.5rem;
  font-family: 'Georgia', serif;
  margin-bottom: 0.5rem;
  opacity: 0.85;
}

.video-title {
  font-size: 4rem;
  font-weight: 700;
  font-family: 'Helvetica Neue', sans-serif;
  margin-bottom: 2rem;
}

.main-button {
  background-color: white;
  color: black;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;
}

.main-button:hover {
  background-color: #dddddd;
}

.video-footer {
  position: absolute;
  z-index: 2;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(20, 20, 20, 0.7);
  padding: 1rem 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
}

.platforms span {
  cursor: default;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
}

.platforms span:hover {
  color: #dddddd;
  cursor: pointer;
}

@media (max-width: 768px) {
  .video-title {
    font-size: 2.5rem;
  }

  .main-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .video-footer {
    font-size: 0.85rem;
    gap: 1rem;
    padding: 0.8rem 1.5rem;
  }
}
</style>
