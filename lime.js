const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NTg1MzYxNDA2MzMzODEyNzM3.XPYW_w.Wr9Fzdvo9RK_Lth5_nziZg9JZsg');
