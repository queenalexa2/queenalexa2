/* Copyright (C) 2020 TOXIC DEVIL

CODDED BY TOXIC DEVIL

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "            *▣▬▬▬👸▬▬▬▣* \n     *Bang!! Bang!!* \n⦁══⦁ 𝗤𝘂𝗲𝗲𝗻 👸 𝗔𝗹𝗲𝘅𝗮 ⦁══⦁\n     *Alive Now*\n\n*♦Version* ➤5.2.0 Global Stable\n*♦Branch* ➤Vancino\n*♦About* ➤ *⚜⦁═ǫᴜᴇᴇɴ 👸 ᴀʟᴇxᴀ═⚜⦁is an easy used WhatsApp robot. Watch the video to easily set up :|▸https://youtu.be/mcEeIspWOpY*\n*◯Owner* ➤ ▸https://Wa.me/+94770828171◂\n*Moders* ➘➘\n 🔰ᴛᴇᴇɴᴜʜ\n🔰ᴛᴜᴛᴜ\n🔰ᴍᴀꜱʜ-ᴢ\n\n*🎯Main Group* ➤https://chat.whatsapp.com/ITlYi2teEXr0SvULyznQgX\n*🎯Support group* ➤https://chat.whatsapp.com/LuLTEKm22fp8gv4ltCmKMo\n\n*💫𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗤𝘂𝗲𝗲𝗻 𝗔𝗹𝗲𝘅𝗮🧚‍♀️*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*👽Powered by Cuzier x👽*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "                 *▣▬▬▬👸▬▬▬▣* \n   *Bang!! Bang!!* \n⦁══⦁ 𝗤𝘂𝗲𝗲𝗻 👸 𝗔𝗹𝗲𝘅𝗮 ⦁══⦁\n *Alive Now*\n\n*♦Version* ➤5.2.0 Global Stable\n*♦Branch* ➤Vancino\n*♦About* ➤*⚜⦁═ᴄᴜᴢɪᴇʀ x═⦁⚜is an easy used WhatsApp robot. Watch the video to easily set up :|▸https://youtu.be/mcEeIspWOpY*\n*◯Owner* ➤ ▸https://Wa.me/+94770828171◂\n*Moders* ➘➘\n🔰ᴄᴜɪᴢᴇʀ\n🔰ᴛᴜʀᴜ\n🔰ᴍᴀꜱʜ-ᴢ\n\n*🎯Main Group* ➤https://chat.whatsapp.com/ITlYi2teEXr0SvULyznQgX\n*🎯Support group* ➤https://chat.whatsapp.com/LuLTEKm22fp8gv4ltCmKMo\n\n*💫𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗤𝘂𝗲𝗲𝗻 𝗔𝗹𝗲𝘅𝗮🧚‍♀️*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*👽Powered By Cuzier X👽*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
