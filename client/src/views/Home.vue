<script setup>
import HeroSection from '../components/HeroSection.vue';
import SkillsTicker from '../components/SkillsTicker.vue';
import PortfolioGrid from '../components/PortfolioGrid.vue';
import ContactSection from '../components/ContactSection.vue';
</script>

<template>
  <div class="home-container">
    <header class="navbar">
      <div class="logo">MII.</div>
      <nav>
        <a href="#hero">Home</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <router-link to="/login" class="login-link">Admin</router-link>
      </nav>
    </header>

    <HeroSection />
    <SkillsTicker />
    <PortfolioGrid />
    <ContactSection />
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-primary);
  letter-spacing: -0.5px;
}

nav a {
  margin-left: 2rem;
  color: var(--text-secondary);
  font-weight: 500;
}

nav a:hover, nav a.router-link-active {
  color: var(--text-primary);
}

.login-link {
  font-size: 0.8rem;
  opacity: 0.5;
}
</style>
