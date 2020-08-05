// SEVIYE \\
const dba = require('quick.db');
client.on("message", async msg => {
      const emoji = client.emojis.get('706673080402968707');
      let guncelseviye = await db.fetch(`seviye_${msg.author.id + msg.guild.id}`,);

      const seviyeatlama = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`
      ${emoji} **Level Atlayan:** <@${msg.author.id}>
      ${emoji} **Level: ** ${guncelseviye}
`);  
  
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;

  if (msg.content.length > 7) {
    dba.add(`puan_${msg.author.id + msg.guild.id}`, 1);
  }
  
  
  if (dba.fetch(`puan_${msg.author.id + msg.guild.id}`) > 150) {
  
  
  let seviyelog = msg.guild.channels.find(`name`, "💎┊seviye");    
  msg.guild.channels.get(seviyelog.id).send(seviyeatlama)
    
    
    dba.add(`seviye_${msg.author.id + msg.guild.id}`, 1);

    dba.delete(`puan_${msg.author.id + msg.guild.id}`);
  }
});
// SEVIYE \\