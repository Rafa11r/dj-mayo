const { Command } = require('discord.js-commando');

module.exports = class LeaveCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'leave',
      aliases: ['end'],
      group: 'music',
      memberName: 'leave',
      guildOnly: true,
      description: 'Leaves voice channel if in one'
    });
  }

  run(message) {
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('Unete a un canal de voz y vuelve a intentarlo.');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher == null
    ) {
      return message.reply('No hay musica reproducinedo en estos momentos!');
    }
    if (!message.guild.musicData.queue)
      return message.say('No hay canciones en la carpeta!');
    message.guild.musicData.songDispatcher.end();
    message.guild.musicData.queue.length = 0;
    return;
  }
};
 //By: Hector (Mayo or Groot), Jenaro (Big Mac), Angel (The Plug) , Nyron (African Flash) & Johnny (Fck Boy with Drip).