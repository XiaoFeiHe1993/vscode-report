# 周报提醒插件

每周五下班前会有插件提醒你写周报。

## 使用

除了每周五会自动弹出提醒页面，也可以按 `F1`, 然后输入 `report:打开周报提醒`来打开提醒页面

![usage](images/usage.png)

## 配置

- `report.title`: 提示文字。 (默认值为**快下班了，亲，该写周报啦~**)
- `report.type`: default (默认图)；url (图片地址)。(默认值为**default**)
- `report.customImages`: 配置图片数组（需要搭配 report.type 为 url） (默认值为**默认图片**)

```
如下例子，使用自定义图片：
"report.type": "url",
"report.customImages": [
    "http://images.xuejuzi.cn/1905/1_190501101421_1.jpg"
]
```
