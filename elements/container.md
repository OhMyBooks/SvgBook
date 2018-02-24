# 容器元素
- `<g>` 用来组合对象的容器
- `<a>` SVG 的锚元素 
- `<defs>` 可重复使用的元素
- `<glyph>` 
- `<marker>`
- `<mask>`
- `<missing-glyph>`
- `<pattern>`
- `<svg>`
- `<switch>`
- `<symbol>`


## `<g>` 组合对象的容器
> 元素g是用来组合对象的容器。添加到g元素上的变换会应用到其所有的子元素上。添加到g元素的属性会被其所有的子元素继承。此外，g元素也可以用来定义复杂的对象，之后可以通过<use>元素来引用它们

#### 属性
- 无


#### 示例

>写在g上的颜色作用到子元素circle中

````html
<svg>
  <g stroke="green" fill="white" stroke-width="5">
    <circle cx="25" cy="45" r="15" />
    <circle cx="50" cy="45" r="15" />
    <circle cx="80" cy="45" r="15" />
    <circle cx="110" cy="45" r="15" />
  </g>
</svg>
````

---


## `<a>` 超链接
>由于这个元素和HTML的a标签 使用了相同的标签名，当使用 CSS 或 querySelector 选择"a"时，可能应用到错误的元素上。 可以尝试使用 @namespace规则 来区分两者


#### 属性
- `xlink:show` 在何处打开链接
- `xlink:actuate` 定义何时读取和显示被链接的资源。
- `xlink:href` 要链接的 URL
- `target` 新标签打开方式

#### 示例

````html
<svg>
  <a xlink:href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/a" target="_blank">
    <rect height="30" width="120" y="20" x="0" rx="15" />
    <text fill="white" text-anchor="middle" y="41" x="60">a on MDN </text>
  </a>
</svg>
````

---

## `<defs>` 可重复使用元素
>SVG 允许我们定义以后需要重复使用的图形元素。 建议把所有需要再次使用的引用元素定义在defs元素里面。这样做可以增加SVG内容的易读性和可访问性。 在defs元素中定义的图形元素不会直接呈现。 你可以在你的视口的任意地方利用use元素呈现这些元素

#### 属性
- 无


#### 示例
>这里使用了渐变色
````html
<svg>
  <defs>
    <linearGradient id="Gradient01">
      <stop offset="20%" stop-color="#39F" />
      <stop offset="90%" stop-color="#F3F" />
    </linearGradient>
  </defs>

  <rect x="10" y="20" width="300" height="30" fill="url(#Gradient01)"  />
</svg>
````

---

## `<marker>` 多边标记图案(箭头)
>marker元素定义了在特定的path元素、line元素、polyline元素或者polygon元素上绘制的箭头或者多边标记图形
>
>额外参考 [如何创建SVG箭头和polymarker——marker](https://www.w3cplus.com/svg/svg-markers.html)

#### 属性
- `markerUnits` 
- `refX`
- `refY`
- `markerWidth`
- `markerHeight`
- `orient`

#### 示例
````html
<svg>
  <defs>
    <marker id="Triangle" viewBox="0 0 10 10" refX="1" refY="5"
        markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>

  <polyline points="10,90 50,80 90,20" fill="none" stroke="black" 
      stroke-width="2" marker-end="url(#Triangle)" />
</svg>
````

---

## `<mask>` 蒙版
>简单来说，蒙版可以理解为附加在指定元素上的透明度属性。蒙版透明的区域，指定元素相应的区域就透明，蒙版不透明的区域，指定元素相应的区域就不透明

#### 属性
- `maskUnits`
- `maskContentUnits`
- `x`
- `y`
- `width`
- `height`

#### 参考
- [如何使用CSS和SVG剪切和遮罩技术](https://segmentfault.com/a/1190000006785931)
- [SVG之Clipping and Masking](https://segmentfault.com/a/1190000009307306)


#### 示例
````html
<svg>
    <defs>
        <mask id="cat" x="0" y="0" height="200" width="400" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
            <rect x="0" y="0" width="200" height="200" fill="#fff" opacity="0.5"></rect>
            <path d="m100 100a50 40 0 1 0 100 0Q200 00 170 30Q150 50 130 30Q100 0 100 100" fill="#fff" opacity="1"></path>
        </mask>
    </defs>
    <rect height="200" width="320" y="20" x="0" style="mask:url(#cat)" />
</svg>

````

---

## `<pattern>` 模式
>使用预定义的图形对一个对象进行填充或描边，就要用到pattern元素。pattern元素让预定义图形能够以固定间隔在x轴和y轴上重复（或平铺）从而覆盖要涂色的区域。先使用pattern元素定义图案，然后在给定的图形元素上用属性fill或属性stroke引用用来填充或描边的图案。

#### 属性
- `patternUnits`
- `patternContentUnits`
- `patternTransform`
- `x`
- `y`
- `width`
- `height`
- `xlink:href`
- `preserveAspectRatio`

#### 参考
- [MDN: pattern](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/pattern)
- [SVG之Patterns & Gradient](https://segmentfault.com/a/1190000009278935)

#### 示例
````html
<svg width="820" height="120">
    <defs>
        <pattern id="tile" width="0.2" height="0.2" patternUnits="objectBoundingBox">
            <path d="M 0 0 Q 5 20 10 10 T 20 20" stroke="black" fill="none"></path>
            <rect x="0" y="0" width="20" height="20" stroke="grey" fill="none"></rect>
        </pattern>
    </defs>
    <defs>
        <pattern id="Triangle" width="10" height="10" patternUnits="userSpaceOnUse">
            <polygon points="5,0 10,10 0,10"/>
        </pattern>
    </defs>

    <rect x="20" y="20" width="100" height="100" fill="url(#tile)" stroke="grey"></rect>
    <circle cx="200" cy="70" r="50" fill="url(#Triangle)"/>
</svg>
````

---

## `<glyph>` 独立字体
>一个glyph元素定义了SVG字体中的一个独立的字形, 更多详情参考 [MDN:glyph](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/glyph)

## `<missing-glyph>` 备用字体
>对于给定的字符，如果没有定义一个合适的glyph，就会呈现missing-glyph元素的内容, 参考 [MDN: missing-glyph](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/missing-glyph)