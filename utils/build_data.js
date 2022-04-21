import _get from './get.js';

function buildData(name, type, key, info) {
    this.name = name;
    this.type = type;
    this.key = key;
    this.value = _get(info, this.key)
}

export default buildData;