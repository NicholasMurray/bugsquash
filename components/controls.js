Crafty.c('CustomControls', {
	__move: {left: false, right: false, up: false, down: false},	
	_speed: 3,
	
	CustomControls: function(speed) {
		if(speed) this._speed = speed;
		var move = this.__move;
		
		this.bind('enterframe', function() {
			//move the player in a direction depending on the booleans
			//only move the player in one direction at a time (up/down/left/right)
			if(this.isDown("RIGHT_ARROW")) this.x += this._speed; 
			else if(this.isDown("LEFT_ARROW")) this.x -= this._speed; 
			else if(this.isDown("UP_ARROW")) this.y -= this._speed;
			else if(this.isDown("DOWN_ARROW")) this.y += this._speed;
		});
		
		return this;
	}
});