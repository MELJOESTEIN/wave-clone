<script setup>
/**
 * PhoneMockup — ORGANISME.
 * Reproduit l'écran de l'app Wave : solde, carte QR, boutons d'action
 * (molécules ActionButton) et historique (molécules TransactionRow).
 */
import ActionButton from '@/components/molecules/ActionButton.vue'
import TransactionRow from '@/components/molecules/TransactionRow.vue'
import { transactions } from '@/data/transactions.js'

// Les 3 actions du bas de l'écran. Liées à l'UI → définies ici.
const actions = [
  { icon: 'user', label: 'SEND', color: 'var(--wave-indigo)' },
  { icon: 'cart', label: 'PAYMENTS', color: 'var(--wave-orange)' },
  { icon: 'phone', label: 'AIRTIME', color: 'var(--wave-cyan-deep)' },
]
</script>

<template>
  <div class="phone">
    <div class="phone__screen">
      <!-- En-tête : réglages + solde -->
      <div class="phone__top">
        <span class="phone__gear">⚙</span>
        <div class="phone__balance">120.000<small>F</small></div>
      </div>

      <!-- Carte QR -->
      <div class="phone__qr">
        <div class="phone__qr-code"></div>
        <span class="phone__scan">⊡ Scan</span>
      </div>
    </div>

    <!-- Barre d'actions -->
    <div class="phone__actions">
      <ActionButton
        v-for="a in actions"
        :key="a.label"
        :icon="a.icon"
        :label="a.label"
        :color="a.color"
      />
    </div>

    <!-- Historique -->
    <div class="phone__history">
      <TransactionRow
        v-for="t in transactions"
        :key="t.id"
        :label="t.label"
        :date="t.date"
        :amount="t.amount"
        :negative="t.negative"
      />
    </div>
  </div>
</template>

<style scoped>
.phone {
  width: 340px;
  background: #fff;
  border-radius: 38px;
  padding: 14px;
  box-shadow: 0 40px 80px -30px rgba(20, 16, 75, 0.5);
}
.phone__screen {
  background: var(--wave-purple);
  border-radius: 28px 28px 16px 16px;
  padding: 22px;
  color: #fff;
}
.phone__top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}
.phone__gear {
  font-size: 1.3rem;
}
.phone__balance {
  font-size: 2rem;
  font-weight: 800;
}
.phone__balance small {
  font-size: 1.1rem;
}
.phone__qr {
  background: var(--wave-cyan);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.phone__qr-code {
  width: 130px;
  height: 130px;
  border-radius: 8px;
  background:
    repeating-conic-gradient(#14104b 0% 25%, #fff 0% 50%) 0 / 22px 22px;
  background-color: #fff;
  border: 8px solid #fff;
}
.phone__scan {
  font-size: 0.8rem;
  font-weight: 700;
  background: #fff;
  color: var(--wave-navy);
  padding: 4px 12px;
  border-radius: 999px;
}
.phone__actions {
  display: flex;
  gap: 2px;
  background: #fff;
  border-radius: 14px;
  margin-top: 12px;
  overflow: hidden;
}
.phone__history {
  padding: 8px 18px 4px;
}
</style>
