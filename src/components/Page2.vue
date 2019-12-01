<template>
  <div class="form-group">
    <label class="control-label">{{peopleNum}}番目の方、名前を入力してください</label>
    <input class="form-control mb-3" :type="type" :value="peopleName" :placeholder="placeholder" @input="updateValue">
  </div>
</template>

<script>
export default {
  name: 'Page2',
  props: {
    peopleNum: Number,
    type: String,
    peopleName: String,
    placeholder: String
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value)
    }
  }
}
</script>
