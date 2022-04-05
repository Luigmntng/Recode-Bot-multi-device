const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard ='BEGIN:VCARD\n'
                    + 'VERSION:3.0\n'
                    + 'N:;Lui;;;\n'
                    + 'FN:Lord Lui\n'
                    + 'item1.TEL;waid=6282146092695:6282146092685\n'
                    + 'item1.X-ABLabel:📍 Creator\n'
                    + 'item2.EMAIL;type=INTERNET:Kodamchina@hacked.khom\n'
                    + 'item2.X-ABLabel:💌 Email\n'
                    + 'item3.URL:https://google.xyz/\n'
                    + 'item3.X-ABLabel:📮 Rest Api\n'
                    + 'item4.ADR:;;🇮🇩 Indonesia;;;;\n'
                    + 'item4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Otaku 🇯🇵\n'
                    + 'item5.X-ABLabel:───────[ Lord Lui ]───────\n'
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Lui gmntng', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
'
