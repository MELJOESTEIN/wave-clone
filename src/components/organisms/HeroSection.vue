<script setup>
/**
 * HeroSection — ORGANISME.
 * Le bloc bleu d'accueil : titre + sous-titre + boutons stores (molécule)
 * à gauche, et le mockup du téléphone (organisme) à droite.
 */
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import StoreButtons from '@/components/molecules/StoreButtons.vue'
import PhoneMockup from '@/components/organisms/PhoneMockup.vue'
</script>

<template>
  <section class="hero">
    <div class="hero__inner container">
      <div class="hero__content">
        <BaseHeading :level="1" class="hero__title">
          Mobile money,<br />reinvented
        </BaseHeading>
        <BaseText class="hero__subtitle">
          Deposit, withdraw, pay bills for free.<br />Send for only 1%.
        </BaseText>
        <StoreButtons class="hero__stores" />
      </div>

      <div class="hero__visual">
        <PhoneMockup />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background: var(--wave-cyan);
  overflow: hidden;
}
.hero__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  padding-top: 80px;
  padding-bottom: 80px;
}
.hero__title {
  color: #fff;
  font-size: clamp(48px, 6vw, 84px);
}
.hero__subtitle {
  color: #fff;
  font-size: 1.5rem;
  margin-top: 28px;
}
.hero__stores {
  margin-top: 40px;
}
.hero__visual {
  display: flex;
  justify-content: center;
}

/* Vagues décoratives (indigo) en bas à droite */
.hero::after {
  content: "";
  position: absolute;
  right: -120px;
  bottom: -160px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    transparent 0 40%,
    var(--wave-indigo) 40% 44%,
    transparent 44% 54%,
    var(--wave-indigo) 54% 58%,
    transparent 58% 68%,
    var(--wave-indigo) 68% 72%,
    transparent 72%
  );
  opacity: 0.55;
  z-index: 1;
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
  }
  .hero__visual {
    justify-content: flex-start;
  }
}
</style>
