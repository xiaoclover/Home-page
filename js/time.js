function show_runtime() {
  window.setTimeout('show_runtime()', 1000)
  X = new Date('9/26/2022 10:28:00')
  Y = new Date()
  T = Y.getTime() - X.getTime()
  M = 24 * 60 * 60 * 1000
  a = T / M
  A = Math.floor(a)
  b = (a - A) * 24
  B = Math.floor(b)
  c = (b - B) * 60
  C = Math.floor((b - B) * 60)
  D = Math.floor((c - C) * 60)
  document.getElementById('runtime_span').innerHTML =
    '👨‍🌾 感谢陪伴  ' + A + '天星辰'
}
show_runtime()

if ('ontouchstart' in document) {
  document.getElementById('mian').style.display = 'none'
  document.getElementById('log').style.display = 'block'
}
