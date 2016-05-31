function Clothes() {
};
Clothes.prototype = {
    render: function() {
        throw new Error("should be overridden");
    },
    getContent: function() {
        throw new Error("should be overridden");
    }
};