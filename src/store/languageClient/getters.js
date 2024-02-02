import { LocalStorage } from "quasar";

export function getLangHTTP(state) {
  return LocalStorage.getItem("clientLanguage") ?? state.langHTTP;
}
