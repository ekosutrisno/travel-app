import { InjectionKey } from "vue";
import { createLogger, useStore as baseUseStore, createStore, Store } from "vuex";
import { context, loadModules, modules } from "./modules";

const IS_DEV = process.env.NODE_ENV == 'development';

export interface State {
   [key: string]: any
}


export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
   modules,
   strict: IS_DEV,
   plugins: IS_DEV ? [createLogger()] : []
});

export function useStore() {
   return baseUseStore();
}

if (import.meta.hot) {
   import.meta.hot?.accept(context.id, () => {
      const { modules } = loadModules()
      store.hotUpdate({
         modules
      })
   })
}

export default store;