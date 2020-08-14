"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disposeUnusedWeightTensors = void 0;
function disposeUnusedWeightTensors(weightMap, paramMappings) {
    Object.keys(weightMap).forEach(function (path) {
        if (!paramMappings.some(function (pm) { return pm.originalPath === path; })) {
            weightMap[path].dispose();
        }
    });
}
exports.disposeUnusedWeightTensors = disposeUnusedWeightTensors;
//# sourceMappingURL=disposeUnusedWeightTensors.js.map