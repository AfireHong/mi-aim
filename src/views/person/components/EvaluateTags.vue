<template>
  <div v-for="item in tags" :key="item.id" class="tag-item">
    {{ item.type }}
  </div>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss">
.tag-item {
  font-size: 13px;
  font-weight: 600;
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  margin: 4px;
  text-shadow: none;
  background-color: #23c6c8;
  color: #fff;
  display: inline-block;
  min-width: 10px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 1;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #21b9bb;
  }
}
</style>
