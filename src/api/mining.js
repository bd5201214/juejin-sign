/**
 * Created by huangqihong on 2022/1/8.
 */
const request = require('../utils/request');
const { TOKEN, COOKIE } =  require('../utils/config.js');

module.exports = function () {
  return {
    getUser: function () {
      return request({
        url: 'https://api.juejin.cn/user_api/v1/user/get',
        method: 'get',
        headers: {
          cookie: COOKIE,
        },
      });
    },
    /**
     * 开始
     */
    start: function (params, uid, time) {
      return request({
        url: `https://juejin-game.bytedance.com/game/sea-gold/game/start?uid=${uid}&time=${time}`,
        method: "post",
        data: params,
        headers: {
          authorization: TOKEN,
        },
      });
    },
    /**
     * 获取游戏info
     */
    getInfo: function (uid, time) {
      console.log(uid, time);
      return request({
        url: `https://juejin-game.bytedance.com/game/sea-gold/home/info?uid=${uid}&time=${time}`,
        method: "get",
        headers: {
          'authorization': TOKEN,
        },
      });
    },
    /**
     * 结束
     */
    over: function (params, uid, time) {
      return request({
        url: `https://juejin-game.bytedance.com/game/sea-gold/game/over?uid=${uid}&time=${time}`,
        method: "post",
        data: params,
        headers: {
          authorization: TOKEN,
        },
      });
    },
    /**
     * 换图重来
     */
    freshMap: function (params, uid, time) {
      return request({
        url: `https://juejin-game.bytedance.com/game/sea-gold/game/fresh_map?uid=${uid}&time=${time}`,
        method: "post",
        data: params,
        headers: {
          authorization: TOKEN,
        },
      });
    },
    /**
     * 发布指令
     * @param params
     * @param uid
     * @param time
     * @param xGameId
     * @returns {Promise<unknown>}
     */
    command: function (params, uid, time, xGameId) {
      return request({
        url: `https://juejin-game.bytedance.com/game/sea-gold/game/command?uid=${uid}&time=${time}`,
        method: "post",
        data: params,
        headers: {
          authorization: TOKEN,
          "Content-Type": "application/json;charset=UTF-8",
          "x-tt-gameid": xGameId,
        },
      });
    },
    /* 彩蛋 */
    pico: function (params, uid, time) {
      return request({
        url: `https://juejin-game.bytedance.com/game/sea-gold/game/pico?uid=${uid}&time=${time}`,
        method: "post",
        data: params,
        headers: {
          authorization: TOKEN,
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
    },
    /**
     * 获取记录
     * @param uid
     * @param time
     * @returns {Promise<unknown>}
     */
    record: function getRecord(uid, time) {
      return request({
        url: `https://juejin-game.bytedance.com/game/sea-gold/user/record?uid=${uid}&time=${time}`,
        method: "get",
        headers: {
          authorization: TOKEN,
        },
      });
    }
  }
};
