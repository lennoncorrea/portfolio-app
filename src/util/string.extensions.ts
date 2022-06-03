Object.defineProperties(String.prototype, {
    capitalize: {
        value: function capitalize():string {
            return this.charAt(0).toUpperCase() + this.slice(1);
        },
        configurable: true,
        writable: true
    },
    isNullOrEmpty: {
        value: function isNullOrEmpty():boolean {
            if (this === null || this === "".trim()){
                return true;
            }
            return false;
        },
        configurable: true,
        writable: true
    }
});
export { }

