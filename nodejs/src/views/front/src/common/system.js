export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除"],"menu":"社长","menuJump":"列表","tableName":"shezhang"}],"menu":"社长管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","删除","审核","修改","查看评论"],"menu":"社团信息","menuJump":"列表","tableName":"shetuanxinxi"}],"menu":"社团信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","删除"],"menu":"社团申请","menuJump":"列表","tableName":"shetuanshenqing"}],"menu":"社团申请管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","修改","删除","审核","查看评论"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","删除"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"社团类型","menuJump":"列表","tableName":"shetuanleixing"}],"menu":"社团类型管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"场地信息","menuJump":"列表","tableName":"changdixinxi"}],"menu":"场地信息管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","删除","审核"],"menu":"场地申请","menuJump":"列表","tableName":"changdishenqing"}],"menu":"场地申请管理"},{"child":[{"appFrontIcon":"cuIcon-goodsnew","buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"},{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","社团申请"],"menu":"社团信息列表","menuJump":"列表","tableName":"shetuanxinxi"}],"menu":"社团信息模块"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","活动报名"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"社团申请","menuJump":"列表","tableName":"shetuanshenqing"}],"menu":"社团申请管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","社团申请"],"menu":"社团信息列表","menuJump":"列表","tableName":"shetuanxinxi"}],"menu":"社团信息模块"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","活动报名"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除","查看评论"],"menu":"社团信息","menuJump":"列表","tableName":"shetuanxinxi"}],"menu":"社团信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","删除","审核"],"menu":"社团申请","menuJump":"列表","tableName":"shetuanshenqing"}],"menu":"社团申请管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","修改","删除","查看评论"],"menu":"社团活动","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","删除","审核"],"menu":"活动报名","menuJump":"列表","tableName":"huodongbaoming"}],"menu":"活动报名管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","场地申请"],"menu":"场地信息","menuJump":"列表","tableName":"changdixinxi"}],"menu":"场地信息管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看"],"menu":"场地申请","menuJump":"列表","tableName":"changdishenqing"}],"menu":"场地申请管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","社团申请"],"menu":"社团信息列表","menuJump":"列表","tableName":"shetuanxinxi"}],"menu":"社团信息模块"},{"child":[{"appFrontIcon":"cuIcon-pay","buttons":["查看","活动报名"],"menu":"社团活动列表","menuJump":"列表","tableName":"shetuanhuodong"}],"menu":"社团活动模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"社长","tableName":"shezhang"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
