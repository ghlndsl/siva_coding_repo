# baidu_search

## 1 click popup & button to open baidu website
## 2 select words to search

## description, \u5728,,
{
   "permissions": [ "background", "contextMenus", "management" ],
   "update_url": "http://clients2.google.com/service/update2/crx",
   "background": {
      "scripts": [ "background.js" ]
   }
}

function opentab() {
    chrome.tabs.create({
      'url':'http://www.baidu.com/index.php?tn=se_chromebtn',
      'selected':true
    });
}
function openbaidu(){
    var url = "http://www.baidu.com/index.php?tn=se_chromelist";
    window.open(url);
}
function baidu(info, tab){
    var text=encodeURIComponent(info.selectionText);
    var url = "http://www.baidu.com/s?tn=se_chromelist&wd=" + text;
    window.open(url);
}

chrome.browserAction.onClicked.addListener(opentab);
chrome.contextMenus.create({"title": "百度首页","contexts":["page"],"onclick":openbaidu});
chrome.contextMenus.create({"title": "百度一下“%s”","contexts":["selection"],"onclick":baidu});

var id = chrome.extension.getURL('');
id = id.replace("chrome-extension://", "").replace("/", "");

chrome.management.launchApp(id, function(){
    var isInstalled = localStorage.getItem("installed");
    if(!isInstalled){
        localStorage.setItem("installed", "1");
        openbaidu();
    }
});

# remove baidu redirect
{
   "background": {
      "scripts": [ "background.js" ]
   },
   "content_scripts": [ {
      "all_frames": false,
      "js": [ "contentscript.js" ],
      "matches": [ "http://www.baidu.com/s?*" ],
      "run_at": "document_end"
   } ],
   "default_locale": "zh_CN",
   "description": "__MSG_extDescription__",
   "permissions": [ "background", "http://www.baidu.com/*", "http://*/", "browsingData", "tabs", "webRequest", "webRequestBlocking" ]
}



