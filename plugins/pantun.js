let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
" *PANTUN:*\n\nAda anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nTanam kacang di pagi hari,\nTumbuh enam layu sebatang,\nKeburukan orang jangan dicari,\nBila kalian sedang puasa.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nAkhir bulan mendapat gaji,\nGaji untuk membeli ketupat,\nRajin-rajinlah sholat dan mengaji,\nJanganlah lupa puasa dan zakat.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nWaktu daftar hari terakhir,\nWaktu terasa banyak terbuang,\nKamu nggak perlu khawatir,\ncintaku hanya untukmu seorang.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nAda anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nSeribu bebek di kandang singa,\nhanya satu berwarna belang,\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nHari minggu pergi ke pasar,\nBeli sayur dan juga beras,\nTiap hari harus belajar,\nPasti akan menjadi cerdas.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nAyam goreng setengah mateng,\nBelinya di depan tugu.\nAbang sayang, abangku ganteng,\nlneng di sini setia menunggu.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nApi kecil dari tungku,\nApinya kecil habis kayu.\nSudah lama kutunggu-tunggu,\nkapan kamu bilang I love you.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nSeribu bebek di kandang singa,\nhanya satu berwarna belang\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nPergi memancing saat fajar,\nPulang siang membawa ikan\nSiapa yang rajin belajar\nJadi orang sukses kemudian.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nBeli computer itu biasa\nSupaya belajar jadi semangat\nMari kita belajar puasa\nAgar kita jadi kuat\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉*",
" *PANTUN:*\n\nMinum sekoteng hangat rasanya,\nminum segelas ada yang minta.\nLaki-laki ganteng siapa yang punya?\nBolehkah aku jatuh cinta.\n *𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙃𝘼𝙉𝙄𝙁 𝙁𝘼𝙍𝙃𝘼𝙉 𝙉",
]
