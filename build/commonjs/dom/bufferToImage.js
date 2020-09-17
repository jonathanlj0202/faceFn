"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToImage = void 0;
var tslib_1 = require("tslib");
var env_1 = require("../env");
function bufferToImage(buf) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    if (!(buf instanceof Blob)) {
                        return reject('bufferToImage - expected buf to be of type: Blob');
                    }
                    var reader = new FileReader();
                    reader.onload = function () {
                        if (typeof reader.result !== 'string') {
                            return reject('bufferToImage - expected reader.result to be a string, in onload');
                        }
                        var img = env_1.env.getEnv().createImageElement();
                        img.onload = function () { return resolve(img); };
                        img.onerror = reject;
                        img.src = reader.result;
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(buf);
                })];
        });
    });
}
exports.bufferToImage = bufferToImage;
//# sourceMappingURL=bufferToImage.js.map