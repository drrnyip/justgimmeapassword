<template>
  <div class="requirements">
    <ul class="list">
      <h3></h3>
      <h4>Generated passwords will always meet these password standards:</h4>
      <li v-for="standard in standards" :key="standard" class="item">{{standard}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Preamble",
  data() {
    return {
      standards: [
        "easy to remember",
        "more than 8 characters",
        "maximum length of 20 characters",
        "contains uppercase letters",
        "contains a number",
        "contains a special character",
      ],
    }
  }
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
  color: #FFD369;
  margin-right: 10px;
}

@media (max-width: 1024px) {
  .list {
    padding-inline-start: 0px;
  }
}
</style>
