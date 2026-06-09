<script setup>
/**
 * StoreBadge — ATOME.
 * Bouton "télécharger sur le store". La prop `store` vaut "google" ou "apple".
 */
const props = defineProps({
  store: { type: String, required: true }, // 'google' | 'apple'
})

const labels = {
  google: { top: 'GET IT ON', bottom: 'Google Play' },
  apple: { top: 'Download on the', bottom: 'App Store' },
}
</script>

<template>
  <a href="#" class="store-badge">
    <span class="store-badge__icon">
      <!-- Triangle "play" multicolore -->
      <svg v-if="store === 'google'" viewBox="0 0 24 24" width="24" height="24">
        <path d="M3 2 L14 12 L3 22 Z" fill="#34A853" />
        <path d="M3 2 L14 12 L9 12 Z" fill="#4285F4" />
        <path d="M3 22 L14 12 L9 12 Z" fill="#FBBC05" />
        <path d="M14 12 L20 8.5 L20 15.5 Z" fill="#EA4335" />
      </svg>
      <!-- Pomme Apple -->
      <svg v-else viewBox="0 0 24 24" width="24" height="24" fill="#fff">
        <path d="M16.4 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.7-3.1.7-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.3 1 8.3.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3.2zM14.3 6.3c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z" />
      </svg>
    </span>
    <span class="store-badge__text">
      <small>{{ labels[store].top }}</small>
      <strong>{{ labels[store].bottom }}</strong>
    </span>
  </a>
</template>

<style scoped>
.store-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #000;
  color: #fff;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 10px;
}
.store-badge__icon {
  display: grid;
  place-items: center;
}
.store-badge__text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.store-badge__text small {
  font-size: 0.7rem;
  opacity: 0.92;
}
.store-badge__text strong {
  font-size: 1.25rem;
  font-weight: 700;
}
</style>
