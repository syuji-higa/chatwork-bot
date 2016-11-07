// Description:
//   taliking with bot.

module.exports = (robot) => {

  robot.hear(/^\[To:0000000\]/, (res) => {
    res.send('');
  });

};
