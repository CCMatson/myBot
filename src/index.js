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

client.on('messageCreate', msg => {
  // console.log('pong')
  if (msg.content === 'ping') {
    console.log('pong')
    msg.reply('Pong!');
  }
});

client.login(process.env.CLIENT_TOKEN)
