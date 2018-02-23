# 基本形状元素
- `<circle>` 圆形 
- `<rect>` 矩形 
- `<ellipse>` 椭圆 
- `<line>` 线
- `<polygon>` 闭合多边形 
- `<polyline>` 非闭合多边形 



## `<circle>` 圆形

### 基本属性
- `cx` 元素中心的X轴坐标
- `cy` 元素中心的Y轴坐标
- `r`  圆半径

### 示例

````html
<svg>
  <circle cx="60" cy="60" r="50"/>
  <circle 
    cx="200" cy="60" r="50" 
    style="fill: rgba(24, 144, 255, 0.6); stroke: rgb(24,144,255); stroke-width: 3" 
  />
</svg>
````

## `<rect>` 矩形

### 基本属性
- `x` 体现引用元素的矩形区域的左上角的x轴坐标
- `y` 体现引用元素的矩形区域的左上角的y轴坐标
- `width` 体现引用元素的矩形区域的宽度
- `height` 体现引用元素的矩形区域的高度
- `rx` 使矩形产生圆角
- `ry` 使矩形产生圆角


### 示例

````html
<svg width="820" height="120">
  <rect x="10" y="10" width="100" height="100" />
  <rect 
    x="150" y="10" width="100" height="100" 
    style="fill: rgba(24, 144, 255, 0.6); stroke: rgb(24,144,255); stroke-width: 3" 
  />
  <rect 
    x="300" y="10" width="100" height="100" 
    rx="15" ry="15"
    style="fill: rgba(250, 204, 20, 0.6); stroke: rgb(250, 204, 20); stroke-width: 3" 
  />
</svg>
````