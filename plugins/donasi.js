import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/f5c0826db552558264212.jpg'
let name = await conn.getName(m.sender)
let but1 = 'ððððð'
let bit = usedPrefix + 'owner'
let donasi = `
â® *Mau Donasi? silahkan Scane qr di atas Dan hub owner kirim bukti tf*

ðð¼ð­ð : Trimakasih Yg Udah Donasi Semoga Kesananya
Makin Lebih Baik

ðð­ðð® ðð¥ð¢ð¤ ðð¢ ððð°ðð¡`
await conn.sendButtonDoc(m.chat, ucapan + name, donasi, but1, bit, fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: 'Â© Mikoðð¼ð­',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: 'Â© Mikoðð¼ð­',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'ðºððð ð¸ð¹ ð°ðð ð¼ðððð ð©ðððð'  
				}
			}
})
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler