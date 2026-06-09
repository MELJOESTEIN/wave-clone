<script setup>
/**
 * DefaultLayout — TEMPLATE.
 * Le squelette de page : le "chrome" qui entoure tout contenu
 * (bandeau + navbar), puis un <slot> où la PAGE viendra s'insérer.
 * Aucune donnée métier ici → c'est juste la mise en page.
 */
import TheAnnouncementBar from '@/components/organisms/TheAnnouncementBar.vue'
import TheNavbar from '@/components/organisms/TheNavbar.vue'
</script>

<template>
  <TheAnnouncementBar />
  <TheNavbar />
  <main>
    <slot />
  </main>
</template>
