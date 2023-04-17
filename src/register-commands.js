require('dotenv').config();
const { REST, Routes } = require('discord.js')

const commands = [
  {
    name: 'hey',
    description: 'Replies with Sashay, Shante!',
  },
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.CLIENT_TOKEN);

  (async () => {
    try {
      console.log('Registering slash commands... ')

      await rest.put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID, 
          process.env.GUILD_ID
          ),
        { body: commands }
      )
      console.log('Slash commands were run successfully!')
    } catch (error) {
      console.error(`There was an ${error}`)
    }
  })();