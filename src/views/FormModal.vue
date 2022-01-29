<template>
  <div class="about">
    <Logo />
    <h2>This is a form modal page</h2>
  </div>
  <div>
    <b-button @click="show = true">Open Modal</b-button>

    <div class="mt-3">
      Submitted Names:
      <div v-if="submittedNames.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="name in submittedNames" v-bind:key="name">{{ name }}</li>
      </ul>
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      v-model="show"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="!!name"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="!!name"
            required
          ></b-form-input>
        </b-form-group>
      </form>
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
export default class FormModal extends Vue {
  show = false;

  name = '';

  submittedNames: string[] = [];

  $refs = {
    form: HTMLFormElement,
  }

  checkFormValidity(): boolean {
    const valid = !!this.name;
    return valid;
  }

  resetModal(): void {
    this.name = '';
  }

  handleOk(e: any): void {
    // TODO: e.preventDefault();
    // Trigger submit handler
    this.handleSubmit();
  }

  handleSubmit(): void {
    // Exit when the form isn't valid
    if (!this.checkFormValidity()) {
      return;
    }
    // Push the name to submitted names
    this.submittedNames.push(this.name);
    // Hide the modal manually
    this.$nextTick(() => {
      this.show = false;
    });
  }
}
</script>
