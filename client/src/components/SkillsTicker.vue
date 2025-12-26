<script setup>
const skills = [
  'Laravel', 'Flutter', 'Vue.js', 'Node.js', 'Express', 'MySQL', 'Firebase', 'Git', 'Tailwind', 'Docker', 'API Design'
];
</script>

<template>
  <section id="skills" class="skills-container">
    <div class="ticker-wrap">
      <div class="ticker">
        <div class="skill-item" v-for="(skill, index) in skills" :key="index">{{ skill }}</div>
        <!-- Duplicate for seamless loop -->
        <div class="skill-item" v-for="(skill, index) in skills" :key="'duplicate-' + index">{{ skill }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-container {
  padding: 4rem 0;
  background: var(--bg-primary);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  overflow: hidden;
}

.ticker-wrap {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.ticker {
  display: inline-flex;
  animation: ticker 40s linear infinite;
}

.skill-item {
  display: inline-block;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-secondary);
  opacity: 0.7;
  transition: all 0.3s ease;
  user-select: none;
}

.skill-item:hover {
  color: var(--accent-primary);
  opacity: 1;
  text-shadow: 0 0 15px var(--accent-glow);
}

@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
