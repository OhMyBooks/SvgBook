# 基本形状元素
- `<circle>` 圆形 
- `<ellipse>` 椭圆 
- `<line>` 线
- `<polygon>` 闭合多边形 
- `<polyline>` 非闭合多边形 
- `<rect>` 矩形 


## `<circle>` 圆形

### 1. 基本属性

- `cx` 元素中心的X轴坐标
- `cy` 元素中心的Y轴坐标
- `r`  圆半径

### 2. Demo

````html
<svg>
  <circle cx="60" cy="60" r="50"/>
  <circle 
    cx="200" cy="60" r="50" 
    style="fill: rgba(24, 144, 255, 0.6); stroke: rgb(24,144,255); stroke-width: 3" 
  />
</svg>
````