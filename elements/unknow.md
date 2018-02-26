# 未分类元素
- `<clipPath>` 剪切路径
- `<altGlyphDef>` 字形的替代物
- `<altGlyphItem>` 候选符号替换
- `<color-profile>` 颜色配置(废弃)
- `<cursor>` 自定义指针
- `<font>`
- `<font-face>`
- `<font-face-format>`
- `<font-face-name>`
- `<font-face-src>`
- `<font-face-uri>`
- `<foreignObject>`
- `<glyph>`
- `<glyphRef>`
- `<hkern>`
- `<mpath>`
- `<script>`
- `<stop>`
- `<style>`
- `<view>`
- `<vkern>`


## `<clipPath>` 剪切路径
>剪切路径用于指定可绘制区域。从概念上来说，当绘制的图形超出了剪切路径所指定的区域，超出区域的部分将不会被绘制
>剪切路径是用clipPath元素定义的。属性clip-path可用来引用剪切路径
>剪切路径在概念上等同于一个自定义的可视区域，用来引用元素。所以，它会影响一个元素的呈现，但不会影响这个元素固有的几何形状。被剪切的元素的边界框（即，如果一个元素通过clip-path属性引用了一个clipPath元素，这个元素和它的子元素就是被剪切的元素）必须保持原样，就如它没有被剪切
>默认情况下，一个形状，其被剪切掉的区域（不可见的区域）是不响应鼠标事件的。举个例子，如果一个半径为10的圆形被剪切成半径为5的圆形，那么这个圆在半径为5以外的区域是不能接收“click”事件的

#### 属性
- `clipPathUnits` 定义clipPath元素内容的坐标系

#### 示例
````html
<svg>
    <defs>
        <clipPath id="myClip">
            <circle cx="30" cy="30" r="20"/>
            <circle cx="70" cy="70" r="20"/>
        </clipPath>
    </defs>
    <rect x="10" y="10" width="100" height="100" clip-path="url(#myClip)"/>
</svg>
````

---

## `<font>` 文字布局字体
>font元素定义了一个用于文字布局的字体, 更多参考: [MDN: font](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/font)



## `<cursor>` 自定义指针
>cursor元素可以用来定义独立于平台的自定义指针。要想定义独立于平台的指针，建议先创建一个PNG图象，然后定义一个引用该PNG图像的cursor元素，并在图像内部标识指针头（亦即，热点）的精确位置
>更多参考：[MDN: cursor](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/cursor)

---

## `<altGlyphDef>` 字形的替代物
>altGlyphDef元素定义了一个表达字形的替代物, 更多参考：[MDN: altGlyphDef](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/altGlyphDef)

---

## `<altGlyphItem>` 候选符号替换
altGlyphItem元素利用altGlyph元素提供了一组候选符号替换, 更多参考:[MDN: altGlyphItem](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/altGlyphItem)

---

## `<color-profile>` 颜色配置(废弃)