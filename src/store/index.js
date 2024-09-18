import { createStore } from 'vuex'
import { getMultipleData, deleteDataFromDB } from '../firebase/firebaseInit';
import { DB_PATHS } from '../constants/common';

export default createStore({
  state: {
    invoiceData: [],
    isInvoiceModalOpen: false,
    isInvoicesLoaded: false,
    isInvoiceConfirmationOpen: false,
    currentInvoice: null,
    isEditInvoice: null,
    currentInvoiceArray: [],
  },
  mutations: {
    TOGGLE_INVOICE_MODAL(state) {
      state.isInvoiceModalOpen = !state.isInvoiceModalOpen;
    },
    TOGGLE_INVOICE_CONFIRMATION_MODAL(state) {
      state.isInvoiceConfirmationOpen = !state.isInvoiceConfirmationOpen;
    },
    SET_INVOICE_DATA(state, payload) {
      state.invoiceData = payload;
    },
    INVOICES_LOADED(state) {
      state.isInvoicesLoaded = true;
    },
    SET_CURRENT_INVOICE(state, payload) {
      state.currentInvoiceArray = state.invoiceData.filter((invoice) => {
        return invoice.invoiceId === payload;
      });
    },
    TOGGLE_EDIT_INVOICE(state) {
      state.isEditInvoice = !state.isEditInvoice;
    },
    DELETE_INVOICE(state, payload) {
      state.invoiceData = state.invoiceData.filter((invoice) => invoice.docId !== payload);
    }
  },
  actions: {
    async GET_INVOICES({ commit }) {
      const results = await getMultipleData({ path: DB_PATHS.INVOICES })
      commit("SET_INVOICE_DATA", results);
      commit("INVOICES_LOADED");
    },
    async UPDATE_INVOICE({ commit, dispatch }, { routeId }) {
      await dispatch("GET_INVOICES");
      commit("TOGGLE_INVOICE_MODAL");
      commit("TOGGLE_EDIT_INVOICE");
      commit("SET_CURRENT_INVOICE", routeId);
    },
    async ADD_NEW_INVOICE({ commit, dispatch }) {
      await dispatch("GET_INVOICES");
      commit("TOGGLE_INVOICE_MODAL");
    },
    async DELETE_INVOICE({ dispatch }, { docId }) {
      await deleteDataFromDB({ path: DB_PATHS.INVOICES, docId });
      await dispatch("GET_INVOICES");
    }
  }
})
