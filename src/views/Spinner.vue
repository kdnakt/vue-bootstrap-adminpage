<template>
  <div class="about">
    <Logo />
    <h2>This is a spinner page</h2>
  </div>
  <div class="text-center">
    <b-spinner label="Spinning"></b-spinner>
    <b-spinner type="grow" label="Spinning"></b-spinner>
    <b-spinner variant="primary" label="Spinning"></b-spinner>
    <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
    <b-spinner variant="success" label="Spinning"></b-spinner>
    <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import { BSpinner } from 'bootstrap-vue-3';

@Options({
  components: {
    Logo,
    BSpinner,
  },
})
export default class Spinner extends Vue {}
</script>
