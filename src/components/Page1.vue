<template>
  <div class="form-group">
    <label class="control-label">参加人数を入力してください</label>
    <select class="form-control mb-3" v-model="peopleNumber" @change="updateValue">
      <template v-for="(schema, index) in schemas">
        <option :value="schema.value" :key="index">
          {{ schema.label }}
        </option>
      </template>
    </select>
    <button v-if="peopleCount<=peopleNumber" class="btn btn-primary mx-2" @click="$emit('nextPage')">次へ</button>
  </div>
</template>

<script>
export default {
  name:'Page1',
  props: {
    peopleCount: Number,
    schemas:Array,
  },
  data() {
    return {
      peopleNumber:3
    }
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value)
    }
  },
  mounted() {
    this.$emit("input", this.schemas[0].value)
  }
}
</script>
