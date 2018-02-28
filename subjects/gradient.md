# 渐变填充专题

## 涉及元素

## 示例

#### 柱状图填充
````html:300
<svg>
    <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FEB663" stop-opacity="1"></stop>
            <stop offset="100%" stop-color="#31D0C6" stop-opacity="1"></stop>
        </linearGradient>
    </defs>
    <rect class="body" id="v-15" rx="1%" ry="2%" stroke="none" width="20" height="135" fill="url(#lg1)"></rect>
</svg>
<svg width="600" height="300">
  <g transform="translate(40,20)">
  <g class="x axis" transform="translate(0,210)">
  <g class="tick" transform="translate(23,0)" style="opacity: 1;">
  <line y2="6" x2="0"></line>
  <text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-01</text>
  </g>
  <g class="tick" transform="translate(61,0)" style="opacity: 1;">
    <line y2="6" x2="0"></line>
    <text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-02</text>
    </g>
    <g class="tick" transform="translate(99,0)" style="opacity: 1;">
    <line y2="6" x2="0"></line>
    <text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-03</text>
    </g>
    <g class="tick" transform="translate(137,0)" style="opacity: 1;"><line y2="6" x2="0">
    </line><text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-04</text>
    </g><g class="tick" transform="translate(175,0)" style="opacity: 1;"><line y2="6" x2="0">
    </line><text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-05</text>
    </g><g class="tick" transform="translate(213,0)" style="opacity: 1;">
    <line y2="6" x2="0"></line>
    <text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-06</text>
    </g><g class="tick" transform="translate(251,0)" style="opacity: 1;">
    <line y2="6" x2="0"></line><text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-07</text></g><g class="tick" transform="translate(289,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-08</text></g><g class="tick" transform="translate(327,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-09</text></g><g class="tick" transform="translate(365,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-10</text></g><g class="tick" transform="translate(403,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-11</text></g><g class="tick" transform="translate(441,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2013-12</text></g><g class="tick" transform="translate(479,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2014-01</text></g><g class="tick" transform="translate(517,0)" style="opacity: 1;"><line y2="6" x2="0"></line><text dy="-.55em" y="9" x="0" dx="-.8em" transform="rotate(-90)" style="text-anchor: end;">2014-02</text></g><path class="domain" d="M0,6V0H540V6"></path></g><g class="y axis"><g class="tick" transform="translate(0,210)" style="opacity: 1;"><line x2="-6" y2="0"></line><text dy=".32em" x="-9" y="0" style="text-anchor: end;">0</text></g><g class="tick" transform="translate(0,188.03347280334728)" style="opacity: 1;"><line x2="-6" y2="0"></line><text dy=".32em" x="-9" y="0" style="text-anchor: end;">50</text></g><g class="tick" transform="translate(0,166.06694560669456)" style="opacity: 1;"><line x2="-6" y2="0"></line><text dy=".32em" x="-9" y="0" style="text-anchor: end;">100</text></g><g class="tick" transform="translate(0,144.10041841004184)" style="opacity: 1;"><line x2="-6" y2="0"></line><text dy=".32em" x="-9" y="0" style="text-anchor: end;">150</text></g><g class="tick" transform="translate(0,122.13389121338912)" style="opacity: 1;"><line x2="-6" y2="0"></line><text dy=".32em" x="-9" y="0" style="text-anchor: end;">200</text></g><g class="tick" transform="translate(0,100.1673640167364)" style="opacity: 1;"><line x2="-6" y2="0"></line><text dy=".32em" x="-9" y="0" style="text-anchor: end;">250</text></g><g class="tick" transform="translate(0,78.2008368200837)" style="opacity: 1;"><line x2="-6" y2="0"></line><text dy=".32em" x="-9" y="0" style="text-anchor: end;">300</text></g><g class="tick" transform="translate(0,56.23430962343097)" style="opacity: 1;"><line x2="-6" y2="0"></line><text dy=".32em" x="-9" y="0" style="text-anchor: end;">350</text></g><g class="tick" transform="translate(0,34.267782426778254)" style="opacity: 1;"><line x2="-6" y2="0"></line><text dy=".32em" x="-9" y="0" style="text-anchor: end;">400</text></g><g class="tick" transform="translate(0,12.301255230125532)" style="opacity: 1;"><line x2="-6" y2="0"></line><text dy=".32em" x="-9" y="0" style="text-anchor: end;">450</text></g><path class="domain" d="M-6,0H0V210H-6"></path><text transform="rotate(-90)" y="6" dy=".71em" style="text-anchor: end;">Value ($)</text></g><rect x="5" width="36" y="186.7154811715481" height="23.284518828451894" style="fill: steelblue;"></rect><rect x="43" width="36" y="137.51046025104603" height="72.48953974895397" style="fill: steelblue;"></rect><rect x="81" width="36" y="91.82008368200837" height="118.17991631799163" style="fill: steelblue;"></rect><rect x="119" width="36" y="58.870292887029294" height="151.12970711297072" style="fill: steelblue;"></rect><rect x="157" width="36" y="44.81171548117154" height="165.18828451882845" style="fill: steelblue;"></rect><rect x="195" width="36" y="29.874476987447707" height="180.1255230125523" style="fill: steelblue;"></rect><rect x="233" width="36" y="25.04184100418409" height="184.95815899581592" style="fill: steelblue;"></rect><rect x="271" width="36" y="32.07112970711298" height="177.928870292887" style="fill: steelblue;"></rect><rect x="309" width="36" y="44.81171548117154" height="165.18828451882845" style="fill: steelblue;"></rect><rect x="347" width="36" y="52.28033472803347" height="157.71966527196653" style="fill: steelblue;"></rect><rect x="385" width="36" y="37.78242677824267" height="172.21757322175733" style="fill: steelblue;"></rect><rect x="423" width="36" y="19.769874476987447" height="190.23012552301256" style="fill: steelblue;"></rect><rect x="461" width="36" y="10.10460251046026" height="199.89539748953973" style="fill: steelblue;"></rect><rect x="499" width="36" y="0" height="210" style="fill: steelblue;"></rect></g></svg>
````