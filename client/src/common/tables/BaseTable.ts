class BaseTable{
    public tableJson: any = null;
    public constructor(tableName: string) {
        // super();
        this.tableJson = RES.getRes(tableName);
    }

    public getNumber(id, val): number {
        return Number(this.getString(id, val));
    }

    public getString(id, val): string {
        let pos = this.tableJson['keys'][val];
        return this.tableJson['rows'][id][pos];
    }

    public split(id, val, c): string[] {
        let tmpVal:String = this.getString(id, val);
        return tmpVal.split(c);
    }
}