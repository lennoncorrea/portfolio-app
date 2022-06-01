declare global {
    interface Date {
        /**
 * Formate a date to a string.
 * @returns The date as DD/MM/YYYY string.
 */
        formate(): string;
    }

    interface String {
        /**
 * Upper case the first letter of the string.
 * @returns The string with the first character in the capital.
 */
        capitalize(): string;
        /**
 * Indicates whether the specified string is null or an empty string (""). 
 * @returns true if the value parameter is null or an empty string (""); otherwise, false.
 */
        isNullOrEmpty(): boolean;
    }
}

export { }