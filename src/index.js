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

  // if (interaction.commandName === 'hey') {
    //optional chaining will prevent crash if the required key in register-commands is false

  //   const num1 = interaction.options.get('first-number')?.value;
  //   const num2 = interaction.options.get('second-number')?.value;
  //   console.log(num1 , 'num1')

  //   interaction.reply(`The sum is ${num1 + num2}`)
  // }

  if (interaction.commandName === 'hey') 
  {
    interaction.reply('Sashay, Shante!');
  }
  if (interaction.commandName === 'ping') {
    interaction.reply('Pong!');
  }
  if (interaction.commandName === 'guys') {
    interaction.reply('Do you want to use "folks" instead?');
  }
  console.log(interaction.commandName);
}
)

client.on('messageCreate', msg => {
  //will not reply to bots, prevents loops
  if (msg.author.bot){
    return;
  }
  if (msg.content === 'sashay'){
    msg.reply('Shantay!');
  }
  
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (msg.content === 'send me a joke') {
    msg.reply('joke of the day!');
  }
});

// client.on('messageCreate', async (msg) => {
//   //will not reply to bots, prevents loops
//   if (msg.author.bot) {
//     return;
//   }
//   //convert message content to lowercase
//   const content = msg.content.toLowerCase()
//   if (content === 'send me a joke') {

//     // this is a simple message reply, use for testing message reply functionality
//     // msg.reply('Here is the joke of the day!');

//     const joke = await getRandomJoke();
//     msg.reply(joke)


//   }
// })

// async function getRandomJoke() {
//     const { default: fetch } = await import('node-fetch');
//     const response = await fetch('https://icanhazdadjoke.com', {
//       headers: {
//         Accept: 'application/json'
//       }
//     });
//     if (!response.ok) {
//       throw new Error (`Unexpected response ${response.statusText}`)
//     }
//     const data = await response.json();
//     // console.log(data.joke, 'data.joke')
//     return data.joke;
// }


client.login(process.env.CLIENT_TOKEN)
