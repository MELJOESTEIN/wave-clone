<script setup>
/**
 * TheLogo — ATOME.
 * Le logo de Wave : le penguin dans un carré cyan + le mot "wave".
 * Préfixe "The" car il est unique sur la page (une seule instance).
 * Le penguin est dessiné en SVG simplifié — pas besoin d'image externe.
 */
</script>

<template>
  <a href="#" class="logo" aria-label="Wave">
    <span class="logo__mark">
      <svg viewBox="0 0 48 48" width="34" height="34">
        <!-- corps -->
        <ellipse cx="24" cy="27" rx="13" ry="16" fill="#1b1b1b" />
        <!-- ventre -->
        <ellipse cx="24" cy="30" rx="8" ry="12" fill="#ffffff" />
        <!-- yeux -->
        <circle cx="20" cy="18" r="2.4" fill="#fff" />
        <circle cx="28" cy="18" r="2.4" fill="#fff" />
        <circle cx="20.4" cy="18.4" r="1.1" fill="#1b1b1b" />
        <circle cx="27.6" cy="18.4" r="1.1" fill="#1b1b1b" />
        <!-- bec -->
        <path d="M21.5 21 L24 24 L26.5 21 Z" fill="#F5A623" />
        <!-- pieds -->
        <path d="M18 41 l-3.5 3" stroke="#F5A623" stroke-width="2.4" stroke-linecap="round" />
        <path d="M30 41 l3.5 3" stroke="#F5A623" stroke-width="2.4" stroke-linecap="round" />
      </svg>
    </span>
    <span class="logo__word">wave</span>
  </a>
</template>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}
.logo__mark {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--wave-cyan);
  display: grid;
  place-items: center;
}
.logo__word {
  font-weight: 800;
  font-size: 1.7rem;
  color: #111;
  letter-spacing: -0.01em;
}
</style>
