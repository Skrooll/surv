function Renderer(canvas) {
	this.canvas = canvas;
	this.scene = new Scene();
	this.render = ()=>{
		for (obj of this.scene.objects) {
			this.scene.objects.sort((a, b)=>{
				return a.zindex - b.zindex;
			})
			obj.render();
		}
	}
}

function Scene() {
	
}