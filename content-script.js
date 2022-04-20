const APP_CONFIG = {
    db: 'fsa-store',
    store: 'application_config',
    permission: 'readonly',
    key: 'session'
};

chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
});

chrome.runtime.onMessage.addListener((message, sender, response) => {
    if ((message.from === 'popup') && (message.subject === 'DOMInfo')) {
        if ('indexedDB' in window) {
            indexedDB.databases()
                .then((dbs) => {
                    let {name: dbName, Version: dbVersion } = dbs.find((db) => db.name.includes(APP_CONFIG.db));
                    let indexedDB =  window.indexedDB.open(dbName, dbVersion);
                    indexedDB.onsuccess = function() {
                        let db = indexedDB.result;
                        let transaction = db.transaction(APP_CONFIG.store, APP_CONFIG.permission);
                        let storage = transaction.objectStore(APP_CONFIG.store);
                        let data = store.getAll();
                        data.onsuccess = function() {
                            let config = data.result.find( value => value.apiName === APP_CONFIG.key).config;
                            let { account, user } = config;
                            response({ accountInfo: account[0], userInfo: user });
                    }
                };
            });
        }
        return true;
     }
});