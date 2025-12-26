<script setup>
import { ref } from 'vue';

const title = ref('');
const description = ref('');
const file = ref(null);
const preview = ref(null);
const message = ref('');

const onFileChange = (e) => {
  const selected = e.target.files[0];
  if (selected) {
    file.value = selected;
    preview.value = URL.createObjectURL(selected);
  }
};

const uploadProject = async () => {
  if (!file.value || !title.value || !description.value) {
    message.value = 'Please fill all fields';
    return;
  }
  
  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('description', description.value);
  formData.append('image', file.value);
  // Add tags input later, for now hardcoded or added to form
  formData.append('tags', 'New, Project'); 

  message.value = 'Uploading...';
  
  try {
    const res = await fetch('http://localhost:3000/api/projects', {
      method: 'POST',
      body: formData
    });
    
    if (res.ok) {
      message.value = 'Project uploaded successfully!';
      title.value = '';
      description.value = '';
      file.value = null;
      preview.value = null;
      
      // Optional: Refresh list or notify
    } else {
      const data = await res.json();
      message.value = 'Upload failed: ' + (data.error || 'Unknown error');
    }
  } catch (err) {
    message.value = 'Error uploading project';
    console.error(err);
  }
};
</script>

<template>
  <div class="admin-container">
    <header class="admin-header">
      <h2>Admin Dashboard</h2>
      <router-link to="/">Logout</router-link>
    </header>
    
    <div class="upload-section">
      <h3>Add New Project</h3>
      <div class="form-container">
        <form @submit.prevent="uploadProject">
          <div class="form-group">
            <label>Project Title</label>
            <input v-model="title" type="text" placeholder="Enter title" />
          </div>
          
          <div class="form-group">
            <label>Description</label>
            <textarea v-model="description" rows="4" placeholder="Enter description"></textarea>
          </div>
          
          <div class="form-group">
            <label>Project Image</label>
            <div class="file-upload">
              <input type="file" @change="onFileChange" accept="image/*" />
            </div>
            <div v-if="preview" class="preview">
              <img :src="preview" alt="Preview" />
            </div>
          </div>
          
          <p v-if="message" class="message">{{ message }}</p>
          <button type="submit" class="upload-btn">Upload Project</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  min-height: 100vh;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.upload-section {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input[type="text"], textarea {
  width: 100%;
  padding: 0.8rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: white;
}

.upload-btn {
  width: 100%;
  padding: 1rem;
  background: var(--accent-primary);
  color: white;
  border-radius: 6px;
  font-weight: 600;
}

.preview img {
  max-width: 100%;
  margin-top: 1rem;
  border-radius: 6px;
}

.message {
  margin-bottom: 1rem;
  color: var(--accent-primary);
  font-weight: 500;
}
</style>
