<script setup>
/**
 * FeaturesSection — ORGANISME.
 * Titre + grille de 6 FeatureCard (molécules) générée par v-for sur les
 * données. C'est l'illustration directe de l'écran 2 de la maquette.
 */
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import FeatureCard from '@/components/molecules/FeatureCard.vue'
import { features } from '@/data/features.js'
</script>

<template>
  <section class="features">
    <div class="container">
      <BaseHeading :level="2" class="features__title">
        What you can do with Wave
      </BaseHeading>

      <div class="features__grid">
        <FeatureCard
          v-for="feature in features"
          :key="feature.id"
          :icon="feature.icon"
          :title="feature.title"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  background: var(--paper);
  padding-top: 96px;
  padding-bottom: 120px;
}
.features__title {
  font-size: clamp(34px, 4vw, 52px);
  margin-bottom: 56px;
}
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
