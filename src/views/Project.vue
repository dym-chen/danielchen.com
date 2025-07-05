<!-- Project.vue -->

<script setup>
import image from '../assets/image.png';
</script>

<template>
  <div class="container">
    <main class="main-content">
      <div class="p-container">
        <div style="text-align: center; margin-bottom: 1.5rem;"><h1>Projects</h1></div>

        <!-- fitness friends -->
        <div class="p-desc">
          <h2 style="margin: auto; text-align: center; font-size: 2.5rem;">FITNESS FRIENDS</h2>
          <div class="vertical"> 
            <p>
              A personal fitness journey tracking app built with Next.js and Supabase. 
              Users can log workouts, monitor progress, and visualize their achievements through clean dashboards. 
              The app combines Next.js for a fast, responsive experience with Supabase for 
              secure authentication and real-time data sync across devices. 
            </p>
            <div>
              Live implementation can be found <a href="https://fitness-friends.vercel.app/" style="margin-left: 5px;">here</a>. 
              Github repository is located <a href="https://github.com/dym-chen/fitness-friends" style="margin-left: 5px;">here</a>
            </div>
          </div>
        </div>
        <!-- <div class="p-image">
          <div><img :src="image" alt="Profile" /></div>
          <div><img :src="image" alt="Profile" /></div>
        </div> -->
        <hr class="line-br"/>

        <!-- page patrol -->
        <div class="p-desc">
          <h2 style="margin: auto; text-align: center; font-size: 2.5rem;">PAGE <br> PATROL</h2>
          <div class="vertical"> 
            <p>
              A web accessibility monitoring tool built with Flask that automatically scans webpages for accessibility issues and integrates with Git workflows. 
              The application identifies WCAG compliance problems, generates detailed reports, and can be configured to check for accessibility 
              regressions in Git commits. Built with Python and Flask, PagePatrol helps developers maintain inclusive web experiences by 
              catching accessibility issues early in the development process. 
            </p>
            <div>
              Github repository is located <a href="https://github.com/dym-chen/PagePatrol" style="margin-left: 5px;">here</a>
            </div>
          </div>
        </div>
        <!-- <div class="p-image">
          <div><img :src="image" alt="Profile" /></div>
          <div><img :src="image" alt="Profile" /></div>
        </div> -->
        <hr class="line-br"/>

        <!-- node drive -->
        <div class="p-desc">
          <h2 style="margin: auto; text-align: center; font-size: 2.5rem;">NODE <br> DRIVE</h2>
          <div class="vertical"> 
            <p>
              A personal fitness journey tracking app built with Next.js and Supabase. 
              Users can log workouts, monitor progress, and visualize their achievements through clean dashboards. 
              The app combines Next.js for a fast, responsive experience with Supabase for 
              secure authentication and real-time data sync across devices. 
            </p>
            <div> 
              Github repository is located <a href="https://github.com/dym-chen/node-drive" style="margin-left: 5px;">here</a>
            </div>
          </div>
        </div>
        <!-- <div class="p-image">
          <div><img :src="image" alt="Profile" /></div>
          <div><img :src="image" alt="Profile" /></div>
        </div> -->
      </div>
    </main>
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

  @media (max-width: 1000px) {
    body .main-content {
      width: 80%;
    }
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 0 1rem;
    width: 900px;
    margin: 0 auto;
    gap: 2rem;
  }

  .p-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }

  .p-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .p-desc {
    grid-template-columns: 30% 70%; /* First row ratio */
    display: grid;
  }

  .p-desc div {
    display: flex;
  }

  .p-image {
    display: grid;
    grid-template-columns: 50% 50%; /* First row ratio */
    gap: 20px;
  }

  .p-image div {
    border-radius: 10px;
    overflow: hidden;
  }

  .p-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }

  .line-br {
    width: 100%;
    height: 3px;
    background-color: #bbaaaa;
    border-radius: 10px;
    border: none;
    margin: 1.5rem 0 0.5rem 0;
  }
</style>
