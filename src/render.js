function Renderer(canvas) {
	this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
	this.scene = new Scene('Main');
    this.time = 0;
    this.pause = false;

	this.render = ()=>{
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (!this.pause) {
            for (obj of this.scene.objects) {
                this.scene.objects.sort((a, b)=>{
                    return a.zindex - b.zindex;
                });
                obj.update();
                obj.render(this.ctx);
            }
            if (this.scene.area)
                this.scene.area.render(this.ctx);
        }
        requestAnimationFrame(this.render);
	}

    this.stop = ()=>{
        this.pause = true;
    }

    this.start = ()=>{
        this.pause = false;
    }

    this.render();
}

function Scene(name) {
    this.name = name;
	this.objects = [];
    this.area = null;

    this.add = (obj)=>{
        this.objects.push(obj);
        this.objects.sort((a, b)=>{
            return a.zindex - b.zindex;
        });
        console.log('Added object!');
    }
}