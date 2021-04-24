const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { geniusLyricsAPI } = require('../../config.json');

module.exports = class LyricsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'lyrics',
      memberName: 'lyrics',
      description:
        'Get lyrics of any song or the lyrics of the currently playing song',
      group: 'music',
      throttling: {
        usages: 1,
        duration: 5
      },
      args: [
        {
          key: 'songName',
          default: '',
          type: 'string',
          prompt: 'De que cancion quieres las liricas?'
        }
      ]
    });
  }
   async run(message) {
  message.author.send("En Mantenimiento!");
  message.channel.send("Check your Dm");
  }
}