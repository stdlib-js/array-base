/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name AccessorArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessor}
*/
setReadOnly( ns, 'AccessorArray', require( '@stdlib/array-base-accessor/dist' ) );

/**
* @name accessorGetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessor-getter}
*/
setReadOnly( ns, 'accessorGetter', require( '@stdlib/array-base-accessor-getter/dist' ) );

/**
* @name accessorSetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessor-setter}
*/
setReadOnly( ns, 'accessorSetter', require( '@stdlib/array-base-accessor-setter/dist' ) );

/**
* @name accessors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessors}
*/
setReadOnly( ns, 'accessors', require( '@stdlib/array-base-accessors/dist' ) );

/**
* @name any
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any}
*/
setReadOnly( ns, 'any', require( '@stdlib/array-base-any/dist' ) );

/**
* @name anyBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-by}
*/
setReadOnly( ns, 'anyBy', require( '@stdlib/array-base-any-by/dist' ) );

/**
* @name anyByRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-by-right}
*/
setReadOnly( ns, 'anyByRight', require( '@stdlib/array-base-any-by-right/dist' ) );

/**
* @name arraylike2object
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/arraylike2object}
*/
setReadOnly( ns, 'arraylike2object', require( '@stdlib/array-base-arraylike2object/dist' ) );

/**
* @name assert
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/assert}
*/
setReadOnly( ns, 'assert', require( '@stdlib/array-base-assert/dist' ) );

/**
* @name at
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at}
*/
setReadOnly( ns, 'at', require( '@stdlib/array-base-at/dist' ) );

/**
* @name at2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at2d}
*/
setReadOnly( ns, 'at2d', require( '@stdlib/array-base-at2d/dist' ) );

/**
* @name at3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at3d}
*/
setReadOnly( ns, 'at3d', require( '@stdlib/array-base-at3d/dist' ) );

/**
* @name at4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at4d}
*/
setReadOnly( ns, 'at4d', require( '@stdlib/array-base-at4d/dist' ) );

/**
* @name at5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at5d}
*/
setReadOnly( ns, 'at5d', require( '@stdlib/array-base-at5d/dist' ) );

/**
* @name atnd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/atnd}
*/
setReadOnly( ns, 'atnd', require( '@stdlib/array-base-atnd/dist' ) );

/**
* @name bifurcateEntries
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-entries}
*/
setReadOnly( ns, 'bifurcateEntries', require( '@stdlib/array-base-bifurcate-entries/dist' ) );

/**
* @name bifurcateEntriesBy
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-entries-by}
*/
setReadOnly( ns, 'bifurcateEntriesBy', require( '@stdlib/array-base-bifurcate-entries-by/dist' ) );

/**
* @name bifurcateIndices
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-indices}
*/
setReadOnly( ns, 'bifurcateIndices', require( '@stdlib/array-base-bifurcate-indices/dist' ) );

/**
* @name bifurcateIndicesBy
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-indices-by}
*/
setReadOnly( ns, 'bifurcateIndicesBy', require( '@stdlib/array-base-bifurcate-indices-by/dist' ) );

/**
* @name bifurcateValues
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-values}
*/
setReadOnly( ns, 'bifurcateValues', require( '@stdlib/array-base-bifurcate-values/dist' ) );

/**
* @name bifurcateValuesBy
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-values-by}
*/
setReadOnly( ns, 'bifurcateValuesBy', require( '@stdlib/array-base-bifurcate-values-by/dist' ) );

/**
* @name binary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary2d}
*/
setReadOnly( ns, 'binary2d', require( '@stdlib/array-base-binary2d/dist' ) );

/**
* @name binary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary3d}
*/
setReadOnly( ns, 'binary3d', require( '@stdlib/array-base-binary3d/dist' ) );

/**
* @name binary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary4d}
*/
setReadOnly( ns, 'binary4d', require( '@stdlib/array-base-binary4d/dist' ) );

/**
* @name binary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary5d}
*/
setReadOnly( ns, 'binary5d', require( '@stdlib/array-base-binary5d/dist' ) );

/**
* @name binarynd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binarynd}
*/
setReadOnly( ns, 'binarynd', require( '@stdlib/array-base-binarynd/dist' ) );

/**
* @name broadcastArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcast-array}
*/
setReadOnly( ns, 'broadcastArray', require( '@stdlib/array-base-broadcast-array/dist' ) );

