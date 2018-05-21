# 文字对齐问题
>可以参考这个[demo](https://bl.ocks.org/emmasaunders/0016ee0a2cab25a643ee9bd4855d3464)

## `text-anchor` 文本相对基点的位置
-  `start` 左对齐
- `middle` 居中对齐
- `end` 右对齐

## `alignment-baseline` 基线对齐方式
- `alphabetic`
- `ideographic`
- `hanging`
- `mathematical`
- `central`
- `middle`  

````html:800
<style>
	    
	    html, body {
		    margin: 0;
		    padding: 0;
		    width: 100%;
		    height: 100%;
		    font-family: arial;
		    font-size: 20px;
	    }
	    
	    circle {
		    fill: rgba(51,255,0,0.5);
	    }
	    
	    line {
		    fill: none;
		    stroke: red;
		    stroke-width: 1.5px;
	    }
		
    </style>
<svg id="svg" width="100%" height="100%" style="height: 1674px;">
    <g transform="translate(200,50)"><text text-anchor="start" id="text_0">(text-anchor) start</text><circle cx="0" cy="0" r="5"></circle></g>
    <g transform="translate(200,100)"><text text-anchor="middle" id="text_1">(text-anchor) middle</text><circle cx="0" cy="0" r="5"></circle></g>
    <g transform="translate(200,150)"><text text-anchor="end" id="text_2">(text-anchor) end</text><circle cx="0" cy="0" r="5"></circle></g>
    <g transform="translate(200,200)"><text alignment-baseline="alphabetic" id="text_3">(alignment-baseline) alphabetic</text><line x1="0" y1="0" x2="277.9375" y2="0"></line></g><g transform="translate(200,250)"><text alignment-baseline="ideographic" id="text_4">(alignment-baseline) ideographic</text><line x1="0" y1="0" x2="290.15625" y2="0"></line></g>
    <g transform="translate(200,300)"><text alignment-baseline="hanging" id="text_5">(alignment-baseline) hanging</text><line x1="0" y1="0" x2="257.9375" y2="0"></line></g>
    <g transform="translate(200,350)"><text alignment-baseline="mathematical" id="text_6">(alignment-baseline) mathematical</text><line x1="0" y1="0" x2="305.6875" y2="0"></line></g>
    <g transform="translate(200,400)"><text alignment-baseline="central" id="text_7">(alignment-baseline) central</text><line x1="0" y1="0" x2="246.78125" y2="0"></line></g>
    <g transform="translate(200,450)"><text alignment-baseline="middle" id="text_8">(alignment-baseline) middle</text><line x1="0" y1="0" x2="245.671875" y2="0"></line></g>
    <g transform="translate(200,500)"><text alignment-baseline="text-before-edge" id="text_9">(alignment-baseline) text-before-edge</text><line x1="0" y1="0" x2="333.515625" y2="0"></line></g>
    <g transform="translate(200,550)"><text alignment-baseline="text-after-edge" id="text_10">(alignment-baseline) text-after-edge</text><line x1="0" y1="0" x2="316.8125" y2="0"></line></g>
    <g transform="translate(200,600)"><text alignment-baseline="before-edge" id="text_11">(alignment-baseline) before-edge</text><line x1="0" y1="0" x2="294.609375" y2="0"></line></g>
    <g transform="translate(200,650)"><text alignment-baseline="after-edge" id="text_12">(alignment-baseline) after-edge</text><line x1="0" y1="0" x2="277.921875" y2="0"></line></g>
    <g transform="translate(200,700)"><text alignment-baseline="top" id="text_13">(alignment-baseline) top</text><line x1="0" y1="0" x2="214.546875" y2="0"></line></g>
    <g transform="translate(200,750)"><text alignment-baseline="text-top" id="text_14">(alignment-baseline) text-top</text><line x1="0" y1="0" x2="253.453125" y2="0"></line></g>
    <g transform="translate(200,800)"><text alignment-baseline="bottom" id="text_15">(alignment-baseline) bottom</text><line x1="0" y1="0" x2="247.890625" y2="0"></line></g>
    <g transform="translate(200,850)"><text alignment-baseline="text-bottom" id="text_16">(alignment-baseline) text-bottom</text><line x1="0" y1="0" x2="286.796875" y2="0"></line></g>
    <g transform="translate(200,900)"><text dominant-baseline="auto" id="text_17">(dominant-baseline) auto</text><line x1="0" y1="0" x2="221.234375" y2="0"></line></g>
    <g transform="translate(200,950)"><text dominant-baseline="use-script" id="text_18">(dominant-baseline) use-script</text><line x1="0" y1="0" x2="269" y2="0"></line></g>
    <g transform="translate(200,1000)"><text dominant-baseline="no-change" id="text_19">(dominant-baseline) no-change</text><line x1="0" y1="0" x2="276.828125" y2="0"></line></g>
    <g transform="translate(200,1050)"><text dominant-baseline="reset-size" id="text_20">(dominant-baseline) reset-size</text><line x1="0" y1="0" x2="269" y2="0"></line></g>
    <g transform="translate(200,1100)"><text dominant-baseline="ideographic" id="text_21">(dominant-baseline) ideographic</text><line x1="0" y1="0" x2="285.71875" y2="0"></line></g>
    <g transform="translate(200,1150)"><text dominant-baseline="alphabetic" id="text_22">(dominant-baseline) alphabetic</text><line x1="0" y1="0" x2="273.484375" y2="0"></line></g>
    <g transform="translate(200,1200)"><text dominant-baseline="hanging" id="text_23">(dominant-baseline) hanging</text><line x1="0" y1="0" x2="253.484375" y2="0"></line></g>
    <g transform="translate(200,1250)"><text dominant-baseline="mathematical" id="text_24">(dominant-baseline) mathematical</text><line x1="0" y1="0" x2="301.25" y2="0"></line></g>
    <g transform="translate(200,1300)"><text dominant-baseline="central" id="text_25">(dominant-baseline) central</text><line x1="0" y1="0" x2="242.34375" y2="0"></line></g>
    <g transform="translate(200,1350)"><text dominant-baseline="middle" id="text_26">(dominant-baseline) middle</text><line x1="0" y1="0" x2="241.21875" y2="0"></line></g>
    <g transform="translate(200,1400)"><text dominant-baseline="text-after-edge" id="text_27">(dominant-baseline) text-after-edge</text><line x1="0" y1="0" x2="312.375" y2="0"></line></g>
    <g transform="translate(200,1450)"><text dominant-baseline="text-before-edge" id="text_28">(dominant-baseline) text-before-edge</text><line x1="0" y1="0" x2="329.0625" y2="0"></line></g>
    <g transform="translate(200,1500)"><text id="text2_29">(baseline-shift) </text><text x="131.15625" baseline-shift="sub" id="text_29">sub</text><line x1="0" y1="0" x2="163.390625" y2="0"></line></g>
    <g transform="translate(200,1550)"><text id="text2_30">(baseline-shift) </text><text x="131.15625" baseline-shift="super" id="text_30">super</text><line x1="0" y1="0" x2="181.453125" y2="0"></line></g>
    <g transform="translate(200,1600)"><text id="text2_31">(baseline-shift) </text><text x="131.15625" baseline-shift="50%" id="text_31">+50%</text><line x1="0" y1="0" x2="182.859375" y2="0"></line></g>
    <g transform="translate(200,1650)"><text id="text2_32">(baseline-shift) </text><text x="131.15625" baseline-shift="-20px" id="text_32">-20px</text><line x1="0" y1="0" x2="181.171875" y2="0"></line></g>
</svg>
````