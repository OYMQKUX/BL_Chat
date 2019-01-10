class BaseModel {
    private events = [];
    private callbacks = [];
    private thisObjs = [];
    public constructor() {

    }
    
    public registerEvent(event: string, callback: any, thisObj) {
        EventDispatcher.outer().addEventListener(event, callback, thisObj);
        this.events.push(event);
        this.callbacks.push(callback);
        this.thisObjs.push(thisObj);
    }

    public removeEvents() {
        for (let i = 0; i < this.events.length; ++i) {
            EventDispatcher.outer().removeEventListener(this.events[i], this.callbacks[i], this.thisObjs[i]);
        }
    }

}