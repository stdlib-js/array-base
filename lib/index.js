/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


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
setReadOnly( ns, 'AccessorArray', require( '@stdlib/array-base-accessor' ) );

/**
* @name accessorGetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessor-getter}
*/
setReadOnly( ns, 'accessorGetter', require( '@stdlib/array-base-accessor-getter' ) );

/**
* @name accessorSetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessor-setter}
*/
setReadOnly( ns, 'accessorSetter', require( '@stdlib/array-base-accessor-setter' ) );

/**
* @name accessors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/accessors}
*/
setReadOnly( ns, 'accessors', require( '@stdlib/array-base-accessors' ) );

/**
* @name any
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any}
*/
setReadOnly( ns, 'any', require( '@stdlib/array-base-any' ) );

/**
* @name anyBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-by}
*/
setReadOnly( ns, 'anyBy', require( '@stdlib/array-base-any-by' ) );

/**
* @name anyByRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-by-right}
*/
setReadOnly( ns, 'anyByRight', require( '@stdlib/array-base-any-by-right' ) );

/**
* @name anyHasOwnProp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-has-own-property}
*/
setReadOnly( ns, 'anyHasOwnProp', require( '@stdlib/array-base-any-has-own-property' ) );

/**
* @name anyHasProp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-has-property}
*/
setReadOnly( ns, 'anyHasProp', require( '@stdlib/array-base-any-has-property' ) );

/**
* @name anyIsEntry
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-is-entry}
*/
setReadOnly( ns, 'anyIsEntry', require( '@stdlib/array-base-any-is-entry' ) );

/**
* @name anyIsEntryIn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/any-is-entry-in}
*/
setReadOnly( ns, 'anyIsEntryIn', require( '@stdlib/array-base-any-is-entry-in' ) );

/**
* @name arraylike2object
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/arraylike2object}
*/
setReadOnly( ns, 'arraylike2object', require( '@stdlib/array-base-arraylike2object' ) );

/**
* @name assert
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/assert}
*/
setReadOnly( ns, 'assert', require( '@stdlib/array-base-assert' ) );

/**
* @name at
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at}
*/
setReadOnly( ns, 'at', require( '@stdlib/array-base-at' ) );

/**
* @name at2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at2d}
*/
setReadOnly( ns, 'at2d', require( '@stdlib/array-base-at2d' ) );

/**
* @name at3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at3d}
*/
setReadOnly( ns, 'at3d', require( '@stdlib/array-base-at3d' ) );

/**
* @name at4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at4d}
*/
setReadOnly( ns, 'at4d', require( '@stdlib/array-base-at4d' ) );

/**
* @name at5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/at5d}
*/
setReadOnly( ns, 'at5d', require( '@stdlib/array-base-at5d' ) );

/**
* @name atnd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/atnd}
*/
setReadOnly( ns, 'atnd', require( '@stdlib/array-base-atnd' ) );

/**
* @name banded
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/banded}
*/
setReadOnly( ns, 'banded', require( '@stdlib/array-base-banded' ) );

/**
* @name bifurcateEntries
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-entries}
*/
setReadOnly( ns, 'bifurcateEntries', require( '@stdlib/array-base-bifurcate-entries' ) );

/**
* @name bifurcateEntriesBy
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-entries-by}
*/
setReadOnly( ns, 'bifurcateEntriesBy', require( '@stdlib/array-base-bifurcate-entries-by' ) );

/**
* @name bifurcateIndices
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-indices}
*/
setReadOnly( ns, 'bifurcateIndices', require( '@stdlib/array-base-bifurcate-indices' ) );

/**
* @name bifurcateIndicesBy
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-indices-by}
*/
setReadOnly( ns, 'bifurcateIndicesBy', require( '@stdlib/array-base-bifurcate-indices-by' ) );

/**
* @name bifurcateValues
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-values}
*/
setReadOnly( ns, 'bifurcateValues', require( '@stdlib/array-base-bifurcate-values' ) );

/**
* @name bifurcateValuesBy
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/bifurcate-values-by}
*/
setReadOnly( ns, 'bifurcateValuesBy', require( '@stdlib/array-base-bifurcate-values-by' ) );

