class SelectionRect {
    constructor(){
        this.top_left_x = 0;
        this.top_left_y = 0;
        this.bottom_right_x = 0;
        this.bottom_right_y = 0;
        this.sq_width = 0;
        this.sq_height = 0;
        this.el = document.createElement('div');
        this.handleMouseMoveBound = this.handleMouseMove.bind(this);

        document.addEventListener('mousedown', this.init.bind(this));
        
        document.addEventListener('mouseup', this.handleMouseUp.bind(this));
    }

    init(e){
        this.top_left_x = e.clientX;
        this.top_left_y = e.clientY;

        this.el.style.left = `${this.top_left_x}px`;
        this.el.style.top = `${this.top_left_y}px`;
        this.el.style.width = `${this.sq_width}px`;
        this.el.style.height = `${this.sq_height}px`;
        this.el.className = 'rect';

        const body = document.querySelector('body');
        body.appendChild(this.el);

        document.addEventListener('mousemove', this.handleMouseMoveBound);
    }

    handleMouseMove(e) {
        this.bottom_right_x = e.clientX;
        this.bottom_right_y = e.clientY;
        let wid;
        let height;

        
        if(this.bottom_right_x > this.top_left_x){
            this.el.style.left = `${this.top_left_x}px`;
            wid = this.bottom_right_x - this.top_left_x;
        }

        if(this.bottom_right_y > this.top_left_y) {
            this.el.style.top = `${this.top_left_y}px`;
            height = this.bottom_right_y - this.top_left_y;
        }

        if(this.bottom_right_x < this.top_left_x){
            this.el.style.left = `${this.bottom_right_x}px`;
            wid = this.top_left_x - this.bottom_right_x;
        }

        if(this.bottom_right_y < this.top_left_y) {
            this.el.style.top = `${this.bottom_right_y}px`;
            height = this.top_left_y - this.bottom_right_y;
        }

        if(this.bottom_right_x === this.top_left_x){
            this.el.style.left = `${this.top_left_x}px`;
            wid = 0;
        }

        if(this.bottom_right_y === this.top_left_y){
            this.el.style.top = `${this.top_left_y}px`;
            height = 0;
        }

    
        this.el.style.width = `${wid}px`;
        this.el.style.height = `${height}px`;
    }

    handleMouseUp(e){
        const body = document.querySelector('body');
        body.removeChild(this.el);

        document.removeEventListener('mousemove', this.handleMouseMoveBound);
    }
}   

