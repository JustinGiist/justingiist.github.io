import reactStringReplace from 'react-string-replace';

// Trim a specific character from the start and end of a string
function trim(str, char) {
    let output = str;
    if (str[0] === char) output = output.substr(1);
    if (str[str.length - 1] === char) output = output.slice(0, -1);

    return output;
}

// Take string like 'one_two_three' and convert to 'One Two Three'
function splitAndToUpper(str) {
    if (!str) return '';

    const list = str.split('_');
    let result = '';

    Object.keys(list).forEach((index) => {
        const piece = list[index];
        result += `${piece.charAt(0).toUpperCase()}${piece.slice(1)} `;
    });

    return result.trim();
}

/*
* Different than the basic javascript Array.join because it adds 'or ' before the last item and
* allows you to provided a function to extract the desired field from the object in the array.
*/
function join(collection, delimiter = ',', fieldFunc = (f => f)) {
    let substr = '';
    for (let i = 0; i < collection.length; i++) {
        const item = collection[i];
        if (i > 0) {
            if (i === collection.length - 1) {
                substr += ' or ';
            } else {
                substr += `${delimiter} `;
            }
        }

        substr += fieldFunc(item);
    }

    return substr;
}

// This adds spaces before all capital letters within a camelCased string
function addSpaceToCamelCase(s) {
    return s.replace(/([A-Z])/g, ' $1').trim();
}

// This adds spaces before all numbers within a string
function addSpaceToNumbers(s) {
    return s.replace(/([0-9])/g, ' $1').trim();
}

// This adds spaces before both numbers and capital letters in camelCased Strings
function addSpaceToCamelCaseAndNumbers(s) {
    return addSpaceToNumbers(addSpaceToCamelCase(s));
}
function capitalize(s) {
    return `${s[0].toUpperCase()}${s.slice(1, s.length)}`;
}
function truncate(s, length) {
    if (!s) return '';
    const tooLong = s.length > length;
    return tooLong ? `${s.slice(0, length - 1).trim()}...` : s;
}

const regexEscape = v => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

function highlight(s, search, highlightClass = 'text-selected') {
    if (!s) throw new Error('Cannot highlight without a string!');
    return reactStringReplace(s, search, (match, i) => (
        <span class={highlightClass}>{match}</span>
    ));
}
function filterBySearch(s, search) {
    if (search === '') return true;
    if (!s) return false;
    const regex = new RegExp(`${search}`, 'gmi');
    return regex.test(s);
}

export default {
    trim,
    splitAndToUpper,
    join,
    addSpaceToCamelCase,
    addSpaceToNumbers,
    addSpaceToCamelCaseAndNumbers,
    capitalize,
    truncate,
    highlight,
    filterBySearch
};
