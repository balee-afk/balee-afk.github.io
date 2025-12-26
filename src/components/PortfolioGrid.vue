<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with Laravel and Vue.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: 'Laravel, Vue, MySQL'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure and fast mobile banking experience built with Flutter.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    tags: 'Flutter, Dart, Firebase'
  },
  {
    id: 3,
    title: 'Real-time Chat',
    description: 'Websocket-based chat application using Node.js and Socket.io.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    tags: 'Node.js, Socket.io, React'
  },
  {
    id: 4,
    title: 'Portfolio V1',
    description: 'Previous version of my portfolio built with plain HTML/CSS.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    tags: 'HTML, CSS, JS'
  }
]);
</script>

<template>
  <section id="work" class="portfolio-container">
    <div class="header">
      <h2>Featured Projects</h2>
      <p>A selection of my recent work</p>
    </div>
    
    <div class="grid">
      <div v-for="project in projects" :key="project.id" class="card">
        <div class="image-wrapper">
          <img :src="project.image" :alt="project.title" loading="lazy" />
          <div class="overlay">
            <button class="view-btn">View Details</button>
          </div>
        </div>
        <div class="content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tags">
            <span v-for="tag in project.tags.split(',')" :key="tag" class="tag">{{ tag.trim() }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-container {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.header h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.header p {
  color: var(--text-secondary);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  border-color: var(--accent-primary);
}

.image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .image-wrapper img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .overlay {
  opacity: 1;
}

.view-btn {
  padding: 0.8rem 1.5rem;
  background: white;
  color: black;
  border-radius: 25px;
  font-weight: 600;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.card:hover .view-btn {
  transform: translateY(0);
}

.content {
  padding: 1.5rem;
}

.content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.content p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: rgba(255,255,255,0.05);
  border-radius: 15px;
  color: var(--text-secondary);
}
</style>
