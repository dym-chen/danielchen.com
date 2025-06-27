<script setup>
import Timeline from "./components/Timeline.vue";
import profileImage from './assets/picture.jpg';
</script>

<template>
  <div class="container">
    <header>
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
      <div class="horiz">
        <div>
          <p>ABOUT</p>
          <h1>Daniel Chen</h1>
          <h2>a junior developer... thats it</h2>
        </div>
        <div class="circle-container">
          <img :src="profileImage" alt="Profile" />
        </div>
      </div>
      <div class="horiz">
        <div>
          <p>EXPERIENCE</p>
          <h2>My Journey</h2>
          <p>Here are some of the places I've worked at and what I did there.</p>
        </div>
      </div>
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
    color: #213547;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 70%;
    margin: 1em auto;
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
  .nav-links a:hover {
    color: #535bf2;
  }
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem 0 1rem;
    max-width: 60%;
    margin: 0 auto;
    gap: 2rem;
  }
  .circle-container {
    width: 250px;         /* or any size */
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    margin: auto 0 auto 1rem;
  }

  .circle-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
