<template>
  <div class="form-group">
      <label class="control-label">参加人数を入力してください</label>
      <select name="people" class="form-control">
          <option value="3">3人</option>
          <option value="4">4人</option>
          <option value="5">5人</option>
          <option value="6">6人</option>
          <option value="7">7人</option>
          <option value="8">8人</option>
          <option value="9">9人</option>
          <option value="10">10人</option>
      </select>
      <router-link :to="{ name: 'page1', params: { value: 'test value' }}"><button class="btn btn-default">送信</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
