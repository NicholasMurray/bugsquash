// Completed scene
// -------------
// Tells the player when they've won and lets them start a new game
Crafty.scene('Completed', function() {
  // Display some text in celebration of the victory
  Crafty.e('2D, DOM, Text')
    .text('All bugs squashed!')
    .attr({ x: 0, y: Crafty.viewport.height/2 - 24, w: Crafty.viewport.width })
    //.css($text_css);

    //console.log(Crafty.canvas());
 
  // After a short delay, watch for the player to press a key, then restart
  // the game when a key is pressed
  var delay = true;
  setTimeout(function() { delay = false; }, 5000);
  this.restart_game = Crafty.bind('KeyDown', function() {
    if (!delay) {
      Crafty.scene('main');
    }
  });
}, function() {
  // Remove our event binding from above so that we don't
  //  end up having multiple redundant event watchers after
  //  multiple restarts of the game
  this.unbind('KeyDown', this.restart_game);
});