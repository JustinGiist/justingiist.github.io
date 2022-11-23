export function toHex() {
    let ret = ((this < 0 ? 0x8 : 0) + ((this >> 28) & 0x7)).toString(16) + (this & 0xfffffff).toString(16);
    while (ret.length < 8) ret = `0${ret}`;
    return ret;
}
export function quickHash(obj, length = 2) {
    if (!obj) return undefined;

    const r = [];
    let i;

    for (i = 0; i < length; i++) r.push(i * 268803292);

    const objString = JSON.stringify(obj);
    for (i = 0; i < objString.length; i++) {
        for (let c = 0; c < r.length; c++) {
            r[c] = (r[c] << 13) - (r[c] >> 19);
            r[c] += objString.charCodeAt(i) << (r[c] % 24);
            r[c] &= r[c];
        }
    }

    for (i = 0; i < r.length; i++) {
        r[i] = toHex.call(r[i]);
    }

    return r.join('');
}