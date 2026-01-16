import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Comvace Curriculum Support",
  description: "Beginner-friendly explanations for HTML/CSS/Vue/TypeScript",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      {
        text: 'HTML/CSS',
        items: [
          { text: 'Introduction', link: '/html/' },
          { text: 'CSS Basics', link: '/css/' }
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: 'Getting Started', link: '/vue/' }
        ]
      },
      {
        text: 'TypeScript',
        items: [
          { text: 'TypeScript Basics', link: '/typescript/' }
        ]
      },
      {
        text: 'Common Errors',
        items: [
          { text: 'Troubleshooting', link: '/errors/' }
        ]
      }
    ]
  }
})