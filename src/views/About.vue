<!-- About.vue -->
 
<script setup>
import Timeline from "../components/Timeline.vue";
import profileImage from '../assets/picture.jpg';
</script>

<template>
  <div class="container">
    <main class="main-content">
      <div class="horizontal">
        <div>
          <p>ABOUT</p>
          <h1>Daniel Chen</h1>
          <h2>a junior developer... thats it</h2>
        </div>
        <div class="circle-container">
          <img :src="profileImage" alt="Profile" />
        </div>
      </div>
      <div>
        <p>ABOUT ME</p>
        <h2>Who am I?</h2>
        <p>
          Hello! I'm currently a computer engineering student at the University of Waterloo, most recently a intern for Shoplogix Inc.
          I am currently in a school term and am searching for a co-op position for the winter and summer of 2026.
          <br/><br/>
          I have a passion for problem solving and bringing ideas to life. There are lots of things I want to accomplish, 
          so I will take it one step at a time. As a result, n this site, I will share what I am working 
          on and try to document as much of it as possible for 3 reasons:
        </p>
        <ol>
          <li>
            I hope that the content can give you an idea of who I am and how do I think and work.
          </li>
          <li>
            I want to track my progress and see how I have grown over time, both as a person and as a developer.
          </li>
          <li>
            I just want somewhere to write sometimes, its pretty therapeutic 😊
          </li>
        </ol> 
        <p>
          To follow along with my journey, you can check out my <a href="https://github.com/dym-chen">Github</a>, message me on <a href="https://www.linkedin.com/in/daniel-chen-940180177/">LinkedIn</a>,
          or get in touch with me through email, dychen@uwaterloo.ca.
        </p>
      </div>
      <Timeline />
      <div>
          <p>POSTS</p>
          <h2>Whats going on with me now?</h2>
          <p>
            Since I will use this website as a place to learn about Vue.JS and sharpen my front-end skills, there will be some time till I have the blog functionality available.
            In the meanwhile, please check out my posts and my leetcode history <a href="https://drive.google.com/drive/folders/18QVK33-DUh6QE_N2nce1e0WQFc5651a8?usp=sharing ">here</a>. 
          </p>      
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
</style>
