# 描述性元素
- `<desc>` 描述
- `<title>` 提示冒泡
- `<metadata>` 未知


## `<desc>` 描述
>SVG绘画中的每个容器元素或图形元素都可以提供一个desc描述性字符串，这些描述只是纯文本的。如果当前的SVG文档片段在视媒体中呈现，desc元素不会呈现为图形的一部分。替代性提词既可以看到也可以听到，它显示了desc元素但是不会显示路径元素或者别的图形元素。desc元素提升了SVG文档的可访问性

#### 属性
- 无

#### 示例
````html
<svg>
    <desc>this svg show a circle</desc>
    <circle cx="60" cy="60" r="50"/>
</svg>
````

---

## `<title>`
>SVG绘图中的每个窗口元素或图形元素都可以提供一个title描述性字符串，该描述只能是纯文本。如果当前的SVG文档片段在可视媒体中呈现为SVG，title元素不会呈现为绘图的一部分。然而，一些用户代理可能会，举个例子，把title显示为一个提示冒泡。替代性提词既可以看到也可以听到，它显示了title元素但是不会显示路径元素或者别的图形元素。title元素通常提升了SVG文档的可访问性。
通常title元素必须是它的父元素的第一个子元素。注意，只有当title是它的父元素的第一个子元素的时候，那些编译器才会把title显示为一个提示冒泡

#### 属性
- 无

#### 示例
````html
<svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
  <g>
    <title>SVG Title Demo example</title>
    <rect x="10" y="20" width="200" height="50"
    style="fill:none; stroke:blue; stroke-width:1px"/>
  </g>
</svg>
````

---

## `<metadata>` 未知
>metadata是数据的结构化数据。SVG内容里面包含的元数据必须放在metadata元素里面。medatata的内容物必须是来自其它XML命名空间的元素，比如说RDF、FOAT，等等
