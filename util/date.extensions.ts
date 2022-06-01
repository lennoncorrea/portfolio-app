Object.defineProperties(Date.prototype, {
    formate: {
        value: function formate(): string {
            const day = this.getDate();
            const month = () => {
                if (this.getMonth() + 1 < 10) {
                    return `${"0" + (this.getMonth() + 1)}`;
                }
                return (this.getMonth() + 1);
            }
            const year = this.getFullYear();
            return `${day}/${month()}/${year}`;
        },
        configurable: true,
        writable: true
    }
});

export { }
