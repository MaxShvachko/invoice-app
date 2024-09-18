<template>
  <div
    v-if="!isMobile"
    class="app flex flex-column"
  >
    <SpinnerItem v-show="!isInvoicesLoaded" />
    <NavigationItem />
    <div class="app__content flex flex-column">
      <ModalItem
        v-show="isInvoiceConfirmationOpen"
        @close-modal="TOGGLE_INVOICE_CONFIRMATION_MODAL"
        @close-invoice="closeInvoice"
      />
      <Transition name="invoice">
        <div v-if="isInvoiceModalOpen">
          <InvoiceModal />
        </div>
      </Transition>
      <router-view />
    </div>
  </div>
  <div
    v-else
    class="mobile-message flex flex-column"
  >
    <h2>Sorry, this app is not sported on mobile devices</h2>
    <p>To use this app, please use a computer or tablet</p>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'; 

  import NavigationItem from './components/navigation-item.vue';
  import InvoiceModal from './components/invoice-modal.vue';
  import ModalItem from './components/modal-item.vue';
  import SpinnerItem from './components/spinner-item.vue';

  export default {
    components: {
      NavigationItem,
      InvoiceModal,
      ModalItem,
      SpinnerItem
    },
    data() {

      return {
        isMobile: false
      }
    },
    computed: {
      ...mapState([
        'isInvoiceModalOpen',
        'isInvoiceConfirmationOpen',
        'isEditInvoice',
        'isInvoicesLoaded'
    ])
    },
    created() {
      this.checkScreen()
      window.addEventListener('resize', this.checkScreen);

      this.GET_INVOICES();
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkScreen);
    },
    methods: {
      ...mapActions(['GET_INVOICES']),
      ...mapMutations([
        'TOGGLE_INVOICE_CONFIRMATION_MODAL',
        'TOGGLE_INVOICE_MODAL',
        'TOGGLE_EDIT_INVOICE'
      ]),
      checkScreen() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 750) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      },
      closeInvoice() {
        if (this.isEditInvoice) {
          this.TOGGLE_EDIT_INVOICE();
        }
        this.TOGGLE_INVOICE_CONFIRMATION_MODAL();
        this.TOGGLE_INVOICE_MODAL();
      }
    }
  }
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.app {
  background-color: #141625;
  min-height: 100vh;
  flex-direction: column;
  @media(min-width: 900px) {
    flex-direction: row !important;
  }

  &__content {
    padding: 0 20px;
    flex: 1;
    position: relative;
  }
}

.mobile-message {
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #141625;
  color: white;

  p {
    margin-top: 16px;
  }
}

// animated invoice

.invoice-enter-active,
.invoice-leave-active {
  transition: 0.8s ease all;
}

.invoice-enter-from,
.invoice-leave-to {
  transform: translateX(-700px);
}

button,
.button {
  cursor: pointer;
  padding: 16px 24px;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  color: #fff;
}

.dark-purple {
  background-color: #252945;
}

.red {
  background-color: #ec5757;

  &:hover {
    background-color: #e43232;
  }
}

.purple {
  background-color: #7c5dfa;

  &:hover {
    background-color: #5f39f7;
  }
}

.green {
  background-color: #33d69f;
}

.orange {
  background-color: #ff8f00;
}

// utility classes

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;

  @media (min-width: 900px) {
    padding-top: 72px;
  }
}

.nav-link {
  text-decoration: none;
  color: initial;
}

// Status Button Styling

.status-button {
  font-size: 12px;
  margin-right: 30px;
  align-items: center;
  padding: 8px 30px;
  border-radius: 10px;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
}

.paid {
  color: #33d69f;
  background-color: rgba(51, 214, 160, 0.1);
  &::before {
    background-color: #33d69f;
  }
}

.pending {
  color: #ff8f00;
  background-color: rgba(255, 145, 0, 0.1);

  &::before {
    background-color: #ff8f00;
  }
}

.draft {
  color: #dfe3fa;
  background-color: rgba(223, 227, 250, 0.1);

  &::before {
    background-color: #dfe3fa;
  }
}
</style>
