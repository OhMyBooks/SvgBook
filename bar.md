## 配置选项
```js
{
  // 图表类型
  type: 'bar',
  
  // x轴数据
  xAxis: [
    {
      type: 'category',
      data: ['广深区域', '上海区域', '中西部区域', '北京区域']
    }
  ],
  
  // y轴数据
  yAxis: [
    {
      type: 'value',
      name: '投诉工单重复率'
    }
  ],
  
  // 图表数据
  series: [
    {
      name: '数值',
      data: [10, 50, 70, 30]
    }
  ],
  
  // 均值线
  markLine: {
    // 是否绘制均值线
    showMarkLine: true,
    // formatter函数
    formatter: o => o,
    // 均值线数值以及文案，可以多组数据
    data: [
      {value: 38, name: '这是集团均值'}
    ],
  },
  // 提示
  tooltip: {
    // formatter函数
    formatter: o => {
      return `<div>${o.label}</div><div><span class="colorbox" style="background-color:${o.color}"></span>${o.key}：${o.value}</div>`
    }
  }
}
}
```

## 配置示例

```js
{
  
}
```