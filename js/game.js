window.onload = function() {
	//start crafty
	Crafty.init(400, 320);
	Crafty.canvas();
	
	//automatically play the loading scene
	Crafty.scene("loading");
	
	Crafty.scene("main", function() {
	
		generateWorld();

		//Score boards
		Crafty.e("Score, DOM, 2D, Text")
			.attr({ x: 20, y: 20, w: 100, h: 20, points: 0 })
			.text("0 Points");

		// Seconds Elapsed
		Crafty.e("Seconds, DOM, 2D, Text")
			.attr({ x: 315, y: 20, w: 100, h: 20, points: 0 })
			.text("0 Secs");

  		var t;
  		function displaySecondsElapsed() {
  			Crafty("Seconds").each(function () { this.text(++this.points + " Secs") });
		    t = setTimeout(function() {
		        displaySecondsElapsed();
		    }, 1000);
		}
		displaySecondsElapsed();


		//create our player entity with some premade components
		player = Crafty.e("2D, Canvas, player, Controls, CustomControls, Animate, Collision")
			.attr({x: 160, y: 144, z: 1})
			.CustomControls(1)
			.animate("walk_left", 6, 3, 8)
			.animate("walk_right", 9, 3, 11)
			.animate("walk_up", 3, 3, 5)
			.animate("walk_down", 0, 3, 2)
			.bind("enterframe", function(e) {
				if(this.isDown("LEFT_ARROW")) {
					if(!this.isPlaying("walk_left"))
						this.stop().animate("walk_left", 10);
				} else if(this.isDown("RIGHT_ARROW")) {
					if(!this.isPlaying("walk_right"))
						this.stop().animate("walk_right", 10);
				} else if(this.isDown("UP_ARROW")) {
					if(!this.isPlaying("walk_up"))
						this.stop().animate("walk_up", 10);
				} else if(this.isDown("DOWN_ARROW")) {
					if(!this.isPlaying("walk_down"))
						this.stop().animate("walk_down", 10);
				}
			}).bind("keyup", function(e) {
				this.stop();
			})
			.collision()
			.onHit("bug", function(hit) {
				hit[0].obj.destroy();
				Crafty("Score").each(function () { this.text(++this.points + " Points") });
			}).onHit("wall_left", function() {
				this.x += this._speed;
				this.stop();
			}).onHit("wall_right", function() {
				this.x -= this._speed;
				this.stop();
			}).onHit("wall_bottom", function() {
				this.y -= this._speed;
				this.stop();
			}).onHit("wall_top", function() {
				this.y += this._speed;
				this.stop();
			});

					//create our bug entity with some premade components
		bug = Crafty.e("2D, Canvas, bug, Controls, Animate, Collision")
			.attr({x: 160, y: 144, z: 1})
			.animate("walk_left", 6, 4, 8)
			.animate("walk_right", 9, 4, 11)
			.animate("walk_up", 3, 4, 5)
			.animate("walk_down", 0, 4, 2)
			.collision()
			.onHit("wall_left", function() {
				this.x += this._speed;
				this.stop();
			}).onHit("wall_right", function() {
				this.x -= this._speed;
				this.stop();
			}).onHit("wall_bottom", function() {
				this.y -= this._speed;
				this.stop();
			}).onHit("wall_top", function() {
				this.y += this._speed;
				this.stop();
			});

	});
		
};