# 渐变填充专题

## 涉及元素

## 示例

#### 矩形(rect) 填充

````html:300
<svg height="300px" width="100%">
    <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FEB663" stop-opacity="1"></stop>
            <stop offset="100%" stop-color="#31D0C6" stop-opacity="1"></stop>
        </linearGradient>
        <linearGradient id="lg2" x1="0%" y1="-20%" x2="250%" y2="20%">
            <stop offset="0%" style="stop-color:#FD8BA9;stop-opacity:1" />
            <stop offset="25%" style="stop-color:#9A94E8;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#2EDBF8;stop-opacity:1" />
            <stop offset="75%" style="stop-color:#F5F1C8;stop-opacity:1"/>
            <stop offset="100%" style="stop-color:#B1E9F9;stop-opacity:1" />
        </linearGradient>
    </defs>
    <rect x="10" y="50" rx="1%" ry="2%" stroke="none" width="20" height="150" fill="url(#lg1)"></rect>
    <rect x="10" y="220" rx="1%" ry="2%" stroke="none" width="200" height="20" fill="url(#lg2)"></rect>
</svg>
````

#### 圆形(circle)/路径(path) 填充
````html:500
<style>
 body {
     background: #18222F;
 }
</style>
<svg height="500px" width="100%">
    <defs>
        <linearGradient id="lg3">
            <stop stop-color="#6E4AE2" offset="0%"></stop>
            <stop stop-color="#78F8EC" offset="100%"></stop>
        </linearGradient>
        <linearGradient id="lg4">
            <stop stop-color="rgba(0, 0, 0, 0.2)" offset="0%"></stop>
            <stop stop-color="rgba(0, 0, 0, 0.05)" offset="100%"></stop>
        </linearGradient>
    </defs>
    <path fill="none" stroke="url(#lg3)" stroke-width="50" transform="translate(25,25)" class="animate-draw" 
        d="M 294.7957435375205 302.56950979874705 A 175 175 0 1 0 175 350">
    </path>
    <circle cx="200" cy="200" r="175" fill="url(#lg4)"></circle>
    <text x="215.23809523809524" y="228.57142857142858" font-family="Century Gothic, Lato" font-size="114.28571428571429" fill="#78F8EC" text-anchor="middle">
        88<tspan font-size="38.095238095238095" dy="-45.714285714285715">%</tspan>
    </text>
    <path d="M 0 0 40 0 20 -26.666666666666668 0 0 Z" fill="#97F8F0" opacity="0.6" transform="translate(180,286.66666666666663)"></path>
</svg>
````