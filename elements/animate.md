# 动画元素
- `<animate>` 动画元素
- `<animateColor>` 已废弃, 可用animate元素代替
- `<animateMotion>` 运动路径
- `<animateTransform>`
- `<set>`

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

## `<animateMotion>` 运动路径

#### 属性
- `calcMode`
- `path`
- `keyPoints`
- `rotate`
- `origin`

#### 示例