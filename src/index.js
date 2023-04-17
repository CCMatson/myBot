require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js')

//client is bot
const client = new Client({
  intents: [ 
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
})

client.on('ready', (c) => {
  console.log(`Logged in as ${c.user.tag}!`)
})

client.on('interactionCreate', (interaction) => {
  //this will only run in the interaction is a slash command
  if(!interaction.isChatInputCommand()) return ;
  if (interaction.commandName === 'hey') {
    interaction.reply('Sashay, Shante!');
  }
  if (interaction.commandName === 'ping') {
    interaction.reply('Pong!');
  }
  console.log(interaction.commandName);
})

// client.on('messageCreate', msg => {
//   //will not reply to bots, prevents loops
//   if (msg.author.bot){
//     return;
//   }
//   if (msg.content === 'sashay'){
//     msg.reply('Shantay!');
//   }
  
//   if (msg.content === 'ping') {
//     msg.reply('Pong!');
//   }
// });

client.login(process.env.CLIENT_TOKEN)
