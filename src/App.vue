<!-- App.vue -->
<script setup>
</script>

<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav-links">
        <li><router-link to="/">About</router-link></li>
        <li><a href="https://drive.google.com/drive/folders/18QVK33-DUh6QE_N2nce1e0WQFc5651a8?usp=sharing">My Corner</a></li>
        <li><router-link to="/project">Projects</router-link></li>
      </ul>
    </nav>

    <router-view />

    <footer class="footer">
      <div style="color: #888;">© 2025 Daniel Chen</div>
      <ul class="footer-links">
        <li><a href="#">My Corner</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Now</a></li>
      </ul>
    </footer>
  </div>
</template>

<style setup>
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 70%;
    margin: 1em auto;
  }
  .nav-links {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin: 0;
    padding: 0;
  }
  .nav-links a {
    color: #464646;
    transition: 0.1s;
  }
  .nav-links a:hover {
    color: #7c7c7c;
  }

  .footer {
    border-top: 1px solid #eee;
    background: #fafbfc;
    padding: 1.2rem 0 0.5rem 0;
    margin-top: 2rem;
    text-align: center;
  }
  .footer-links {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.2rem;
    margin: 0.5rem 0 0 0;
    padding: 0;
    font-size: 0.95rem;
  }
  .footer-links a {
    color: #888;
    text-decoration: none;
    transition: color 0.2s;
  }
</style>