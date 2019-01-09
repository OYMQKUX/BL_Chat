var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TestTable = (function (_super) {
    __extends(TestTable, _super);
    function TestTable() {
        var _this = _super.call(this, "test_json") || this;
        _this.ids = [];
        // console.log(this.tableJson);
        for (var id in _this.tableJson['rows']) {
            _this.ids.push(id);
        }
        return _this;
    }
    TestTable.prototype.getName = function (id) {
        return this.getString(id, "name");
    };
    TestTable.prototype.getStar = function (id) {
        return this.getNumber(id, "star");
    };
    TestTable.prototype.getSkill = function (id) {
        return this.split(id, "skill", "|");
    };
    return TestTable;
}(BaseTable));
__reflect(TestTable.prototype, "TestTable");
//# sourceMappingURL=TestTable.js.map