/**
* @name bbinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary2d}
*/
setReadOnly( ns, 'bbinary2d', require( '@stdlib/array-base-broadcasted-binary2d/dist' ) );

/**
* @name bbinary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary3d}
*/
setReadOnly( ns, 'bbinary3d', require( '@stdlib/array-base-broadcasted-binary3d/dist' ) );

/**
* @name bbinary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary4d}
*/
setReadOnly( ns, 'bbinary4d', require( '@stdlib/array-base-broadcasted-binary4d/dist' ) );

/**
* @name bbinary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary5d}
*/
setReadOnly( ns, 'bbinary5d', require( '@stdlib/array-base-broadcasted-binary5d/dist' ) );

/**
* @name bquaternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quaternary2d}
*/
setReadOnly( ns, 'bquaternary2d', require( '@stdlib/array-base-broadcasted-quaternary2d/dist' ) );

/**
* @name bquinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quinary2d}
*/
setReadOnly( ns, 'bquinary2d', require( '@stdlib/array-base-broadcasted-quinary2d/dist' ) );

/**
* @name bternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-ternary2d}
*/
setReadOnly( ns, 'bternary2d', require( '@stdlib/array-base-broadcasted-ternary2d/dist' ) );

/**
* @name bunary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary2d}
*/
setReadOnly( ns, 'bunary2d', require( '@stdlib/array-base-broadcasted-unary2d/dist' ) );

/**
* @name bunary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary3d}
*/
setReadOnly( ns, 'bunary3d', require( '@stdlib/array-base-broadcasted-unary3d/dist' ) );

/**
* @name bunary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary4d}
*/
setReadOnly( ns, 'bunary4d', require( '@stdlib/array-base-broadcasted-unary4d/dist' ) );

/**
* @name bunary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary5d}
*/
setReadOnly( ns, 'bunary5d', require( '@stdlib/array-base-broadcasted-unary5d/dist' ) );

/**
* @name cartesianPower
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cartesian-power}
*/
setReadOnly( ns, 'cartesianPower', require( '@stdlib/array-base-cartesian-power/dist' ) );

/**
* @name cartesianProduct
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cartesian-product}
*/
setReadOnly( ns, 'cartesianProduct', require( '@stdlib/array-base-cartesian-product/dist' ) );

/**
* @name cartesianSquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cartesian-square}
*/
setReadOnly( ns, 'cartesianSquare', require( '@stdlib/array-base-cartesian-square/dist' ) );

/**
* @name copy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/copy}
*/
setReadOnly( ns, 'copy', require( '@stdlib/array-base-copy/dist' ) );

/**
* @name copyIndexed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/copy-indexed}
*/
setReadOnly( ns, 'copyIndexed', require( '@stdlib/array-base-copy-indexed/dist' ) );

/**
* @name countFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-falsy}
*/
setReadOnly( ns, 'countFalsy', require( '@stdlib/array-base-count-falsy/dist' ) );

/**
* @name countSameValue
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-same-value}
*/
setReadOnly( ns, 'countSameValue', require( '@stdlib/array-base-count-same-value/dist' ) );

/**
* @name countSameValueZero
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-same-value-zero}
*/
setReadOnly( ns, 'countSameValueZero', require( '@stdlib/array-base-count-same-value-zero/dist' ) );

/**
* @name countTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-truthy}
*/
setReadOnly( ns, 'countTruthy', require( '@stdlib/array-base-count-truthy/dist' ) );

/**
* @name dedupe
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/dedupe}
*/
setReadOnly( ns, 'dedupe', require( '@stdlib/array-base-dedupe/dist' ) );

/**
* @name every
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/every}
*/
setReadOnly( ns, 'every', require( '@stdlib/array-base-every/dist' ) );

/**
* @name everyBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/every-by}
*/
setReadOnly( ns, 'everyBy', require( '@stdlib/array-base-every-by/dist' ) );

/**
* @name everyByRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/every-by-right}
*/
setReadOnly( ns, 'everyByRight', require( '@stdlib/array-base-every-by-right/dist' ) );

/**
* @name fancySlice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fancy-slice}
*/
setReadOnly( ns, 'fancySlice', require( '@stdlib/array-base-fancy-slice/dist' ) );

/**
* @name fancySliceAssign
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fancy-slice-assign}
*/
setReadOnly( ns, 'fancySliceAssign', require( '@stdlib/array-base-fancy-slice-assign/dist' ) );

/**
* @name filled
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled}
*/
setReadOnly( ns, 'filled', require( '@stdlib/array-base-filled/dist' ) );

