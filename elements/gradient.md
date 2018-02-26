# 渐变元素
- `<linearGradient>` 线性渐变元素
- `<radialGradient>` 

##  `<linearGradient>` 线性渐变元素

#### 属性
- `gradientUnits` 该属性定义的坐标系的属性x1，y1，x2和y2
- `gradientTransform` 该属性包含从渐变坐标系到目标坐标系的可选附加转换的定义
- `x1` 第一x坐标
- `y1` 第一y坐标
- `x2` 第二x坐标
- `y2` 第二y坐标
- `spreadMethod` 控制渐变方式的属性
- `xlink:href` 

#### 参考
- [MDN: linearGradient](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/linearGradient)
- [SVG 渐变（linearGradient、radialGradient）](http://blog.csdn.net/chy555chy/article/details/53415770)

#### 示例
>SVG 渐变必须在 <defs> 标签中进行定义

````html
<svg>
    <defs>
        <linearGradient id="MyGradient">
            <stop offset="5%"  stop-color="green"/>
            <stop offset="95%" stop-color="gold"/>
        </linearGradient>
    </defs>
    <rect fill="url(#MyGradient)" x="10" y="10" width="100" height="100"/>
</svg>
````

--- 

##  `<radialGradient>` 径向渐变元素
>radialGradient用来定义径向，用于图形元素的填充或描边

#### 属性
- `gradientUnits` 该属性定义的坐标系的属性cx,cy
- `gradientTransform` 该属性包含从渐变坐标系到目标坐标系的可选附加转换的定义
- `cx` 定义元素中心的X轴坐标
- `cy` 定义元素中心的Y轴坐标
- `r` 定义元素半径
- `fx` 定义径向渐变焦点的x轴坐标
- `fy` 定义径向渐变焦点的y轴坐标
- `spreadMethod` 控制渐变方式的属性
- `xlink:href`

#### 参考
- [MDN: radialGradient](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/radialGradient)
- [SVG 渐变（linearGradient、radialGradient）](http://blog.csdn.net/chy555chy/article/details/53415770)


#### 示例
````html
<svg>
    <defs>
        <radialGradient id="MyGradient">
            <stop offset="10%" stop-color="gold"/>
            <stop offset="95%" stop-color="green"/>
        </radialGradient>
    </defs>
    <circle fill="url(#MyGradient)" cx="60" cy="60" r="50"/>
</svg>
````

--- 