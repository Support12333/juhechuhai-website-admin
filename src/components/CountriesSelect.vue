<template>
  <el-select
    class="filter-item"
    v-model="val"
    :clearable="clearable"
    filterable
    placeholder="国家"
    @change="change"
  >
    <el-option
      v-for="item in countries"
      :key="item.id"
      :label="item.name"
      :value="item.code"
    >
    </el-option>
  </el-select>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    // 当前输入的值
    value: [String, Boolean, Number],
    // 是否可以清空选项
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "value",
    event: "UpdateValue",
  },
  data() {
    return {
      val: this.value || null,
    };
  },
  computed: {
    ...mapState("system", {
      countries: (state) => state.countries,
    }),
  },
  watch: {
    value() {
      this.val = this.value;
    },
    val() {
      this.$emit("UpdateValue", this.val);
    },
  },
  created() {
    if (this.countries.length == 0) {
      this.$store.dispatch("system/GetCountries");
    }
  },
  methods: {
    // 选中值发生变化时触发
    change(event) {
      this.$emit("UpdateValue", event);
      this.$emit("change", event);
    },
  },
};
</script>
