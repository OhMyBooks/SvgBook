# 滤镜元素
- `<filter>` 滤镜容器
- `<feBlend>`
- `<feColorMatrix>`
- `<feComponentTransfer>`
- `<feComposite>`
- `<feConvolveMatrix>`
- `<feDiffuseLighting>`
- `<feDisplacementMap>`
- `<feFlood>`
- `<feGaussianBlur>`
- `<feImage>`
- `<feMerge>`
- `<feMorphology>`
- `<feOffset>`
- `<feSpecularLighting>`
- `<feTile>`
- `<feTurbulence>`


## `<filter>` 滤镜容器
>filter元素作用是作为原子滤镜操作的容器。它不能直接呈现。可以利用目标SVG元素上的filter属性引用一个滤镜

#### 属性
- `x`
- `y`
- `width`
- `height`
- `filterRes`
- `filterUnits`
- `primitiveUnits`
- `xlink:href`

#### 示例
>参考下面

## `<feBlend>` 
>feBlend滤镜把两个对象组合在一起，使它们受特定的混合模式控制。这类似于图像编辑软件中混合两个图层。该模式由属性mode定义

#### 属性
- `in`
- `in2`
- `mode`

#### 示例
````html
<svg>
  <defs>
    <filter id="spotlight">
      <feFlood result="floodFill" x="0" y="0" width="100%" height="100%" flood-color="green" flood-opacity="1"/>
      <feBlend in="SourceGraphic" in2="floodFill" mode="multiply"/>
    </filter>
  </defs>

  <image xlink:href="http://ww3.sinaimg.cn/mw600/0073ob6Pgy1foto7cddx4j30j60nyad0.jpg"
      x="10%" y="10%" width="80%" height="80%"
      style="filter:url(#spotlight);"/>
</svg>
````

--- 

## `<feColorMatrix>` 矩阵颜色变换
>该滤镜基于转换矩阵对颜色进行变换。每一像素的颜色值(一个表示为[红,绿,蓝,透明度] 的矢量) 都经过矩阵乘法 (matrix multiplated) 计算出的新颜色
>更多参考：[MDN: feColorMatrix](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feColorMatrix)


--- 

## `<feComponentTransfer>`
>SVG滤镜基元对每个像素执行颜色分量的数据重映射.它允许进行像亮度调整,对比度调整,色彩平衡或阈值的操作
>更多参考： [MDN: feComponentTransfer](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feComponentTransfer)

--- 

## `<feComposite>`
>该滤镜执行两个输入图像的智能像素组合, 更多参考：[MDN: feComposite](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feComposite)

--- 

## `<feConvolveMatrix>`
>feConvolveMatrix元素应用了一个矩阵卷积滤镜效果。一个卷积在输入图像中把像素与邻近像素组合起来制作出结果图像。通过卷积可以实现各种成像操作，包括模糊、边缘检测、锐化、压花和斜角
>更多参考：[MDN: feConvolveMatrix](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feConvolveMatrix)

--- 

## `<feDiffuseLighting>`
>滤镜光照一个图像，使用alpha通道作为隆起映射。结果图像，是一个RGBA不透明图像，取决于光的颜色、光的位置以及输入隆起映射的表面几何形状
>更多参考：[MDN: feDiffuseLighting](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feDiffuseLighting)

--- 

## `<feDisplacementMap>`
>映射置换滤镜，该滤镜用来自图像中从in2到空间的像素值置换图像从in到空间的像素值
>更多参考：[MDN: feDisplacementMap](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feDisplacementMap)


--- 

## `<feFlood>`
>该滤镜用flood-color元素定义的颜色和flood-opacity元素定义的不透明度填充了滤镜子区域
>更多参考：[MDN: feFlood](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feFlood)

---

## `<feGaussianBlur>` 高斯模糊
>该滤镜对输入图像进行高斯模糊，属性stdDeviation中指定的数量定义了钟形
>更多参考：[MDN: feGaussianBlur](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feGaussianBlur)

---

## `<feImage>` 外源图像
>feImage滤镜从外部来源取得图像数据，并提供像素数据作为输出（意味着如果外部来源是一个SVG图像，这个图像将被栅格化。）
>更多参考：[MDN: feImage](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feImage)

---

## `<feMerge>`
>feMerge滤镜允许同时应用滤镜效果而不是按顺序应用滤镜效果。利用result存储别的滤镜的输出可以实现这一点，然后在一个 <feMergeNode>子元素中访问它
>更多参考：[MDN: feMerge](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feMerge)

---


## `<feMorphology>`
>该滤镜用来侵蚀或扩张输入的图像。它在增肥或瘦身效果方面特别有用
>更多参考: [MDN: feMorphology](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feMorphology)

---

## `<feOffset>`
>该输入图像作为一个整体，在属性dx和属性dy的值指定了它的偏移量
>更多参考: [MDN: feOffset](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feOffset)

---

## `<feSpecularLighting>`
>该滤镜照亮一个源图形，使用alpha通道作为隆起映射。该结果图像是一个基于光色的RGBA图象。该光照计算遵守标准冯氏照明模式的镜面组件。结果图像依赖于光色、光的位置以及输入隆起映射的表面几何形状。光照计算的结果是叠加的。该滤镜假定观察者在X方向无穷远处
>更多参考:[MDN: feSpecularLighting](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feSpecularLighting)

---

## `<feTile>`
>输入图像是平铺的，结果用来填充目标。它的效果近似于一个pattern图案对象
>更多参考:[MDN: feTile](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feTile)

---

## `<feTurbulence>`
>该滤镜利用Perlin噪声函数创建了一个图像。它实现了人造纹理比如说云纹、大理石纹的合成
>更多参考:[MDN: feTurbulence](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feTurbulence)

---