/**
* @name filledBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled-by}
*/
setReadOnly( ns, 'filledBy', require( '@stdlib/array-base-filled-by/dist' ) );

/**
* @name filled2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled2d}
*/
setReadOnly( ns, 'filled2d', require( '@stdlib/array-base-filled2d/dist' ) );

/**
* @name filled2dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled2d-by}
*/
setReadOnly( ns, 'filled2dBy', require( '@stdlib/array-base-filled2d-by/dist' ) );

/**
* @name filled3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled3d}
*/
setReadOnly( ns, 'filled3d', require( '@stdlib/array-base-filled3d/dist' ) );

/**
* @name filled3dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled3d-by}
*/
setReadOnly( ns, 'filled3dBy', require( '@stdlib/array-base-filled3d-by/dist' ) );

/**
* @name filled4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled4d}
*/
setReadOnly( ns, 'filled4d', require( '@stdlib/array-base-filled4d/dist' ) );

/**
* @name filled4dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled4d-by}
*/
setReadOnly( ns, 'filled4dBy', require( '@stdlib/array-base-filled4d-by/dist' ) );

/**
* @name filled5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled5d}
*/
setReadOnly( ns, 'filled5d', require( '@stdlib/array-base-filled5d/dist' ) );

/**
* @name filled5dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled5d-by}
*/
setReadOnly( ns, 'filled5dBy', require( '@stdlib/array-base-filled5d-by/dist' ) );

/**
* @name fillednd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fillednd}
*/
setReadOnly( ns, 'fillednd', require( '@stdlib/array-base-fillednd/dist' ) );

/**
* @name filledndBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fillednd-by}
*/
setReadOnly( ns, 'filledndBy', require( '@stdlib/array-base-fillednd-by/dist' ) );

/**
* @name filter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filter}
*/
setReadOnly( ns, 'filter', require( '@stdlib/array-base-filter/dist' ) );

/**
* @name first
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/first}
*/
setReadOnly( ns, 'first', require( '@stdlib/array-base-first/dist' ) );

/**
* @name flatten
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten}
*/
setReadOnly( ns, 'flatten', require( '@stdlib/array-base-flatten/dist' ) );

/**
* @name flattenBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten-by}
*/
setReadOnly( ns, 'flattenBy', require( '@stdlib/array-base-flatten-by/dist' ) );

/**
* @name flatten2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten2d}
*/
setReadOnly( ns, 'flatten2d', require( '@stdlib/array-base-flatten2d/dist' ) );

/**
* @name flatten2dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten2d-by}
*/
setReadOnly( ns, 'flatten2dBy', require( '@stdlib/array-base-flatten2d-by/dist' ) );

/**
* @name flatten3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten3d}
*/
setReadOnly( ns, 'flatten3d', require( '@stdlib/array-base-flatten3d/dist' ) );

/**
* @name flatten3dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten3d-by}
*/
setReadOnly( ns, 'flatten3dBy', require( '@stdlib/array-base-flatten3d-by/dist' ) );

/**
* @name flatten4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten4d}
*/
setReadOnly( ns, 'flatten4d', require( '@stdlib/array-base-flatten4d/dist' ) );

/**
* @name flatten4dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten4d-by}
*/
setReadOnly( ns, 'flatten4dBy', require( '@stdlib/array-base-flatten4d-by/dist' ) );

/**
* @name flatten5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten5d}
*/
setReadOnly( ns, 'flatten5d', require( '@stdlib/array-base-flatten5d/dist' ) );

/**
* @name flatten5dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten5d-by}
*/
setReadOnly( ns, 'flatten5dBy', require( '@stdlib/array-base-flatten5d-by/dist' ) );

/**
* @name fliplr2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr2d}
*/
setReadOnly( ns, 'fliplr2d', require( '@stdlib/array-base-fliplr2d/dist' ) );

/**
* @name fliplr3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr3d}
*/
setReadOnly( ns, 'fliplr3d', require( '@stdlib/array-base-fliplr3d/dist' ) );

/**
* @name fliplr4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr4d}
*/
setReadOnly( ns, 'fliplr4d', require( '@stdlib/array-base-fliplr4d/dist' ) );

/**
* @name fliplr5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr5d}
*/
setReadOnly( ns, 'fliplr5d', require( '@stdlib/array-base-fliplr5d/dist' ) );

