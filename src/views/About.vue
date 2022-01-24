<template>
  <div class="about">
    <Logo />
    <h1>This is an about page</h1>
    <b-avatar variant="primary" text="KA" class="mr-3"></b-avatar>
    <span>KIDANI Akito</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import { BAvatar } from 'bootstrap-vue-3';

@Options({
  components: {
    Logo,
    BAvatar,
  },
})
export default class About extends Vue {}
</script>
