<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();
const error = ref('');

const login = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    });
    const data = await res.json();
    
    if (res.ok) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/admin');
    } else {
      error.value = data.error || 'Login failed';
    }
  } catch (err) {
    error.value = 'An error occurred';
    console.error(err);
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Admin Access</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Username</label>
          <input v-model="username" type="text" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" required />
        </div>
        <p v-if="error" class="error">{{ error }}</p>
        <button type="submit">Login</button>
      </form>
      <router-link to="/" class="back-link">Back to Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

input {
  width: 100%;
  padding: 0.8rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: white;
}

input:focus {
  border-color: var(--accent-primary);
  outline: none;
}

button {
  width: 100%;
  padding: 1rem;
  background: var(--accent-primary);
  color: white;
  border-radius: 6px;
  font-weight: 600;
  margin-top: 1rem;
}

.error {
  color: red;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: center;
}

.back-link {
  display: block;
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}
</style>
