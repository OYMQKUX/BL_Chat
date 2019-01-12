import xlrd
import json
import os
import codecs

INPUT_PATH = "../excel/"
OUTPUT_PATH = "../excel/json_tables/"
CONFIG_PATH = "../resource/config/tables/"
FIRST_ROW = 1 ##row 0 as appendix
FIRST_COL = 0
TYPE_TEXT = 1;
TYPE_NUMBER = 2;

def convert(filePath, fileName):
    print ('converting: ', filePath)
    if getData(filePath) is not None:
        data = getData(filePath)
        sheetNames = data.sheet_names()
        result = {}
        for sheetName in sheetNames:
            print ("converting sheet {0}... ".format(sheetName))
            workSheet = data.sheet_by_name(sheetName)
            nrows = workSheet.nrows
            ncols = workSheet.ncols
            tmp = {}
            for col in range(ncols):
                key = getRealValue(FIRST_ROW, col, workSheet)
                tmp[key] = col
            result['keys'] = tmp
            result['rows'] = {}
            tmp = {}
            for row in range(nrows):
                if row <= FIRST_ROW:
                    continue
                key = getRealValue(row, FIRST_COL, workSheet)
                print (key)
                tmp[key] = []
                for col in range(ncols):
                    tmp[key].append(getRealValue(row, col, workSheet))
            result['rows'] = tmp
        jsonData = json.dumps(result, indent=4, ensure_ascii=False)
        saveJson(os.path.join(OUTPUT_PATH), fileName, jsonData)
        saveJson(os.path.join(CONFIG_PATH), fileName, jsonData)

def getRealValue(row, col, workSheet):
    val = workSheet.cell_value(row, col)
    valType = workSheet.cell_type(row, col)
    if valType == TYPE_NUMBER:
        tmpVal = int(val)
        if tmpVal == val:
            val = tmpVal
    # elif valType == TYPE_TEXT:
        # val = val.encode('utf-8')
        # print (val)
    return val

def getData(filePath):
    try:
        data = xlrd.open_workbook(filePath)
        return data
    except Exception as inst:
        print ('excel path wrong')
        print (inst)
        return None

def saveJson(filePath, fileName, data):
    name, suffix = os.path.splitext(fileName)
    output = codecs.open(filePath + name + '.json', 'w', encoding='utf-8')
    output.write(data)
    output.close()

if __name__ == '__main__':
    for fileName in os.listdir(INPUT_PATH):
        name, suffix = os.path.splitext(fileName)
        if name.find('~$') >= 0:
            print ('copy file no convert!!!')
        elif suffix == '.xlsx' or suffix == '.xls':
            convert (INPUT_PATH + fileName, fileName)