<template>
  <div class="about">
    <Logo />
    <h2>This is a modal page</h2>
  </div>
  <div>
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal classList="" id="modal-1" title="BootstrapVue">
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
export default class Modal extends Vue {}
</script>
