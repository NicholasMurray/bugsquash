// //create our player entity with some premade components
// player = Crafty.e("2D, Canvas, player, Controls, CustomControls, Animate, Collision")
// 	.attr({x: 160, y: 144, z: 1})
// 	.CustomControls(1)
// 	.animate("walk_left", 6, 3, 8)
// 	.animate("walk_right", 9, 3, 11)
// 	.animate("walk_up", 3, 3, 5)
// 	.animate("walk_down", 0, 3, 2)
// 	.bind("enterframe", function(e) {
// 		if(this.isDown("LEFT_ARROW")) {
// 			if(!this.isPlaying("walk_left"))
// 				this.stop().animate("walk_left", 10);
// 		} else if(this.isDown("RIGHT_ARROW")) {
// 			if(!this.isPlaying("walk_right"))
// 				this.stop().animate("walk_right", 10);
// 		} else if(this.isDown("UP_ARROW")) {
// 			if(!this.isPlaying("walk_up"))
// 				this.stop().animate("walk_up", 10);
// 		} else if(this.isDown("DOWN_ARROW")) {
// 			if(!this.isPlaying("walk_down"))
// 				this.stop().animate("walk_down", 10);
// 		}
// 	}).bind("keyup", function(e) {
// 		this.stop();
// 	})
// 	.collision()
// 	.onHit("wall_left", function() {
// 		this.x += this._speed;
// 		this.stop();
// 	}).onHit("wall_right", function() {
// 		this.x -= this._speed;
// 		this.stop();
// 	}).onHit("wall_bottom", function() {
// 		this.y -= this._speed;
// 		this.stop();
// 	}).onHit("wall_top", function() {
// 		this.y += this._speed;
// 		this.stop();
// 	});
