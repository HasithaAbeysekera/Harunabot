const kouhairole = "Kawaii Kouhai";

module.exports = (client) => {
  thisGuild = client.guilds.first();
  let guildKouhaiRole = thisGuild.roles.find(u => u.name == kouhairole);
  let kouhaiMembers = guildKouhaiRole.members.array();
  console.log(`found role ${guildKouhaiRole.name}`);
  for (i = 0; i < kouhaiMembers.length; i++) {
    let num = Math.floor((Math.random() * 999));
    kouhaiMembers[i].setNickname('synthaesium #'+ num).then()
    .catch(console.error);
  }
  return;
};