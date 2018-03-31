const Discord = require("discord.js");
const fs = require('fs');
const moment = require('moment');
const client = new Discord.Client();
const token = require("./config.json").token;
const prefix = require("./config.json").prefix;
const ownerid = require("./config.json").ownerid;
const modrolename = require("./config.json").modrolename;
const adminrolename = require("./config.json").adminrolename;
const avatarTimer = require("./config.json").avatarTimer
let changeAvatar = require ('./util/changeAvatar.js');
var nick = require ('./util/nick.js');
const dir = './assets/avatars/';
require('./util/EventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`Loading Command: ${props.help.name}. Done!`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.login(token);

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let mod_role = message.guild.roles.find('name', modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 1;
  let admin_role = message.guild.roles.find('name', adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 2;
  if (message.author.id == ownerid) permlvl = 3;
  return permlvl;
};


 function changeA() {
   changeAvatar(client);
};

function changeN() {
  nick(client);
};

client.setInterval(changeA, 1000 * 60 * avatarTimer);
client.setInterval(changeN, 1000 * 60 * 5);

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});
