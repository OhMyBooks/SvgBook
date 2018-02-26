# 文本内容元素
- `<text>` 文本
- `<textPath>` 文本路径
- `<tref>` 引用文本(已废弃)
- `<tspan>` 文本子元素
- `<altGlyph>` 子字符数据


## `text` 文本
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

#### 参考
- [MDN: text](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/text)
- [SVG之text](https://segmentfault.com/a/1190000009293590)

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

## `textPath` 文本路径
>除了笔直地绘制一行文字以外， SVG 也可以根据 <path> 元素的形状来放置文字。 只要在textPath元素内部放置文本，并通过其xlink:href属性值引用<path>元素，我们就可以让文字块呈现在<path>元素给定的路径上了

#### 属性
- `startOffset`
- `method`
- `spacing`
- `xlink:href`


#### 示例
````html
<svg width="100%" height="100%" viewBox="0 0 1000 300">
  <defs>
    <path id="MyPath"
          d="M 100 200 
             C 200 100 300   0 400 100
             C 500 200 600 300 700 200
             C 800 100 900 100 900 100" />
  </defs>

  <use xlink:href="#MyPath" fill="none" stroke="red"  />

  <text font-family="Verdana" font-size="42.5">
    <textPath xlink:href="#MyPath">
      We go up, then we go down, then up again
    </textPath>
  </text>

  <!-- Show outline of the viewport using 'rect' element -->
  <rect x="1" y="1" width="998" height="298" fill="none" stroke="black" stroke-width="2" />
</svg>
````

---

## `<tspan>` 文本子元素
>在text元素中，利用内含的tspan元素，可以调整文本和字体的属性以及当前文本的位置、绝对或相对坐标值

#### 属性
- `x` x轴坐标
- `y` y轴坐标
- `dx` x轴方向的偏移
- `dy` y轴方向的偏移
- `rotate`
- `textLength` 文字长度
- `lengthAdjust` 控制文本如何被拉伸或压缩到textLength长度

#### 示例
````html
<style>
    text{
        font: 20px Verdana, Helvetica, Arial, sans-serif;
    }
    
    tspan{
        fill: red;
        font-weight: bold
    }
</style>
<svg width="250" height="40" viewBox="0 0 250 40">
    <text x="15" y="30">
        You are <tspan>not</tspan> alone
    </text>
</svg>
````


---

## `<tref>` 引用文本(已废弃)
>提示：新版的svg中已经将<tref>这个标记删除，你可以使用<use>标记替代它

---

## `<altGlyph>` 子字符数据
>altGlyph元素允许符号的复杂选区，用来呈现它的子字符数据, 更多请参考[MDN: altGlyph](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/altGlyph)

