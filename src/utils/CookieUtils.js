/**
 * @description 获取cookie
 * @param {String} cookieName 待获取的Cookie名
 * @return {Object} cookie信息
 */
export function getCookie(cookieName) {
  let arr;
  const reg = new RegExp('(^| )' + cookieName + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) return arr[2];
  else return null;
}

/**
 * @description 获取cookie
 * @param {String} cookieName 待存储的Cookie名
 * @param {String} value 待存储的Cookie值
 * @param {String} expireMinutes 待存储的Cookie过期时间
 */
export function setCookie(cookieName, value, expireMinutes) {
  const millisecond = new Date().getTime();
  const expiresTime = new Date(millisecond + 60 * 1000 * expireMinutes);
  // const exdate = new Date();
  console.log(cookieName + ' exdate1 is ' + expiresTime);
  // console.log(cookieName + ' expiredays is ' + expiredays);
  // exdate.setDate(exdate.getDate() + expiredays);
  // console.log(cookieName + ' exdate2 is ' + exdate);
  document.cookie =
    cookieName +
    '=' +
    escape(value) +
    (expiresTime == null ? '' : ';expires=' + expiresTime.toGMTString());
  // document.cookie =
  //   cookieName +
  //   '=' +
  //   escape(value) +
  //   (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
}

/**
 * @description 获取cookie
 * @param {String} cookieName 待删除的Cookie名
 */
export function delCookie(cookieName) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(cookieName);
  if (cval != null)
    document.cookie = cookieName + '=' + cval + ';expires=' + exp.toGMTString();
}
