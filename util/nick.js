module.exports = (client) => {
    var memberList = client.guilds.first().members.array();
    let names = ["Shimarin", "HolotheWise", "WongSongMong", "AllenCantCount", "TrapsAreGay", "Poi", "REEEEEEEEEEEEEEEEE", "LoliLover"];
    for (i = 0; i < memberList.length; i++) {
      if (!memberList[i].roles.find(u => u.name == "Admirals")) {
        var choice = Math.floor((Math.random() * names.length));
        memberList[i].setNickname(names[choice]);
      }
    }
    return console.log("done");
  };
