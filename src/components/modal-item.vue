<template>
  <div class="modal flex">
    <div class="modal-content">
      <p>Are you sure you want to exit? Your changes will not be saved?</p>
      <div class="actions flex">
        <button
          class="purple"
          @click="$emit('close-modal')"
        >
          Return
        </button>
        <button
          class="red"
          @click="$emit('close-invoice')"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: {
    'close-modal': null,
    'close-invoice': null
  },
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .modal-content {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-color: #252945;
    color: #fff;

    p {
      text-align: center;
    }

    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}
</style>