/**
* @name binary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary2d}
*/
setReadOnly( ns, 'binary2d', require( '@stdlib/array-base-binary2d' ) );

/**
* @name binary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary3d}
*/
setReadOnly( ns, 'binary3d', require( '@stdlib/array-base-binary3d' ) );

/**
* @name binary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary4d}
*/
setReadOnly( ns, 'binary4d', require( '@stdlib/array-base-binary4d' ) );

/**
* @name binary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binary5d}
*/
setReadOnly( ns, 'binary5d', require( '@stdlib/array-base-binary5d' ) );

/**
* @name binarynd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/binarynd}
*/
setReadOnly( ns, 'binarynd', require( '@stdlib/array-base-binarynd' ) );

/**
* @name broadcastArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcast-array}
*/
setReadOnly( ns, 'broadcastArray', require( '@stdlib/array-base-broadcast-array' ) );

/**
* @name bbinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary2d}
*/
setReadOnly( ns, 'bbinary2d', require( '@stdlib/array-base-broadcasted-binary2d' ) );

/**
* @name bbinary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary3d}
*/
setReadOnly( ns, 'bbinary3d', require( '@stdlib/array-base-broadcasted-binary3d' ) );

/**
* @name bbinary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary4d}
*/
setReadOnly( ns, 'bbinary4d', require( '@stdlib/array-base-broadcasted-binary4d' ) );

/**
* @name bbinary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-binary5d}
*/
setReadOnly( ns, 'bbinary5d', require( '@stdlib/array-base-broadcasted-binary5d' ) );

/**
* @name bquaternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quaternary2d}
*/
setReadOnly( ns, 'bquaternary2d', require( '@stdlib/array-base-broadcasted-quaternary2d' ) );

/**
* @name bquaternary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quaternary3d}
*/
setReadOnly( ns, 'bquaternary3d', require( '@stdlib/array-base-broadcasted-quaternary3d' ) );

/**
* @name bquaternary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quaternary4d}
*/
setReadOnly( ns, 'bquaternary4d', require( '@stdlib/array-base-broadcasted-quaternary4d' ) );

/**
* @name bquaternary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quaternary5d}
*/
setReadOnly( ns, 'bquaternary5d', require( '@stdlib/array-base-broadcasted-quaternary5d' ) );

/**
* @name bquinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quinary2d}
*/
setReadOnly( ns, 'bquinary2d', require( '@stdlib/array-base-broadcasted-quinary2d' ) );

/**
* @name bquinary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-quinary4d}
*/
setReadOnly( ns, 'bquinary4d', require( '@stdlib/array-base-broadcasted-quinary4d' ) );

/**
* @name bternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-ternary2d}
*/
setReadOnly( ns, 'bternary2d', require( '@stdlib/array-base-broadcasted-ternary2d' ) );

/**
* @name bternary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-ternary3d}
*/
setReadOnly( ns, 'bternary3d', require( '@stdlib/array-base-broadcasted-ternary3d' ) );

/**
* @name bternary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-ternary4d}
*/
setReadOnly( ns, 'bternary4d', require( '@stdlib/array-base-broadcasted-ternary4d' ) );

/**
* @name bternary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-ternary5d}
*/
setReadOnly( ns, 'bternary5d', require( '@stdlib/array-base-broadcasted-ternary5d' ) );

/**
* @name bunary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary2d}
*/
setReadOnly( ns, 'bunary2d', require( '@stdlib/array-base-broadcasted-unary2d' ) );

/**
* @name bunary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary3d}
*/
setReadOnly( ns, 'bunary3d', require( '@stdlib/array-base-broadcasted-unary3d' ) );

/**
* @name bunary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary4d}
*/
setReadOnly( ns, 'bunary4d', require( '@stdlib/array-base-broadcasted-unary4d' ) );

/**
* @name bunary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/broadcasted-unary5d}
*/
setReadOnly( ns, 'bunary5d', require( '@stdlib/array-base-broadcasted-unary5d' ) );

/**
* @name cartesianPower
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cartesian-power}
*/
setReadOnly( ns, 'cartesianPower', require( '@stdlib/array-base-cartesian-power' ) );

