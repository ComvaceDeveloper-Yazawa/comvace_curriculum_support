<template>
  <div class="demo-preview">
    <iframe :src="src" :style="iframeStyle" title="デモプレビュー" loading="lazy"></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  html: string
  css?: string
  width?: string | number
  height?: string | number
}>()

const srcdoc = computed(() => {
  if (!props.css) return props.html

  const html = props.html
  if (/<html[\s>]/i.test(html)) {
    if (/<\/head>/i.test(html)) {
      return html.replace(/<\/head>/i, `<style>${props.css}</style></head>`)
    }
    return html.replace(
      /<html([^>]*)>/i,
      `<html$1><head><meta charset="UTF-8" /><style>${props.css}</style></head>`
    )
  }

  return `<!doctype html><html lang="ja"><head><meta charset="UTF-8" /><style>${props.css}</style></head><body>${html}</body></html>`
})

const src = computed(() => {
  const encoded = encodeURIComponent(srcdoc.value)
  return `data:text/html;charset=utf-8,${encoded}`
})

const iframeStyle = computed(() => {
  const width =
    props.width === undefined ? '100%' : typeof props.width === 'number' ? `${props.width}px` : props.width
  const height =
    props.height === undefined ? '360px' : typeof props.height === 'number' ? `${props.height}px` : props.height
  return { width, height }
})
</script>

<style scoped>
.demo-preview {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.demo-preview iframe {
  border: 0;
  display: block;
  margin: 0 auto;
}
</style>
