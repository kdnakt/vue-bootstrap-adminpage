<template>
  <div class="about">
    <Logo />
    <h2>This is a form group page</h2>
  </div>
  <div>
    <b-form-group
      id="fieldset-1"
      description="Let us know your name."
      label="Enter your name"
      label-for="input-1"
      valid-feedback="Thank you!"
      :invalid-feedback="this.invalidFeedback"
      :state="this.state"
    >
      <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
    </b-form-group>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Logo from '@/components/Logo.vue';
import { BFormGroup } from 'bootstrap-vue-3';

@Options({
  components: {
    Logo,
    BFormGroup,
  },
})
export default class FormGroup extends Vue {
  name = ''

  get state() {
    return this.name.length >= 4;
  }

  get invalidFeedback() {
    if (this.name.length > 0) {
      return 'Enter at least 4 characters.';
    }
    return 'Please enter something.';
  }
}
</script>
