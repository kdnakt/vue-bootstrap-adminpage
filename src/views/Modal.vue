<template>
  <div class="about">
    <Logo />
    <h2>This is a modal page</h2>
  </div>
  <div>
    <b-button @click="showModal = !showModal">Launch demo modal</b-button>

    <b-modal title="BootstrapVue" v-model="showModal">
      <p>Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import { BModal } from 'bootstrap-vue-3';

@Options({
  components: {
    Logo,
    BModal,
  },
})
export default class Modal extends Vue {
  showModal = false
}
</script>
