const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by Invader OP")

client.user.setActivity(`🍐 RDN | RAVAGÉS DU NET`, {
type: "STREAMING",
url: "https://www.twitch.tv/pokimane"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login('NzgxMTkwMDQzMDY5OTcyNTQx.X76B7A.i7RGT83aHGrJiGYhhVYB1l7tN0M');

