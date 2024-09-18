<template>
  <div
    ref="invoiceWrap"
    class="invoice-wrap flex flex-column"
    @click="checkClick"
  >
    {{ invoiceTotal }}
    <form
      class="invoice-content"
      @submit.prevent="submitForm"
    >
      <SpinnerItem v-show="loading" />
      <h1 v-if="!isEditInvoice">
        New Invoice
      </h1>
      <h1 v-else>
        Edit Invoice
      </h1>

      <!-- Bill From -->
      <div class="bill-from flex flex-column">
        <h4>Bill From</h4>
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Street Address</label>
          <input
            id="billerStreetAddress"
            v-model="billerStreetAddress"
            required
            type="text"
          >
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="billerCity">City</label>
            <input
              id="billerCity"
              v-model="billerCity"
              required
              type="text"
            >
          </div>
          <div class="input flex flex-column">
            <label for="billerZipCode">Zip Code</label>
            <input
              id="billerZipCode"
              v-model="billerZipCode"
              required
              type="text"
            >
          </div>
          <div class="input flex flex-column">
            <label for="billerCountry">Country</label>
            <input
              id="billerCountry"
              v-model="billerCountry"
              required
              type="text"
            >
          </div>
        </div>
      </div>

      <!-- Bill To -->
      <div class="bill-to flex flex-column">
        <h4>Bill To</h4>
        <div class="input flex flex-column">
          <label for="clientName">Client's Name</label>
          <input
            id="clientName"
            v-model="clientName"
            required
            type="text"
          >
        </div>
        <div class="input flex flex-column">
          <label for="clientEmail">Client's Email</label>
          <input
            id="clientEmail"
            v-model="clientEmail"
            required
            type="text"
          >
        </div>
        <div class="input flex flex-column">
          <label for="clientStreetAddress">Street Address</label>
          <input
            id="clientStreetAddress"
            v-model="clientStreetAddress"
            required
            type="text"
          >
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="clientCity">City</label>
            <input
              id="clientCity"
              v-model="clientCity"
              required
              type="text"
            >
          </div>
          <div class="input flex flex-column">
            <label for="clientZipCode">Zip Code</label>
            <input
              id="clientZipCode"
              v-model="clientZipCode"
              required
              type="text"
            >
          </div>
          <div class="input flex flex-column">
            <label for="clientCountry">Country</label>
            <input
              id="clientCountry"
              v-model="clientCountry"
              required
              type="text"
            >
          </div>
        </div>
      </div>
    </form>
  </div>
  <div
    ref="invoiceWrap"
    class="invoice-wrap flex flex-column"
    @click="checkClick"
  >
    <form
      class="invoice-content"
      @submit.prevent="submitForm"
    >
      <SpinnerItem v-show="loading" />
      <h1 v-if="!isEditInvoice">
        New Invoice
      </h1>
      <h1 v-else>
        Edit Invoice
      </h1>

      <!-- Bill From -->
      <div class="bill-from flex flex-column">
        <h4>Bill From</h4>
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Street Address</label>
          <input
            id="billerStreetAddress"
            v-model="billerStreetAddress"
            required
            type="text"
          >
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="billerCity">City</label>
            <input
              id="billerCity"
              v-model="billerCity"
              required
              type="text"
            >
          </div>
          <div class="input flex flex-column">
            <label for="billerZipCode">Zip Code</label>
            <input
              id="billerZipCode"
              v-model="billerZipCode"
              required
              type="text"
            >
          </div>
          <div class="input flex flex-column">
            <label for="billerCountry">Country</label>
            <input
              id="billerCountry"
              v-model="billerCountry"
              required
              type="text"
            >
          </div>
        </div>
      </div>

      <!-- Bill To -->
      <div class="bill-to flex flex-column">
        <h4>Bill To</h4>
        <div class="input flex flex-column">
          <label for="clientName">Client's Name</label>
          <input
            id="clientName"
            v-model="clientName"
            required
            type="text"
          >
        </div>
        <div class="input flex flex-column">
          <label for="clientEmail">Client's Email</label>
          <input
            id="clientEmail"
            v-model="clientEmail"
            required
            type="text"
          >
        </div>
        <div class="input flex flex-column">
          <label for="clientStreetAddress">Street Address</label>
          <input
            id="clientStreetAddress"
            v-model="clientStreetAddress"
            required
            type="text"
          >
        </div>
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="clientCity">City</label>
            <input
              id="clientCity"
              v-model="clientCity"
              required
              type="text"
            >
          </div>
          <div class="input flex flex-column">
            <label for="clientZipCode">Zip Code</label>
            <input
              id="clientZipCode"
              v-model="clientZipCode"
              required
              type="text"
            >
          </div>
          <div class="input flex flex-column">
            <label for="clientCountry">Country</label>
            <input
              id="clientCountry"
              v-model="clientCountry"
              required
              type="text"
            >
          </div>
        </div>
      </div>

      <!-- Invoice Work Details -->
      <div class="invoice-work flex flex-column">
        <div class="payment flex">
          <div class="input flex flex-column">
            <label for="invoiceDate">Invoice Date</label>
            <input
              id="invoiceDate"
              v-model="invoiceDate"
              disabled
              type="text"
            >
          </div>
          <div class="input flex flex-column">
            <label for="paymentDueDate">Payment Due</label>
            <input
              id="paymentDueDate"
              v-model="paymentDueDate"
              disabled
              type="text"
            >
          </div>
        </div>
        <div class="input flex flex-column">
          <label for="paymentTerms">Payment Terms</label>
          <select
            id="paymentTerms"
            v-model="paymentTerms"
            required
          >
            <option value="30">
              Net 30 Days
            </option>
            <option value="60">
              Net 60 Days
            </option>
          </select>
        </div>
        <div class="input flex flex-column">
          <label for="productDescription">Product Description</label>
          <input
            id="productDescription"
            v-model="productDescription"
            required
            type="text"
          >
        </div>
        <div class="work-items">
          <h3>Item List</h3>
          <table class="item-list">
            <tbody>
              <tr class="table-heading flex">
                <th class="item-name">
                  Item Name
                </th>
                <th class="qty">
                  Qty
                </th>
                <th class="price">
                  Price
                </th>
                <th class="total">
                  Toal
                </th>
              </tr>
              <tr
                v-for="(item, index) in invoiceItemList"
                :key="index"
                class="table-items flex"
              >
                <td class="item-name">
                  <input
                    v-model="item.itemName"
                    type="text"
                  >
                </td>
                <td class="qty">
                  <input
                    v-model="item.qty"
                    type="text"
                  >
                </td>
                <td class="price">
                  <input
                    v-model="item.price"
                    type="text"
                  >
                </td>
                <td class="total flex">
                  ${{ (item.total = item.qty * item.price) }}
                </td>
                <td>
                  <img
                    src="/assets/icon-delete.svg"
                    alt=""
                    @click="deleteInvoiceItem(item.id)"
                  >
                </td>
              </tr>
            </tbody>
          </table>

          <div
            class="flex button"
            @click="addNewInvoiceItem"
          >
            <img
              src="/assets/icon-plus.svg"
              alt=""
            >
            Add New Item
          </div>
        </div>
      </div>

      <!-- Save/Exit -->
      <div class="save flex">
        <div class="left">
          <button
            type="button"
            class="red"
            @click="closeInvoiceModal"
          >
            Cancel
          </button>
        </div>
        <div class="right flex">
          <button
            v-if="!isEditInvoice"
            type="submit"
            class="dark-purple"
            @click="saveDraft"
          >
            Save Draft
          </button>
          <button
            v-if="!isEditInvoice"
            type="submit"
            class="purple"
            @click="publishInvoice"
          >
            Create Invoice
          </button>
          <button
            v-if="isEditInvoice"
            type="sumbit"
            class="purple"
          >
            Update Invoice
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid';
import { mapMutations, mapState, mapActions } from 'vuex';

