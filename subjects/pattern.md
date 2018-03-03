# 材质填充专题

## 涉及元素
#### patternUnits
>pattern有两种填充方式：objectBoundingBox和userSpaceOnUse

- `objectBounding` 在指定区域内，规定沿x轴和y轴平铺指定数量的图案, 默认值
- `userSpaceOnUse` 指定width和height来间接规定图案平铺的数量，width和height被限制在0~1，或者0%~100%之间，即宽度或高度占填充区域高度或宽度的百分比。可想而知20%放5个，40%放2.5个

https://www.svgbackgrounds.com/#protruding-squares

#### 案例1
````html:500
<svg width="100%" height="100%">
    <defs>
        <pattern id="waves" patternUnits="userSpaceOnUse" width="230.4" height="221.7" patternTransform="scale(.5)">
            <defs>
            	<g id="wave" stroke="#000080" fill="none">
            		<circle fill="#FFF" stroke-width="8" r="106.7" />
            		<circle stroke-width="9" r="81" />
            		<circle stroke-width="8" r="55.3" />
            		<circle stroke-width="7" r="32.5" />
            		<circle stroke-width="7" r="13.2" />
            	</g>
            </defs>
            <use x="229.9" y="0.7" xlink:href="#wave" />
            <use x="114.9" y="55.3" xlink:href="#wave" />
            <use x="-114.9" y="55.3" xlink:href="#wave" />
            <use x="0" y="111.3" xlink:href="#wave" />
            <use x="229.9" y="111.3" xlink:href="#wave" />
            <use x="114.9" y="166.4" xlink:href="#wave" />
            <use x="-114.9" y="166.4" xlink:href="#wave" />
            <use x="0" y="222.2" xlink:href="#wave" />
            <use x="345.1" y="166.4" xlink:href="#wave" />
            <use x="229.9" y="222.2" xlink:href="#wave" />
            <use x="114.9" y="277.2" xlink:href="#wave" />
            <use x="-114.9" y="277.2" xlink:href="#wave" />
            <use x="345.1" y="277.2" xlink:href="#wave" />
        </pattern>
    </defs>
    <rect x="20" y="40" width="500" height="300" fill="url(#waves)" />
</svg>
````

---

#### 案例2
````html:400
<style>
body {
  background: black;
}
.crop-shapes {
  width:345px;
  position:absolute;
  right:0;
  left:0;
  top:0;
  bottom:0;
  margin:auto;
}
</style>
<svg class='crop-shapes'>
    <defs>
        <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="650">
            <image class='twombly' xlink:href="http://gastv.mx/wp-content/uploads/2014/05/jumex.jpg" x="-30" y="-30" width="380" height="267" />
        </pattern>

    </defs>
   
  <circle class='circ' cx="50" cy="50" r="50" fill="url(#img1)" filter="url(#sparklin)" onmouseover="evt.target.setAttribute('opacity', '0.5');"
13
onmouseout="evt.target.setAttribute('opacity','1)');"/>
  
  <rect x="110" y="0" width="100" height="100" stroke="black" fill="url(#img1)" filter="url(#sparklin)"/>
  
  <polygon x="10" points="270,0  220,100 320,100" fill="url(#img1)" filter="url(#sparklin)"/>
  
</svg>
````