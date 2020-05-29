const socket = io()

$(() => {
  $('#beep').mousedown(() => {
    socket.emit('beep', { state: 'on' })
  })
  $('#beep').mouseup(() => {
    socket.emit('beep', { state: 'off' })
  })

  $('#send').click(() => {
    let msg = $('#msg').val()
    if (msg) {
      socket.emit('msg_send', { msg: msg })
      $('#msg').val('')
    }
  })
})