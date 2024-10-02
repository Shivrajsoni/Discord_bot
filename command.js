const { REST, Routes } = require('discord.js');

require("dotenv").config();
// const config=require('./config');

const token=process.env.TOKEN;
const clientid = process.env.CLIENTID;

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
    {
        name:'create',
        description:"creating a short url for given url"
    }
  ];


  
  const rest = new REST({ version: '10' }).setToken(token);
  

  (async ()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(clientid), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
  })();