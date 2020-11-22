const Discord = require("discord.js");
const client = new Discord.Client();
const chanId = "678772218251051045";
const token = process.env.FARM_TOKEN;

const farmDaily = () => {
  // Send daily claim command to specific channel, by ID specified above
  client.channels.get(chanId).send("t.daily");
};

const farmFish = () => {
  // Send fish command to specific channel
  client.channels.get(chanId).send("t.fish");
};

client.on("ready", () => {
  // Set fishing interval between 10 and 20 seconds
  setInterval(farmFish(), Math.floor(Math.random() * 20000) + 10000);
  // Sets daily interval to 24 hours and 15 seconds
  setInterval(farmDaily(), 86415000);
  console.log(`[Farmer] Logged in as ${client.user.tag}`);
});

// Login
client.login(token);