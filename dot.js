function enterplayer(){
    ep=createElement("h2")
    var re=inp.value()
    ep.html("WELCOME "+re)
    ep.position(400,200)
    b.hide()
    inp.hide()
    pc=pc+1
    jy=pc
    db.ref("/").update({
        playerCount:pc
    })
    db.ref("players/player"+pc).set({
        y:2000,
        index:pc
    })
}
function reset(){
    db.ref("/").update({
        Gamestate:0,
        playerCount:0
    })
    db.ref("players").remove()
}