Object.defineProperties(Date.prototype, {
    formate: {
        value: function formate():string {
            return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
        },
        configurable: true,
        writable: true
    }
});

export { }
