$(document).ready(function() {

  let cNote = document.getElementById('cAudio')
  let dNote = document.getElementById('dAudio')
  let eNote = document.getElementById('eAudio')
  let fNote = document.getElementById('fAudio')
  let gNote = document.getElementById('gAudio')
  let aNote = document.getElementById('aAudio')
  let bNote = document.getElementById('bAudio')


  $('#c').mousedown(function() {
    cNote.currentTime = 0;
    cNote.play()
  })
  $('#d').mousedown(function() {
    dNote.currentTime = 0;
    dNote.play()
  })

  $('#e').mousedown(function() {
    eNote.currentTime = 0;
    eNote.play()
  })
  $('#f').mousedown(function() {
    fNote.currentTime = 0;
    fNote.play()
  })
  $('#g').mousedown(function() {
    gNote.currentTime = 0;
    gNote.play()
  })
  $('#a').mousedown(function() {
    aNote.currentTime = 0;
    aNote.play()
  })

  $('#b').mousedown(function() {
    bNote.currentTime = 0;
    bNote.play()
  })
});
