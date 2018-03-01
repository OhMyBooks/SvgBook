# 材质填充专题

## 涉及元素


#### pattern
````html:500
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
width="100%" height="100%">
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
<rect width="100%" height="100%" fill="url(#waves)" />
</svg>
````