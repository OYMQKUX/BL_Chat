class BaseTable{
    public tableJson: any = null;
    public constructor(tableName: string) {
        // super();
        this.tableJson = RES.getRes(tableName);
    }

    public getNumber(id, val): number {
        let pos = this.tableJson['keys'][val];
        return Number(this.tableJson['rows'][id][pos]);
    }

    public getString(id, val): string {
        return String(this.getNumber(id, val));
    }

    public split(id, val, c): string[] {
        let tmpVal:String = this.getString(id, val);
        return tmpVal.split(c);
    }
}