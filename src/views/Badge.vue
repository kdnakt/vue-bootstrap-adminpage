<template>
  <div class="about">
    <Logo />
    <h2>This is a badge page <b-badge>New</b-badge></h2>
    <div>
      <b-button variant="primary">
        Notifications <b-badge variant="light">4</b-badge>
      </b-button>
    </div>
    <div>
      <b-badge variant="primary">Primary</b-badge>
      <b-badge pill variant="secondary">Secondary</b-badge>
      <b-badge href="#" variant="success">Success</b-badge>
      <b-badge variant="danger">Danger</b-badge>
      <b-badge variant="warning">Warning</b-badge>
      <b-badge variant="info">Info</b-badge>
      <b-badge variant="light">Light</b-badge>
      <b-badge variant="dark">Dark</b-badge>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import { BBadge, BButton } from 'bootstrap-vue-3';

@Options({
  components: {
    Logo,
    BBadge,
    BButton,
  },
})
export default class Badge extends Vue {}
</script>
