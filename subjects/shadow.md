# 投影专题

## Line投影

## 示例
````html:500
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">

    <defs>
        <filter id="glow">
            <feGaussianBlur stdDeviation="1" ></feGaussianBlur>
            <feOffset dx="0" dy="20" result="offsetblur"></feOffset>
            <feFlood id="glowAlpha" flood-color="#000" flood-opacity="0.123"></feFlood>
            <feComposite in2="offsetblur" operator="in"></feComposite>
            <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
        </filter>
    </defs>

    <g id="uiGroup" filter="url(#glow)" transform="translate(0  -100)">
        <path
                id="graphLine"
                fill="none"
                stroke-linecap="round"
                stroke="#F79819"
                stroke-width="5"
                d="M94.6,405.1c62.9-95,109.2-111.7,142.4-103.8c44.6,10.6,74.8,67.9,143.4,63.8c35-2.1,32.7-17.4,73.9-21.7c77.7-8.2,105.9,44,136.3,13.6c30.6-30.5,10.8-91.7,44.9-127.5c29.1-30.6,56.7,0,94.1-33.9c20.6-18.6,32.6-46.2,39.6-66.5" style="stroke-dashoffset: 2e-05; stroke-dasharray: none;"></path>
    </g>

</svg>
````

## 解释

- `<feGaussianBlur>` 高斯模糊
  - stdDeviation 指模糊度，数值越大越模糊
  - result属性指定当前的基元结果稍后可以通过其值名应用

- `<feOffset>` 基元接受之前的输入，然后做一个偏移，它的偏移由dx和dy的值指定，然后将结果位图存储于offsetBlur名字下面
- `<feMerge>`基元包裹一个<feMergeNode>元素列表，其中每个元素都指定一个输入，这些输入按照它们出现的顺序一个堆叠在另一个上面
在这里我们希望offsetBlur在原始SourceGraphic下面
- 更多解释参见