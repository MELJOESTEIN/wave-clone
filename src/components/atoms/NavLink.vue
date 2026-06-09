<script setup>
/**
 * NavLink — ATOME.
 * Un lien de navigation. La cible est passée via la prop `href`.
 */
defineProps({
  href: { type: String, default: '#' },
})
</script>

<template>
  <a :href="href" class="nav-link">
    <slot />
  </a>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: var(--wave-navy);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  transition: color 0.16s ease;
}
.nav-link:hover {
  color: var(--wave-cyan-deep);
}
</style>