/**
* @name flipud2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud2d}
*/
setReadOnly( ns, 'flipud2d', require( '@stdlib/array-base-flipud2d/dist' ) );

/**
* @name flipud3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud3d}
*/
setReadOnly( ns, 'flipud3d', require( '@stdlib/array-base-flipud3d/dist' ) );

/**
* @name flipud4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud4d}
*/
setReadOnly( ns, 'flipud4d', require( '@stdlib/array-base-flipud4d/dist' ) );

/**
* @name flipud5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud5d}
*/
setReadOnly( ns, 'flipud5d', require( '@stdlib/array-base-flipud5d/dist' ) );

/**
* @name strided2array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/from-strided}
*/
setReadOnly( ns, 'strided2array', require( '@stdlib/array-base-from-strided/dist' ) );

/**
* @name getter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/getter}
*/
setReadOnly( ns, 'getter', require( '@stdlib/array-base-getter/dist' ) );

/**
* @name groupEntries
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-entries}
*/
setReadOnly( ns, 'groupEntries', require( '@stdlib/array-base-group-entries/dist' ) );

/**
* @name groupEntriesBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-entries-by}
*/
setReadOnly( ns, 'groupEntriesBy', require( '@stdlib/array-base-group-entries-by/dist' ) );

/**
* @name groupIndices
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-indices}
*/
setReadOnly( ns, 'groupIndices', require( '@stdlib/array-base-group-indices/dist' ) );

/**
* @name groupIndicesBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-indices-by}
*/
setReadOnly( ns, 'groupIndicesBy', require( '@stdlib/array-base-group-indices-by/dist' ) );

/**
* @name groupValues
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-values}
*/
setReadOnly( ns, 'groupValues', require( '@stdlib/array-base-group-values/dist' ) );

/**
* @name groupValuesBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-values-by}
*/
setReadOnly( ns, 'groupValuesBy', require( '@stdlib/array-base-group-values-by/dist' ) );

/**
* @name incrspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/incrspace}
*/
setReadOnly( ns, 'incrspace', require( '@stdlib/array-base-incrspace/dist' ) );

/**
* @name indexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/index-of}
*/
setReadOnly( ns, 'indexOf', require( '@stdlib/array-base-index-of/dist' ) );

/**
* @name last
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/last}
*/
setReadOnly( ns, 'last', require( '@stdlib/array-base-last/dist' ) );

/**
* @name lastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/last-index-of}
*/
setReadOnly( ns, 'lastIndexOf', require( '@stdlib/array-base-last-index-of/dist' ) );

/**
* @name linspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/linspace}
*/
setReadOnly( ns, 'linspace', require( '@stdlib/array-base-linspace/dist' ) );

/**
* @name logspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/logspace}
*/
setReadOnly( ns, 'logspace', require( '@stdlib/array-base-logspace/dist' ) );

/**
* @name map2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map2d}
*/
setReadOnly( ns, 'map2d', require( '@stdlib/array-base-map2d/dist' ) );

/**
* @name map3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map3d}
*/
setReadOnly( ns, 'map3d', require( '@stdlib/array-base-map3d/dist' ) );

/**
* @name map4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map4d}
*/
setReadOnly( ns, 'map4d', require( '@stdlib/array-base-map4d/dist' ) );

/**
* @name map5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map5d}
*/
setReadOnly( ns, 'map5d', require( '@stdlib/array-base-map5d/dist' ) );

/**
* @name minSignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/min-signed-integer-dtype}
*/
setReadOnly( ns, 'minSignedIntegerDataType', require( '@stdlib/array-base-min-signed-integer-dtype/dist' ) );

/**
* @name minUnsignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/min-unsigned-integer-dtype}
*/
setReadOnly( ns, 'minUnsignedIntegerDataType', require( '@stdlib/array-base-min-unsigned-integer-dtype/dist' ) );

/**
* @name mskbinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskbinary2d}
*/
setReadOnly( ns, 'mskbinary2d', require( '@stdlib/array-base-mskbinary2d/dist' ) );

/**
* @name mskfilter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskfilter}
*/
setReadOnly( ns, 'mskfilter', require( '@stdlib/array-base-mskfilter/dist' ) );

/**
* @name mskreject
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskreject}
*/
setReadOnly( ns, 'mskreject', require( '@stdlib/array-base-mskreject/dist' ) );

/**
* @name mskunary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskunary2d}
*/
setReadOnly( ns, 'mskunary2d', require( '@stdlib/array-base-mskunary2d/dist' ) );

