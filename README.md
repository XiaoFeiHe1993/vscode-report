# 超越鼓励师

在 VS Code 中连续写代码一小时（时间可配置），会有杨超越提醒你该休息啦~

## 使用

除了每过一小时会自动弹出提醒页面，也可以按 `F1`, 然后输入 `report:打开周报提醒`来打开提醒页面

![usage](images/usage.png)

## 配置

- `report.title`: 提示文字。 (默认值为**该写周报啦~**)
- `report.type`: default (默认图)；url (图片地址)。(默认值为**default**)
- `report.customImages`: 配置图片数组（需要搭配 report.type 为 url） (默认值为**默认图片**)

```
如下例子，使用自定义图片：
"report.type": "url",
"report.customImages": [
    "http://b-ssl.duitang.com/uploads/item/201806/04/20180604090459_gqqjo.jpg"
]
```
