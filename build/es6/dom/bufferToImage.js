import { __awaiter, __generator } from "tslib";
import { env } from '../env';
export function bufferToImage(buf) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    if (!(buf instanceof Blob)) {
                        return reject('bufferToImage - expected buf to be of type: Blob');
                    }
                    var reader = new FileReader();
                    reader.onload = function () {
                        if (typeof reader.result !== 'string') {
                            return reject('bufferToImage - expected reader.result to be a string, in onload');
                        }
                        var img = env.getEnv().createImageElement();
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
//# sourceMappingURL=bufferToImage.js.map