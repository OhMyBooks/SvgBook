(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global.docuteIframe = factory());
}(this, (function() {
  'use strict';

  function random() {
    return Math.random().toString().slice(2, 10)
  }

  function defaultParseContent(lang, content) {
    // console.log('---------------')
    // console.log(lang)
    // console.log(content)
    if (lang === 'js' || lang === 'javascript') {
      return ("<script>" + content + "</script>")
    }
    return content
  }

  var index = function(ref) {
    if (ref === void 0) ref = {};
    var sandbox = ref.sandbox;
    if (sandbox === void 0) sandbox = 'allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts';
    var prepend = ref.prepend;
    if (prepend === void 0) prepend = '';
    var append = ref.append;
    if (append === void 0) append = '';
    var match = ref.match;
    if (match === void 0) match = /^`{4}(.*?)[\n\r]+([\s\S]*?)[\n\r]+`{4}/gm;
    var showSourceCode = ref.showSourceCode;
    if (showSourceCode === void 0) showSourceCode = true;
    var surfaceAPI = ref.surfaceAPI;
    if (surfaceAPI === void 0) surfaceAPI = ['Prism', 'fetch'];
    var parseContent = ref.parseContent;
    if (parseContent === void 0) parseContent = defaultParseContent;

    return function(ref) {
      var beforeParse = ref.beforeParse;
      var event = ref.event;

      var stack = [];

      var iframeHeight = 'auto';

      beforeParse(function(raw) {
        return raw.replace(match, function(_, p1, p2) {
          var result = '';

          /**
           * 长度大于1，表示冒号后面有数字，这个就是自定义的iframe的高度
           */
          var langArr = p1.split(':');
          console.log('------p1', p1)
          iframeHeight = 'auto'
          if (langArr.length > 1) {
            iframeHeight = langArr[1];
          }

          if (showSourceCode) {
            result += "\n\n```" + p1 + "\n" + p2 + "\n```\n\n";
          }

          var hash = random();
          var id = "holder-" + hash;
          result += "<div id=\"" + id + "\"></div>";

          stack.push({
            id: id,
            hash: hash,
            content: prepend + parseContent(p1, p2) + append
          });

          return result
        })
      });

      event.on('content:updated', function() {
        while (stack.length) {
          var node = stack.shift();
          var holder = document.getElementById(node.id);
          if (!holder) {
            continue
          }

          var iframe = document.createElement('iframe');
          iframe.src = 'about:self';
          iframe.className = 'code-iframe';
          iframe.frameBorder = 0;
          iframe.width = '100%';

          if (iframeHeight !== 'auto') {
            iframe.height = iframeHeight + 'px';
          }

          iframe.sandbox = sandbox;
          iframe.style = 'border:1px solid #eee';
          iframe.id = "iframe-" + (node.hash);

          holder.parentNode.replaceChild(iframe, holder);
          // surface some API inside the iframe
          for (var i = 0, list = surfaceAPI; i < list.length; i += 1) {
            var name = list[i];

            iframe.contentWindow[name] = window[name];
          }

          var doc = iframe.contentWindow.document;
          doc.open().write(node.content);
          doc.close();
        }
      });
    }
  };

  return index;

})));