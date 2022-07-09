<template>
  <div style="padding: 0 8px">
    <svg
      :class="{ 'is-active': isActive }"
      class="hamburger"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Variant3">
        <path
          id="Vector"
          d="M20 4H4V20H20V4Z"
          fill="white"
          fill-opacity="0.01"
        />
        <path
          id="Vector_2"
          d="M16.2426 16.2426C15.1569 17.3284 13.6569 18 12 18C8.6863 18 6 15.3137 6 12C6 8.6863 8.6863 6 12 6C13.6569 6 15.1569 6.67157 16.2426 7.75737C16.7953 8.31003 18 9.66667 18 9.66667"
          stroke="#606266"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M18 6.66663V9.66663H15"
          stroke="#606266"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
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
  methods: {},
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