/**
* @name cartesianProduct
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cartesian-product}
*/
setReadOnly( ns, 'cartesianProduct', require( '@stdlib/array-base-cartesian-product' ) );

/**
* @name cartesianSquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cartesian-square}
*/
setReadOnly( ns, 'cartesianSquare', require( '@stdlib/array-base-cartesian-square' ) );

/**
* @name copy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/copy}
*/
setReadOnly( ns, 'copy', require( '@stdlib/array-base-copy' ) );

/**
* @name copyIndexed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/copy-indexed}
*/
setReadOnly( ns, 'copyIndexed', require( '@stdlib/array-base-copy-indexed' ) );

/**
* @name countFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-falsy}
*/
setReadOnly( ns, 'countFalsy', require( '@stdlib/array-base-count-falsy' ) );

/**
* @name countIf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-if}
*/
setReadOnly( ns, 'countIf', require( '@stdlib/array-base-count-if' ) );

/**
* @name countIfs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-ifs}
*/
setReadOnly( ns, 'countIfs', require( '@stdlib/array-base-count-ifs' ) );

/**
* @name countSameValue
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-same-value}
*/
setReadOnly( ns, 'countSameValue', require( '@stdlib/array-base-count-same-value' ) );

/**
* @name countSameValueZero
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-same-value-zero}
*/
setReadOnly( ns, 'countSameValueZero', require( '@stdlib/array-base-count-same-value-zero' ) );

/**
* @name countTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/count-truthy}
*/
setReadOnly( ns, 'countTruthy', require( '@stdlib/array-base-count-truthy' ) );

/**
* @name cuany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cuany}
*/
setReadOnly( ns, 'cuany', require( '@stdlib/array-base-cuany' ) );

/**
* @name cuevery
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cuevery}
*/
setReadOnly( ns, 'cuevery', require( '@stdlib/array-base-cuevery' ) );

/**
* @name cunone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/cunone}
*/
setReadOnly( ns, 'cunone', require( '@stdlib/array-base-cunone' ) );

/**
* @name dedupe
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/dedupe}
*/
setReadOnly( ns, 'dedupe', require( '@stdlib/array-base-dedupe' ) );

/**
* @name every
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/every}
*/
setReadOnly( ns, 'every', require( '@stdlib/array-base-every' ) );

/**
* @name everyBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/every-by}
*/
setReadOnly( ns, 'everyBy', require( '@stdlib/array-base-every-by' ) );

/**
* @name everyByRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/every-by-right}
*/
setReadOnly( ns, 'everyByRight', require( '@stdlib/array-base-every-by-right' ) );

/**
* @name fancySlice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fancy-slice}
*/
setReadOnly( ns, 'fancySlice', require( '@stdlib/array-base-fancy-slice' ) );

/**
* @name fancySliceAssign
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fancy-slice-assign}
*/
setReadOnly( ns, 'fancySliceAssign', require( '@stdlib/array-base-fancy-slice-assign' ) );

/**
* @name fill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fill}
*/
setReadOnly( ns, 'fill', require( '@stdlib/array-base-fill' ) );

/**
* @name fillBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fill-by}
*/
setReadOnly( ns, 'fillBy', require( '@stdlib/array-base-fill-by' ) );

/**
* @name filled
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled}
*/
setReadOnly( ns, 'filled', require( '@stdlib/array-base-filled' ) );

/**
* @name filledBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled-by}
*/
setReadOnly( ns, 'filledBy', require( '@stdlib/array-base-filled-by' ) );

/**
* @name filled2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled2d}
*/
setReadOnly( ns, 'filled2d', require( '@stdlib/array-base-filled2d' ) );

/**
* @name filled2dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled2d-by}
*/
setReadOnly( ns, 'filled2dBy', require( '@stdlib/array-base-filled2d-by' ) );

/**
* @name filled3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled3d}
*/
setReadOnly( ns, 'filled3d', require( '@stdlib/array-base-filled3d' ) );

/**
* @name filled3dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled3d-by}
*/
setReadOnly( ns, 'filled3dBy', require( '@stdlib/array-base-filled3d-by' ) );

