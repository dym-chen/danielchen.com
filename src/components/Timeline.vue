<template>
  <Timeline :value="experiences" class="timeline" layout="vertical" align="right">
    <template #content="slotProps">
      <div class="p-timeline-event-content">
        <h3>
          {{ slotProps.item.title }} at
          <span class="company">{{ slotProps.item.company }}</span>
        </h3>
        <div class="timeline-dates">{{ slotProps.item.dates }}</div>
        <div class="timeline-description" v-html="slotProps.item.description"></div>
      </div>
    </template>
  </Timeline>
</template>

<script setup>
  import Timeline from "primevue/timeline";

  const experiences = [
    {
      title: "Lead Design Engineer",
      company: "Normally",
      dates: "JULY 2024 - JAN 2025",
      description:
        "A research and design studio building early stage AI prototypes for larger tech companies. I built zero-to-one prototypes in collaboration with other designers and backend engineers, focusing on front-end implementation and LLMs.",
    },
    {
      title: "Founding Product Designer",
      company: "Elicit",
      dates: "JUNE 2022 - JUNE 2024",
      description:
        "Designed the initial version of Elicit, a research tool that uses language models to speed up the systematic review process for researchers and scientists.",
    },
    {
      title: "Head of Design",
      company: "HASH",
      dates: "OCT 2021 - JULY 2022",
      description:
        "Worked on the initial interface and product vision for an open-source platform and protocol designed to make block-based editors (like Notion, Coda, etc.) interoperable, and improve the way we add semantic, structured data to the web.",
    },
    {
      title: "Illustrator, Art Director, & UX Designer",
      company: "Egghead",
      dates: "APRIL 2016 - SEP 2021",
      description: "",
    },
  ];
</script>

<style scoped>
  .company {
    color: #8a206f;
    font-weight: 600;
  }

  .timeline-dates {
    color: #a89b8c;
    font-size: 0.98rem;
    margin-bottom: 0.5rem;
    letter-spacing: 0.5px;
  }

  .timeline-description {
    color: #444;
    font-size: 1.05rem;
    line-height: 1.5;
  }
</style>
