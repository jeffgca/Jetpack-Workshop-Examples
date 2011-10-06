const main = require("main");
const base64 = require("base64");

exports.test_base64 = function(test) {
    test.assertEqual(base64.encode("hello world"), "aGVsbG8gd29ybGQ=");
    test.assertEqual(base64.decode("eWF5IGpldHBhY2sh"), "yay jetpack!");
};
