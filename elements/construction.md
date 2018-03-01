# 结构元素
- `<defs>` 可重复使用的元素
- `<g>` 用来组合对象的容器, 详情参考容器元素
- `<svg>` 根容器元素, 详情参考容器元素
- `<symbol>` 模板, 详情参考容器元素
- `<use>` 克隆使用元素


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

## `<use>` 克隆使用元素
>use元素在SVG文档内取得目标节点，并在别的地方复制它们。它的效果等同于这些节点被深克隆到一个不可见的DOM中，然后将其粘贴到use元素的位置，很像HTML5中的克隆模板元素。因为克隆的节点是不可见的，所以当使用CSS样式化一个use元素以及它的隐藏的后代元素的时候，必须小心注意。隐藏的、克隆的DOM不能保证继承CSS属性，除非你明文设置使用CSS继承。
出于安全原因，一些浏览器可能在use元素上应用同源策略，还有可能拒绝载入xlink:href属性内的跨源URI
>
>备注：
>1. 跟'引用'很相似，但它是深度克隆
>2. 你可以在use元素中使用style属性来为复用的图形设置它的样式
>3. use元素可以引用SCG图像中的任何元素，只要这个元素有一个唯一的ID号

#### 属性
- `x`
- `y`
- `width`
- `height`
- `xlink:href`

#### 参考
- [SVG基础 | SVG defs元素、symbol元素和use元素](http://www.htmleaf.com/ziliaoku/qianduanjiaocheng/201506132029.html)

#### 示例
````html
<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <style>
    .classA { 
        fill:red 
    }
  </style> 
  <defs>
    <g id="Port">
      <circle style="fill:inherit" r="10"/>
    </g>
  </defs>
 
  <text y="25">black</text>
  <use x="70" y="20" xlink:href="#Port" />
  
  <text y="45">red</text>
  <use x="70" y="40" xlink:href="#Port" class="classA"/>
  
  <text y="65">blue</text>
  <use x="70" y="60" xlink:href="#Port" style="fill:blue"/>
 </svg>
````