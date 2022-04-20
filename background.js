chrome.runtime.onMessage.addListener((message, sender) => {
    if ((message.from === 'content') && (message.subject === 'showPageAction')) {
        chrome.pageAction.show(sender.tab.id);
    }
})