class BaseTable{
    public tableJson: any = null;
    public constructor(tableName: string) {
        // super();
        this.tableJson = RES.getRes(tableName);
    }


}