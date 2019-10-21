<template>
  <div class="mainbackground">
    <div class="header">
      <div style="height:30%"></div>
      <div class="header-text text-center">17飲料訂購</div>
      <div style="height:30%"></div>
    </div>

    <div class="order-list">
      <div class="flex">
        <div class="mr10">{{drink.blackTea.name}} :</div>
        <div>{{drink.blackTea.price}} 元</div>
      </div>
      <div class="flex">
        <div class="mr10">{{drink.greenTea.name}} :</div>
        <div>{{drink.greenTea.price}} 元</div>
      </div>
      <div class="flex">
        <div class="mr10">{{drink.milkTea.name}} :</div>
        <div>{{drink.milkTea.price}} 元</div>
      </div>
    </div>

    <div style="height:5%">
      <button style="width:100%; height:100%" @click="makeOrder">訂購飲料</button>
    </div>

    <div v-for="(list,key) in order" :key="key">
      <div class="order-list">
        <div class="mb-p5">訂購人：{{list.name}}</div>
        <div class="flex child-between mb-p5">
          <div>紅茶：{{list.blackTea}}杯</div>
          <div>綠茶：{{list.greenTea}}杯</div>
          <div>奶茶：{{list.milkTea}}杯</div>
        </div>
        <div class="mb-p5">總金額：{{list.sum}}</div>
        <div class="flex child-space-around text-center">
          <div style="width:50%; background-color:orange" @click="editOrder(key)">修改</div>
          <div style="width:50%; background-color:red" @click="deleOrder(key)">刪除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "home",
  components: {},
  computed: {
    ...mapState({
      drink: state => state.drink.drink,
      order: state => state.drink.order
    })
  },
  methods: {
    ...mapActions({
      deleteOrder: "drink/deleteOrder"
    }),
    makeOrder() {
      this.$router.push("/order");
    },
    editOrder(key) {
      this.$router.push("/order/" + key);
    },
    deleOrder(key) {
      this.deleteOrder(key);
    }
  }
};
</script>

<style>
.header {
  height: 8%;
  background-color: black;
}

.header-text {
  color: #fff;
  height: 40%;
  font-size: 1.5rem;
}
</style>
