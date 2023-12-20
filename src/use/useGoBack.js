import { routerInstance } from "boot/router";

export default function useGoBack() {
  let pathArray = routerInstance.currentRoute.value.path.split("/");
  //   console.log("pathArray", pathArray);
  if (pathArray.length > 2) {
    pathArray.pop();
  }
  //   console.log("removed", pathArray);
  let newPath = pathArray.join("/");
  console.log(newPath);
  routerInstance.push(newPath);
}
