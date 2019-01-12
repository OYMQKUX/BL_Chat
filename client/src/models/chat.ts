class Chat extends BaseModel{
    public static INSTANCE: Chat = null;
    public constructor() {
        super();
    }

    public static get(): Chat {
        if (Chat.INSTANCE == null)
            Chat.INSTANCE = new Chat();
        return Chat.INSTANCE;
    }

    public static reset() {
        if (Chat.INSTANCE)
            Chat.INSTANCE = null;
    }

    public register() {
        // this.registerEvent()
    }

    public sendMsg(msg: string) {
        
    }

    public checkValid(msg: string) {
        
    }
}