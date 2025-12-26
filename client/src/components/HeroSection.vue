<script setup>
</script>

<template>
  <section id="hero" class="hero-container">
    <div class="background-glow"></div>
    <div class="content">
      <h2 class="greeting">Hello, I'm</h2>
      <h1 class="name">Muhamad Iqbal Irsyad</h1>
      <p class="role">Full Stack Developer <span class="highlight">(Laravel, Flutter, Vue)</span></p>
      
      <div class="cta-group">
        <a href="#work" class="btn primary">View My Work</a>
        <a href="#contact" class="btn secondary">Contact Me</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
}

.background-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  filter: blur(80px);
  animation: pulse 10s infinite alternate;
  z-index: -1;
}

@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(0.8); }
  100% { transform: translate(-50%, -50%) scale(1.2); }
}

.content {
  text-align: center;
  z-index: 1;
}

.greeting {
  font-size: 1.5rem;
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
  font-weight: 500;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.name {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

.role {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
}

.highlight {
  color: var(--text-primary);
  font-weight: 600;
}

.cta-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn.primary {
  background: var(--accent-primary);
  color: white;
  box-shadow: 0 4px 15px var(--accent-glow);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--accent-glow);
}

.btn.secondary {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}

.btn.secondary:hover {
  border-color: var(--text-primary);
  background: rgba(255,255,255,0.05);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .name {
    font-size: 2.5rem;
  }
}
</style>
