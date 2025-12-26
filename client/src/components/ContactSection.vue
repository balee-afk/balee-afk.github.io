<script setup>
</script>

<template>
  <section id="contact" class="contact-container">
    <div class="header">
      <h2>Let's Work Together</h2>
      <p>Have a project in mind? Reach out to me.</p>
    </div>
    
    <div class="content-wrapper">
      <div class="contact-info">
        <h3>Contact Info</h3>
        <p>Email: iqbal@example.com</p>
        <p>Location: Indonesia</p>
        
        <div class="socials">
          <a href="#" class="social-link">GitHub</a>
          <a href="#" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">Twitter</a>
        </div>
      </div>
      
      <form class="contact-form" @submit.prevent>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Tell me about your project"></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
    
    <footer class="footer">
      <p>&copy; 2025 Muhamad Iqbal Irsyad. All rights reserved.</p>
    </footer>
  </section>
</template>

<style scoped>
.contact-container {
  padding: 6rem 2rem 2rem;
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

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.socials {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-link {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

input, textarea {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 8px;
  color: var(--text-primary);
  font-family: inherit;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  border-color: var(--accent-primary);
  outline: none;
}

.submit-btn {
  padding: 1rem;
  background: var(--accent-primary);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 1rem;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #7c3aed;
}

.footer {
  text-align: center;
  color: var(--text-secondary);
  border-top: 1px solid var(--border-color);
  padding-top: 2rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
