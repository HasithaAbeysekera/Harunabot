let eightball = require('../assets/8ball.json');
const farmhash = require('farmhash');
const addHelpReaction = require('../util/addHelpReaction.js');

exports.run = function(client, message, args) {
  if (!args[0]) {
    return message.reply("aren't you going to ask a question? If you're having trouble, click ❓ for more details").then(msg => {
      addHelpReaction(client, msg, message, exports.help.name);
    }).catch((err => {
      console.log(err.stack);
    }));
  }
  argstring = args.join(' ');
  hash = farmhash.hash32(argstring);
  hash100 = hash % 100;
  hashFinal = Math.round(hash100 / 5);
  message.channel.send(`${eightball[hashFinal]}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'The Magic 8-ball will tell your fortune',
  usage: '8ball [yes/no question]'
};
