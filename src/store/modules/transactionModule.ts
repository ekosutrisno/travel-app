import { AxiosResponse } from "axios";
import { Module } from "vuex";
import { State } from "..";
import { Transaction } from "../../@types/interface";
import apiService from '../../config/axiosConfig';

interface StoreTransaction {
   transactions: Transaction[]
}

const transactionModule: Module<StoreTransaction, State> = {
   namespaced: true,
   state() {
      return {
         transactions: []
      }
   },
   mutations: {
      SET_TRANSACTIONS: (state: StoreTransaction, transactions: Transaction[]) => state.transactions = transactions
   },
   actions: {
      setTransaction({ commit }, userId: number): void {
         apiService.get(`/transaction/${userId}/transactions`)
            .then((res: AxiosResponse<Transaction[]>) => {
               var dataShorted: Transaction[] = res.data
               .sort((a: Transaction, b: Transaction) => a.tanggal > b.tanggal ? 1 : ((b.tanggal > a.tanggal) ? -1 : 0))
               .reverse();

               commit('SET_TRANSACTIONS', dataShorted);
            });
      },

      async checkoutAction({ dispatch }, payload: any): Promise<void> {
         await apiService.post(`/transaction`, payload)
            .then(() => {
               dispatch('setTransaction', payload.userId);
            });
      }
   }
}

export default transactionModule;