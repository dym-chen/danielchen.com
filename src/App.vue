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
</style>