/**
* @name filled4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled4d}
*/
setReadOnly( ns, 'filled4d', require( '@stdlib/array-base-filled4d' ) );

/**
* @name filled4dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled4d-by}
*/
setReadOnly( ns, 'filled4dBy', require( '@stdlib/array-base-filled4d-by' ) );

/**
* @name filled5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled5d}
*/
setReadOnly( ns, 'filled5d', require( '@stdlib/array-base-filled5d' ) );

/**
* @name filled5dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filled5d-by}
*/
setReadOnly( ns, 'filled5dBy', require( '@stdlib/array-base-filled5d-by' ) );

/**
* @name fillednd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fillednd}
*/
setReadOnly( ns, 'fillednd', require( '@stdlib/array-base-fillednd' ) );

/**
* @name filledndBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fillednd-by}
*/
setReadOnly( ns, 'filledndBy', require( '@stdlib/array-base-fillednd-by' ) );

/**
* @name filter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/filter}
*/
setReadOnly( ns, 'filter', require( '@stdlib/array-base-filter' ) );

/**
* @name first
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/first}
*/
setReadOnly( ns, 'first', require( '@stdlib/array-base-first' ) );

/**
* @name flatten
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten}
*/
setReadOnly( ns, 'flatten', require( '@stdlib/array-base-flatten' ) );

/**
* @name flattenBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten-by}
*/
setReadOnly( ns, 'flattenBy', require( '@stdlib/array-base-flatten-by' ) );

/**
* @name flatten2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten2d}
*/
setReadOnly( ns, 'flatten2d', require( '@stdlib/array-base-flatten2d' ) );

/**
* @name flatten2dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten2d-by}
*/
setReadOnly( ns, 'flatten2dBy', require( '@stdlib/array-base-flatten2d-by' ) );

/**
* @name flatten3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten3d}
*/
setReadOnly( ns, 'flatten3d', require( '@stdlib/array-base-flatten3d' ) );

/**
* @name flatten3dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten3d-by}
*/
setReadOnly( ns, 'flatten3dBy', require( '@stdlib/array-base-flatten3d-by' ) );

/**
* @name flatten4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten4d}
*/
setReadOnly( ns, 'flatten4d', require( '@stdlib/array-base-flatten4d' ) );

/**
* @name flatten4dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten4d-by}
*/
setReadOnly( ns, 'flatten4dBy', require( '@stdlib/array-base-flatten4d-by' ) );

/**
* @name flatten5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten5d}
*/
setReadOnly( ns, 'flatten5d', require( '@stdlib/array-base-flatten5d' ) );

/**
* @name flatten5dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flatten5d-by}
*/
setReadOnly( ns, 'flatten5dBy', require( '@stdlib/array-base-flatten5d-by' ) );

/**
* @name fliplr2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr2d}
*/
setReadOnly( ns, 'fliplr2d', require( '@stdlib/array-base-fliplr2d' ) );

/**
* @name fliplr3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr3d}
*/
setReadOnly( ns, 'fliplr3d', require( '@stdlib/array-base-fliplr3d' ) );

/**
* @name fliplr4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr4d}
*/
setReadOnly( ns, 'fliplr4d', require( '@stdlib/array-base-fliplr4d' ) );

/**
* @name fliplr5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/fliplr5d}
*/
setReadOnly( ns, 'fliplr5d', require( '@stdlib/array-base-fliplr5d' ) );

/**
* @name flipud2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud2d}
*/
setReadOnly( ns, 'flipud2d', require( '@stdlib/array-base-flipud2d' ) );

/**
* @name flipud3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud3d}
*/
setReadOnly( ns, 'flipud3d', require( '@stdlib/array-base-flipud3d' ) );

/**
* @name flipud4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud4d}
*/
setReadOnly( ns, 'flipud4d', require( '@stdlib/array-base-flipud4d' ) );

/**
* @name flipud5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/flipud5d}
*/
setReadOnly( ns, 'flipud5d', require( '@stdlib/array-base-flipud5d' ) );

/**
* @name strided2array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/from-strided}
*/
setReadOnly( ns, 'strided2array', require( '@stdlib/array-base-from-strided' ) );

