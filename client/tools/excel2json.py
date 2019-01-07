import xlrd
import json
import os
import codecs

INPUT_PATH = "../excel/"
OUTPUT_PATH = "../excel/json_tables/"
FIRST_ROW = 1 ##row 0 as appendix
FIRST_COL = 1

def convert(filePath, fileName):
    print ('converting: ', filePath)
    if getData(filePath) is not None:
        data = getData(filePath)
        sheetNames = data.sheet_names()
        print (sheetNames)
        result = {}
        for sheetName in sheetNames:
            print ('converting sheet {0}: ', format(sheetName))
            workSheet = data.sheet_by_name(sheetName)
            nrows = workSheet.nrows
            ncols = workSheet.ncols
            tmp = {}
            for col in range(ncols):
                key = workSheet.cell_value(FIRST_ROW, col)
                tmp[key] = col + 1
            result['keys'] = tmp
            result['rows'] = {}
            tmp = {}
            for row in range(nrows):
                if row <= FIRST_ROW:
                    continue
                key = workSheet.cell_value(row, FIRST_COL)
                tmp[key] = []
                for col in range(ncols):
                    tmp[key].append(workSheet.cell_value(row, col))
            result['rows'] = tmp
        jsonData = json.dumps(result, indent=4)
        saveJson(os.path.join(OUTPUT_PATH), fileName, jsonData)


def getData(filePath):
    try:
        data = xlrd.open_workbook(filePath)
        return data
    except Exception as inst:
        print ('excel path wrong')
        print (inst)
        return None

def saveJson(filePath, fileName, data):
    output = codecs.open(filePath + fileName + '.json', 'w', 'utf-8')
    output.write(data)
    output.close()

if __name__ == '__main__':
    fileName = input('check=======>')
    filePath = INPUT_PATH + fileName
    # data = getData(fileName)
    # print(data)
    convert(filePath, fileName)