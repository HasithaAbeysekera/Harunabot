const Discord = require("discord.js");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xkcdGet2 = require('./xkcdGet2.js');
/*
Get user object when given a targetUser string
*/
// let request = require("request");
module.exports = (message, issue) => {
  console.log(`issue = ${issue}`);
  let body;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      body = JSON.parse(this.responseText);
      console.log("opened");
      let limit = body["num"];
      if (issue == 0) {
        let choice = Math.floor((Math.random() * limit) + 1);
        console.log(`random choice: ${choice}`);
        return xkcdGet2(message, choice);
      } else {
        if(issue > limit){
          return message.channel.send(`Error: number too large, latest issue is #${limit}`);
        } else{
          console.log(`opening issue #${issue}`);
          return xkcdGet2(message, issue);
        }
      }
      // if (issue > limit) {
      // }
    }
  }
  xhr.open("GET", `https://xkcd.com/info.0.json`, false);
  xhr.send();
};
