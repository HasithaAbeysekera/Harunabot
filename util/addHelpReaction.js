const commandHelp = require('../util/commandHelp.js');
/*
Get user object when given a targetUser string
*/
module.exports = (client, message, originalMessage, command) => {
  message.react('❓');

  const collector = message.createReactionCollector((reaction, thisUser) => reaction.emoji.name === '❓' && thisUser.id === originalMessage.author.id, {
    time: 120000
  });

  collector.on('collect', r => message.delete().then(msg => {commandHelp(client, msg, originalMessage, command)})
    .catch(console.error));

  collector.on('end', message => console.log(`Collection timed out`));
};
