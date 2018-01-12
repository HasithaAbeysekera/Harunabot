const Discord = require("discord.js");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xkcdGet = require('./xkcdGet.js');
/*
Get user object when given a targetUser string
*/
// let request = require("request");
module.exports = (message, issue) => {
  if (issue > 0) {
    url = `https://xkcd.com/${issue}/info.0.json`;
  } else {
    url = `https://xkcd.com/info.0.json`;
  }
  let body;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      body = JSON.parse(this.responseText);
      console.log("opened");
      let limit = body["num"];
      let title = body["title"];
      let img = body["img"];
      const embed = new Discord.RichEmbed()
        .setTitle(`#${limit}: ${title}`)
        .setImage(img)
        .setURL(`https://xkcd.com/${limit}`);
      message.channel.send(embed);
    }
  }
  xhr.open("GET", url, false);
  xhr.send();
};
