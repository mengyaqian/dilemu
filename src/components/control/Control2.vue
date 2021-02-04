<template>
  <div class="card-item">
    <div class="check"><van-switch :value="item.switchState" @input="v => {onInput(v,item)}" active-color="#db7271" inactive-color="#c5d1e5" /></div>
    <p class="card-title">{{item.name}}</p>
  </div>
</template>
<script>
export default {
  name: "Control2",
  props: {
    item: Object
  },
    methods:{
    onInput(checked,item){
       this.$emit('onInput',checked,item)
    }
  }
};
</script>
<style lang="less" scoped>
.card-item {
  margin-bottom: 10px;
  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 162px;
    height: 100px;
    background: url("../../assets/images/other-two-bg.png") no-repeat center;
    background-size: contain;
  }
  .card-title {
    color: #333;
    font-size: 12px;
    text-align: center;
    height: 12px;
    line-height: 12px;
    padding-top: 4px;
  }
}
</style>