# 光源元素
- `<feDistantLight>` 距离光源
- `<fePointLight>` 光源元素
- `<feSpotLight>` 光源元素

## `<feDistantLight>` 距离光源
>该滤镜定义了一个距离光源，可以用在灯光滤镜feDiffuseLighting元素或feSpecularLighting元素的内部

#### 属性
- `azimuth`
- `elevation`

##### 参考
- [MDN: feDistantLight](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feDistantLight)
- [CodePen: fePointLight SVG Light Source](https://codepen.io/jonitrythall/pen/vehIA)
- [w3.org: 15.8.2光源'feDistantLight'](https://www.w3.org/TR/SVG/filters.html#feDistantLightElement)

#### 示例
````html
<svg width="250" height="250" viewBox="0 0 250 250" enable-background="new 0 0 250 250">
    <defs>
      <filter id="demo1">
        <!--Blur effect-->
        <feGaussianBlur stdDeviation="6" result="blur1" />
        <!--Lighting effect-->
        <feSpecularLighting result="spec1" in="blur1" specularExponent="60" lighting-color="#cccccc">
            <!--Light source effect-->
            <fePointLight x="50" y="100" z="200" />
        </feSpecularLighting>
        <!--Composition of inputs-->
        <feComposite in="SourceGraphic" in2="spec1" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
      </filter>
    </defs>
    <g class="apple" filter="url(#demo1)">
        <circle cx="200" cy="60" r="50"  fill="green" />
    </g>
</svg>
````

---

## `<fePointLight>` 光源元素

#### 属性
- `x`
- `y`
- `z`

#### 参考
- [MDN: fePointLight](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/fePointLight)
- [CodePen: fePointLight SVG Light Source](https://codepen.io/jonitrythall/pen/vehIA)
- [w3.org: 15.8.3光源'fePointLight'](https://www.w3.org/TR/SVG/filters.html#fePointLightElement)

#### 示例
````html 
<svg width="250" height="250" viewBox="0 0 250 250" enable-background="new 0 0 250 250">
    <defs>
      <filter id="demo1">
        <!--Blur effect-->
        <feGaussianBlur stdDeviation="6" result="blur1" />
        <!--Lighting effect-->
        <feSpecularLighting result="spec1" in="blur1" specularExponent="60" lighting-color="#cccccc">
            <!--Light source effect-->
            <fePointLight x="50" y="100" z="200" />
        </feSpecularLighting>
        <!--Composition of inputs-->
        <feComposite in="SourceGraphic" in2="spec1" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
      </filter>
    </defs>
    <g class="apple" filter="url(#demo1)">
        <circle cx="200" cy="60" r="50"  fill="green" />
    </g>
</svg>
````

---
 
## `<feSpotLight>` 光源元素
>feSpotLight元素是一种光源元素，用于SVG文件

#### 参考
- [MDN: feSpotLight](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/feSpotLight)
- [feSpotLight SVG Light Source](https://codepen.io/jonitrythall/pen/icgvL)
- [w3.org: 15.8.4光源'feSpotLight'](https://www.w3.org/TR/SVG/filters.html#feSpotLightElement)

#### 示例
````html 
<svg width="250" height="250" viewBox="0 0 250 250" enable-background="new 0 0 250 250">
<defs>
   <filter id="demo3">
     <!--Blur effect-->
    <feGaussianBlur stdDeviation="10" result="blur3" />
     <!--Lighting effect-->
    <feSpecularLighting result="spec3" in="blur3" specularConstant="1.2" specularExponent="7" lighting-color="#FFF">
        <!--Light source effect-->
        <feSpotLight x="400" y="400" z="900" limitingConeAngle="9" />
    </feSpecularLighting>
    <!--Composition of inputs-->
    <feComposite in="SourceGraphic" in2="spec3" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
  </filter>
</defs>
<desc>Red apple with brown stem and feSpotLight lighting source filter applied.</desc>
<!--Apple graphic-->
<g class="apple" filter="url(#demo3)">
  <path fill="none" stroke="#59351C" stroke-width="8" stroke-linecap="round" d="M124.4 52.3c0 0-10.2-18.7 7.7-45.3" />
  <path fill="#ED6E46" stroke="#ED6E46" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M218.6 144.3c-5.3 57.6-37.5 101.7-71.7 98.5 -7.2-0.7-13.9-3.4-19.9-7.7 -5.1 3.7-10.8 6-16.9 7 -34 5.2-68.6-37-77.3-94.2S44.5 40.2 78.5 35c15.9-2.4 31.8 5.5 45.3 20.3 12.2-14.5 27.1-22.5 42.5-21.1C200.5 37.4 223.9 86.7 218.6 144.3z" />
</g>
</svg>
````

---