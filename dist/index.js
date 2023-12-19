"use strict";var e=require('@stdlib/utils-define-read-only-property/dist'),r={};e(r,"AccessorArray",require('@stdlib/array-base-accessor/dist'));e(r,"accessorGetter",require('@stdlib/array-base-accessor-getter/dist'));e(r,"accessorSetter",require('@stdlib/array-base-accessor-setter/dist'));e(r,"accessors",require('@stdlib/array-base-accessors/dist'));e(r,"arraylike2object",require('@stdlib/array-base-arraylike2object/dist'));e(r,"assert",require('@stdlib/array-base-assert/dist'));e(r,"binary2d",require('@stdlib/array-base-binary2d/dist'));e(r,"binary3d",require('@stdlib/array-base-binary3d/dist'));e(r,"binary4d",require('@stdlib/array-base-binary4d/dist'));e(r,"binary5d",require('@stdlib/array-base-binary5d/dist'));e(r,"binarynd",require('@stdlib/array-base-binarynd/dist'));e(r,"broadcastArray",require('@stdlib/array-base-broadcast-array/dist'));e(r,"bbinary2d",require('@stdlib/array-base-broadcasted-binary2d/dist'));e(r,"bbinary3d",require('@stdlib/array-base-broadcasted-binary3d/dist'));e(r,"bbinary4d",require('@stdlib/array-base-broadcasted-binary4d/dist'));e(r,"bbinary5d",require('@stdlib/array-base-broadcasted-binary5d/dist'));e(r,"bquaternary2d",require('@stdlib/array-base-broadcasted-quaternary2d/dist'));e(r,"bquinary2d",require('@stdlib/array-base-broadcasted-quinary2d/dist'));e(r,"bternary2d",require('@stdlib/array-base-broadcasted-ternary2d/dist'));e(r,"bunary2d",require('@stdlib/array-base-broadcasted-unary2d/dist'));e(r,"bunary3d",require('@stdlib/array-base-broadcasted-unary3d/dist'));e(r,"bunary4d",require('@stdlib/array-base-broadcasted-unary4d/dist'));e(r,"bunary5d",require('@stdlib/array-base-broadcasted-unary5d/dist'));e(r,"cartesianPower",require('@stdlib/array-base-cartesian-power/dist'));e(r,"cartesianProduct",require('@stdlib/array-base-cartesian-product/dist'));e(r,"cartesianSquare",require('@stdlib/array-base-cartesian-square/dist'));e(r,"copy",require('@stdlib/array-base-copy/dist'));e(r,"copyIndexed",require('@stdlib/array-base-copy-indexed/dist'));e(r,"filled",require('@stdlib/array-base-filled/dist'));e(r,"filledBy",require('@stdlib/array-base-filled-by/dist'));e(r,"filled2d",require('@stdlib/array-base-filled2d/dist'));e(r,"filled2dBy",require('@stdlib/array-base-filled2d-by/dist'));e(r,"filled3d",require('@stdlib/array-base-filled3d/dist'));e(r,"filled3dBy",require('@stdlib/array-base-filled3d-by/dist'));e(r,"filled4d",require('@stdlib/array-base-filled4d/dist'));e(r,"filled4dBy",require('@stdlib/array-base-filled4d-by/dist'));e(r,"filled5d",require('@stdlib/array-base-filled5d/dist'));e(r,"filled5dBy",require('@stdlib/array-base-filled5d-by/dist'));e(r,"fillednd",require('@stdlib/array-base-fillednd/dist'));e(r,"filledndBy",require('@stdlib/array-base-fillednd-by/dist'));e(r,"first",require('@stdlib/array-base-first/dist'));e(r,"flatten",require('@stdlib/array-base-flatten/dist'));e(r,"flattenBy",require('@stdlib/array-base-flatten-by/dist'));e(r,"flatten2d",require('@stdlib/array-base-flatten2d/dist'));e(r,"flatten2dBy",require('@stdlib/array-base-flatten2d-by/dist'));e(r,"flatten3d",require('@stdlib/array-base-flatten3d/dist'));e(r,"flatten3dBy",require('@stdlib/array-base-flatten3d-by/dist'));e(r,"flatten4d",require('@stdlib/array-base-flatten4d/dist'));e(r,"flatten4dBy",require('@stdlib/array-base-flatten4d-by/dist'));e(r,"flatten5d",require('@stdlib/array-base-flatten5d/dist'));e(r,"flatten5dBy",require('@stdlib/array-base-flatten5d-by/dist'));e(r,"fliplr2d",require('@stdlib/array-base-fliplr2d/dist'));e(r,"fliplr3d",require('@stdlib/array-base-fliplr3d/dist'));e(r,"fliplr4d",require('@stdlib/array-base-fliplr4d/dist'));e(r,"fliplr5d",require('@stdlib/array-base-fliplr5d/dist'));e(r,"flipud2d",require('@stdlib/array-base-flipud2d/dist'));e(r,"strided2array",require('@stdlib/array-base-from-strided/dist'));e(r,"getter",require('@stdlib/array-base-getter/dist'));e(r,"incrspace",require('@stdlib/array-base-incrspace/dist'));e(r,"indexOf",require('@stdlib/array-base-index-of/dist'));e(r,"last",require('@stdlib/array-base-last/dist'));e(r,"linspace",require('@stdlib/array-base-linspace/dist'));e(r,"logspace",require('@stdlib/array-base-logspace/dist'));e(r,"map2d",require('@stdlib/array-base-map2d/dist'));e(r,"map3d",require('@stdlib/array-base-map3d/dist'));e(r,"map4d",require('@stdlib/array-base-map4d/dist'));e(r,"map5d",require('@stdlib/array-base-map5d/dist'));e(r,"mskbinary2d",require('@stdlib/array-base-mskbinary2d/dist'));e(r,"mskunary2d",require('@stdlib/array-base-mskunary2d/dist'));e(r,"mskunary3d",require('@stdlib/array-base-mskunary3d/dist'));e(r,"nCartesianProduct",require('@stdlib/array-base-n-cartesian-product/dist'));e(r,"oneTo",require('@stdlib/array-base-one-to/dist'));e(r,"ones",require('@stdlib/array-base-ones/dist'));e(r,"ones2d",require('@stdlib/array-base-ones2d/dist'));e(r,"ones3d",require('@stdlib/array-base-ones3d/dist'));e(r,"ones4d",require('@stdlib/array-base-ones4d/dist'));e(r,"ones5d",require('@stdlib/array-base-ones5d/dist'));e(r,"onesnd",require('@stdlib/array-base-onesnd/dist'));e(r,"quaternary2d",require('@stdlib/array-base-quaternary2d/dist'));e(r,"quaternary3d",require('@stdlib/array-base-quaternary3d/dist'));e(r,"quaternary4d",require('@stdlib/array-base-quaternary4d/dist'));e(r,"quaternary5d",require('@stdlib/array-base-quaternary5d/dist'));e(r,"quinary2d",require('@stdlib/array-base-quinary2d/dist'));e(r,"resolveGetter",require('@stdlib/array-base-resolve-getter/dist'));e(r,"setter",require('@stdlib/array-base-setter/dist'));e(r,"slice",require('@stdlib/array-base-slice/dist'));e(r,"strided2array2d",require('@stdlib/array-base-strided2array2d/dist'));e(r,"strided2array3d",require('@stdlib/array-base-strided2array3d/dist'));e(r,"strided2array4d",require('@stdlib/array-base-strided2array4d/dist'));e(r,"strided2array5d",require('@stdlib/array-base-strided2array5d/dist'));e(r,"take",require('@stdlib/array-base-take/dist'));e(r,"takeIndexed",require('@stdlib/array-base-take-indexed/dist'));e(r,"take2d",require('@stdlib/array-base-take2d/dist'));e(r,"take3d",require('@stdlib/array-base-take3d/dist'));e(r,"ternary2d",require('@stdlib/array-base-ternary2d/dist'));e(r,"ternary3d",require('@stdlib/array-base-ternary3d/dist'));e(r,"ternary4d",require('@stdlib/array-base-ternary4d/dist'));e(r,"ternary5d",require('@stdlib/array-base-ternary5d/dist'));e(r,"toAccessorArray",require('@stdlib/array-base-to-accessor-array/dist'));e(r,"unary2d",require('@stdlib/array-base-unary2d/dist'));e(r,"unary2dBy",require('@stdlib/array-base-unary2d-by/dist'));e(r,"unary3d",require('@stdlib/array-base-unary3d/dist'));e(r,"unary4d",require('@stdlib/array-base-unary4d/dist'));e(r,"unary5d",require('@stdlib/array-base-unary5d/dist'));e(r,"unarynd",require('@stdlib/array-base-unarynd/dist'));e(r,"unitspace",require('@stdlib/array-base-unitspace/dist'));e(r,"zeroTo",require('@stdlib/array-base-zero-to/dist'));e(r,"zeros",require('@stdlib/array-base-zeros/dist'));e(r,"zeros2d",require('@stdlib/array-base-zeros2d/dist'));e(r,"zeros3d",require('@stdlib/array-base-zeros3d/dist'));e(r,"zeros4d",require('@stdlib/array-base-zeros4d/dist'));e(r,"zeros5d",require('@stdlib/array-base-zeros5d/dist'));e(r,"zerosnd",require('@stdlib/array-base-zerosnd/dist'));module.exports=r;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
