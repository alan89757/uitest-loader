<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

# uitest-loader

A loader for webpack which test web page.

### Getting Started

To begin, you'll need to install `uitest-loader`:

### npm
```console
$ npm install uitest-loader --save-dev
```

### yarn
```console
$ yarn add uitest-loader --save-dev
```

`uitest-loader` works like
[`file-loader`](https://github.com/webpack-contrib/file-loader), but can return
a DataURL if the file is smaller than a byte limit.

**index.js**

```js
{
  "filename": "ui自动化测试demo3",
  "url": "http://xxx/auto-test/",
  "formId": "register2",
  "formItems": [
    {
    
      "name": "name",
      "label": "活动名称",
      "type": "文本框",
      "rules": [
        {
          "required": true,
          "message": "请输入活动名称~"
        }
      ]
    },
    {
      "name": "area",
      "label": "活动区域",
      "type": "下拉框",
      "rules":[
        {
          "required": true,
          "message": "请输入活动区域~"
        }
      ]
    }
  ]

}
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.uitest\.json$/,
        use: {
            loader: "uitest-loader",  // 会生成excel
            options: {
                attr: "auto-test2",  // 测试属性
                header: ["预期事件", "预期内容", "实际事件", "实际内容", "对比结果", "访问地址", "填充位置", "属性名称", "输入类型", "输入内容"]
            }
        }
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## Options

|             Name              |            Type             |                            Default                            | Description                                                                         |
| :---------------------------: | :-------------------------: | :-----------------------------------------------------------: | :---------------------------------------------------------------------------------- |
|     **[`attr`](#attr)**     | `{String}` |                            ""                             | custom-attribute.                                     |
|  **[`header`](#header)**  |     `{Array}`     | [] | set excel header.                                  |

### `attr`

Type: `String`
Default: ``

The attr can be specified via loader options and defaults to empty.

#### `header`

The header can be specified via loader options and defaults to [].

## Examples

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.uitest\.json$/,
        use: {
            loader: "uitest-loader",  // 会生成excel
            options: {
                attr: "auto-test2",  // 测试属性
                header: ["预期事件", "预期内容", "实际事件", "实际内容", "对比结果", "访问地址", "填充位置", "属性名称", "输入类型", "输入内容"]
            }
        }
      },
    ],
  },
};
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm-url]: https://npmjs.com/package/uitest-loader
[node-url]: https://nodejs.org

```

```
