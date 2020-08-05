const fs = require("fs");
const Jimp = require("jimp");

client.on("guildMemberAdd", async member => {
  const channelID = "KANAL ID YAPIŞTIRIN";
  const channel = member.guild.channels.get(channelID);
  if (!channel) return;
  let username = member.user.username;

  const bg = await Jimp.read(
    "https://cdn.discordapp.com/attachments/512709151084904478/513729632604913666/guildAdd.png"
  );
  const userimg = await Jimp.read(
    member.user.avatarURL ? member.user.avatarURL : client.user.avatarURL
  );

  var font;
  if (member.user.tag.length < 15)
    font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
  else if (member.user.tag.length > 15)
    font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);

  await bg.print(font, 430, 170, member.user.tag);
  await userimg.resize(362, 362);
  await bg
    .composite(userimg, 43, 26)
    .write("./giris-cikis/" + member.id + "giris.png");

  setTimeout(() => {
    channel.send(
      new Discord.Attachment("./giris-cikis/" + member.id + "giris.png")
    );
  }, 1000);

  setTimeout(() => {
    fs.unlink("./giris-cikis/" + member.id + "giris.png");
  }, 10000);
});
