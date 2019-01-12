class UIManager {
    public UIs = {};
    public static INSTANCE: UIManager;
    public MainStage: any;
    public constructor(params) {
        this.MainStage = params.thisObj;
        for (let i = 1; i <= 6; ++i)
            this.UIs[i] = [];
    }

    public get(params) {
        if (UIManager.INSTANCE == null)
            UIManager.INSTANCE = new UIManager(params);
        return UIManager.INSTANCE;
    }

    public reset() {
        if (UIManager.INSTANCE)
            UIManager.INSTANCE = null;
    }

    public showUI(name: string) {
        let level = UITable.get().getLevel(name);
        let tmpUIs = this.UIs[level];
        let stages = this.MainStage.getChildAt(level);
        let pos = tmpUIs.indexOf(name);
        if (pos < 0) {
            let UI = this.getInstance(name);
            stages.addChild(UI);
        } else {
            let stage = stages.getChildAt(pos);
            this.refreshUI(stage, name);
        }
    }

    public removeUI(name: string) {
        let level = UITable.get().getLevel(name);
        let tmpUIs = this.UIs[level];
        let stages = this.MainStage.getChildAt(level);
        let pos = tmpUIs.indexOf(name);
        if (pos < 0)
            return;
        else {
            stages.removeChild(stages[pos]);
        }
    }

    public refreshUI(stages, name) {
        
    }

    public getInstance(name: string) {
        //根据名字创建实例
    }
}