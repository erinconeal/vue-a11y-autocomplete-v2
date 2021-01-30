<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Autocomplete />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Autocomplete from "@/components/Autocomplete.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Autocomplete
  }
});
</script>
