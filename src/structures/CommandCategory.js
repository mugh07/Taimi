const config = require("@root/config");

module.exports = {
  ADMIN: {
    name: "Admin",
    image: "https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Settings-icon.png",
    emoji: "1027243362824237077",
  },
  AUTOMOD: {
    name: "Automod",
    enabled: config.AUTOMOD.ENABLED,
    image: "https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Settings-icon.png",
    emoji: "1027243357111586866",
  },
  ANIME: {
    name: "Anime",
    image: "https://wallpaperaccess.com/full/5680679.jpg",
    emoji: "1027244434020126831",
  },
  ECONOMY: {
    name: "Economy",
    enabled: config.ECONOMY.ENABLED,
    image: "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/128/coins-icon.png",
    emoji: "1027243354339160114",
  },
  FUN: {
    name: "Fun",
    image: "https://icons.iconarchive.com/icons/flameia/aqua-smiles/128/make-fun-icon.png",
    emoji: "1007989689250226228",
  },
  GIVEAWAY: {
    name: "Giveaway",
    enabled: config.GIVEAWAYS.ENABLED,
    image: "https://cdn-icons-png.flaticon.com/512/4470/4470928.png",
    emoji: "949347560085139587",
  },
  IMAGE: {
    name: "Image",
    enabled: config.IMAGE.ENABLED,
    image: "https://icons.iconarchive.com/icons/dapino/summer-holiday/128/photo-icon.png",
    emoji: "1007983487426514984",
  },
  INVITE: {
    name: "Invite",
    enabled: config.INVITE.ENABLED,
    image: "https://cdn4.iconfinder.com/data/icons/general-business/150/Invite-512.png",
    emoji: "1027243350065156196",
  },
  INFORMATION: {
    name: "Information",
    image: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/information-icon.png",
    emoji: "1027243331564093500",
  },
  MODERATION: {
    name: "Moderation",
    enabled: config.MODERATION.ENABLED,
    image: "https://icons.iconarchive.com/icons/lawyerwordpress/law/128/Gavel-Law-icon.png",
    emoji: "1027243357111586866",
  },
  ERELA_JS: {
    name: "Music",
    enabled: config.ERELA_JS.ENABLED,
    image: "https://icons.iconarchive.com/icons/wwalczyszyn/iwindows/256/Music-Library-icon.png",
    emoji: "1015901771706683432",
  },
  OWNER: {
    name: "Owner",
    image: "https://www.pinclipart.com/picdir/middle/531-5318253_web-designing-icon-png-clipart.png",
    emoji: "1027243347594715176",
  },
  SOCIAL: {
    name: "Social",
    image: "https://icons.iconarchive.com/icons/dryicons/aesthetica-2/128/community-users-icon.png",
    emoji: "1027243340858662923",
  },
  STATS: {
    name: "Statistics",
    enabled: config.STATS.ENABLED,
    image: "https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/dollar-stats-icon.png",
    emoji: "1027243336563691640",
  },
  SUGGESTION: {
    name: "Suggestion",
    enabled: config.SUGGESTIONS.ENABLED,
    image: "https://cdn-icons-png.flaticon.com/512/1484/1484815.png",
    emoji: "1010632147494764634",
  },
  TICKET: {
    name: "Ticket",
    enabled: config.TICKET.ENABLED,
    image: "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/512/ticket-icon.png",
    emoji: "1027243334193918033",
  },
  UTILITY: {
    name: "Utility",
    image: "https://icons.iconarchive.com/icons/blackvariant/button-ui-system-folders-alt/128/Utilities-icon.png",
    emoji: "1027243331564093500",
  },
};