import SpinnerItem from './spinner-item.vue';
import { INVOICE_STATUSES, DB_PATHS }from '../constants/common';
import { addDataToDB, updateData } from "../firebase/firebaseInit";

export default {
  name: 'InvoiceModal',
  components: {
    SpinnerItem
  },
  data() {
    return {
      INVOICE_STATUSES,
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      docId: null,
      loading: null,
      invoiceId: null,
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoiceItemList: [],
      invoiceTotal: 0
    };
  },
  computed: {
    ...mapState(['isEditInvoice', 'currentInvoiceArray'])
  },
  watch: {
    paymentTerms() {
      const futureDate = new Date();
      this.paymentDueDateUnix = futureDate.setDate(futureDate.getDate() + parseInt(this.paymentTerms));
      this.paymentDueDate = this.prettifyDate(this.paymentDueDateUnix);
    }
  },
  created() {
    this.invoiceDateUnix = Date.now();
    this.invoiceDate = this.prettifyDate(this.invoiceDateUnix)

    if (this.isEditInvoice) {
      const currentInvoice = this.currentInvoiceArray[0];
      this.docId = currentInvoice.docId;
      this.invoiceId = currentInvoice.invoiceId;
      this.billerStreetAddress = currentInvoice.billerStreetAddress;
      this.billerCity = currentInvoice.billerCity;
      this.billerZipCode = currentInvoice.billerZipCode;
      this.billerCountry = currentInvoice.billerCountry;
      this.clientName = currentInvoice.clientName;
      this.clientEmail = currentInvoice.clientEmail;
      this.clientStreetAddress = currentInvoice.clientStreetAddress;
      this.clientCity = currentInvoice.clientCity;
      this.invoiceId = currentInvoice.invoiceId;
      this.clientZipCode = currentInvoice.clientZipCode;
      this.clientCountry = currentInvoice.clientCountry;
      this.invoiceDateUnix = currentInvoice.invoiceDateUnix;
      this.invoiceDate = currentInvoice.invoiceDate;
      this.paymentTerms = currentInvoice.paymentTerms;
      this.paymentDueDateUnix = currentInvoice.paymentDueDateUnix;
      this.paymentDueDate = currentInvoice.paymentDueDate;
      this.productDescription = currentInvoice.productDescription;
      this.status = currentInvoice.status;
      this.invoiceItemList = currentInvoice.invoiceItemList;
      this.invoiceTotal = currentInvoice.invoiceTotal;
    }
  },  
  methods: {
    ...mapMutations([
      'TOGGLE_INVOICE_MODAL',
      'TOGGLE_EDIT_INVOICE',
      'TOGGLE_INVOICE_CONFIRMATION_MODAL',
    ]),
    ...mapActions(['UPDATE_INVOICE', 'ADD_NEW_INVOICE']),
    prettifyDate(date) {
      return new Date(date).toLocaleDateString('en-us', this.dateOptions);
    },
    checkClick(e) {
      if (e.target === this.$refs.invoiceWrap) {
        this.TOGGLE_INVOICE_CONFIRMATION_MODAL();
      }
    },
    addNewInvoiceItem() {
      this.invoiceItemList.push({
        id: uuid(),
        itemName: '',
        qty: '',
        price: 0,
        total: 0
      });
    },
    calculateTotal() {
      this.invoiceTotal = this.invoiceItemList.reduce((accum, item) => {
        return accum + item.total
      }, 0)
    },
    deleteInvoiceItem(id) {
      this.invoiceItemList = this.invoiceItemList.filter((item) => item.id !== id);
    },
    publishInvoice() {
      this.status = INVOICE_STATUSES.PENDING;
    },
    saveDraft() {
      this.status = INVOICE_STATUSES.DRAFT;
    },
    async uploadInvoice() {
      if (!this.invoiceItemList.length) {
        alert('Please ensure you filled out work items!');
        return;
      }
      this.calculateTotal();

      this.loading = true;

      await addDataToDB({
        path: DB_PATHS.INVOICES, 
        data: {
          invoiceId: uuid(6),
          billerStreetAddress: this.billerStreetAddress,
          billerCity: this.billerCity,
          billerZipCode: this.billerZipCode,
          billerCountry: this.billerCountry,
          clientName: this.clientName,
          clientEmail: this.clientEmail,
          clientStreetAddress: this.clientStreetAddress,
          clientCity: this.clientCity,
          clientZipCode: this.clientZipCode,
          clientCountry: this.clientCountry,
          invoiceDate: this.invoiceDate,
          invoiceDateUnix: this.invoiceDateUnix,
          paymentTerms: this.paymentTerms,
          paymentDueDate: this.paymentDueDate,
          paymentDueDateUnix: this.paymentDueDateUnix,
          productDescription: this.productDescription,
          invoiceItemList: this.invoiceItemList,
          invoiceTotal: this.invoiceTotal,
          status: this.status,
        }
      })

      this.loading = false;

      this.ADD_NEW_INVOICE();
    },
    async updateInvoice() {
      if (this.invoiceItemList.length <= 0) {
        alert("Please ensure you filled out work items!");
        return;
      }

      this.loading = true;

      this.calculateTotal();

      await updateData({
        path: DB_PATHS.INVOICES,
        docId: this.docId,
        data: {
          billerStreetAddress: this.billerStreetAddress,
          billerCity: this.billerCity,
          billerZipCode: this.billerZipCode,
          billerCountry: this.billerCountry,
          clientName: this.clientName,
          clientEmail: this.clientEmail,
          clientStreetAddress: this.clientStreetAddress,
          clientCity: this.clientCity,
          invoiceId: this.invoiceId,
          clientZipCode: this.clientZipCode,
          clientCountry: this.clientCountry,
          paymentTerms: this.paymentTerms,
          paymentDueDate: this.paymentDueDate,
          paymentDueDateUnix: this.paymentDueDateUnix,
          productDescription: this.productDescription,
          invoiceItemList: this.invoiceItemList,
          invoiceTotal: this.invoiceTotal,
        }
      });

      this.loading = false;

      const data = {
        routeId: this.$route.params.invoiceId,
      };

      this.UPDATE_INVOICE(data);
    },
    closeInvoiceModal() {
      if (this.isEditInvoice) {
        this.TOGGLE_EDIT_INVOICE();
      }
      this.TOGGLE_INVOICE_MODAL();
    },
    submitForm() {
      if (this.isEditInvoice){
        this.updateInvoice();
      } else {
        this.uploadInvoice();
      }
    },
    setEdit() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .invoice-wrap {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (min-width: 900px) {
      left: 90px;
    }

    label {
      font-size: 12px;
      margin-bottom: 6px;
    }

    input,
    select {
      width: 100%;
      background-color: #1e2139;
      color: #fff;
      border-radius: 4px;
      padding: 12px 4px;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }

  .invoice-content {
      position: relative;
      padding: 56px;
      max-width: 700px;
      width: 100%;
      background-color: #141625;
      color: #fff;
      box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

      h1 {
        margin-bottom: 48px;
        color: #fff;
      }

      h3 {
        margin-bottom: 16px;
        font-size: 18px;
        color: #777f98;
      }

      h4 {
        color: #7c5dfa;
        font-size: 12px;
        margin-bottom: 24px;
      }

      // Bill To / Bill From
      .bill-to,
      .bill-from {
        margin-bottom: 48px;

        .location-details {
          gap: 16px;
          div {
            flex: 1;
          }
        }
      }

      // Invoice Work

      .invoice-work {
        .payment {
          gap: 24px;
          div {
            flex: 1;
          }
        }

        .work-items {
          .item-list {
            width: 100%;

            // Item Table Styling
            .table-heading,
            .table-items {
              gap: 16px;
              font-size: 12px;

              .item-name {
                flex-basis: 50%;
              }

              .qty {
                flex-basis: 10%;
              }

              .price {
                flex-basis: 20%;
              }

              .total {
                flex-basis: 20%;
                align-self: center;
              }
            }

            .table-heading {
              margin-bottom: 16px;

              th {
                text-align: left;
              }
            }

            .table-items {
              position: relative;
              margin-bottom: 24px;

              img {
                position: absolute;
                top: 15px;
                right: 0;
                width: 12px;
                height: 16px;
                cursor: pointer;
                transition: all ease-in 0.1s;
                &:hover {
                  scale: 1.2;
                }
              }
            }
          }

          .button {
            color: #fff;
            background-color: #252945;
            align-items: center;
            justify-content: center;
            width: 100%;

            img {
              margin-right: 4px;
            }
          }
        }
      }

      .save {
        margin-top: 60px;

        div {
          flex: 1;
        }

        .right {
          justify-content: flex-end;
        }
      }
    }

    .input {
      margin-bottom: 24px;
    }
</style>
