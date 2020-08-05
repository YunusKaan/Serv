let Discord = require('discord.js')
let client = new Discord.Client()
let Serendia = require('quick.db')
let Yashinu = require('ms')
let Wency = require('canvas')

client.login('TOKEN ID')

const ownerID = [""];

client.on('ready',()=>{
  client.user.setStatus("dnd");
  client.user.setPresence({game:{name: 'Yashinu ❤️ Wéncy.', type: "STREAMING", url: "https://www.twitch.tv/winchester"}});
  console.log("―――――――――――――――――――――――――――\n Name : " + client.user.tag + "\n―――――――――――――――――――――――――――")
  console.log("Botu geliştiren : " + client.user.tag + "\n―――――――――――――――――――――――――――")
})

let dmLogKanali = "708062289869275196"; // Atılan DM'lerin Loglanacağı Kanal
client.on("message", async message => {
  let Yashinu = new Discord.RichEmbed().setFooter(message.author.id).setTimestamp().setAuthor(message.author.tag, message.author.avatarURL);
  if (message.content) Yashinu.setDescription(message.content);
  if (message.attachments.first()) Yashinu.setImage(message.attachments.first().url);
  if (message.channel.type === "dm" || !message.guild) client.channels.get(dmLogKanali).send(Yashinu);
});
