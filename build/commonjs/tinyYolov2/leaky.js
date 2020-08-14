"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaky = void 0;
var tf = require("@tensorflow/tfjs-core");
function leaky(x) {
    return tf.tidy(function () {
        var min = tf.mul(x, tf.scalar(0.10000000149011612));
        return tf.add(tf.relu(tf.sub(x, min)), min);
        //return tf.maximum(x, min)
    });
}
exports.leaky = leaky;
//# sourceMappingURL=leaky.js.map