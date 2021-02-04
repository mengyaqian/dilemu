<template>
  <h3 class="title_bar">
    <slot>{{text}}</slot>
    <slot name="description"></slot>
  </h3>
</template>

<script>
export default {
  props: {
    text: {
      default: "title",
      type: String
    }
  },
  computed: {}
};
</script>

<style lang="less">
.title_bar {
  line-height: 15px;
  font-size: 15px;
  color: #1279DC;
  font-weight: 400;
  padding-bottom: 10px;
  position: relative;
  &:before {
    content: "";
    display: inline-block;
    float: left;
    width: 3px;
    height: 12px;
    vertical-align: -1px;
    margin: 1px 8px 0px 0px;
    border-radius: 5px;
    transform: scale(1);
    transition: background-color 0.5s, transform 0.5s, -webkit-transform 0.5s;
    background-color: #1279DC;
  }
}
</style>