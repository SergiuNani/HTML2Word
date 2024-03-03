chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const activeTab = tabs[0];
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTab.id },
          function: () => {
            const bodyHTML = document.querySelector("body p ")?.innerHTML;
            return bodyHTML;
          },
        },
        (results) => {
          const bodyHTML = results[0].result;
          sendResponse({ bodyHTML });
        }
      );
    } else {
      sendResponse({ bodyHTML: null });
    }
  });
  return true; // Indicates that sendResponse will be asynchronously called
});
