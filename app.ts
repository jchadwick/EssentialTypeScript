function clone(value) {
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}