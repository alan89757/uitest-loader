Object.defineProperty(exports, "__esModule", {
    value: true
  });
exports.default = loader;
exports.raw = void 0;

var path = require("path");
var xlsx = require('node-xlsx').default;
var _loaderUtils = require("loader-utils");
var fs = require("fs");

function loader (source) {
    var options = (0, _loaderUtils.getOptions)(this) || {};
    // 解析json
    var data = JSON.parse(source);
    var { formItems } = data;
    var _length = formItems.length;

    var excelData = [options.header];
    for (let i = 0; i < _length; i++) {
        let excelPos = `[${options["attr"]}=${formItems[i]["name"]}] #${data["formId"]}_${formItems[i]["name"]}`;
        excelData.push(["", "",   "",         "",     "", data["url"] , excelPos,  formItems[i]["label"], formItems[i]["type"], ""]);
    }
    var buffer = xlsx.build([{name: "mySheetName", data: excelData}]); 
    fs.writeFileSync(path.join(process.cwd(), `./test/${data.filename}.xlsx`), Buffer.from(buffer));
    return source;
}
const raw = true;
exports.raw = raw;