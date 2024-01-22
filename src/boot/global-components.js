import { boot } from "quasar/wrappers";
import homePage from "../components/Page/homePage.vue";
import pageHeader from "../components/Page/pageHeader.vue";
import pageHeaderBtnBack from "../components/Page/pageHeaderBtnBack.vue";
// import pageSelGruNamBtn from "../components/Page/pageSelGruNamBtn.vue";
import mainHeader from "../components/Page/mainHeader.vue";
import pageBody from "../components/Page/pageBody.vue";

const globalComponents = {
  page: homePage,
  pageHeader: pageHeader,
  pageBody: pageBody,
  pageHeaderBtnBack: pageHeaderBtnBack,
  // pageSelGruNamBtn: pageSelGruNamBtn,
  mainHeader: mainHeader,
};

export default boot(async ({ app }) => {
  for (const key in globalComponents) {
    app.component(key, globalComponents[key]);
  }
});
