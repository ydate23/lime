// Extract the required classes from the discord.js module 
const { Client, Attachment } = 
require('discord.js');
const Discord = require('discord.js'); 
const client = new Discord.Client();

client.on('ready', () => { 
    console.log(`Logged in as 
${client.user.tag}!`); 
});
 
client.on('message', msg => {
    if (msg.content === 'salamat') { 
      msg.reply('your welcome!'); 
      } 
 
 });
 
 // Create an event listener for messages 
client.on('message', message => { 
      // If the message is "what is my avatar" 
      if (message.content === 'what is my avatar') { 
      // Send the user's avatar URL
message.reply(message.author.avatarURL);

} 
});
 
 // Create an event listener for new guild members 
client.on('guildMemberAdd', member => { 
      // Send the message to a designated channel on a server: 
      const channel = member.guild.channels.find(ch => ch.name === 'member-log'); 
      // Do nothing if the channel wasn't found on this server 
      if (!channel) return; 
      // Send the message, mentioning the member 
      channel.send(`Welcome to the server, ${member}`); 
});
 
 // Create an instance of a Discord client const client = new Client(); 
 
 /** * The ready event is vital, it means that only _after_ this will your bot start reacting to information 
   * received from Discord 
   */ 
client.on('ready', () => { 
console.log('I am ready!');
}); 

client.on('message', message => { 
        // If the message is '!rip' 
        if (message.content === 'rip') { 
              // Create the attachment using Attachment 
              const attachment = new Attachment('https://i.imgur.com/w3duR07.png'); 
              
              // Send the attachment in the message channel 
message.channel.send(attachment);
} }); 

client.on('message', message => { 
        // If the message is '!rip' 
        if (message.content === 'Duro') { 
              // Create the attachment using Attachment 
              const attachment = new Attachment('https://cdn.discordapp.com/attachments/446610862959230976/446688878296956929/50c.png'); 
              
              // Send the attachment in the message channel 
message.channel.send(attachment);
} }); 

client.on('message', message => { 
        // If the message is '!rip' 
        if (message.content === 'I refuse') { 
              // Create the attachment using Attachment 
              const attachment = new Attachment('https://cdn.discordapp.com/attachments/446610862959230976/483906797984415748/iRefuse.gif'); 
              
              // Send the attachment in the message channel 
message.channel.send(attachment);
} });

client.on('message', message => { 
        // If the message is '!rip' 
        if (message.content === 'No u') { 
              // Create the attachment using Attachment 
              const attachment = new Attachment('https://cdn.discordapp.com/attachments/446610862959230976/447804808104247296/unknown.png'); 
              
              // Send the attachment in the message channel 
message.channel.send(attachment);
} });

client.on('message', message => { 
        // If the message is '!rip' 
        if (message.content === 'fail') { 
              // Create the attachment using Attachment 
              const attachment = new Attachment('https://i.makeagif.com/media/9-02-2017/pqq5UH.gif'); 
              
              // Send the attachment in the message channel 
message.channel.send(attachment);
} });

// Log our bot in using the token from https://discordapp.com/developers/applications/me 

client.login('NTg1MzYxNDA2MzMzODEyNzM3.XPyDwg.GZJ0mzrDNKZU0z7F7AdEpXATMLs');
           