/**
* @name getter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/getter}
*/
setReadOnly( ns, 'getter', require( '@stdlib/array-base-getter' ) );

/**
* @name groupEntries
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-entries}
*/
setReadOnly( ns, 'groupEntries', require( '@stdlib/array-base-group-entries' ) );

/**
* @name groupEntriesBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-entries-by}
*/
setReadOnly( ns, 'groupEntriesBy', require( '@stdlib/array-base-group-entries-by' ) );

/**
* @name groupIndices
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-indices}
*/
setReadOnly( ns, 'groupIndices', require( '@stdlib/array-base-group-indices' ) );

/**
* @name groupIndicesBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-indices-by}
*/
setReadOnly( ns, 'groupIndicesBy', require( '@stdlib/array-base-group-indices-by' ) );

/**
* @name groupValues
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-values}
*/
setReadOnly( ns, 'groupValues', require( '@stdlib/array-base-group-values' ) );

/**
* @name groupValuesBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/group-values-by}
*/
setReadOnly( ns, 'groupValuesBy', require( '@stdlib/array-base-group-values-by' ) );

/**
* @name incrspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/incrspace}
*/
setReadOnly( ns, 'incrspace', require( '@stdlib/array-base-incrspace' ) );

/**
* @name indexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/index-of}
*/
setReadOnly( ns, 'indexOf', require( '@stdlib/array-base-index-of' ) );

/**
* @name indexOfSameValue
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/index-of-same-value}
*/
setReadOnly( ns, 'indexOfSameValue', require( '@stdlib/array-base-index-of-same-value' ) );

/**
* @name indicesComplement
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/indices-complement}
*/
setReadOnly( ns, 'indicesComplement', require( '@stdlib/array-base-indices-complement' ) );

/**
* @name join
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/join}
*/
setReadOnly( ns, 'join', require( '@stdlib/array-base-join' ) );

/**
* @name last
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/last}
*/
setReadOnly( ns, 'last', require( '@stdlib/array-base-last' ) );

/**
* @name lastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/last-index-of}
*/
setReadOnly( ns, 'lastIndexOf', require( '@stdlib/array-base-last-index-of' ) );

/**
* @name lastIndexOfSameValue
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/last-index-of-same-value}
*/
setReadOnly( ns, 'lastIndexOfSameValue', require( '@stdlib/array-base-last-index-of-same-value' ) );

/**
* @name linspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/linspace}
*/
setReadOnly( ns, 'linspace', require( '@stdlib/array-base-linspace' ) );

/**
* @name linspace2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/linspace2d}
*/
setReadOnly( ns, 'linspace2d', require( '@stdlib/array-base-linspace2d' ) );

/**
* @name logspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/logspace}
*/
setReadOnly( ns, 'logspace', require( '@stdlib/array-base-logspace' ) );

/**
* @name map2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map2d}
*/
setReadOnly( ns, 'map2d', require( '@stdlib/array-base-map2d' ) );

/**
* @name map3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map3d}
*/
setReadOnly( ns, 'map3d', require( '@stdlib/array-base-map3d' ) );

/**
* @name map4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map4d}
*/
setReadOnly( ns, 'map4d', require( '@stdlib/array-base-map4d' ) );

/**
* @name map5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/map5d}
*/
setReadOnly( ns, 'map5d', require( '@stdlib/array-base-map5d' ) );

/**
* @name minSignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/min-signed-integer-dtype}
*/
setReadOnly( ns, 'minSignedIntegerDataType', require( '@stdlib/array-base-min-signed-integer-dtype' ) );

/**
* @name minUnsignedIntegerDataType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/min-unsigned-integer-dtype}
*/
setReadOnly( ns, 'minUnsignedIntegerDataType', require( '@stdlib/array-base-min-unsigned-integer-dtype' ) );

/**
* @name mskbinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskbinary2d}
*/
setReadOnly( ns, 'mskbinary2d', require( '@stdlib/array-base-mskbinary2d' ) );

/**
* @name mskbinary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskbinary3d}
*/
setReadOnly( ns, 'mskbinary3d', require( '@stdlib/array-base-mskbinary3d' ) );

