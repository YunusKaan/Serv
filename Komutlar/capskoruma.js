var uyarilar = {};

client.on("message", async message => {
  if (!message.guild || !message.member || message.author.bot || !message.content || message.member.hasPermission("ADMINISTRATOR")) return;
  let mesajIcerik = message.content.replace(/[^a-zA-ZığüşöçĞÜŞİÖÇ]+/g, "");
  if (mesajIcerik === mesajIcerik.toUpperCase()) {
    uyarilar[message.author.id] = uyarilar[message.author.id] ? Number(uyarilar[message.author.id])+1 : 1;
    message.delete(200);
    message.channel.send(new Discord.RichEmbed().setDescription(`${message.author} büyük harf kullanmamlısın! (${uyarilar[message.author.id]})`));
    if (uyarilar[message.author.id] >= 5) {
      message.member.addRole('640114675572277249');
      message.author.send(`${message.guild.name} sunucusunda fazla büyük harf kullandığın için susturuldun!`);
      uyarilar[message.author.id] = 0;
      setTimeout(() => {
        message.member.removeRole('640114675572277249');
        message.author.send(`Susturulman bitti artık konuşabilirsin!`);
      }, 5*60*1000);
    };
  };
});
