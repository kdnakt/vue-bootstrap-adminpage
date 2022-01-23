<template>
  <div class="home">
    <Logo />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Logo from '@/components/Logo.vue';

@Options({
  components: {
    HelloWorld,
    Logo,
  },
})
export default class Home extends Vue {}
</script>