/**
* @name mskunary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskunary3d}
*/
setReadOnly( ns, 'mskunary3d', require( '@stdlib/array-base-mskunary3d/dist' ) );

/**
* @name nCartesianProduct
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/n-cartesian-product}
*/
setReadOnly( ns, 'nCartesianProduct', require( '@stdlib/array-base-n-cartesian-product/dist' ) );

/**
* @name none
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/none}
*/
setReadOnly( ns, 'none', require( '@stdlib/array-base-none/dist' ) );

/**
* @name noneBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/none-by}
*/
setReadOnly( ns, 'noneBy', require( '@stdlib/array-base-none-by/dist' ) );

/**
* @name noneByRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/none-by-right}
*/
setReadOnly( ns, 'noneByRight', require( '@stdlib/array-base-none-by-right/dist' ) );

/**
* @name oneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/one-to}
*/
setReadOnly( ns, 'oneTo', require( '@stdlib/array-base-one-to/dist' ) );

/**
* @name ones
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones}
*/
setReadOnly( ns, 'ones', require( '@stdlib/array-base-ones/dist' ) );

/**
* @name ones2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones2d}
*/
setReadOnly( ns, 'ones2d', require( '@stdlib/array-base-ones2d/dist' ) );

/**
* @name ones3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones3d}
*/
setReadOnly( ns, 'ones3d', require( '@stdlib/array-base-ones3d/dist' ) );

/**
* @name ones4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones4d}
*/
setReadOnly( ns, 'ones4d', require( '@stdlib/array-base-ones4d/dist' ) );

/**
* @name ones5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones5d}
*/
setReadOnly( ns, 'ones5d', require( '@stdlib/array-base-ones5d/dist' ) );

/**
* @name onesnd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/onesnd}
*/
setReadOnly( ns, 'onesnd', require( '@stdlib/array-base-onesnd/dist' ) );

/**
* @name quaternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary2d}
*/
setReadOnly( ns, 'quaternary2d', require( '@stdlib/array-base-quaternary2d/dist' ) );

/**
* @name quaternary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary3d}
*/
setReadOnly( ns, 'quaternary3d', require( '@stdlib/array-base-quaternary3d/dist' ) );

/**
* @name quaternary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary4d}
*/
setReadOnly( ns, 'quaternary4d', require( '@stdlib/array-base-quaternary4d/dist' ) );

/**
* @name quaternary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary5d}
*/
setReadOnly( ns, 'quaternary5d', require( '@stdlib/array-base-quaternary5d/dist' ) );

/**
* @name quinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary2d}
*/
setReadOnly( ns, 'quinary2d', require( '@stdlib/array-base-quinary2d/dist' ) );

/**
* @name quinary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary3d}
*/
setReadOnly( ns, 'quinary3d', require( '@stdlib/array-base-quinary3d/dist' ) );

/**
* @name quinary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary4d}
*/
setReadOnly( ns, 'quinary4d', require( '@stdlib/array-base-quinary4d/dist' ) );

/**
* @name quinary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary5d}
*/
setReadOnly( ns, 'quinary5d', require( '@stdlib/array-base-quinary5d/dist' ) );

/**
* @name reject
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/reject}
*/
setReadOnly( ns, 'reject', require( '@stdlib/array-base-reject/dist' ) );

/**
* @name resolveGetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/resolve-getter}
*/
setReadOnly( ns, 'resolveGetter', require( '@stdlib/array-base-resolve-getter/dist' ) );

/**
* @name resolveSetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/resolve-setter}
*/
setReadOnly( ns, 'resolveSetter', require( '@stdlib/array-base-resolve-setter/dist' ) );

/**
* @name reverse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/reverse}
*/
setReadOnly( ns, 'reverse', require( '@stdlib/array-base-reverse/dist' ) );

/**
* @name setter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/setter}
*/
setReadOnly( ns, 'setter', require( '@stdlib/array-base-setter/dist' ) );

/**
* @name slice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/slice}
*/
setReadOnly( ns, 'slice', require( '@stdlib/array-base-slice/dist' ) );

/**
* @name strided2array2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array2d}
*/
setReadOnly( ns, 'strided2array2d', require( '@stdlib/array-base-strided2array2d/dist' ) );

/**
* @name strided2array3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array3d}
*/
setReadOnly( ns, 'strided2array3d', require( '@stdlib/array-base-strided2array3d/dist' ) );

