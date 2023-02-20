/* eslint-disable prettier/prettier */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((n: number): number => n * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((n: string): number =>
        Number.isNaN(Number(n)) ? 0 : Number(n)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((a: string): number =>
        a.startsWith("$")
            ? Number.isNaN(Number(a.slice(1, a.length)))
                ? 0
                : Number(a.slice(1, a.length))
            : Number.isNaN(Number(a))
                ? 0
                : Number(a)
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages.map((m: string): string => m.endsWith("!") ? m.toUpperCase() : m).filter((m: string): boolean => !m.endsWith("?"));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce((count: number, word: string) => word.length < 4 ? count + 1 : count , 0);
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every((color: string): boolean => color === "red" || color === "blue" || color === "green");
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return String(addends.reduce((sum, number) => sum + number, 0)) + "=" + (addends.length < 1 ? "0": addends.join("+"));
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    
    const fn_idx: number = values.findIndex((value: number): boolean => value < 0) < 0 ? values.length : values.findIndex((value: number): boolean => value < 0);
    const sub_sum = values.slice(0, fn_idx).reduce((sum, number) => sum + number, 0);
    const n_list = [...values];
    console.log(n_list);
    fn_idx === values.length ? n_list.push(sub_sum) : n_list.splice(fn_idx + 1, 0, sub_sum);
    return n_list;
}
