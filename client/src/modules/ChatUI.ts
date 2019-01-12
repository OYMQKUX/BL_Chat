class ChatUI extends eui.Component {
    private btnSend: eui.Button;
    private textInp: eui.TextInput;
    public constructor(params) {
        super();
        this.skinName = "MainUI.exml"
    }

    protected createChildren() {
        super.createChildren();
        this.layout();
        this.registerEvent();
    }

    private layout() {

    }

    private registerEvent() {
        this.btnSend.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            let msg = this.textInp.text;
            if (Chat.get().checkValid(msg)) {
                Chat.get().sendMsg(msg);
            } else {
                //show tips
            }
        }, this)
        // this.addEventListener(, on)
    }
}