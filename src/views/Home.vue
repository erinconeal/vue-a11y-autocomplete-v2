<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Autocomplete :countries="countries" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import countries from '@/countries';
import Autocomplete from '@/components/Autocomplete.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  data() {
    return {
      countries: countries,
    };
  },
  components: {
    Autocomplete,
  },
});
</script>
