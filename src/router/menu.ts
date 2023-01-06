import router from "./index";
const routers = router.options.routes;

interface menuList {
  title: string;
  key: string;
  path: string;
  children?: menuList[]
}
//配置菜单列表顺序
const menuOrder:string[] = ['hoem2','home']

const routerObj = (obj: any) => {
  if (Array.isArray(obj)) {
    obj.forEach((e) => {
      routerObj(e);
    });
  } else {
    Object.assign(obj, obj.meta);
    delete obj.component;
    delete obj.meta;
    if (obj.children) {
      routerObj(obj.children);
    }
  }
};

const menu: menuList[] = [];
routers[2].children?.forEach((e:any) => {
  routerObj(e);
  let index = menuOrder.indexOf(e.name)
  if(index === -1){
    console.warn('menuOrder配置找不到',menuOrder)
    menu.push(e)
  }else{
    menu[index] = e
  }
  delete menuOrder[index]

});
// console.log(menu);

export default menu;
