!function(t){function e(){s.setAttribute("content",f),u=!0}var n=navigator.userAgent;if(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(n)&&n.indexOf("AppleWebKit")>-1){var a=t.document;if(a.querySelector){var i,o,r,c,s=a.querySelector("meta[name=viewport]"),h=s&&s.getAttribute("content"),l=h+",maximum-scale=1",f=h+",maximum-scale=10",u=!0;s&&(t.addEventListener("orientationchange",e,!1),t.addEventListener("devicemotion",function(n){c=n.accelerationIncludingGravity,i=Math.abs(c.x),o=Math.abs(c.y),r=Math.abs(c.z),t.orientation&&180!==t.orientation||!(i>7||(r>6&&o<8||r<8&&o>6)&&i>5)?u||e():u&&(s.setAttribute("content",l),u=!1)},!1))}}}(this),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},1e3,function(){var t=$(e);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}});