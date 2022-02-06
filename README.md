# goto-pixiv 1.0.0
Bookmarklet to go from FANBOX to pixiv.

```
javascript:(()=>{!function(){var o,t,n;let e;if("https://www.fanbox.cc"===window.location.origin?e=null===(o=window.location.href.match(/fanbox.cc\/@([^\/]*)/))||void 0===o?void 0:o[1]:window.location.href.match(/^https:\/\/(.*)\.fanbox\.cc\//)&&(e=null===(t=window.location.href.match(/^https:\/\/(.*)\.fanbox\.cc\//))||void 0===t?void 0:t[1]),!e)return void alert(`ここどこですか(${window.location.href})`);const i=null===(n=function(o){const t=new XMLHttpRequest;return t.open("GET",o,!1),t.withCredentials=!0,t.send(null),JSON.parse(t.responseText)}(`https://api.fanbox.cc/creator.get?creatorId=${e}`).body)||void 0===n?void 0:n.user.userId;i?document.location.href=`https://www.pixiv.net/users/${i}`:alert("APIエラー")}()})();
```
