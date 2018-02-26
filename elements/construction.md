# 结构元素
- `<defs>` 可重复使用的元素, 详情参考容器元素
- `<g>` 用来组合对象的容器, 详情参考容器元素
- `<svg>` 根容器元素, 详情参考容器元素
- `<symbol>` 模板, 详情参考容器元素
- `<use>` 克隆使用元素

## `<use>` 克隆使用元素
>use元素在SVG文档内取得目标节点，并在别的地方复制它们。它的效果等同于这些节点被深克隆到一个不可见的DOM中，然后将其粘贴到use元素的位置，很像HTML5中的克隆模板元素。因为克隆的节点是不可见的，所以当使用CSS样式化一个use元素以及它的隐藏的后代元素的时候，必须小心注意。隐藏的、克隆的DOM不能保证继承CSS属性，除非你明文设置使用CSS继承。
出于安全原因，一些浏览器可能在use元素上应用同源策略，还有可能拒绝载入xlink:href属性内的跨源URI

#### 属性
- `x`
- `y`
- `width`
- `height`
- `xlink:href`

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