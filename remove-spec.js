!function() {

  SWAM.on("gameRunning", function() {
    const INITIAL_EXTRALATENCY = 0;
    UI.updateStats = function(Bt) { // same code from engine.js
      let Gt = "";
      if (game.gameType == SWAM.GAME_TYPE.CTF) {
        let Ht = 0
          , jt = 0;
        forEachPlayer(Wt=>{
          if (!Wt.removedFromMap) { // new code
            1 == Wt.team ? Ht++ : jt++
          }}
        ),
          Gt = "<span class='greyed'>&nbsp;&nbsp;(<span style='color: #4076E2'>" + Ht + "</span>&nbsp;/&nbsp;<span style='color: #EA4242'>" + jt + "</span>)<span class='greyed'>"
      }
      if (game.fakeExtraLatency == INITIAL_EXTRALATENCY) {
        let Ht = Math.max(Bt.ping, 130)
          , jt = Math.max(Bt.ping, 300)
          , Wt = Tools.randInt(Ht, jt);
        game.fakeExtraLatency = Wt - Bt.ping
      }
      SWAM.spoofLatency && (Bt.ping -= game.fakeExtraLatency);
      var Xt = Bt.playerstotal
        , Yt = "";
      Yt += '<div class="item"><span class="icon-container"><div class="icon players"></div></span><span class="greyed">' + Bt.playersgame + "&nbsp;/&nbsp;</span>" + Xt + Gt + '<span class="icon-container padded"><div class="icon ping"></div></span>' + Bt.ping + '<span class="millis">ms</span></div>',
        $("#gameinfo").html(Yt),
        game.ping = Bt.ping
    };
  });

  SWAM.registerExtension({
      name: "Remove spec from count",
      id: "remove-spec",
      description: "Removes spectators from CTF count",
      author: "Debug",
      version: "1.0"
  });

}();
    
