const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login('NTg1MzYxNDA2MzMzODEyNzM3.XPYW_w.Wr9Fzdvo9RK_Lth5_nziZg9JZsg');
