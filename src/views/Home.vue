<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are {{ filteredInvoicesData?.length }} total invoices</span>
      </div>
      <div class="right flex">
        <button
          class="filter flex"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span>Filter by status 
            <span v-if="status">: <span style="text-transform: capitalize;">{{ status }}</span></span>
          </span>
          <img
            src="/assets/icon-arrow-down.svg"
            alt=""
          >
          <ul
            v-show="isMenuOpen"
            class="filter-menu"
          >
            <li @click="filterInvoicesByStatus(INVOICE_STATUSES.DRAFT)">
              Draft
            </li>
            <li @click="filterInvoicesByStatus(INVOICE_STATUSES.PENDING)">
              Pending
            </li>
            <li @click="filterInvoicesByStatus(INVOICE_STATUSES.PAID)">
              Paid
            </li>
            <li @click="filterInvoicesByStatus(null)">
              Clear Filter
            </li>
          </ul>
        </button>
        <button
          class="button flex"
          @click="TOGGLE_INVOICE_MODAL"
        >
          <div class="inner-button flex">
            <img
              src="/assets/icon-plus.svg"
              alt=""
            >
          </div>
          <span>New Invoice</span>
        </button>
      </div>
    </div>
    <!-- Invoices -->
    <div v-if="filteredInvoicesData.length > 0">
      <InvoiceItem
        v-for="(invoice, index) in filteredInvoicesData"
        :key="index"
        :invoice="invoice"
      />
    </div>
    <div
      v-else
      class="empty flex flex-column"
    >
      <img
        src="/assets/illustration-empty.svg"
        alt=""
      >
      <h3>There is nothing here</h3>
      <p>Create a new invoice by clicking the New Invoice button and get started</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import { INVOICE_STATUSES } from '../constants/common';
import InvoiceItem from '../components/invoice-item.vue';

export default {
  name: "VueHome",
  components: {
    InvoiceItem
  },
  data() {
    return {
      isMenuOpen: false,
      INVOICE_STATUSES,
      status: null,
    }
  },
  computed: {
    ...mapState(['invoiceData']),
    filteredInvoicesData() {
      if (this.status) {
        return this.invoiceData?.filter((invoice) => {
          return invoice.status === this.status;
      });
    } 
      return this.invoiceData;
    }
  },
  created() {
    this.status = this.$route.query.status;
    this.$watch(
      () => this.$route.query.status,
      (newStatus) => {
        this.status = newStatus;
      }
    )
  },
  methods: {
    ...mapMutations(['TOGGLE_INVOICE_MODAL']),
    filterInvoicesByStatus(status) {
      this.status = status;
      this.$router.push({ query: status ? { status } : {} })
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #fff;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;
        background-color: transparent;
        &:hover {
          background-color: #1e2139;
        }

        span {
          font-size: 12px;
        }
      }

      .filter {
        position: relative;
        margin-right: 16px;
        cursor: pointer;

        img {
          margin-left: 12px;
          width: 9px;
          height: 5px;
        }

        .filter-menu {
          width: 100%;
          position: absolute;
          top: 50px;
          left: 0;
          list-style: none;
          background-color: #1e2139;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

          li {
            cursor: pointer;
            font-size: 12px;
            border-radius: 5px;
            padding: 10px 20px;

            &:hover {
              color: #1e2139;
              background-color: #fff;
            }
          }
        }
      }

      .button {
        padding: 8px 10px;
        background-color: #7c5dfa;
        border-radius: 40px;

        &:hover {
          background-color: #6540f9;
        }

        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }

  .empty {
    margin-top: 160px;
    align-items: center;

    img {
      width: 214px;
      height: 200px;
    }

    h3 {
      font-size: 20px;
      margin-top: 40px;
    }

    p {
      text-align: center;
      max-width: 224px;
      font-size: 12px;
      font-weight: 300;
      margin-top: 16px;
    }
  }
}
</style>
