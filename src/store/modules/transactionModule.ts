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
      setTransaction({ commit }, userId: number) {
         apiService.get(`/transaction/${userId}/transactions`)
            .then((res: AxiosResponse<Transaction[]>) => {
               commit('SET_TRANSACTIONS', res.data);
            })
      }
   }
}

export default transactionModule;