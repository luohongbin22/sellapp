<template>
    <div>
        购物车
    </div>
</template>

<script>
    export default {
     created(){
          console.log( this.$store.getters.getGoodslist);
     }
    }
</script>

<style lang="less" scoped>

</style>