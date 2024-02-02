import { LocalStorage } from "quasar";

export function setLangHTTP(state, val) {
  state.langHTTP = val;
}

export function setLangLocal(state, val) {
  LocalStorage.set("clientLanguage", val);
}
