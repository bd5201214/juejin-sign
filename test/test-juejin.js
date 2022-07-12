const dotEnv = require('dotenv');
dotEnv.config('./env');

const miningApi = require('../src/api/juejin')();

miningApi.dipLucky({ lottery_history_id: '7052109119238438925' }).then((data) => {
    console.log('daya', data);
}).catch((e) => {
    console.log('e', e);
});
