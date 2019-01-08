var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseTable = (function () {
    function BaseTable(tableName) {
        this.tableJson = null;
        // super();
        this.tableJson = RES.getRes(tableName);
    }
    return BaseTable;
}());
__reflect(BaseTable.prototype, "BaseTable");
//# sourceMappingURL=BaseTable.js.map