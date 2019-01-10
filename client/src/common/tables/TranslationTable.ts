class TranslationTable extends BaseTable {
    public static INSTANCE: TranslationTable = null;
    public constructor() {
        super("translation.json");
    }

    public static get(): TranslationTable {
        if (TranslationTable.INSTANCE == null)
            TranslationTable.INSTANCE = new TranslationTable();
        return TranslationTable.INSTANCE;
    }

    public static reset() {
        if (TranslationTable.INSTANCE)
            TranslationTable.INSTANCE = null;
    }

    public getVal(key) {
        return this.getString(key, "translation");
    }
}