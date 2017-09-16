document.addEventListener('DOMContentLoaded', function(){

  var createGrid = function(){
    let canvas = document.getElementById('canvas')
    for(let i = 0; i < 4851; i++){
      let pixel = document.createElement('div')
      pixel.className= "pixel"
      canvas.appendChild(pixel)
    }
  }

  createGrid()

  var createColorTool = function(){
    let colorSection1 = ["crimson", "coral", "orange", "chocolate", "gold", "darkgoldenrod", "sandybrown", "burlywood", "bisque", "peachpuff", "lightyellow", "yellow", "greenyellow", "lime"]
    let colorSection2 = ["seagreen", "forestgreen", "darkgreen", "navy", "blue", "royalblue", "cornflowerblue", "blueviolet", "deeppink", "indigo", "fuchsia"]
    let colorSection3 = ["black", "dimgray", "gray", "darkgray", "Gainsboro", "white"]
    var allColors = colorSection1.concat(colorSection2, colorSection3)
    let paintSection1 = document.getElementById('paint-section-1')
    for(let i = 0; i < allColors.length; i++){
      let tool = document.createElement('div')
      tool.className = 'color-pick'
      tool.style.backgroundColor = allColors[i]
      paintSection1.appendChild(tool)
    }
  }

  createColorTool()

var colors = document.getElementsByClassName('color-pick')
var showSelectedColor = document.getElementById("current-color")
var selectedColor
for(let i = 0; i < colors.length; i++){
  var color = colors[i]
  color.addEventListener('click', function(event){
    var color = event.target
    selectedColor = color.style.backgroundColor
    showSelectedColor.style.backgroundColor = selectedColor

  })
}

var pixels = document.getElementsByClassName('pixel')
for(let j = 0; j < pixels.length; j++){
  var pixel = pixels[j]
  pixel.addEventListener('click', function(event){
    var pixel = event.target;
    pixel.style.backgroundColor = selectedColor
  })
}

var submit = document.getElementById('submit')
submit.addEventListener('click', function(event){
  for(let k =0; k < pixels.length; k++){
    pixels[k].style.backgroundColor = 'white'
  }
  showSelectedColor.style.backgroundColor = 'Gainsboro'
})

})