/**
* @name mskbinary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskbinary4d}
*/
setReadOnly( ns, 'mskbinary4d', require( '@stdlib/array-base-mskbinary4d' ) );

/**
* @name mskbinary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskbinary5d}
*/
setReadOnly( ns, 'mskbinary5d', require( '@stdlib/array-base-mskbinary5d' ) );

/**
* @name mskfilter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskfilter}
*/
setReadOnly( ns, 'mskfilter', require( '@stdlib/array-base-mskfilter' ) );

/**
* @name mskfilterMap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskfilter-map}
*/
setReadOnly( ns, 'mskfilterMap', require( '@stdlib/array-base-mskfilter-map' ) );

/**
* @name mskfilter2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskfilter2}
*/
setReadOnly( ns, 'mskfilter2', require( '@stdlib/array-base-mskfilter2' ) );

/**
* @name mskfiltern
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskfiltern}
*/
setReadOnly( ns, 'mskfiltern', require( '@stdlib/array-base-mskfiltern' ) );

/**
* @name mskput
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskput}
*/
setReadOnly( ns, 'mskput', require( '@stdlib/array-base-mskput' ) );

/**
* @name mskreject
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskreject}
*/
setReadOnly( ns, 'mskreject', require( '@stdlib/array-base-mskreject' ) );

/**
* @name mskunary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskunary2d}
*/
setReadOnly( ns, 'mskunary2d', require( '@stdlib/array-base-mskunary2d' ) );

/**
* @name mskunary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskunary3d}
*/
setReadOnly( ns, 'mskunary3d', require( '@stdlib/array-base-mskunary3d' ) );

/**
* @name mskunary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskunary4d}
*/
setReadOnly( ns, 'mskunary4d', require( '@stdlib/array-base-mskunary4d' ) );

/**
* @name mskunary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/mskunary5d}
*/
setReadOnly( ns, 'mskunary5d', require( '@stdlib/array-base-mskunary5d' ) );

/**
* @name nCartesianProduct
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/n-cartesian-product}
*/
setReadOnly( ns, 'nCartesianProduct', require( '@stdlib/array-base-n-cartesian-product' ) );

/**
* @name none
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/none}
*/
setReadOnly( ns, 'none', require( '@stdlib/array-base-none' ) );

/**
* @name noneBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/none-by}
*/
setReadOnly( ns, 'noneBy', require( '@stdlib/array-base-none-by' ) );

/**
* @name noneByRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/none-by-right}
*/
setReadOnly( ns, 'noneByRight', require( '@stdlib/array-base-none-by-right' ) );

/**
* @name nulls
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/nulls}
*/
setReadOnly( ns, 'nulls', require( '@stdlib/array-base-nulls' ) );

/**
* @name oneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/one-to}
*/
setReadOnly( ns, 'oneTo', require( '@stdlib/array-base-one-to' ) );

/**
* @name ones
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones}
*/
setReadOnly( ns, 'ones', require( '@stdlib/array-base-ones' ) );

/**
* @name ones2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones2d}
*/
setReadOnly( ns, 'ones2d', require( '@stdlib/array-base-ones2d' ) );

/**
* @name ones3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones3d}
*/
setReadOnly( ns, 'ones3d', require( '@stdlib/array-base-ones3d' ) );

/**
* @name ones4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones4d}
*/
setReadOnly( ns, 'ones4d', require( '@stdlib/array-base-ones4d' ) );

/**
* @name ones5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ones5d}
*/
setReadOnly( ns, 'ones5d', require( '@stdlib/array-base-ones5d' ) );

/**
* @name onesnd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/onesnd}
*/
setReadOnly( ns, 'onesnd', require( '@stdlib/array-base-onesnd' ) );

/**
* @name place
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/place}
*/
setReadOnly( ns, 'place', require( '@stdlib/array-base-place' ) );

/**
* @name put
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/put}
*/
setReadOnly( ns, 'put', require( '@stdlib/array-base-put' ) );

/**
* @name quaternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary2d}
*/
setReadOnly( ns, 'quaternary2d', require( '@stdlib/array-base-quaternary2d' ) );

/**
* @name quaternary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary3d}
*/
setReadOnly( ns, 'quaternary3d', require( '@stdlib/array-base-quaternary3d' ) );

