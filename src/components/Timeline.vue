<template>
  <Timeline
    :value="experiences"
    class="timeline"
    layout="vertical"
    align="left"
  >
    <template #content="slotProps">
      <div class="p-timeline-event-content">
        <h3>
          {{ slotProps.item.title }} at
          <span class="company">{{ slotProps.item.company }}</span>
        </h3>
        <div class="timeline-dates">{{ slotProps.item.dates }}</div>
        <div
          class="timeline-description"
          v-html="slotProps.item.description"
        ></div>
      </div>
    </template>
  </Timeline>
</template>

<script setup>
import Timeline from "primevue/timeline";

const experiences = [
  {
    title: "Software Developer",
    company: "Shoplogix Inc.",
    dates: "JAN - MAY 2025",
    description:
      "A software company which builds highly customizable custom software for manufacturing organizations. I built end-to-end products in collaboration with designers and other engineers, being active on both front-end and back-end implementation.",
  },
  {
    title: "Software Developer",
    company: "Descartes Systems Group",
    dates: "MAY - AUG 2024",
    description:
      "Brought on as an intern to support the migration of a legacy system to .NET 6, and helped build internal tools designed to streamline workflows and improve efficiency across multiple teams.",
  },
  {
    title: "Front End Developer",
    company: " J3C",
    dates: "JAN - MAY 2024",
    description:
      "Contributed as one of the first engineers on their initial product, an MVP developed for the parent organization, focused on translating early design concepts into functional front-end implementations.",
  },
  {
    title: "Software Developer",
    company: "Sparklease Inc.",
    dates: "JAN - MAY 2023; SEP - DEC 2023",
    description:
      "Joined as an early engineer on the development of a car e-commerce company’s first WeChat application, spearheading key front-end features and enhancing back-end services to support localized content and analytics.",
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
  margin-bottom: 1.5rem;
}

.timeline {
  width: 70%;
}

@media (max-width: 600px) {
  .timeline {
    width: 100%;
    padding: 0 0.25rem;
    display: none;
  }
  .p-timeline-event-content h3 {
    font-size: 1.1rem;
  }
  .timeline-dates {
    font-size: 0.9rem;
  }
  .timeline-description {
    font-size: 0.98rem;
  }
}
</style>

<style>
.timeline .p-timeline-event-opposite {
  display: none;
}
</style>
