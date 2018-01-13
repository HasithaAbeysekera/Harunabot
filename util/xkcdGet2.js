const Discord = require("discord.js");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xkcdGet = require('./xkcdGet.js');
const ordinal = require('../util/ordinal.js');
let months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/*
Get user object when given a targetUser string
*/
// let request = require("request");
module.exports = (client, message, issue) => {
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
      let postDate = `${ordinal(body["day"])} ${months[body["month"]]}, ${body["year"]}`
      let title = `${body["title"]} (${postDate})`;
      let img = body["img"];
      let caption = `${body["alt"]}`;
      const embed = new Discord.RichEmbed()
        .setTitle(`#${limit}: ${title}`)
        .setImage(img)
        .setFooter(caption)
        .setURL(`https://xkcd.com/${limit}`);
      message.channel.send(embed);
    }
  }
  xhr.open("GET", url, false);
  xhr.send();
};
