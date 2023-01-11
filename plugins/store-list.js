import moment from 'moment-timezone'

const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")

let handler = async (m, { conn, usedPrefix, command }) => {
  let grup = await conn.groupMetadata(m.chat)
	let msgs = db.data.msgs
	let msg = (Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })).map(v => v.nama)
	let row = Object.keys(msg).map(v => ({
		title: msg[v],
		description: '',
		rowId: msg[v]
	}))
	let button = {
		text: `Hi @${m.sender.split("@")[0]}`,
		footerText: `*List From ${grup.subject}*\n\n⏳ ${jam}\n📆 ${tanggal}`,
		mentions: [m.sender],
		buttonText: 'Click Here'
	}
	if (msg[0]) return await conn.sendListM(m.chat, button, row, m)
	else throw `\nbelum ada Menu yg Ada di list store.\nketik *${usedPrefix + command} <teks>* untuk menambahkan daftar menu.\n`
}
handler.help = ['store'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^list(store|shop)?$/i

export default handler