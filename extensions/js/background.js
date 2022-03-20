var set_config = {
  mode: "pac_script",
  pacScript: {
    data:
      "function FindProxyForURL(url, host) {\n" +
      "allowed_hosts = ['aca.eye-labs.com', 'ident.me', '18.179.67.125:3000']; \n" +
      "if (allowed_hosts.includes(host))\n" +
      "return 'PROXY 45.76.96.113:6666'\n" +
      "return 'DIRECT';\n" +
      "}"
  }
}

var unset_config = {
  mode: "direct"
}

function set() {
  console.log("set proxy");
  chrome.proxy.settings.set({ value: set_config, scope: "regular" }, function () { });
}

function unset() {
  console.log("unset proxy");
  chrome.proxy.settings.set({ value: unset_config, scope: "regular" }, function () { });
}

chrome.runtime.onInstalled.addListener(function () {
  set();
});

chrome.runtime.onStartup.addListener(function () {
  set();
});

chrome.windows.onRemoved.addListener(function(windowId){
  unset();
});

