import { boot } from "quasar/wrappers";
import { useStoreNavigacija } from "../stores/storeNavigacija";

let routerInstance = null;
const navigacija = useStoreNavigacija();

export default boot(({ router, store }) => {
  routerInstance = router;
  router.afterEach((to, from) => {
    let fromRootPath = `/${from.path.split("/")[1]}`,
      toRootPath = `/${to.path.split("/")[1]}`;

    // if we navigated to a different 'section'
    if (fromRootPath !== toRootPath) {
      navigacija.pageTransition = false;
      // don't use page transition
    }
    // we navigated to the same section
    else {
      navigacija.pageTransition = true;
      // use page transition

      if (from.path === to.path && to.path !== toRootPath) {
        router.push(toRootPath);
      }
    }

    updateNavItem();

    function updateNavItem() {
      const navItemIndex = navigacija.navItems.findIndex(
        (navItem) => navItem.root === toRootPath
      );
      // console.log("navItemIndex", navItemIndex);
      navigacija.navItems[navItemIndex].to === to.path;
    }
  });
});

export { routerInstance };
