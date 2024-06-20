"use strict";var r=require('@stdlib/utils-define-read-only-property/dist'),e={};r(e,"AccessorArray",require('@stdlib/array-base-accessor/dist'));r(e,"accessorGetter",require('@stdlib/array-base-accessor-getter/dist'));r(e,"accessorSetter",require('@stdlib/array-base-accessor-setter/dist'));r(e,"accessors",require('@stdlib/array-base-accessors/dist'));r(e,"any",require('@stdlib/array-base-any/dist'));r(e,"anyBy",require('@stdlib/array-base-any-by/dist'));r(e,"anyByRight",require('@stdlib/array-base-any-by-right/dist'));r(e,"arraylike2object",require('@stdlib/array-base-arraylike2object/dist'));r(e,"assert",require('@stdlib/array-base-assert/dist'));r(e,"at",require('@stdlib/array-base-at/dist'));r(e,"at2d",require('@stdlib/array-base-at2d/dist'));r(e,"at3d",require('@stdlib/array-base-at3d/dist'));r(e,"at4d",require('@stdlib/array-base-at4d/dist'));r(e,"at5d",require('@stdlib/array-base-at5d/dist'));r(e,"atnd",require('@stdlib/array-base-atnd/dist'));r(e,"bifurcateEntries",require('@stdlib/array-base-bifurcate-entries/dist'));r(e,"bifurcateEntriesBy",require('@stdlib/array-base-bifurcate-entries-by/dist'));r(e,"bifurcateIndices",require('@stdlib/array-base-bifurcate-indices/dist'));r(e,"bifurcateIndicesBy",require('@stdlib/array-base-bifurcate-indices-by/dist'));r(e,"bifurcateValues",require('@stdlib/array-base-bifurcate-values/dist'));r(e,"bifurcateValuesBy",require('@stdlib/array-base-bifurcate-values-by/dist'));r(e,"binary2d",require('@stdlib/array-base-binary2d/dist'));r(e,"binary3d",require('@stdlib/array-base-binary3d/dist'));r(e,"binary4d",require('@stdlib/array-base-binary4d/dist'));r(e,"binary5d",require('@stdlib/array-base-binary5d/dist'));r(e,"binarynd",require('@stdlib/array-base-binarynd/dist'));r(e,"broadcastArray",require('@stdlib/array-base-broadcast-array/dist'));r(e,"bbinary2d",require('@stdlib/array-base-broadcasted-binary2d/dist'));r(e,"bbinary3d",require('@stdlib/array-base-broadcasted-binary3d/dist'));r(e,"bbinary4d",require('@stdlib/array-base-broadcasted-binary4d/dist'));r(e,"bbinary5d",require('@stdlib/array-base-broadcasted-binary5d/dist'));r(e,"bquaternary2d",require('@stdlib/array-base-broadcasted-quaternary2d/dist'));r(e,"bquinary2d",require('@stdlib/array-base-broadcasted-quinary2d/dist'));r(e,"bternary2d",require('@stdlib/array-base-broadcasted-ternary2d/dist'));r(e,"bunary2d",require('@stdlib/array-base-broadcasted-unary2d/dist'));r(e,"bunary3d",require('@stdlib/array-base-broadcasted-unary3d/dist'));r(e,"bunary4d",require('@stdlib/array-base-broadcasted-unary4d/dist'));r(e,"bunary5d",require('@stdlib/array-base-broadcasted-unary5d/dist'));r(e,"cartesianPower",require('@stdlib/array-base-cartesian-power/dist'));r(e,"cartesianProduct",require('@stdlib/array-base-cartesian-product/dist'));r(e,"cartesianSquare",require('@stdlib/array-base-cartesian-square/dist'));r(e,"copy",require('@stdlib/array-base-copy/dist'));r(e,"copyIndexed",require('@stdlib/array-base-copy-indexed/dist'));r(e,"countFalsy",require('@stdlib/array-base-count-falsy/dist'));r(e,"countIf",require('@stdlib/array-base-count-if/dist'));r(e,"countSameValue",require('@stdlib/array-base-count-same-value/dist'));r(e,"countSameValueZero",require('@stdlib/array-base-count-same-value-zero/dist'));r(e,"countTruthy",require('@stdlib/array-base-count-truthy/dist'));r(e,"cuany",require('@stdlib/array-base-cuany/dist'));r(e,"cuevery",require('@stdlib/array-base-cuevery/dist'));r(e,"dedupe",require('@stdlib/array-base-dedupe/dist'));r(e,"every",require('@stdlib/array-base-every/dist'));r(e,"everyBy",require('@stdlib/array-base-every-by/dist'));r(e,"everyByRight",require('@stdlib/array-base-every-by-right/dist'));r(e,"fancySlice",require('@stdlib/array-base-fancy-slice/dist'));r(e,"fancySliceAssign",require('@stdlib/array-base-fancy-slice-assign/dist'));r(e,"filled",require('@stdlib/array-base-filled/dist'));r(e,"filledBy",require('@stdlib/array-base-filled-by/dist'));r(e,"filled2d",require('@stdlib/array-base-filled2d/dist'));r(e,"filled2dBy",require('@stdlib/array-base-filled2d-by/dist'));r(e,"filled3d",require('@stdlib/array-base-filled3d/dist'));r(e,"filled3dBy",require('@stdlib/array-base-filled3d-by/dist'));r(e,"filled4d",require('@stdlib/array-base-filled4d/dist'));r(e,"filled4dBy",require('@stdlib/array-base-filled4d-by/dist'));r(e,"filled5d",require('@stdlib/array-base-filled5d/dist'));r(e,"filled5dBy",require('@stdlib/array-base-filled5d-by/dist'));r(e,"fillednd",require('@stdlib/array-base-fillednd/dist'));r(e,"filledndBy",require('@stdlib/array-base-fillednd-by/dist'));r(e,"filter",require('@stdlib/array-base-filter/dist'));r(e,"first",require('@stdlib/array-base-first/dist'));r(e,"flatten",require('@stdlib/array-base-flatten/dist'));r(e,"flattenBy",require('@stdlib/array-base-flatten-by/dist'));r(e,"flatten2d",require('@stdlib/array-base-flatten2d/dist'));r(e,"flatten2dBy",require('@stdlib/array-base-flatten2d-by/dist'));r(e,"flatten3d",require('@stdlib/array-base-flatten3d/dist'));r(e,"flatten3dBy",require('@stdlib/array-base-flatten3d-by/dist'));r(e,"flatten4d",require('@stdlib/array-base-flatten4d/dist'));r(e,"flatten4dBy",require('@stdlib/array-base-flatten4d-by/dist'));r(e,"flatten5d",require('@stdlib/array-base-flatten5d/dist'));r(e,"flatten5dBy",require('@stdlib/array-base-flatten5d-by/dist'));r(e,"fliplr2d",require('@stdlib/array-base-fliplr2d/dist'));r(e,"fliplr3d",require('@stdlib/array-base-fliplr3d/dist'));r(e,"fliplr4d",require('@stdlib/array-base-fliplr4d/dist'));r(e,"fliplr5d",require('@stdlib/array-base-fliplr5d/dist'));r(e,"flipud2d",require('@stdlib/array-base-flipud2d/dist'));r(e,"flipud3d",require('@stdlib/array-base-flipud3d/dist'));r(e,"flipud4d",require('@stdlib/array-base-flipud4d/dist'));r(e,"flipud5d",require('@stdlib/array-base-flipud5d/dist'));r(e,"strided2array",require('@stdlib/array-base-from-strided/dist'));r(e,"getter",require('@stdlib/array-base-getter/dist'));r(e,"groupEntries",require('@stdlib/array-base-group-entries/dist'));r(e,"groupEntriesBy",require('@stdlib/array-base-group-entries-by/dist'));r(e,"groupIndices",require('@stdlib/array-base-group-indices/dist'));r(e,"groupIndicesBy",require('@stdlib/array-base-group-indices-by/dist'));r(e,"groupValues",require('@stdlib/array-base-group-values/dist'));r(e,"groupValuesBy",require('@stdlib/array-base-group-values-by/dist'));r(e,"incrspace",require('@stdlib/array-base-incrspace/dist'));r(e,"indexOf",require('@stdlib/array-base-index-of/dist'));r(e,"join",require('@stdlib/array-base-join/dist'));r(e,"last",require('@stdlib/array-base-last/dist'));r(e,"lastIndexOf",require('@stdlib/array-base-last-index-of/dist'));r(e,"linspace",require('@stdlib/array-base-linspace/dist'));r(e,"logspace",require('@stdlib/array-base-logspace/dist'));r(e,"map2d",require('@stdlib/array-base-map2d/dist'));r(e,"map3d",require('@stdlib/array-base-map3d/dist'));r(e,"map4d",require('@stdlib/array-base-map4d/dist'));r(e,"map5d",require('@stdlib/array-base-map5d/dist'));r(e,"minSignedIntegerDataType",require('@stdlib/array-base-min-signed-integer-dtype/dist'));r(e,"minUnsignedIntegerDataType",require('@stdlib/array-base-min-unsigned-integer-dtype/dist'));r(e,"mskbinary2d",require('@stdlib/array-base-mskbinary2d/dist'));r(e,"mskfilter",require('@stdlib/array-base-mskfilter/dist'));r(e,"mskput",require('@stdlib/array-base-mskput/dist'));r(e,"mskreject",require('@stdlib/array-base-mskreject/dist'));r(e,"mskunary2d",require('@stdlib/array-base-mskunary2d/dist'));r(e,"mskunary3d",require('@stdlib/array-base-mskunary3d/dist'));r(e,"nCartesianProduct",require('@stdlib/array-base-n-cartesian-product/dist'));r(e,"none",require('@stdlib/array-base-none/dist'));r(e,"noneBy",require('@stdlib/array-base-none-by/dist'));r(e,"noneByRight",require('@stdlib/array-base-none-by-right/dist'));r(e,"oneTo",require('@stdlib/array-base-one-to/dist'));r(e,"ones",require('@stdlib/array-base-ones/dist'));r(e,"ones2d",require('@stdlib/array-base-ones2d/dist'));r(e,"ones3d",require('@stdlib/array-base-ones3d/dist'));r(e,"ones4d",require('@stdlib/array-base-ones4d/dist'));r(e,"ones5d",require('@stdlib/array-base-ones5d/dist'));r(e,"onesnd",require('@stdlib/array-base-onesnd/dist'));r(e,"place",require('@stdlib/array-base-place/dist'));r(e,"put",require('@stdlib/array-base-put/dist'));r(e,"quaternary2d",require('@stdlib/array-base-quaternary2d/dist'));r(e,"quaternary3d",require('@stdlib/array-base-quaternary3d/dist'));r(e,"quaternary4d",require('@stdlib/array-base-quaternary4d/dist'));r(e,"quaternary5d",require('@stdlib/array-base-quaternary5d/dist'));r(e,"quinary2d",require('@stdlib/array-base-quinary2d/dist'));r(e,"quinary3d",require('@stdlib/array-base-quinary3d/dist'));r(e,"quinary4d",require('@stdlib/array-base-quinary4d/dist'));r(e,"quinary5d",require('@stdlib/array-base-quinary5d/dist'));r(e,"reject",require('@stdlib/array-base-reject/dist'));r(e,"resolveGetter",require('@stdlib/array-base-resolve-getter/dist'));r(e,"resolveSetter",require('@stdlib/array-base-resolve-setter/dist'));r(e,"reverse",require('@stdlib/array-base-reverse/dist'));r(e,"setter",require('@stdlib/array-base-setter/dist'));r(e,"slice",require('@stdlib/array-base-slice/dist'));r(e,"strided2array2d",require('@stdlib/array-base-strided2array2d/dist'));r(e,"strided2array3d",require('@stdlib/array-base-strided2array3d/dist'));r(e,"strided2array4d",require('@stdlib/array-base-strided2array4d/dist'));r(e,"strided2array5d",require('@stdlib/array-base-strided2array5d/dist'));r(e,"take",require('@stdlib/array-base-take/dist'));r(e,"takeIndexed",require('@stdlib/array-base-take-indexed/dist'));r(e,"take2d",require('@stdlib/array-base-take2d/dist'));r(e,"take3d",require('@stdlib/array-base-take3d/dist'));r(e,"ternary2d",require('@stdlib/array-base-ternary2d/dist'));r(e,"ternary3d",require('@stdlib/array-base-ternary3d/dist'));r(e,"ternary4d",require('@stdlib/array-base-ternary4d/dist'));r(e,"ternary5d",require('@stdlib/array-base-ternary5d/dist'));r(e,"toAccessorArray",require('@stdlib/array-base-to-accessor-array/dist'));r(e,"toDeduped",require('@stdlib/array-base-to-deduped/dist'));r(e,"toReversed",require('@stdlib/array-base-to-reversed/dist'));r(e,"unary2d",require('@stdlib/array-base-unary2d/dist'));r(e,"unary2dBy",require('@stdlib/array-base-unary2d-by/dist'));r(e,"unary3d",require('@stdlib/array-base-unary3d/dist'));r(e,"unary4d",require('@stdlib/array-base-unary4d/dist'));r(e,"unary5d",require('@stdlib/array-base-unary5d/dist'));r(e,"unarynd",require('@stdlib/array-base-unarynd/dist'));r(e,"unitspace",require('@stdlib/array-base-unitspace/dist'));r(e,"where",require('@stdlib/array-base-where/dist'));r(e,"arrayWith",require('@stdlib/array-base-with/dist'));r(e,"zeroTo",require('@stdlib/array-base-zero-to/dist'));r(e,"zeros",require('@stdlib/array-base-zeros/dist'));r(e,"zeros2d",require('@stdlib/array-base-zeros2d/dist'));r(e,"zeros3d",require('@stdlib/array-base-zeros3d/dist'));r(e,"zeros4d",require('@stdlib/array-base-zeros4d/dist'));r(e,"zeros5d",require('@stdlib/array-base-zeros5d/dist'));r(e,"zerosnd",require('@stdlib/array-base-zerosnd/dist'));module.exports=e;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
