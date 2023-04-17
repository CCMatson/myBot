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

  if (interaction.commandName === 'add') {
    //optional chaining will prevent crash if the required key in register-commands is false
    const num1 = interaction.options.get('first-number')?.value;
    const num2 = interaction.options.get('second-number')?.value;
    console.log(num1 , 'num1')

    interaction.reply(`The sum is ${num1 + num2}`)
  }

  // if (interaction.commandName === 'hey') {
  //   interaction.reply('Sashay, Shante!');
  // }
  // if (interaction.commandName === 'ping') {
  //   interaction.reply('Pong!');
  // }
  // console.log(interaction.commandName);
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
