/**
 * @typedef {object} AtoZZ
 * @property {(index: number)=>AtoZZ.Result} forward
 * @property {(str: string|string[])=>AtoZZ.Result} backward
 * 
 * @typedef {object} AtoZZ.Result
 * @property {number} index
 * @property {string[]} arr
 * @property {string[]} rev
 * @property {string} str
 * 
 * @param {string|string[]} letters
 * @returns {AtoZZ}
 */
module.exports = (letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ") => {
    if (typeof letters == "string") letters = letters.split("");
    if (!(letters instanceof Array)) throw new Error();

    const letterMap = new Map(letters.map((char, i) => [char, i]));

    const result = {};
    result.forward = (index) => {
        let rev = [];
        let remain = index;
        while (remain >= 0) {
            rev.push(letters[remain % letters.length]);
            remain = Math.floor(remain / letters.length) - 1;
        }
        arr = [...rev].reverse();
        return { index, arr, rev, str: arr.join("") };
    }
    result.backward = (str) => {
        if (typeof str == "string") str = str.split("");

        /** @type {string[]} **/
        let arr = str;
        if (!(arr instanceof Array)) throw new Error();
        let rev = [...arr].reverse();

        let index = 0;
        for (let i = 0; i < rev.length; i++) {
            const value = letterMap.get(rev[i]);
            if (value === undefined) throw new Error(`Invalid character: ${rev[i]}`);

            index += (value + 1) * Math.pow(letters.length, i);
        }
        index--;

        return { index, arr, rev, str: arr.join("") };
    }
    return result;
}
