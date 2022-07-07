<template>
  <el-select
    class="filter-item"
    v-model="val"
    :clearable="clearable"
    filterable
    placeholder="任务类型"
    @change="change"
  >
    <el-option
      v-for="(value, key) in tasks"
      :key="key"
      :label="value"
      :value="Number(key)"
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
      tasks: (state) => state.tasks,
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
    if (Object.keys(this.tasks).length == 0) {
      this.$store.dispatch("system/GetTasks");
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
