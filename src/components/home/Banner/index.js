let fixIndex = function(index, length) {
    if(index < 0) {
        index = length - 1;
    } else if(index >= length) {
        index = 0;
    }
    
    return index;
}

export default {
    data() {
        return {
          banner: null,
          current: 0,
          timer: null
        }
    },
    mounted() {
        this._reloadPlay();
    },
    methods: {

    switchBanner(event) {
        let id = Number(event.srcElement.dataset.id);
        this.current = Number(id);
    },

    pauseBanner() {
        this._pausePlay();  
    },

    reloadBanner() {
        this._reloadPlay();
    },

    _nextImg() {
       let current = this.current + 1;
       this.current = fixIndex(current, 4);
    },
    _preImg() {
        let current = this.current - 1;
        this.current = fixIndex(this.current, 4);
    },
    _pausePlay() {
       clearInterval(this.timer);
       this.timer = null;
    },
    _reloadPlay() {
       var that = this;
       clearInterval(that.timer);
       that.timer = setInterval(function() {
            that._nextImg();
       }, 2500);
    },
    },
    
}