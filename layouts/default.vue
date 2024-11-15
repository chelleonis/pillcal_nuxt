<template>
  <h1>hello worldo!</h1>
  <slot />
</template>

<script setup>
useHead({
  title: "Pill Calendar Webapp",
});

const route = useRoute();
</script>
