# 未分类元素
- `<clipPath>` 剪切路径
- `<altGlyphDef>` 字形的替代物
- `<altGlyphItem>` 候选符号替换
- `<cursor>` 自定义指针
- `<foreignObject>` 截图/应用css
- `<mpath>` 外部运动路径
- `<script>`
- `<stop>`
- `<style>`
- `<view>`
- `<vkern>`
- `<font>` 文字布局字体
- `<font-face>` 字体的外部属性
- `<font-face-format>` 引用的字体的类型
- `<font-face-name>` 本地的字体副本
- `<font-face-src>` 字体容器
- `<font-face-uri>` 远程字义的当前字体
- `<color-profile>` 颜色配置(废弃)
- `<glyphRef>` 替代字形(废弃)
- `<hkern>` 字距处理(废弃)


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

## `<foreignObject>` 截图/应用css
>foreignObject元素通常与<switch>元素和requiredExtensions属性联用，对用户代理支持作一个适合性标准化验，并在万一用户代理支持不可用的时候提供一个替代呈现
>可以在foreignObject中使用css方式来实现某些svg实现很麻烦的效果，比如文字换行
>foreignObject还可以用于图片生成

#### 属性
- `x`
- `y`
- `width`
- `height`

## 参考
- [MDN: foreignObject](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/foreignObject)
- [SVG <foreignObject>简介与截图等应用](http://www.zhangxinxu.com/wordpress/2017/08/svg-foreignobject/)

#### 示例
````html
<svg xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="120" height="50">
      <body xmlns="http://www.w3.org/1999/xhtml">
        <p style="font-size:12px;margin:0;">一段需要word wrap的文字。</p>
      </body>
    </foreignObject>
</svg>
````
---

## `<mpath>` 外部运动路径
>animateMotion元素的mpath子元素使animateMotion元素能够引用一个外部的path元素作为运动路径的定义
>更多参考：[MDN: mpath](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/mpath)

---

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

## `<font>` 文字布局字体
>font元素定义了一个用于文字布局的字体, 更多参考: [MDN: font](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/font)

## `<font-face>` 字体的外部属性
>font-face元素相当于CSS的@font-face规则声明，font-face元素定义了一个字体的外部属性，更多参考:[MDN: font-face](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/font-face)

## `<font-face-format>` 引用的字体的类型
>font-face-format元素描述了它的父<font-face-uri>元素引用的字体的类型, 更多参考:[MDN: font-face-format](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/font-face-format)

## `<font-face-name>` 本地的字体副本
>font-face-name元素指向本地安装的字体副本，用字体名称识别, 更多参考：[MDN:font-face-name](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/font-face-name)

## `<font-face-src>` 字体容器
>font-face-src元素相当于CSS规范中的@font-face属性。它可以作为<font-face-name>元素的容器使用，指向本地安装的字体副本，<font-face-uri>元素则是利用远程定义字体
>更多参考：[MDN: font-face-src](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/font-face-src)

## `<font-face-uri>` 远程字义的当前字体
>font-face-uri元素指向远程字义的当前字体, 更多参考：[MDN: font-face-uri](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/font-face-uri)

## `<color-profile>` 颜色配置(废弃)
## `<glyphRef>` 替代字形(废弃)
## `<hkern>` 字距处理(废弃)