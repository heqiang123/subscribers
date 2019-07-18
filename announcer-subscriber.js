var Event1 = {
    handlerList = {a: 1},
    listen:function (eventName, handler) {
        if(!this.handlerList[eventName]) {
            this.handlerList[eventName] = []
        }
        this.handlerList[eventName].push(handler)
    },
    trigger:function (eventName) {
        if(!this.handlerList[eventName]){
            return false
        } else {
            for(var i = 0; i<this.handlerList[eventName].length;i++){
                this.handlerList[eventName][i](arguments[1])
            }
        }
    }
}
// export default Event