<template>
  <div class="video-home">
    <div class="home-video">
      <video
        :src="require(`@/assets/gameover.mp4`)"
        autoplay
        loop
        muted
        playsinline
      ></video>
      <div
        class="video-footer"
        v-animate-vue="{ enterClass: 'fadeinup', enterActiveClass: 'animated' }"
      >
        <div class="platforms">
          <span>PlayStation</span>
          <span>•</span>
          <span>Xbox</span>
          <span>•</span>
          <span>Nintendo</span>
          <span>•</span>
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
  position: relative;
  overflow: hidden;
}

.home-video {
  position: relative;
  width: 100%;
  height: 100vh;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(76, 0, 130, 0.13);
  color: white;
  text-align: center;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.platforms {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.platforms span {
  color: white;
  transition: color 0.3s ease;
  cursor: default;
}

.platforms span:hover {
  color: #00ffff;
  transition: color 0.3s ease;
  cursor: pointer;
}


@media (max-width: 768px) {
  .home-video {
    height: 100vh; 
  }

  .video-footer {
    font-size: 0.9rem; 
    padding: 0.5rem; 
  }

  .platforms {
    gap: 0.5rem; 
  }

  .platforms span {
    font-size: 0.9rem; 
  }
}

@media (max-width: 480px) {
  .home-video {
    height: 80vh; 
  }

  .video-footer {
    font-size: 0.85rem; 
    padding: 0.4rem; 
  }

  .platforms {
    gap: 0.3rem; 
    
  }

  .platforms span {
    font-size: 0.85rem; 
  }
}

</style>
