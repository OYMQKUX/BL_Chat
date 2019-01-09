class EventDispatcher extends egret.EventDispatcher {
    public static EventInner: EventDispatcher = null;
    public static EventOuter: EventDispatcher = null;
    public constructor() {
        super()
    }

    public static inner(): EventDispatcher {
        if (EventDispatcher.EventInner == null)
            EventDispatcher.EventInner = new EventDispatcher();
        return EventDispatcher.EventInner;
    }

    public static outer(): EventDispatcher {
        if (EventDispatcher.EventOuter == null)
            EventDispatcher.EventOuter = new EventDispatcher();
        return EventDispatcher.EventOuter;
    }
}