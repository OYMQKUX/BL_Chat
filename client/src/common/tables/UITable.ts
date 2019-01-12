class UITable extends BaseTable {
    public static INSTANCE: UITable;
    private UIMap = {string: Object};
    private UIName = [];
    public constructor() {
        super('window_json');
    }

    public static get(): UITable {
        if (UITable.INSTANCE == null)
            UITable.INSTANCE = new UITable();
        return UITable.INSTANCE;
    }

    public static reset() {
        if (UITable.INSTANCE)
            UITable.INSTANCE = null;
    }

    public getLevel(name: string) {
        return this.getNumber(name, 'level');
    }

    public getClass(name: string) {
        return this.getString(name, 'class');
    }
}