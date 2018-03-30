const fs = require('fs');
const dir = './assets/avatars/';
module.exports = (client) => {
  fs.readdir(dir, (err, files) => {
    avatarCount = files.length;
    newAvatarNumber = Math.floor((Math.random() * files.length) + 1);
    if (newAvatarNumber < 10) {
      newAvatar = `${dir}avatar0${newAvatarNumber}.jpg`;
    } else {
      newAvatar = `${dir}avatar${newAvatarNumber}.jpg`;
    }
    client.user.setAvatar(newAvatar);
    console.log(`avatar changed to ${newAvatar}`);
  });
  return;
};
