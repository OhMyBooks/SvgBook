# 容器元素
- `<svg>` 根容器元素
- `<g>` 用来组合对象的容器
- `<a>` SVG 的锚元素 
- `<defs>` 可重复使用的元素
- `<marker>` 多边标记图案(箭头)
- `<mask>` 蒙版
- `<pattern>` 填充
- `<switch>` 分支
- `<symbol>` 模板
- `<glyph>` 独立字体
- `<missing-glyph>` 备用字体

## `<svg>` 根容器元素

#### 属性
- `version` 用于指示SVG文档符合的规范，对渲染或处理没有影响
- `baseProfile` 描述了作者认为正确呈现内容所必需的最小SVG语言配置文件。该属性没有指定任何处理限制
- `x` 引用元素的矩形区域的左上角的x轴坐标
- `y` 引用元素的矩形区域的左上角的y轴坐标
- `width` svg的水平长度
- `height` svg的垂直长度
- `preserveAspectRatio` 使用viewBox属性缩放时是否强制进行统一缩放
- `contentScriptType` 指定给定的文档片段的默认脚本语言
- `contentStyleType` 此属性指定给定文档片段的样式表语言，如果未定义，则值为text/css
- `viewBox` 允许指定一个给定的一组图形伸展以适应特定的容器元素，不允许宽度和高度为负值,0则禁用元素的呈现

#### 示例
````html
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 3 2">
  <rect width="1" height="2" x="0" fill="#008d46" />
  <rect width="1" height="2" x="1" fill="#ffffff" />
  <rect width="1" height="2" x="2" fill="#d2232c" />
</svg>
````


---

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

## `<pattern>` 填充
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

## `<symbol>` 
>symbol元素用来定义一个图形模板对象，它可以用一个<use>元素实例化。symbol元素对图形的作用是在同一文档中多次使用，添加结构和语义。结构丰富的文档可以更生动地呈现出来，类似讲演稿或盲文，从而提升了可访问性。注意，一个symbol元素本身是不呈现的。只有symbol元素的实例（亦即，一个引用了symbol的use元素）才能呈现
>一个symbol元素可以有preserveAspectRatio和viewBox属性。而g元素不能拥有这些属性。因此相比于在defs元素中使用g的方式来复用图形，使用symbol元素也许是一个更好的选择

#### 属性
- `preserveAspectRatio`
- `viewBox`

#### 参考
- [SVG基础 | SVG defs元素、symbol元素和use元素](http://www.htmleaf.com/ziliaoku/qianduanjiaocheng/201506132029.html)


#### 示例
````html
<svg>
<!-- symbol definition  NEVER draw -->
<symbol id="sym01" viewBox="0 0 150 110">
  <circle cx="50" cy="50" r="40" stroke-width="8" stroke="rgb(24, 144, 255)" fill="rgba(24, 144, 255, 0.6)"/>
  <circle cx="90" cy="60" r="40" stroke-width="8" stroke="green" fill="white"/>
</symbol>

<!-- actual drawing by "use" element -->
<use xlink:href="#sym01" x="0" y="10" width="100" height="50"/>
<use xlink:href="#sym01" x="0" y="60" width="75" height="38"/>
<use xlink:href="#sym01" x="0" y="110" width="50" height="25"/>
</svg>
````

---

## `<switch>` 分支
>switch的典型用法是用于显示不同的文字，但不可以用它来显示不同的图形, switch元素对它的直接子元素上的属性requiredFeatures、属性requiredExtensions 和 属性systemLanguage按照顺序进行评估，然后处理和呈现第一个评估为true的子元素

#### 属性
- `allowReorder` 
- `systemLanguage` 条件匹配属性

#### 参考
- [MDN:switch](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/switch)
- [SVG 分支（switch）](http://blog.csdn.net/chy555chy/article/details/53364684)

#### 示例
>所有分支均不符合则显示默认

````html
<svg xmlns="http://www.w3.org/2000/svg" >
   <switch>
      <text x="10" y="40" systemLanguage="ar">مرحبا</text>
      <text x="10" y="40" systemLanguage="de,nl">Hallo!</text>
      <text x="10" y="40" systemLanguage="en">Hello!</text>
      <text x="10" y="40" systemLanguage="en-us">Howdy!</text>
      <text x="10" y="40" systemLanguage="en-gb">Wotcha!</text>
      <text x="10" y="40" systemLanguage="en-au">G'day!</text>
      <text x="10" y="40" systemLanguage="es">Hola!</text>
      <text x="10" y="40" systemLanguage="fr">Bonjour!</text>
      <text x="10" y="40" systemLanguage="ja">こんにちは</text>
      <text x="10" y="40">☺</text>
   </switch>
</svg>
````

---

## `<glyph>` 独立字体
>一个glyph元素定义了SVG字体中的一个独立的字形, 更多详情参考 [MDN:glyph](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/glyph)

## `<missing-glyph>` 备用字体
>对于给定的字符，如果没有定义一个合适的glyph，就会呈现missing-glyph元素的内容, 参考 [MDN: missing-glyph](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/missing-glyph)