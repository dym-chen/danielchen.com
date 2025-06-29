import { createRouter, createWebHistory } from 'vue-router'
import About from './views/About.vue'
import Project from './views/Project.vue'

const routes = [
    {
        path: '/',
        name: 'About',
        component: About
    },
    {
        path: '/project',
        name: 'Project',
        component: Project
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router