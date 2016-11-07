// Description:
//   remind.

const cronJob = require('cron').CronJob;

const ROOMS_ID = '';

module.exports = (robot) => {

  const send = (channel, msg) => {
    robot.send({ room: channel }, msg);
  };

  const getCornOpts = (time, tick) => {
    return {
      cronTime: time,
      start   : true,
      timeZone: 'Asia/Tokyo',
      onTick  : tick,
    }
  };

  new cronJob(getCornOpts('0 0 10 * * 3', () => {
    send(ROOMS_ID, '');
  }));

};
