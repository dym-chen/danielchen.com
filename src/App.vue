<script setup>
import Timeline from "./components/Timeline.vue";
</script>

<template>
  <div class="container">
    <header class="header">
      <nav class="nav">
        <a href="#" class="nav-logo">Daniel</a>
        <ul class="nav-links">
          <li><a href="#">My Corner</a></li>
          <li><a href="#">Now</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
    <main class="main-content">
      <h1>
        <strong>Daniel</strong> makes visual essays about programming, design.
      </h1>
      <p class="subtitle"> developer... thats it</p>

      <Timeline />
    </main>
    <footer class="footer">
      <div>© 2025 Daniel Chen</div>
      <ul class="footer-links">
        <li><a href="#">My Corner</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Now</a></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fff;
    color: #213547;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  }
  .header {
    background: #fff;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .nav-logo {
    font-weight: bold;
    font-size: 1.5rem;
    color: #222;
    text-decoration: none;
    letter-spacing: 0.5px;
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
    color: #646cff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.2s;
  }
  .nav-links a:hover {
    color: #535bf2;
  }
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem 0 1rem;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }
  .main-content h1 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-top: 1rem;
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
  .footer-links a:hover {
    color: #646cff;
  }
</style>
