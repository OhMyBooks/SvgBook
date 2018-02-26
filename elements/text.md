## 文本内容元素
- `<text>`
- `<textPath>` 
- `<tref>`
- `<tspan>`
- `<altGlyph>` 子字符数据


## `text` 文字
>text元素定义了一个由文字组成的图形。注意：我们可以将渐变、图案、剪切路径、遮罩或者滤镜应用到text上

#### 属性
- `x` x轴坐标
- `y` y轴坐标
- `dx` x轴方向上的偏移
- `dy` y轴方向上的偏移
- `text-anchor` 文本对齐方式(开头、中间、末尾对齐)
- `rotate` 
- `textLength` 长度
- `lengthAdjust` 控制文本如何被拉伸或压缩到textLength长度

#### 示例
````html
<svg>
<g style="font-size: 14pt;">
    <path d="M 100 10 100 100" style="stroke: gray; fill: none;"/>
    <text x="100" y="30" style="text-anchor: start">Start</text>
    <text x="100" y="60" style="text-anchor: middle">Middle</text>
    <text x="100" y="90" style="text-anchor: end">End</text>
</g>
</svg>
````

---

## ``
>

#### 属性

#### 示例
````html
````

---

## ``
>

#### 属性

#### 示例
````html
````

---


---

## `<altGlyph>` 子字符数据
>altGlyph元素允许符号的复杂选区，用来呈现它的子字符数据, 更多请参考[MDN: altGlyph](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/altGlyph)

