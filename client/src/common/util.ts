function __(name): String {
    let res = TranslationTable.get().getVal(name);
    return res;
}