var numBalloons = 0

function addBalloon() {
    if (numBalloons == 25) {
        var animation=document.createElement("a-animation")
        animation.setAttribute("attribute", "position")
        animation.setAttribute("to", "6 1000 -10")
        animation.setAttribute("dur", "50000")
        document.getElementById("houseBalloons").appendChild(animation)
    }
    else {
        var posX = Math.floor(Math.random() * 7 + 5)
        var posY = Math.floor(Math.random() * 7 + 5)
        var posZ = -10
        var colors = ["red", "orange", "yellow", "green", "dodgerblue", "purple"]
        var randomColor = colors[Math.floor(Math.random() * 6)]
        balloon = document.createElement("a-sphere")
        balloon.setAttribute("color", randomColor)
        balloon.setAttribute("position", `${posX} ${posY} ${posZ}`)
        document.getElementById("houseBalloons").appendChild(balloon)
        numBalloons += 1
    }
}
