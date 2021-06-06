/// <reference types="vite/client" />
import { Store } from "vuex";

declare module '@vue/runtime-core' {
   interface State {
      [key: string]: any
   }
   interface ComponentCustomProperties {
      $store: Store<State>
   }
}
