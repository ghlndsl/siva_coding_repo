# Getting Started
the basic extensions UI
extensions can interact with web pages or serves using content scripts or cross-origin XMLHttpRequest. Extensions can also interact programmatically with browser features such as bookmarks and tabs.
browser actions or pages actions(which a page action (icon in the address bar) and content script (code injected into a web page).)
such as adding to the Chrome context menu, providing an options page, or using a content script that changes how pages look

Files
1 refering to files
chrome-extension://<extensionID>/<pathToFile>
 @@extension_id to use the real ID.
2 the manifest files
Architecture
1 the background page
There are two types of background pages: persistent background pages, and event pages. Persistent background pages, as the name suggests, are always open. Event pages are opened and closed as needed.
2 the UI page
popup page, option page..
you can use tabs.create or window.open() to display any other HTML files that are in the extension.
The popup doesn't need to duplicate code that's in the background page because the popup can invoke functions on the background page.
3 content scripts
A content script is some JavaScript that executes in the context of a page that's been loaded into the browser.
 For example, a content script might send a message whenever it finds an RSS feed in a browser page. Or a background page might send a message asking a content script to change the appearance of its browser page.

Using chrome* APIs
- asynchronous vs synchronos
- example: using a callback
chrome.tabs.query({'active': true}, functions(tabs){
    chrome.tabs.update(tabs[0].id, {url: newUrl});
    // some other function
})
- more details
Communication between pages
:start
using chrome.extension methods such as getViews and getBackgroundPage to get reference to those pages.
and then invoke functions on the other page.
:end
saving data and incognito mode
:start
using the HTML5(web storage API, such as localstorage) or by making server requests
:end
now what
- tutorial: getting started
- tutorial: debugging
- developer's guide
- samples






## Skeleton Chrome Extension w/ fancy-settings

### What's this?
to modify manifest.json,


## learning from example!！
Quick Tabs is a tab management browser extension for the Google Chrome web browser based on the "Recent Files" quick selector built into the excellent IntelliJ IDEA by Jetbrains.

Quick Tabs allows you to move quickly between recently used tabs without requiring the use of your mouse, locate and switch to tabs as you need them with minimal keystrokes even when you have large numbers of open tabs.


FEATURES

* lists all the open tabs in Chrome across all of your open windows

* tabs are listed in most recently used (MRU) order and excludes the current tab (since your switching tabs)

* quickly search and select tabs by typing letters in the page title or url

* displays the number of tabs you currently have open in all your Chrome windows

* track recently closed tabs and allow them to be searched and restored

* shortcut key to launch popup window from most tabs, defaults to Ctrl + m, configurable on the options page

* keyboard navigation of tab list (up and down arrow keys, enter to select)

* tab list shortcut keys:
** to close selected tab (default ctrl+d)
** to close ALL displayed tabs in the tab list, honors search filtering (default shift+ctrl+d)
** select next tab (ctrl+n)
** select previous tab (ctrl+p)

* other options:
** hide urls
** hide favicons
** hide tooltips



## asana chrome extension
This is a free, open-source, sample application demonstrating use of the
Asana API. It takes the form of a Chrome Extension that, when installed,
integrates Asana into your web experience in the following ways:

  * Creates a button in your button-bar which, when clicked, pops up a
    QuickAdd window to create a new task associated with the current web page.
    It will populate the task name with the page title by default, and
    put the URL in the notes, along with any text you may have selected
    when you pressed the button.

  * Installs the special Asana TAB+Q keyboard shortcut. When this key combo
    is pressed from any web page, it brings up the same popup.
    This functionality will operate on any window opened after the extension
    is loaded.

See: http://developer.asana.com/

Files of special interest:

  api_bridge.js:
    Handles generic communication with the API.

  server_model.js:
    Wraps specifics of individual API calls to return objects to calling code.
    This is not a real ORM, just the bare bones necessary to get a few
    simple things done.

  popup.html
    Source for the popup window, contains the top-level logic which drives
    most of the user-facing functionality.

To install:

  1. Download the code, e.g. `git clone git://github.com/Asana/Chrome-Extension-Example.git`
  2. Navigate chrome to `chrome://extensions`
  3. Check the `Developer mode` toggle
  4. Click on `Load Unpacked Extension...`
  5. Select the folder containing the extension




