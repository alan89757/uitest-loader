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
    // console.log(options)
    var obj = eval(source);
    // console.log(obj.formConfig);

    var { formItems, filename, url, formId } = obj.formConfig;

    // var obj = new Function(source, {exports: module.exports});
    // var fn = new Function( source, 'exports', 'module');
    // var obj = fn(module.exports, module);
    // console.log(obj);

    // 组装list数据
    var _length = formItems.length;
    var excelData = options.header ? [options.header]: [];
    var i = 0;
    for ( ; i < _length; i++) {
      var temp = formItems[i];
      var excelPos = `[${options["attr"]}=${temp["field"]["name"]}] #${formId}_${temp["field"]["name"]}`;
      excelData.push(["", "",   "",         "",     "", url , excelPos,  temp["field"]["label"], temp["field"]["type"], ""]);
    }
    var buffer = xlsx.build([{name: "mySheetName", data: excelData}]); 
    fs.writeFileSync(path.join(process.cwd(), `./test/${filename}.xlsx`), Buffer.from(buffer));
    return source;
}
// const raw = true;
// exports.raw = raw;