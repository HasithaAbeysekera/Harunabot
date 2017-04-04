const reqEvent = (event) => require(`../events/${event}`)
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('reconnecting', () => reqEvent('reconnecting')(client));
  client.on('disconnect', () => reqEvent('disconnect')(client));
  client.on('message', reqEvent('message'));
  client.on('guildMemberAdd', reqEvent('guildmemberadd'));
  client.on('guildMemberRemove', reqEvent('guildmemberremove'));
  client.on('guildCreate', reqEvent('guildcreate'));
  client.on('emojiCreate', reqEvent('emojiCreate'));
  client.on('presenceUpdate', reqEvent('presenceUpdate'));

};
