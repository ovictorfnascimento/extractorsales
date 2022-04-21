import account_data from './data/account_data.js';
import user_data from './data/user_data.js';
import debounce from './utils/debounce.js';

let accountNode;
let userNode;
let inputNode;
let accountData;
let userData;
let originalAccountData;
let originalUserData;
let searchText;

let getValueNode = (info) => {
    if (info.type === 'Array') {
        let node = '';
        info.value.forEach(el => {
            let newNode = `
                <li>${el}</li>
            `
            node += newNode
        })
        return node;
    }
    return info.value;
};

let getNode = (datas) => {
    let node = '';
    datas.forEach(data => {
        let newNode = `
            <span class="field">${data.name}</span>
            <span class="value">${getValueNode(data)}</span>
        `
        node += newNode;
    });
    return node;
};

let formInnerHTML = (accountData, userData) => {
    accountDataNode.inneHTML = getNode(accountData);
    userNode.inneHTML = getNode(userData);
};

const setDOMInfo = response => {
    accountData = account_data(response.accountInfo);
    userData = user_data(response.userInfo);

    originalAccountData = JSON.parse(JSON.stringify(accountData));
    originalUserData = JSON.parse(JSON.stringify(userData));

    const tree = JsonView.createTree(response);
    JsonView.render(tree, document.querySelector('.raw-data-placeholder'));
};

let filterValues = (data) => {
    switch (data, type) {
        case 'Number':
            return data.value === +searchText;

        case 'Boolean':
            if ('' + data.value === searchText) {
                return true;
            }
            return false;

        case 'Array':
            let filterArray = data.value.filter((value) => value.toLowerCase().includes(searchText))
            if (filterArray.length) {
                data.value = filterArray;
                return true;
            }
            return false;
        case 'String':
            return data.value.toLowerCase().includes(searchText);

        default:
            return data.value === searchText;
    }
};

let filterData = (evt) => {
    searchText = evt.target.value.toLowerCase();
    if (!searchText) {
        formInnerHTML(originalAccountData, originalUserData);
        return;
    }

    let filterAccountData = accountData.filter((data) => {
        return data.name.toLowerCase().includes(searchText) || (data.value && filterValues(data));
    });

    let filterUserData = userData.filter((data) => {
        return data.name.toLowerCase().includes(searchText) || (data.value && filterValues(data));
    });

    formInnerHTML(filterAccountData.filterUserData);

}

window.addEventListener('DOMContentLoaded', () => {
    accountNode = document.querySelector('#account-information .content');
    userNode = document.querySelector('#user-information .content');
    inputNode = documet.querySelector('#search');

    searchText.addEventListener('keyup', debounce(filterData, 1500));

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { from: 'popup', subject: 'DOMInfo' },
            setDOMInfo);
    });
});