# 动画元素
- `<animate>` 动画元素
- `<animateColor>` 已废弃, 可用animate元素代替
- `<animateMotion>` 动画路径
- `<animateTransform>` 动画变形
- `<set>` 延迟执行

## `<animate>` 动画元素
> 动画元素放在形状元素的内部，用来定义一个元素的某个属性如何踩着时点改变。在指定持续时间里，属性从开始值变成结束值

#### 属性
- `attributeName` 该属性标识了在一个动画动作环节中，父元素的需要被改变的属性名
- `attributeType` 该属性指定目标属性和它相对应的值处于哪个命名空间里
- `from` svg动画发生过程中被修改的属性的初始值
- `to` svg动画发生过程中被修改的属性的h结束值
- `dur` 该属性标识了动画的简单持续时间
- `repeatCount` 这个属性表示动画将发生的次数

#### 示例
````html
<svg>
  <rect x="10" y="10" width="100" height="100">
    <animate attributeType="XML" attributeName="x" from="-100" to="120" dur="10s" repeatCount="indefinite"/>
  </rect>
</svg>
````

---

## `<animateMotion>` 动画路径

#### 属性
- `calcMode` 支持四个值discrete(离散) | linear(线性) | paced(踏步) | spline(样条)
- `path` 路径信息
- `keyPoints`
- `rotate`
- `origin`

#### 参考
- [MDN: animateMotion](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/animateMotion)
- [超级强大的SVG SMIL animation动画详解](http://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/)


#### 示例
````html
<svg>
  <text font-family="microsoft yahei" font-size="40" x="0" y="0" fill="#cd0000">马
    <animateMotion path="M10,40 q100,80 120,20 q140,-50 160,0" begin="0s" dur="3s" rotate="auto" repeatCount="indefinite"/>
  </text>
  <path d="M10,40 q100,80 120,20 q140,-50 160,0" stroke="#cd0000" stroke-width="2" fill="none" />
</svg>
````

---

## `<animateTransform>` 变形
>animateTransform元素变动了目标元素上的一个变形属性，从而允许动画控制转换、缩放、旋转或斜切

#### 属性
- `by` 动画相对变化值
- `from` 动画发生初始值
- `to` 动画发生结束值
- `type`

#### 参考
- [MDN:animateTransform](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/animateTransform)
- [超级强大的SVG SMIL animation动画详解](http://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/)

#### 示例
````html
<svg>
    <polygon points="60,30 90,90 30,90">
        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 70"
                          to="360 60 70"
                          dur="10s"
                          repeatCount="indefinite"/>
    </polygon>
</svg>
````

---

## `<set>` 延迟执行
>set元素可以用来设定一个属性值，并为该值赋予一个持续时间。它支持所有的属性类型， 包括那些原理上不能插值的， 例如值为字符串和布尔类型的属性。 set元素是非叠加的。无法在其上使用additive属性或accumulate属性，即使声明了这些属性也会自动被忽略。

#### 属性
- `to` 该属性表示将在动画期间修改的属性的最终值

#### 参考
- [超级强大的SVG SMIL animation动画详解](http://www.zhangxinxu.com/wordpress/2014/08/so-powerful-svg-smil-animation/)


#### 示例
>马会在3秒之后从横坐标160的位置移动60这个位置

````html
<svg>
  <g>
    <text font-family="microsoft yahei" font-size="120" y="120" x="160">
      马
      <set attributeName="x" attributeType="XML" to="60" begin="3s" />
    </text>
  </g>
</svg>
````