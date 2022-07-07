<template>
  <el-select
    class="filter-item"
    v-model="val"
    :multiple="multiple"
    :clearable="clearable"
    filterable
    placeholder="APP应用包"
    @change="change"
  >
    <el-option
      v-for="item in applys"
      :key="item.id"
      :label="item.name"
      :value="item.id"
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
    // 是否多选
    multiple: {
      type: Boolean,
      default: false,
    },
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
      applys: (state) => state.applys,
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
    if (this.applys.length == 0) {
      this.$store.dispatch("system/GetApplys");
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
