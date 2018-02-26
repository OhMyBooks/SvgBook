# 形状元素
- `<circle>` 圆形 
- `<rect>` 矩形 
- `<ellipse>` 椭圆 
- `<line>` 线
- `<polygon>` 闭合多边形 
- `<polyline>` 非闭合多边形 
- `path` 路径



## `<circle>` 圆形
> circle元素是一个SVG的基本形状，用来创建圆,基于一个圆心和一个半径

#### 属性
- `cx` 元素中心的X轴坐标
- `cy` 元素中心的Y轴坐标
- `r`  圆半径

#### 示例
````html
<svg>
  <circle cx="60" cy="60" r="50"/>
  <circle 
    cx="200" cy="60" r="50" 
    style="fill: rgba(24, 144, 255, 0.6); stroke: rgb(24,144,255); stroke-width: 3" 
  />
</svg>
````

---

## `<rect>` 矩形
> rect元素是SVG的一个基本形状，用来创建矩形，基于一个角位置以及它的宽和高。它还可以用来创建圆角矩形

#### 属性
- `x` 体现引用元素的矩形区域的左上角的x轴坐标
- `y` 体现引用元素的矩形区域的左上角的y轴坐标
- `width` 体现引用元素的矩形区域的宽度
- `height` 体现引用元素的矩形区域的高度
- `rx` 使矩形产生圆角
- `ry` 使矩形产生圆角


#### 示例

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

---

## `<ellipse>` 椭圆形
> ellipse元素是一个SVG基本形状，用来创建一个椭圆，基于一个中心坐标以及它们的x半径和y半径

#### 属性
- `cx` 元素中心的X轴坐标
- `cy` 元素中心的Y轴坐标
- `rx` 定义元素的x半径
- `ry` 定义元素的y半径

#### 示例
````html
<svg width="820" height="120">
  <ellipse cx="60" cy="60" rx="40" ry="50" />
  <ellipse 
    cx="180" cy="60" rx="40" ry="40" 
    style="fill: rgba(24, 144, 255, 0.6); stroke: rgb(24,144,255); stroke-width: 3" 
  />
</svg>
````

---

## `<line>` 线
> line元素是一个SVG基本形状，用来创建一条连接两个点的线

#### 属性
- `x1` 属性在 x 轴定义线条的开始
- `x2` 属性在 x 轴定义线条的结束
- `y1` 属性在 y 轴定义线条的开始
- `y2` 属性在 y 轴定义线条的结束

#### 示例

````html
<svg>
    <line x1="0" y1="20" x2="400" y2="20" style="stroke: black;stroke-width:2"/>
    <line x1="0" y1="40" x2="400" y2="100" style="stroke: rgb(24,144,255);stroke-width:2"/>
</svg>
````

---

## `polygon` 闭合多边形
>polygon元素定义了一个由一组首尾相连的直线线段构成的闭合多边形形状。最后一点连接到第一点

#### 属性
- `points` points属性定义了用来画一个polyline元素或画一个polygon元素的点的数列

#### 示例
````html
<svg width="820" height="120">
    <polygon points="20,20 200,20 110,100" style="fill:rgba(24, 144, 255, 0.6);stroke:rgb(24, 144, 255);stroke-width:2"/>
    <polygon points="220,20 400,20 310,100 130,100" style="fill:rgba(250, 204, 20, 0.6);stroke:rgb(250, 204, 20);stroke-width:2"/>
</svg>
````

---

## `<polyline>` 非闭合多边形
>polyline元素是SVG的一个基本形状，用来创建一系列直线连接多个点。典型的一个polyline是用来创建一个开放的形状，最后一点不与第一点相连

#### 属性
- `points` points属性定义了用来画一个polyline元素或画一个polygon元素的点的数列

#### 示例
````html
<svg width="820" height="120">
    <polyline points="20,20 200,20 110,100" style="fill:rgba(24, 144, 255, 0.6);stroke:rgb(24, 144, 255);stroke-width:3"/>
    <polyline points="220,20 400,20 310,100 130,100" style="fill:rgba(250, 204, 20, 0.6);stroke:rgb(250, 204, 20);stroke-width:3"/>
</svg>
````

---

## `<path>` 路径
>path元素是用来定义形状的通用元素。所有的基本形状都可以用path元素来创建

#### 属性
- `d` 路径信息
- `pathLength` 以用户的单位长度来估算整个路径的长度

#### 示例
````html
<svg width="100%" height="100%" viewBox="0 0 400 400">
  <path d="M 100 100 L 300 100 L 200 300 z" fill="orange" stroke="black" stroke-width="3" />
</svg>
````