import { createStore } from 'vuex'
import { getMultipleData } from '../firebase/firebaseInit';

export default createStore({
  state: {
    invoiceData: [],
    isInvoiceModalOpen: false,
    isInvoicesLoaded: false,
    isInvoiceConfirmationOpen: false,
  },
  mutations: {
    TOGGLE_INVOICE_MODAL(state) {
      state.isInvoiceModalOpen = !state.isInvoiceModalOpen;
    },
    TOGGLE_INVOICE_CONFIRMATION_MODAL(state) {
      state.isInvoiceConfirmationOpen = !state.isInvoiceConfirmationOpen;
    },
    SET_INVOICE_DATA(state, payload) {
      state.invoiceData.push(payload);
    },
    INVOICES_LOADED(state) {
      state.isInvoicesLoaded = true;
    }
  },
  actions: {
    async GET_INVOICES({ commit, state }) {
      const results = await getMultipleData({ path: 'invoices' })

      results?.forEach((doc) => {
        if (!state.invoiceData.some((invoice) => invoice.docId === doc.id)) {
          const data = {
            docId: doc.id,
            invoiceId: doc.invoiceId,
            billerStreetAddress: doc.billerStreetAddress,
            billerCity: doc.billerCity,
            billerZipCode: doc.billerZipCode,
            billerCountry: doc.billerCountry,
            clientName: doc.clientName,
            clientEmail: doc.clientEmail,
            clientStreetAddress: doc.clientStreetAddress,
            clientCity: doc.clientCity,
            clientZipCode: doc.clientZipCode,
            clientCountry: doc.clientCountry,
            invoiceDateUnix: doc.invoiceDateUnix,
            invoiceDate: doc.invoiceDate,
            paymentTerms: doc.paymentTerms,
            paymentDueDateUnix: doc.paymentDueDateUnix,
            paymentDueDate: doc.paymentDueDate,
            productDescription: doc.productDescription,
            invoiceItemList: doc.invoiceItemList,
            invoiceTotal: doc.invoiceTotal,
            invoicePending: doc.invoicePending,
            invoiceDraft: doc.invoiceDraft,
            invoicePaid: doc.invoicePaid,
          };
          commit("SET_INVOICE_DATA", data);
        }
      });
      commit("INVOICES_LOADED");
    },
  },
  modules: {
  }
})
