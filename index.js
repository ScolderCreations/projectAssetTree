const elem = document.getElementById;
const elems = document.querySelectorAll;
var parsed;
const soundList = new Array()
const imageList = new Array()

function goPressed() {
  parsed = JSON.parse(elem("inp").value) || undefined
  if (parsed !=== undefined) {
    let sprites = parsed.targets
    for (sprite of sprites) {
      for (asset of sprites.costumes) {
        imageList.push(JSON.parse(`["${asset.name}", "${asset.md5ext}"]`))
      }
      for (asset of sprites.sounds) {
        soundList.push(JSON.parse(`{"${asset.name}": "${asset.md5ext}`))
      }
    }
  for (asset of soundList) {
    elems("body").innerHTML = elems("body").innerHTML + `<p class="output">AUDIO &quot;${asset[0]}&quot;: <a href="https://assets.scratch.mit.edu/${asset[1]}">view</a>`
  }
    
