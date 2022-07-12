/**
 * Created by huangqihong on 2022/1/8.
 * 推送server酱的通知
 */

const axios = require('axios');

function send({ pushKey, title, desp }) {
  return new Promise((resolve, reject) => {

    console.log("server酱开始推送...");
    const option = {
      url: `https://sctapi.ftqq.com/${pushKey}.send`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        title,
        desp,
      },
    };
    axios(option).then((res) => {
      resolve();
      console.log('发送成功');
    }, (err) => {
      reject(err)
    });
  });
}

const config = require('./config.js');

let msg = '掘金：\n';
module.exports = function bot(message) {
  if(config.SERVERID) {
    msg += message + '\n';
    send({
      pushKey: config.SERVERID, // 企业 ID
      title: '掘金', // title
      desp: msg, // desp
    }).catch((error) => {
      console.log(`发送失败 => ${error}`);
    });
  }
};
