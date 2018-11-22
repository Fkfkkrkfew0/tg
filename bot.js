const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ♛ 『DE』 NovritschPro#6808");


client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **ss ** ' ,' **  عشان تاخذ الكريدت  ** ')
.addField('     **ss #credit @user عدد الكريدت ** ' ,' **  مثلا  ** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});







        var prefix = "$";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
