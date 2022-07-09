<template>
  <div style="padding: 0 8px" @click="toggleClick">
    <!-- <svg
      :class="{ 'is-active': isActive }"
      class="hamburger"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
    >
      <path
        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
      />
    </svg> -->

    <svg
      :class="{ 'is-active': isActive }"
      class="hamburger"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="menu-unfold">
        <g id="Union">
          <path
            d="M21.0008 18.0207L3.00173 18L3 19.5L20.9991 19.5207L21.0008 18.0207Z"
            fill="#606266"
          />
          <path
            d="M12.75 11.25L3.00086 11.25L3.00086 12.75L12.75 12.75V11.25Z"
            fill="#606266"
          />
          <path
            d="M21.0008 4.52071L3.00173 4.5L3 6L20.9991 6.02071L21.0008 4.52071Z"
            fill="#606266"
          />
          <path
            d="M15.05 12.6104C14.65 12.3104 14.65 11.7104 15.05 11.4104L19.8 7.8479C20.2944 7.47708 21 7.82987 21 8.4479L21 15.5729C21 16.1909 20.2944 16.5437 19.8 16.1729L15.05 12.6104ZM19.5 14.0729L19.5 9.9479L16.75 12.0104L19.5 14.0729Z"
            fill="#606266"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleClick() {
      this.$emit("toggleClick");
    },
  },
};
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
}

.hamburger.is-active {
  /* transform: rotate(180deg); */
}
</style>
