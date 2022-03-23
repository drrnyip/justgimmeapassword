<template>
  <div class="requirements">
    <ul class="list">
      <h3></h3>
      <h4>Generated passwords will always meet these password standards:</h4>
      <li class="item">easy to remember</li>
      <li class="item">more than 8 characters</li>
      <li class="item">less than 20 characters</li>
      <li class="item">contains uppercase letters</li>
      <li class="item">contains a number</li>
      <li class="item">contains a special character</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Preamble",
};
</script>

<style scoped>
.requirements {
  text-align: justify;
}
.list {
  list-style-type: none;
}
.item:before {
  content: "✓";
  color: green;
  margin-right: 10px;
}
</style>
