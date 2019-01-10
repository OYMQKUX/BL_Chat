class TestTable extends BaseTable {
    private ids = [];
    public constructor() {
        super("test_json");
        // console.log(this.tableJson);
        for (let id in this.tableJson['rows']) {
            this.ids.push(id);
        }
    }

    public getName(id) {
        return this.getString(id, "name");
    }

    public getStar(id) {
        return this.getNumber(id, "star");
    }

    public getSkill(id) {
        return this.split(id, "skill", "|");
    }
}