/**
* @name quaternary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary4d}
*/
setReadOnly( ns, 'quaternary4d', require( '@stdlib/array-base-quaternary4d' ) );

/**
* @name quaternary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quaternary5d}
*/
setReadOnly( ns, 'quaternary5d', require( '@stdlib/array-base-quaternary5d' ) );

/**
* @name quinary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary2d}
*/
setReadOnly( ns, 'quinary2d', require( '@stdlib/array-base-quinary2d' ) );

/**
* @name quinary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary3d}
*/
setReadOnly( ns, 'quinary3d', require( '@stdlib/array-base-quinary3d' ) );

/**
* @name quinary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary4d}
*/
setReadOnly( ns, 'quinary4d', require( '@stdlib/array-base-quinary4d' ) );

/**
* @name quinary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/quinary5d}
*/
setReadOnly( ns, 'quinary5d', require( '@stdlib/array-base-quinary5d' ) );

/**
* @name reject
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/reject}
*/
setReadOnly( ns, 'reject', require( '@stdlib/array-base-reject' ) );

/**
* @name removeAt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/remove-at}
*/
setReadOnly( ns, 'removeAt', require( '@stdlib/array-base-remove-at' ) );

/**
* @name reshape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/reshape}
*/
setReadOnly( ns, 'reshape', require( '@stdlib/array-base-reshape' ) );

/**
* @name resolveGetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/resolve-getter}
*/
setReadOnly( ns, 'resolveGetter', require( '@stdlib/array-base-resolve-getter' ) );

/**
* @name resolveSetter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/resolve-setter}
*/
setReadOnly( ns, 'resolveSetter', require( '@stdlib/array-base-resolve-setter' ) );

/**
* @name reverse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/reverse}
*/
setReadOnly( ns, 'reverse', require( '@stdlib/array-base-reverse' ) );

/**
* @name scatterFilled
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/scatter-filled}
*/
setReadOnly( ns, 'scatterFilled', require( '@stdlib/array-base-scatter-filled' ) );

/**
* @name scattered
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/scattered}
*/
setReadOnly( ns, 'scattered', require( '@stdlib/array-base-scattered' ) );

/**
* @name setter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/setter}
*/
setReadOnly( ns, 'setter', require( '@stdlib/array-base-setter' ) );

/**
* @name slice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/slice}
*/
setReadOnly( ns, 'slice', require( '@stdlib/array-base-slice' ) );

/**
* @name strided2array2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array2d}
*/
setReadOnly( ns, 'strided2array2d', require( '@stdlib/array-base-strided2array2d' ) );

/**
* @name strided2array3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array3d}
*/
setReadOnly( ns, 'strided2array3d', require( '@stdlib/array-base-strided2array3d' ) );

/**
* @name strided2array4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array4d}
*/
setReadOnly( ns, 'strided2array4d', require( '@stdlib/array-base-strided2array4d' ) );

/**
* @name strided2array5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/strided2array5d}
*/
setReadOnly( ns, 'strided2array5d', require( '@stdlib/array-base-strided2array5d' ) );

/**
* @name symmetric
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/symmetric}
*/
setReadOnly( ns, 'symmetric', require( '@stdlib/array-base-symmetric' ) );

/**
* @name symmetricBanded
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/array/base/symmetric-banded}
*/
setReadOnly( ns, 'symmetricBanded', require( '@stdlib/array-base-symmetric-banded' ) );

/**
* @name take
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take}
*/
setReadOnly( ns, 'take', require( '@stdlib/array-base-take' ) );

/**
* @name takeIndexed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take-indexed}
*/
setReadOnly( ns, 'takeIndexed', require( '@stdlib/array-base-take-indexed' ) );

/**
* @name takeIndexed2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take-indexed2}
*/
setReadOnly( ns, 'takeIndexed2', require( '@stdlib/array-base-take-indexed2' ) );

/**
* @name take2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take2d}
*/
setReadOnly( ns, 'take2d', require( '@stdlib/array-base-take2d' ) );

/**
* @name take3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/take3d}
*/
setReadOnly( ns, 'take3d', require( '@stdlib/array-base-take3d' ) );

