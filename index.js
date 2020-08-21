const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "e!";
let switchname = true
const { Client, RichEmbed } = require('discord.js');

//## STARTUP BOT SETUPS ##
    client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`e!help | ${client.guilds.cache.size} servers`); 
  });

  client.on("message", async(message) => {
    
  if (message.author.bot) return undefined;
  if(message.mentions.users.first() === client.user && !message.content.toLowerCase().startsWith(prefix)) return message.channel.send("Hi there, my prefix is " + prefix + ". \nDo " + prefix + "help to open the help menu");
  if (!message.content.toLowerCase().startsWith(prefix)) return undefined;
  const args = message.content.split(" ").slice(1);
  
//------------------------------------ #####Fun#### --------------------------------------------------

// #MEME COMMAND#

//------------------------------------ #####Games#### --------------------------------------------------

// #BET COMMAND#

// #SLOTS COMMAND#

// #REP COMMAND#

//------------------------------------ #####Moderation#### --------------------------------------------------

// #KICK COMMAND#
if (message.content.toLowerCase().startsWith(prefix + "kick")) {

  let user;
  const author = message.author;
  let search = args.join(" ");
  if(search) { 
    user = message.mentions.users.first() || client.users.cache.find(users => users.tag === args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase() === args[0].toLowerCase()).user || client.users.cache.find(users => users.username.toLowerCase() === args[0].toLowerCase()) || client.users.cache.find(users => users.id === args[0]) || await client.users.fetch(args[0]).catch(err => err);
    if(user.code) return message.channel.send("Couldn't find that user.");
  } else return message.channel.send("Couldn't find that user.");

  args.shift();
  let reason = args.join(" ") || "No reason specified";

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You Dont have kick permissions");

  if(message.guild.member(user.id)){
  if(!message.guild.member(user.id).roles.highest.position >= message.guild.member(client.user.id).roles.highest.position) return message.channel.send ("This user has a higher role than me so I cant kick them");
  if(!message.guild.member(user.id).roles.highest.position >= message.guild.member(message.author.id).roles.highest.position) return message.channel.send ("This user has a higher role than you so I won't kick them");
  }

  user.send("You have been kicked from" + message.guild.name + "for: \n" + reason).catch(err => err);
  message.guild.member(user.id).kick(reason);  
}

// #BAN COMMAND#

// #MUTE COMMAND#

// #REPORT COMMAND#

//------------------------------------ #####Miscellaneous#### --------------------------------------------------

// #SUGGEST COMMAND##
if (message.content.toLowerCase().startsWith(prefix + "suggest")) {
sug = args.join(" ");
if (!sug) return message.channel.send("Please input a valid suggestion");
let Suggest = message.guild.channels.cache.find(channel => channel.name === "suggestions");
if (!message.channel.permissionsFor(client.user).has("SEND_MESSAGES")) return undefined;
if (!message.channel.permissionsFor(client.user).has("EMBED_LINKS")) return undefined;

const suggestEmbed = new Discord.MessageEmbed()
  .setColor('#2fedce')
  .setTitle(`New Suggestion`)
  .setDescription(sug)
  .setFooter(`Suggested by: ${message.author.username}`);

  
  Suggest.send(suggestEmbed).then(msg => {
    msg.react("👍");
    msg.react("👎");
  });

  message.delete().catch(err => err);
  return message.channel.send('Your suggestion has been send') 
}

// #SLAP#
if (message.content.toLowerCase().startsWith(prefix + "slap")) {

  let user = message.author;
  let search = args.join(" ");
  if(search) { 
    user = message.mentions.users.first() || client.users.cache.find(users => users.tag === args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase() === args[0].toLowerCase()).user || client.users.cache.find(users => users.username.toLowerCase() === args[0].toLowerCase()) || client.users.cache.find(users => users.id === args[0]) || await client.users.fetch(args[0]).catch(err => err);
    if(user.code) return message.channel.send("Couldn't find that User.");
    if(message.mentions.users.first() === client.user) return message.channel.send(":open_mouth:  Wy do you try to slap me i have feelings to you know :frowning: :broken_heart:");
  }

  const SlapEmbed = new Discord.MessageEmbed()
    .setColor('#2fedce')
    .setTitle(`${message.author.username} slapped ${user.username}`)
  
  return message.channel.send(SlapEmbed);
  
  }


//------------------------------------ #####Currency#### --------------------------------------------------

// ##BAL COMMAND##

// ##DAILY COMMAND##

//------------------------------------ #####Info#### --------------------------------------------------

// #ROLEINFO COMMAND#
if (message.content.toLowerCase().startsWith(prefix + "roleinfo")) {

search = args.join(" ");
var Role = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.name.toLowerCase() === search.toLowerCase());
if(!Role) return message.channel.send("Couldn't find that role.");

const roleInfoEmbed = new Discord.MessageEmbed()
  .setColor('#2fedce')
  .setTitle(`Info about ${Role.name}`)
  .addField(`Members with this role:`, Role.members.size)
  .addField(`Can be mentioned `, Role.mentionable)
  .addField(`Role color `, `Hex: #${Role.color.toString(16)}`)
  .addField(`Role Creation date: `, Role.createdAt)
  .setFooter(`Requested by: ${message.author.username}`);

return message.channel.send(roleInfoEmbed);

}

// #MEMBER COMMAND#
if (message.content.toLowerCase().startsWith(prefix + "member")) {

  let user = message.author;
  let search = args.join(" ");
  if(search) { 
    user = message.mentions.users.first() || client.users.cache.find(users => users.tag === args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase() === args[0].toLowerCase()).user || client.users.cache.find(users => users.username.toLowerCase() === args[0].toLowerCase()) || client.users.cache.find(users => users.id === args[0]) || await client.users.fetch(args[0]).catch(err => err);
    if(user.code) return message.channel.send("Couldn't find that User.");
  }

  const userInfoEmbed = new Discord.MessageEmbed()
    .setColor('#2fedce')
    .setTitle(`Info about ${user.username}`)
    .setThumbnail(`${user.displayAvatarURL({size: 2048, dynamic: true})}`)
    .addField(`Username`, `${user.username}`, true)
    .addField(`Nickname`, `${user.nickname || "none"}`, true)
    .addField(`User id`, `${user.id}`)
    .addField(`Online status`, `${user.presence.status}`)
    .addField(`Joined server at`, `${user.joinedAt}`)
    .addField(`Acount created at`, `${user.createdAt}`)
    .setFooter(`Requested by: ${message.author.username}`);
  
  return message.channel.send(userInfoEmbed);
  
  }

// #AVATAR COMMAND#
if (message.content.toLowerCase().startsWith(prefix + "avatar")) {

  let user = message.author;
  let search = args.join(" ");
  if(search) { 
    user = message.mentions.users.first() || client.users.cache.find(users => users.tag === args[0]) || message.guild.members.cache.find(user => user.user.username.toLowerCase() === args[0].toLowerCase()).user || client.users.cache.find(users => users.username.toLowerCase() === args[0].toLowerCase()) || client.users.cache.find(users => users.id === args[0]) || await client.users.fetch(args[0]).catch(err => err);
    if(user.code) return message.channel.send("Couldn't find that User.");
  }
  
  const avatarInfoEmbed = new Discord.MessageEmbed()
    .setColor('#2fedce')
    .setTitle(`${user.username}'s Avatar`)
    .setImage(`${user.displayAvatarURL({size: 2048 })}`)
    .setFooter(`Requested by: ${message.author.username}`);
  
  return message.channel.send(avatarInfoEmbed);
  
  }

// #SERVERINFO COMMAND#
if (message.content.toLowerCase().startsWith(prefix + "server")) {
  
  const roleInfoEmbed = new Discord.MessageEmbed()
    .setColor('#2fedce')
    .setTitle(`Info about ${message.guild.name}`)
    .setThumbnail(`${message.guild.iconURL()}`)
    .addField(`server ID`, `${message.guild.id}`)
    .addField(`server owner`, `${message.guild.owner}`)
    .addField(`Creation date`, `${message.guild.createdAt}`)
    .addField(`User count`, `${message.guild.members.cache.filter(member => !member.user.bot).size}`, true)
    .addField(`Bot count`, `${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
    .addField(`Role count`, `${message.guild.roles.cache.size}`, true)
 
    .setFooter(`Requested by: ${message.author.username}`);
  
  return message.channel.send(roleInfoEmbed);
  
  }

  // #HELP COMMAND#
if (message.content.toLowerCase().startsWith(prefix + "help")) {
    let helpEmbed = new Discord.MessageEmbed()
      .setColor('#2fedce')
      .setTitle(`ƃsǝ Bot Commands: `)
      .setDescription('Hello human, these are the commands that i will respont to. (ps my prefix is e!)')
      .addField(':joy: Fun ', "~~Meme~~\n~~Rep~~\nSlap", true)
      .addField(':video_game: Games', "~~Bet~~\n~~Slots~~\n", true)
      .addField(':warning: Moderation', "~~Ban~~\n~~Kick~~\n ~~Mute~~\n~~Report~~", true)
      .addField(':money_with_wings: Currency', "~~Bal~~\n~~Daily~~", true)
      .addField(':hatched_chick: Miscellaneous', "Suggest", true)
      .addField(':pushpin: Info', "Roleinfo\nAvatar\nServer\nMember\nHelp", true)
      .setFooter(`Requested by: ${message.author.username}`);
    
    message.channel.send(helpEmbed);
}


});
client.login('####');