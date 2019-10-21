<template>
  <div class="mainbackground">
    <div class="header flex mb-p5">
      <div class="back text-center mr-p25">
        <div style="height:30%"></div>
        <div class="header-text text-center ml5" @click="goBack">返回</div>
        <div style="height:30%"></div>
      </div>

      <div>
        <div style="height:30%"></div>
        <div v-show="!key" class="header-text text-center">下訂飲料</div>
        <div v-show="key" class="header-text text-center">修改訂單</div>
        <div style="height:30%"></div>
      </div>
    </div>

    <form @submit.prevent="submit">
      <div class="flex ml-p2 order-text mb-p5">
        <div>訂購人：</div>
        <input v-model="name" style="width:70%; font-size:1.5rem;" type="text" required />
      </div>
      <div class="flex ml-p2 drink-text">
        <div class="mr-p5">{{drink.blackTea.name}} ({{drink.blackTea.price}} 元)：</div>
        <input v-model="blackTea" style="font-size:1.5rem; width:20%" type="text" required />
        <div class="ml-p5">杯</div>
      </div>
      <div class="flex ml-p2 drink-text">
        <div class="mr-p5">{{drink.greenTea.name}} ({{drink.greenTea.price}} 元)：</div>
        <input v-model="greenTea" style="font-size:1.5rem; width:20%" type="text" required />
        <div class="ml-p5">杯</div>
      </div>
      <div class="flex ml-p2 drink-text">
        <div class="mr-p5">{{drink.milkTea.name}} ({{drink.milkTea.price}} 元)：</div>
        <input v-model="milkTea" style="font-size:1.5rem; width:20%" type="text" required />
        <div class="ml-p5">杯</div>
      </div>
      <div class="flex ml-p2 order-text mb-p5">
        <div>總金額： {{sum}} 元</div>
      </div>
      <div style="height:5%">
        <button type="submit" style="width:100%; height:100%">送出</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["key"],
  name: "order",
  components: {},
  data() {
    return {
      name: "",
      blackTea: 0,
      greenTea: 0,
      milkTea: 0
    };
  },
  computed: {
    ...mapState({
      drink: state => state.drink.drink,
      order: state => state.drink.order
    }),
    sum() {
      return this.blackTea * 20 + this.greenTea * 20 + this.milkTea * 30;
    }
  },
  methods: {
    ...mapActions({
      addOrder: "drink/addOrder",
      editOrder: "drink/editOrder"
    }),
    goBack() {
      this.$router.go(-1);
    },
    submit() {
      const p = {
        name: this.name,
        blackTea: this.blackTea,
        greenTea: this.greenTea,
        milkTea: this.milkTea,
        sum: this.blackTea * 20 + this.greenTea * 20 + this.milkTea * 30
      };
      if (this.key) {
        this.editOrder({ data: p, key: this.key });
      } else {
        this.addOrder(p);
      }
      this.$router.go(-1);
    }
  },
  mounted() {
    //  console.log(this.order);
    if (this.key) {
      //   console.log(this.drink);
      this.name = this.order[this.key].name;
      this.blackTea = this.order[this.key].blackTea;
      this.greenTea = this.order[this.key].greenTea;
      this.milkTea = this.order[this.key].milkTea;
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

.back {
  color: #fff;
  height: 100%;
  font-size: 1.5rem;
}

.order-text {
  font-size: 1.5rem;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
}

.drink-text {
  font-size: 1.1rem;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
}
</style>