/**
* @name ternary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary2d}
*/
setReadOnly( ns, 'ternary2d', require( '@stdlib/array-base-ternary2d' ) );

/**
* @name ternary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary3d}
*/
setReadOnly( ns, 'ternary3d', require( '@stdlib/array-base-ternary3d' ) );

/**
* @name ternary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary4d}
*/
setReadOnly( ns, 'ternary4d', require( '@stdlib/array-base-ternary4d' ) );

/**
* @name ternary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/ternary5d}
*/
setReadOnly( ns, 'ternary5d', require( '@stdlib/array-base-ternary5d' ) );

/**
* @name toAccessorArray
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/to-accessor-array}
*/
setReadOnly( ns, 'toAccessorArray', require( '@stdlib/array-base-to-accessor-array' ) );

/**
* @name toDeduped
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/to-deduped}
*/
setReadOnly( ns, 'toDeduped', require( '@stdlib/array-base-to-deduped' ) );

/**
* @name toReversed
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/to-reversed}
*/
setReadOnly( ns, 'toReversed', require( '@stdlib/array-base-to-reversed' ) );

/**
* @name unary2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary2d}
*/
setReadOnly( ns, 'unary2d', require( '@stdlib/array-base-unary2d' ) );

/**
* @name unary2dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary2d-by}
*/
setReadOnly( ns, 'unary2dBy', require( '@stdlib/array-base-unary2d-by' ) );

/**
* @name unary3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary3d}
*/
setReadOnly( ns, 'unary3d', require( '@stdlib/array-base-unary3d' ) );

/**
* @name unary3dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary3d-by}
*/
setReadOnly( ns, 'unary3dBy', require( '@stdlib/array-base-unary3d-by' ) );

/**
* @name unary4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary4d}
*/
setReadOnly( ns, 'unary4d', require( '@stdlib/array-base-unary4d' ) );

/**
* @name unary4dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary4d-by}
*/
setReadOnly( ns, 'unary4dBy', require( '@stdlib/array-base-unary4d-by' ) );

/**
* @name unary5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary5d}
*/
setReadOnly( ns, 'unary5d', require( '@stdlib/array-base-unary5d' ) );

/**
* @name unary5dBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unary5d-by}
*/
setReadOnly( ns, 'unary5dBy', require( '@stdlib/array-base-unary5d-by' ) );

/**
* @name unarynd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unarynd}
*/
setReadOnly( ns, 'unarynd', require( '@stdlib/array-base-unarynd' ) );

/**
* @name unitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/unitspace}
*/
setReadOnly( ns, 'unitspace', require( '@stdlib/array-base-unitspace' ) );

/**
* @name where
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/where}
*/
setReadOnly( ns, 'where', require( '@stdlib/array-base-where' ) );

/**
* @name arrayWith
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/with}
*/
setReadOnly( ns, 'arrayWith', require( '@stdlib/array-base-with' ) );

/**
* @name without
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/without}
*/
setReadOnly( ns, 'without', require( '@stdlib/array-base-without' ) );

/**
* @name zeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zero-to}
*/
setReadOnly( ns, 'zeroTo', require( '@stdlib/array-base-zero-to' ) );

/**
* @name zeros
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros}
*/
setReadOnly( ns, 'zeros', require( '@stdlib/array-base-zeros' ) );

/**
* @name zeros2d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros2d}
*/
setReadOnly( ns, 'zeros2d', require( '@stdlib/array-base-zeros2d' ) );

/**
* @name zeros3d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros3d}
*/
setReadOnly( ns, 'zeros3d', require( '@stdlib/array-base-zeros3d' ) );

/**
* @name zeros4d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros4d}
*/
setReadOnly( ns, 'zeros4d', require( '@stdlib/array-base-zeros4d' ) );

/**
* @name zeros5d
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zeros5d}
*/
setReadOnly( ns, 'zeros5d', require( '@stdlib/array-base-zeros5d' ) );

/**
* @name zerosnd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/array/base/zerosnd}
*/
setReadOnly( ns, 'zerosnd', require( '@stdlib/array-base-zerosnd' ) );


// EXPORTS //

module.exports = ns;
