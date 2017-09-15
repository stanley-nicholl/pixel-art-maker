document.addEventListener('DOMContentLoaded', function(){
  var createGrid = function(){
    let pixel = document.createElement('div')
    let canvas = document.getElementById('canvas')
    pixel.className= "pixel"
    for(let i = 0; i < 7000; i++){
      canvas.appendChild(pixel)
    }
  }

  createGrid()
})
