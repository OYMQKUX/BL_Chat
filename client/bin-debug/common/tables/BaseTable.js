var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseTable = (function () {
    function BaseTable(tableName) {
        this.tableJson = null;
        // super();
        this.tableJson = RES.getRes(tableName);
    }
    BaseTable.prototype.getNumber = function (id, val) {
        var pos = this.tableJson['keys'][val];
        return Number(this.tableJson['rows'][id][pos]);
    };
    BaseTable.prototype.getString = function (id, val) {
        return String(this.getNumber(id, val));
    };
    BaseTable.prototype.split = function (id, val, c) {
        var tmpVal = this.getString(id, val);
        return tmpVal.split(c);
    };
    return BaseTable;
}());
__reflect(BaseTable.prototype, "BaseTable");
//# sourceMappingURL=BaseTable.js.map