/**
 * Created by huangqihong on 2022/1/7.
 */
const serverNotify = require('./serverNotify.js');

module.exports = function message(msg) {
  serverNotify(msg)
};