/**
* @name strided2array4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array4d}
*/
setReadOnly( ns, 'strided2array4d', require( '@stdlib/array-base-strided2array4d/dist' ) );

/**
* @name strided2array5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array5d}
*/
setReadOnly( ns, 'strided2array5d', require( '@stdlib/array-base-strided2array5d/dist' ) );

/**
* @name take
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take}
*/
setReadOnly( ns, 'take', require( '@stdlib/array-base-take/dist' ) );

/**
* @name takeIndexed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take-indexed}
*/
setReadOnly( ns, 'takeIndexed', require( '@stdlib/array-base-take-indexed/dist' ) );

/**
* @name take2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take2d}
*/
setReadOnly( ns, 'take2d', require( '@stdlib/array-base-take2d/dist' ) );

/**
* @name take3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take3d}
*/
setReadOnly( ns, 'take3d', require( '@stdlib/array-base-take3d/dist' ) );

/**
* @name ternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary2d}
*/
setReadOnly( ns, 'ternary2d', require( '@stdlib/array-base-ternary2d/dist' ) );

/**
* @name ternary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary3d}
*/
setReadOnly( ns, 'ternary3d', require( '@stdlib/array-base-ternary3d/dist' ) );

/**
* @name ternary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary4d}
*/
setReadOnly( ns, 'ternary4d', require( '@stdlib/array-base-ternary4d/dist' ) );

/**
* @name ternary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary5d}
*/
setReadOnly( ns, 'ternary5d', require( '@stdlib/array-base-ternary5d/dist' ) );

/**
* @name toAccessorArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/to-accessor-array}
*/
setReadOnly( ns, 'toAccessorArray', require( '@stdlib/array-base-to-accessor-array/dist' ) );

/**
* @name toDeduped
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/to-deduped}
*/
setReadOnly( ns, 'toDeduped', require( '@stdlib/array-base-to-deduped/dist' ) );

/**
* @name toReversed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/to-reversed}
*/
setReadOnly( ns, 'toReversed', require( '@stdlib/array-base-to-reversed/dist' ) );

/**
* @name unary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary2d}
*/
setReadOnly( ns, 'unary2d', require( '@stdlib/array-base-unary2d/dist' ) );

/**
* @name unary2dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary2d-by}
*/
setReadOnly( ns, 'unary2dBy', require( '@stdlib/array-base-unary2d-by/dist' ) );

/**
* @name unary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary3d}
*/
setReadOnly( ns, 'unary3d', require( '@stdlib/array-base-unary3d/dist' ) );

/**
* @name unary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary4d}
*/
setReadOnly( ns, 'unary4d', require( '@stdlib/array-base-unary4d/dist' ) );

/**
* @name unary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary5d}
*/
setReadOnly( ns, 'unary5d', require( '@stdlib/array-base-unary5d/dist' ) );

/**
* @name unarynd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unarynd}
*/
setReadOnly( ns, 'unarynd', require( '@stdlib/array-base-unarynd/dist' ) );

/**
* @name unitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unitspace}
*/
setReadOnly( ns, 'unitspace', require( '@stdlib/array-base-unitspace/dist' ) );

/**
* @name arrayWith
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/with}
*/
setReadOnly( ns, 'arrayWith', require( '@stdlib/array-base-with/dist' ) );

/**
* @name zeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zero-to}
*/
setReadOnly( ns, 'zeroTo', require( '@stdlib/array-base-zero-to/dist' ) );

/**
* @name zeros
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros}
*/
setReadOnly( ns, 'zeros', require( '@stdlib/array-base-zeros/dist' ) );

/**
* @name zeros2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros2d}
*/
setReadOnly( ns, 'zeros2d', require( '@stdlib/array-base-zeros2d/dist' ) );

/**
* @name zeros3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros3d}
*/
setReadOnly( ns, 'zeros3d', require( '@stdlib/array-base-zeros3d/dist' ) );

/**
* @name zeros4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros4d}
*/
setReadOnly( ns, 'zeros4d', require( '@stdlib/array-base-zeros4d/dist' ) );

/**
* @name zeros5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros5d}
*/
setReadOnly( ns, 'zeros5d', require( '@stdlib/array-base-zeros5d/dist' ) );

/**
* @name zerosnd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zerosnd}
*/
setReadOnly( ns, 'zerosnd', require( '@stdlib/array-base-zerosnd/dist' ) );


// EXPORTS //

module.exports = ns;
