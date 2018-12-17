const reqEvent = (event) => require(`../events/${event}`)
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('reconnecting', () => reqEvent('reconnecting')(client));
  client.on('disconnect', () => reqEvent('disconnect')(client));
  client.on('message', reqEvent('message'));
  client.on('guildMemberAdd', reqEvent('guildmemberadd'));
  client.on('guildMemberRemove', reqEvent('guildmemberremove'));
  client.on('emojiCreate', reqEvent('emojiCreate'));
  client.on('emojiUpdate', reqEvent('emojiUpdate'));
  client.on('messageReactionAdd', reqEvent('CWmessageReaction'));
  client.on('messageReactionRemove', reqEvent('CWmessageUnReaction'));
  
};
