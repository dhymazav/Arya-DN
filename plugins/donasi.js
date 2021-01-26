let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana [085796582392]
│ • Indosat [085796582392]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285796582392
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
