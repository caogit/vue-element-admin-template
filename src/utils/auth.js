import Cookies from 'js-cookie';

const TokenKey = 'TokenName';

export const getToken = function () {
  return Cookies.get(TokenKey);
};

export const setToken = function (val) {
  return Cookies.set(TokenKey, val, { expires: 1 });
};

export const removeToken = function () {
  Cookies.remove(TokenKey);
};

// /**
//  * setToken过期时间
//  * @param deposit 存入时间
//  * @param expires 过期时间

//  */
// export function setToken(parms) {
//   const obj = {
//     keys: '',
//     value: '',
//     expires: '',
//     deposit: '',
//   };

//   const setObj = Object.assign(obj, parms);
//   console.log(setObj);
//   // isSet过期时间
//   if (setObj.expires) {
//     window.localStorage.setItem(setObj.keys, JSON.stringify(setObj));
//   } else {
//     // 自己设置expires个时间
//     parms.expires = 10000;
//     window.localStorage.setItem(setObj.keys, JSON.stringify(setObj));
//   }
// }

// /**
//  * getToken过期时间
//  */
// export function getToken(names) {
//   let str = localStorage.getItem(names);
//   if (str) {
//     str = JSON.parse(localStorage.getItem(names));
//     let nowTime = new Date().getTime();
//     if (nowTime - str.deposit > str.expires) {
//       localStorage.removeItem(names);
//       return false;
//     } else {
//       return str.value;
//     }
//   } else {
//     return false;
//   }
// }
// /**
//  * 清空localStorage
//  */
// export function removelocalStorage() {
//   localStorage.clear();
// }
