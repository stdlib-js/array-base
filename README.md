<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# base

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) array utilities.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { AccessorArray, accessorGetter, accessorSetter, accessors, arraylike2object, assert, bbinary2d, bbinary3d, bbinary4d, bbinary5d, bifurcateEntries, bifurcateIndices, bifurcateIndicesBy, bifurcateValues, bifurcateValuesBy, binary2d, binary3d, binary4d, binary5d, binarynd, bquaternary2d, bquinary2d, broadcastArray, bternary2d, bunary2d, bunary3d, bunary4d, bunary5d, cartesianPower, cartesianProduct, cartesianSquare, copy, copyIndexed, dedupe, filled, filled2d, filled2dBy, filled3d, filled3dBy, filled4d, filled4dBy, filled5d, filled5dBy, filledBy, fillednd, filledndBy, first, flatten, flatten2d, flatten2dBy, flatten3d, flatten3dBy, flatten4d, flatten4dBy, flatten5d, flatten5dBy, flattenBy, fliplr2d, fliplr3d, fliplr4d, fliplr5d, flipud2d, flipud3d, flipud4d, flipud5d, getter, groupEntries, groupEntriesBy, groupIndices, groupIndicesBy, groupValues, groupValuesBy, incrspace, indexOf, last, lastIndexOf, linspace, logspace, map2d, map3d, map4d, map5d, mskbinary2d, mskunary2d, mskunary3d, nCartesianProduct, oneTo, ones, ones2d, ones3d, ones4d, ones5d, onesnd, quaternary2d, quaternary3d, quaternary4d, quaternary5d, quinary2d, quinary3d, quinary4d, quinary5d, resolveGetter, setter, slice, strided2array, strided2array2d, strided2array3d, strided2array4d, strided2array5d, take, take2d, take3d, takeIndexed, ternary2d, ternary3d, ternary4d, ternary5d, toAccessorArray, toDeduped, unary2d, unary2dBy, unary3d, unary4d, unary5d, unarynd, unitspace, zeroTo, zeros, zeros2d, zeros3d, zeros4d, zeros5d, zerosnd } from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base@esm/index.mjs';
```

#### ns

Array utilities.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`accessorGetter( dtype )`][@stdlib/array/base/accessor-getter]</span><span class="delimiter">: </span><span class="description">return an accessor function for retrieving an element from an array-like object supporting the get/set protocol.</span>
-   <span class="signature">[`accessorSetter( dtype )`][@stdlib/array/base/accessor-setter]</span><span class="delimiter">: </span><span class="description">return an accessor function for setting an element in an array-like object supporting the get/set protocol.</span>
-   <span class="signature">[`AccessorArray( arr )`][@stdlib/array/base/accessor]</span><span class="delimiter">: </span><span class="description">create a minimal array-like object supporting the accessor protocol from another array-like object.</span>
-   <span class="signature">[`accessors( x )`][@stdlib/array/base/accessors]</span><span class="delimiter">: </span><span class="description">return element accessors for a provided array-like object.</span>
-   <span class="signature">[`arraylike2object( x )`][@stdlib/array/base/arraylike2object]</span><span class="delimiter">: </span><span class="description">convert an array-like object to an object likely to have the same "shape".</span>
-   <span class="signature">[`assert`][@stdlib/array/base/assert]</span><span class="delimiter">: </span><span class="description">base array assertion utilities.</span>
-   <span class="signature">[`bifurcateEntries( x, filter )`][@stdlib/array/base/bifurcate-entries]</span><span class="delimiter">: </span><span class="description">split array element entries into two groups.</span>
-   <span class="signature">[`bifurcateIndices( x, filter )`][@stdlib/array/base/bifurcate-indices]</span><span class="delimiter">: </span><span class="description">split array element indices into two groups.</span>
-   <span class="signature">[`bifurcateValues( x, filter )`][@stdlib/array/base/bifurcate-values]</span><span class="delimiter">: </span><span class="description">split array element values into two groups.</span>
-   <span class="signature">[`binary2d( arrays, shape, fcn )`][@stdlib/array/base/binary2d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`binary3d( arrays, shape, fcn )`][@stdlib/array/base/binary3d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`binary4d( arrays, shape, fcn )`][@stdlib/array/base/binary4d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`binary5d( arrays, shape, fcn )`][@stdlib/array/base/binary5d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`binarynd( arrays, shape, fcn )`][@stdlib/array/base/binarynd]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two n-dimensional nested input arrays and assign results to elements in an n-dimensional nested output array.</span>
-   <span class="signature">[`broadcastArray( x, inShape, outShape )`][@stdlib/array/base/broadcast-array]</span><span class="delimiter">: </span><span class="description">broadcast an array to a specified shape.</span>
-   <span class="signature">[`bbinary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-binary2d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two broadcasted nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bbinary3d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-binary3d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two broadcasted nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`bbinary4d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-binary4d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two broadcasted nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`bbinary5d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-binary5d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two broadcasted nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`bquaternary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-quaternary2d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four broadcasted nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bquinary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-quinary2d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in four broadcasted nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bternary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-ternary2d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three broadcasted nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bunary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary2d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bunary3d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary3d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`bunary4d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary4d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`bunary5d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary5d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`cartesianPower( x, n )`][@stdlib/array/base/cartesian-power]</span><span class="delimiter">: </span><span class="description">return the Cartesian power.</span>
-   <span class="signature">[`cartesianProduct( x1, x2 )`][@stdlib/array/base/cartesian-product]</span><span class="delimiter">: </span><span class="description">return the Cartesian product.</span>
-   <span class="signature">[`cartesianSquare( x )`][@stdlib/array/base/cartesian-square]</span><span class="delimiter">: </span><span class="description">return the Cartesian square.</span>
-   <span class="signature">[`copyIndexed( x )`][@stdlib/array/base/copy-indexed]</span><span class="delimiter">: </span><span class="description">copy the elements of an indexed array-like object to a new "generic" array.</span>
-   <span class="signature">[`copy( x )`][@stdlib/array/base/copy]</span><span class="delimiter">: </span><span class="description">copy the elements of an array-like object to a new "generic" array.</span>
-   <span class="signature">[`dedupe( x, limit, equalNaNs )`][@stdlib/array/base/dedupe]</span><span class="delimiter">: </span><span class="description">remove consecutive duplicated values.</span>
-   <span class="signature">[`filledBy( len, clbk[, thisArg] )`][@stdlib/array/base/filled-by]</span><span class="delimiter">: </span><span class="description">create a filled "generic" array according to a provided callback function.</span>
-   <span class="signature">[`filled( value, len )`][@stdlib/array/base/filled]</span><span class="delimiter">: </span><span class="description">create a filled "generic" array.</span>
-   <span class="signature">[`filled2dBy( shape, clbk[, thisArg] )`][@stdlib/array/base/filled2d-by]</span><span class="delimiter">: </span><span class="description">create a filled two-dimensional nested array according to a provided callback function.</span>
-   <span class="signature">[`filled2d( value, shape )`][@stdlib/array/base/filled2d]</span><span class="delimiter">: </span><span class="description">create a filled two-dimensional nested array.</span>
-   <span class="signature">[`filled3dBy( shape, clbk[, thisArg] )`][@stdlib/array/base/filled3d-by]</span><span class="delimiter">: </span><span class="description">create a filled three-dimensional nested array according to a provided callback function.</span>
-   <span class="signature">[`filled3d( value, shape )`][@stdlib/array/base/filled3d]</span><span class="delimiter">: </span><span class="description">create a filled three-dimensional nested array.</span>
-   <span class="signature">[`filled4dBy( shape, clbk[, thisArg] )`][@stdlib/array/base/filled4d-by]</span><span class="delimiter">: </span><span class="description">create a filled four-dimensional nested array according to a provided callback function.</span>
-   <span class="signature">[`filled4d( value, shape )`][@stdlib/array/base/filled4d]</span><span class="delimiter">: </span><span class="description">create a filled four-dimensional nested array.</span>
-   <span class="signature">[`filled5dBy( shape, clbk[, thisArg] )`][@stdlib/array/base/filled5d-by]</span><span class="delimiter">: </span><span class="description">create a filled five-dimensional nested array according to a provided callback function.</span>
-   <span class="signature">[`filled5d( value, shape )`][@stdlib/array/base/filled5d]</span><span class="delimiter">: </span><span class="description">create a filled five-dimensional nested array.</span>
-   <span class="signature">[`filledndBy( shape, clbk[, thisArg] )`][@stdlib/array/base/fillednd-by]</span><span class="delimiter">: </span><span class="description">create a filled n-dimensional nested array according to a provided callback function.</span>
-   <span class="signature">[`fillednd( value, shape )`][@stdlib/array/base/fillednd]</span><span class="delimiter">: </span><span class="description">create a filled n-dimensional nested array.</span>
-   <span class="signature">[`first( x )`][@stdlib/array/base/first]</span><span class="delimiter">: </span><span class="description">return the first element of an array-like object.</span>
-   <span class="signature">[`flattenBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten-by]</span><span class="delimiter">: </span><span class="description">flatten an n-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten( x, shape, colexicographic )`][@stdlib/array/base/flatten]</span><span class="delimiter">: </span><span class="description">flatten an n-dimensional nested array.</span>
-   <span class="signature">[`flatten2dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten2d-by]</span><span class="delimiter">: </span><span class="description">flatten a two-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten2d( x, shape, colexicographic )`][@stdlib/array/base/flatten2d]</span><span class="delimiter">: </span><span class="description">flatten a two-dimensional nested array.</span>
-   <span class="signature">[`flatten3dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten3d-by]</span><span class="delimiter">: </span><span class="description">flatten a three-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten3d( x, shape, colexicographic )`][@stdlib/array/base/flatten3d]</span><span class="delimiter">: </span><span class="description">flatten a three-dimensional nested array.</span>
-   <span class="signature">[`flatten4dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten4d-by]</span><span class="delimiter">: </span><span class="description">flatten a four-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten4d( x, shape, colexicographic )`][@stdlib/array/base/flatten4d]</span><span class="delimiter">: </span><span class="description">flatten a four-dimensional nested array.</span>
-   <span class="signature">[`flatten5dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten5d-by]</span><span class="delimiter">: </span><span class="description">flatten a five-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten5d( x, shape, colexicographic )`][@stdlib/array/base/flatten5d]</span><span class="delimiter">: </span><span class="description">flatten a five-dimensional nested array.</span>
-   <span class="signature">[`fliplr2d( x )`][@stdlib/array/base/fliplr2d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a two-dimensional nested input array.</span>
-   <span class="signature">[`fliplr3d( x )`][@stdlib/array/base/fliplr3d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a three-dimensional nested input array.</span>
-   <span class="signature">[`fliplr4d( x )`][@stdlib/array/base/fliplr4d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a four-dimensional nested input array.</span>
-   <span class="signature">[`fliplr5d( x )`][@stdlib/array/base/fliplr5d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the last dimension of a five-dimensional nested input array.</span>
-   <span class="signature">[`flipud2d( x )`][@stdlib/array/base/flipud2d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the first dimension of a two-dimensional nested input array.</span>
-   <span class="signature">[`flipud3d( x )`][@stdlib/array/base/flipud3d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the second-to-last dimension of a three-dimensional nested input array.</span>
-   <span class="signature">[`flipud4d( x )`][@stdlib/array/base/flipud4d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the second-to-last dimension of a four-dimensional nested input array.</span>
-   <span class="signature">[`flipud5d( x )`][@stdlib/array/base/flipud5d]</span><span class="delimiter">: </span><span class="description">reverse the order of elements along the second-to-last dimension of a five-dimensional nested input array.</span>
-   <span class="signature">[`strided2array( N, x, stride, offset )`][@stdlib/array/base/from-strided]</span><span class="delimiter">: </span><span class="description">convert a strided array to a non-strided generic array.</span>
-   <span class="signature">[`getter( dtype )`][@stdlib/array/base/getter]</span><span class="delimiter">: </span><span class="description">return an accessor function for retrieving an element from an indexed array-like object.</span>
-   <span class="signature">[`groupEntries( x, groups )`][@stdlib/array/base/group-entries]</span><span class="delimiter">: </span><span class="description">group element entries as arrays associated with distinct keys.</span>
-   <span class="signature">[`groupIndices( x, groups )`][@stdlib/array/base/group-indices]</span><span class="delimiter">: </span><span class="description">group element indices as arrays associated with distinct keys.</span>
-   <span class="signature">[`groupValues( x, groups )`][@stdlib/array/base/group-values]</span><span class="delimiter">: </span><span class="description">group elements as arrays associated with distinct keys.</span>
-   <span class="signature">[`incrspace( start, stop, increment )`][@stdlib/array/base/incrspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array according to a provided increment.</span>
-   <span class="signature">[`indexOf( x, searchElement, fromIndex, equalNaNs )`][@stdlib/array/base/index-of]</span><span class="delimiter">: </span><span class="description">return the index of the first element which equals a provided search element.</span>
-   <span class="signature">[`lastIndexOf( x, searchElement, fromIndex, equalNaNs )`][@stdlib/array/base/last-index-of]</span><span class="delimiter">: </span><span class="description">return the index of the last element which equals a provided search element.</span>
-   <span class="signature">[`last( x )`][@stdlib/array/base/last]</span><span class="delimiter">: </span><span class="description">return the last element of an array-like object.</span>
-   <span class="signature">[`linspace( start, stop, length )`][@stdlib/array/base/linspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array.</span>
-   <span class="signature">[`logspace( a, b, length )`][@stdlib/array/base/logspace]</span><span class="delimiter">: </span><span class="description">generate a logarithmically spaced numeric array.</span>
-   <span class="signature">[`map2d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map2d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a two-dimensional nested input array and assign results to elements in a new two-dimensional nested output array.</span>
-   <span class="signature">[`map3d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map3d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a three-dimensional nested input array and assign results to elements in a new three-dimensional nested output array.</span>
-   <span class="signature">[`map4d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map4d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a four-dimensional nested input array and assign results to elements in a new four-dimensional nested output array.</span>
-   <span class="signature">[`map5d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map5d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a five-dimensional nested input array and assign results to elements in a new five-dimensional nested output array.</span>
-   <span class="signature">[`mskbinary2d( arrays, shape, fcn )`][@stdlib/array/base/mskbinary2d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two two-dimensional nested input arrays according to elements in a two-dimensional nested mask array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`mskunary2d( arrays, shape, fcn )`][@stdlib/array/base/mskunary2d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a two-dimensional nested input array according to elements in a two-dimensional nested mask array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`mskunary3d( arrays, shape, fcn )`][@stdlib/array/base/mskunary3d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a three-dimensional nested input array according to elements in a three-dimensional nested mask array and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`nCartesianProduct( x1, x2[, ...xN] )`][@stdlib/array/base/n-cartesian-product]</span><span class="delimiter">: </span><span class="description">return the n-fold Cartesian product.</span>
-   <span class="signature">[`oneTo( n )`][@stdlib/array/base/one-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from one.</span>
-   <span class="signature">[`ones( len )`][@stdlib/array/base/ones]</span><span class="delimiter">: </span><span class="description">create a "generic" array filled with ones.</span>
-   <span class="signature">[`ones2d( shape )`][@stdlib/array/base/ones2d]</span><span class="delimiter">: </span><span class="description">create a two-dimensional nested array filled with ones.</span>
-   <span class="signature">[`ones3d( shape )`][@stdlib/array/base/ones3d]</span><span class="delimiter">: </span><span class="description">create a three-dimensional nested array filled with ones.</span>
-   <span class="signature">[`ones4d( shape )`][@stdlib/array/base/ones4d]</span><span class="delimiter">: </span><span class="description">create a four-dimensional nested array filled with ones.</span>
-   <span class="signature">[`ones5d( shape )`][@stdlib/array/base/ones5d]</span><span class="delimiter">: </span><span class="description">create a five-dimensional nested array filled with ones.</span>
-   <span class="signature">[`onesnd( shape )`][@stdlib/array/base/onesnd]</span><span class="delimiter">: </span><span class="description">create an n-dimensional nested array filled with ones.</span>
-   <span class="signature">[`quaternary2d( arrays, shape, fcn )`][@stdlib/array/base/quaternary2d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`quaternary3d( arrays, shape, fcn )`][@stdlib/array/base/quaternary3d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`quaternary4d( arrays, shape, fcn )`][@stdlib/array/base/quaternary4d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`quaternary5d( arrays, shape, fcn )`][@stdlib/array/base/quaternary5d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`quinary2d( arrays, shape, fcn )`][@stdlib/array/base/quinary2d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`quinary3d( arrays, shape, fcn )`][@stdlib/array/base/quinary3d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`quinary4d( arrays, shape, fcn )`][@stdlib/array/base/quinary4d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`quinary5d( arrays, shape, fcn )`][@stdlib/array/base/quinary5d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`resolveGetter( x )`][@stdlib/array/base/resolve-getter]</span><span class="delimiter">: </span><span class="description">return an accessor function for retrieving an element from an array-like object.</span>
-   <span class="signature">[`setter( dtype )`][@stdlib/array/base/setter]</span><span class="delimiter">: </span><span class="description">return an accessor function for setting an element in an indexed array-like object.</span>
-   <span class="signature">[`slice( x, start, end )`][@stdlib/array/base/slice]</span><span class="delimiter">: </span><span class="description">return a shallow copy of a portion of an array.</span>
-   <span class="signature">[`strided2array2d( x, shape, strides, offset )`][@stdlib/array/base/strided2array2d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a two-dimensional nested array.</span>
-   <span class="signature">[`strided2array3d( x, shape, strides, offset )`][@stdlib/array/base/strided2array3d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a three-dimensional nested array.</span>
-   <span class="signature">[`strided2array4d( x, shape, strides, offset )`][@stdlib/array/base/strided2array4d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a four-dimensional nested array.</span>
-   <span class="signature">[`strided2array5d( x, shape, strides, offset )`][@stdlib/array/base/strided2array5d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a five-dimensional nested array.</span>
-   <span class="signature">[`takeIndexed( x, indices )`][@stdlib/array/base/take-indexed]</span><span class="delimiter">: </span><span class="description">take elements from an indexed array.</span>
-   <span class="signature">[`take( x, indices )`][@stdlib/array/base/take]</span><span class="delimiter">: </span><span class="description">take elements from an array.</span>
-   <span class="signature">[`take2d( x, indices, dimension, mode )`][@stdlib/array/base/take2d]</span><span class="delimiter">: </span><span class="description">take elements from a two-dimensional nested array.</span>
-   <span class="signature">[`take3d( x, indices, dimension, mode )`][@stdlib/array/base/take3d]</span><span class="delimiter">: </span><span class="description">take elements from a three-dimensional nested array.</span>
-   <span class="signature">[`ternary2d( arrays, shape, fcn )`][@stdlib/array/base/ternary2d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`ternary3d( arrays, shape, fcn )`][@stdlib/array/base/ternary3d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`ternary4d( arrays, shape, fcn )`][@stdlib/array/base/ternary4d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`ternary5d( arrays, shape, fcn )`][@stdlib/array/base/ternary5d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`toAccessorArray( arr )`][@stdlib/array/base/to-accessor-array]</span><span class="delimiter">: </span><span class="description">convert an array-like object to a minimal array-like object supporting the accessor protocol.</span>
-   <span class="signature">[`toDeduped( x, limit, equalNaNs )`][@stdlib/array/base/to-deduped]</span><span class="delimiter">: </span><span class="description">copy elements to a new "generic" array after removing consecutive duplicated values.</span>
-   <span class="signature">[`unary2dBy( arrays, shape, fcn, clbk[, thisArg] )`][@stdlib/array/base/unary2d-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element retrieved from a two-dimensional nested input array according to a callback function and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`unary2d( arrays, shape, fcn )`][@stdlib/array/base/unary2d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a two-dimensional nested input array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`unary3d( arrays, shape, fcn )`][@stdlib/array/base/unary3d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a three-dimensional nested input array and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`unary4d( arrays, shape, fcn )`][@stdlib/array/base/unary4d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a four-dimensional nested input array and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`unary5d( arrays, shape, fcn )`][@stdlib/array/base/unary5d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a five-dimensional nested input array and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`unarynd( arrays, shape, fcn )`][@stdlib/array/base/unarynd]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in an n-dimensional nested input array and assign results to elements in an n-dimensional nested output array.</span>
-   <span class="signature">[`unitspace( start, stop )`][@stdlib/array/base/unitspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1.</span>
-   <span class="signature">[`zeroTo( n )`][@stdlib/array/base/zero-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from zero.</span>
-   <span class="signature">[`zeros( len )`][@stdlib/array/base/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled "generic" array.</span>
-   <span class="signature">[`zeros2d( shape )`][@stdlib/array/base/zeros2d]</span><span class="delimiter">: </span><span class="description">create a zero-filled two-dimensional nested array.</span>
-   <span class="signature">[`zeros3d( shape )`][@stdlib/array/base/zeros3d]</span><span class="delimiter">: </span><span class="description">create a zero-filled three-dimensional nested array.</span>
-   <span class="signature">[`zeros4d( shape )`][@stdlib/array/base/zeros4d]</span><span class="delimiter">: </span><span class="description">create a zero-filled four-dimensional nested array.</span>
-   <span class="signature">[`zeros5d( shape )`][@stdlib/array/base/zeros5d]</span><span class="delimiter">: </span><span class="description">create a zero-filled five-dimensional nested array.</span>
-   <span class="signature">[`zerosnd( shape )`][@stdlib/array/base/zerosnd]</span><span class="delimiter">: </span><span class="description">create a zero-filled n-dimensional nested array.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base

[test-image]: https://github.com/stdlib-js/array-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/array/base/accessor-getter]: https://github.com/stdlib-js/array-base-accessor-getter/tree/esm

[@stdlib/array/base/accessor-setter]: https://github.com/stdlib-js/array-base-accessor-setter/tree/esm

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/esm

[@stdlib/array/base/accessors]: https://github.com/stdlib-js/array-base-accessors/tree/esm

[@stdlib/array/base/arraylike2object]: https://github.com/stdlib-js/array-base-arraylike2object/tree/esm

[@stdlib/array/base/assert]: https://github.com/stdlib-js/array-base-assert/tree/esm

[@stdlib/array/base/bifurcate-entries]: https://github.com/stdlib-js/array-base-bifurcate-entries/tree/esm

[@stdlib/array/base/bifurcate-indices]: https://github.com/stdlib-js/array-base-bifurcate-indices/tree/esm

[@stdlib/array/base/bifurcate-values]: https://github.com/stdlib-js/array-base-bifurcate-values/tree/esm

[@stdlib/array/base/binary2d]: https://github.com/stdlib-js/array-base-binary2d/tree/esm

[@stdlib/array/base/binary3d]: https://github.com/stdlib-js/array-base-binary3d/tree/esm

[@stdlib/array/base/binary4d]: https://github.com/stdlib-js/array-base-binary4d/tree/esm

[@stdlib/array/base/binary5d]: https://github.com/stdlib-js/array-base-binary5d/tree/esm

[@stdlib/array/base/binarynd]: https://github.com/stdlib-js/array-base-binarynd/tree/esm

[@stdlib/array/base/broadcast-array]: https://github.com/stdlib-js/array-base-broadcast-array/tree/esm

[@stdlib/array/base/broadcasted-binary2d]: https://github.com/stdlib-js/array-base-broadcasted-binary2d/tree/esm

[@stdlib/array/base/broadcasted-binary3d]: https://github.com/stdlib-js/array-base-broadcasted-binary3d/tree/esm

[@stdlib/array/base/broadcasted-binary4d]: https://github.com/stdlib-js/array-base-broadcasted-binary4d/tree/esm

[@stdlib/array/base/broadcasted-binary5d]: https://github.com/stdlib-js/array-base-broadcasted-binary5d/tree/esm

[@stdlib/array/base/broadcasted-quaternary2d]: https://github.com/stdlib-js/array-base-broadcasted-quaternary2d/tree/esm

[@stdlib/array/base/broadcasted-quinary2d]: https://github.com/stdlib-js/array-base-broadcasted-quinary2d/tree/esm

[@stdlib/array/base/broadcasted-ternary2d]: https://github.com/stdlib-js/array-base-broadcasted-ternary2d/tree/esm

[@stdlib/array/base/broadcasted-unary2d]: https://github.com/stdlib-js/array-base-broadcasted-unary2d/tree/esm

[@stdlib/array/base/broadcasted-unary3d]: https://github.com/stdlib-js/array-base-broadcasted-unary3d/tree/esm

[@stdlib/array/base/broadcasted-unary4d]: https://github.com/stdlib-js/array-base-broadcasted-unary4d/tree/esm

[@stdlib/array/base/broadcasted-unary5d]: https://github.com/stdlib-js/array-base-broadcasted-unary5d/tree/esm

[@stdlib/array/base/cartesian-power]: https://github.com/stdlib-js/array-base-cartesian-power/tree/esm

[@stdlib/array/base/cartesian-product]: https://github.com/stdlib-js/array-base-cartesian-product/tree/esm

[@stdlib/array/base/cartesian-square]: https://github.com/stdlib-js/array-base-cartesian-square/tree/esm

[@stdlib/array/base/copy-indexed]: https://github.com/stdlib-js/array-base-copy-indexed/tree/esm

[@stdlib/array/base/copy]: https://github.com/stdlib-js/array-base-copy/tree/esm

[@stdlib/array/base/dedupe]: https://github.com/stdlib-js/array-base-dedupe/tree/esm

[@stdlib/array/base/filled-by]: https://github.com/stdlib-js/array-base-filled-by/tree/esm

[@stdlib/array/base/filled]: https://github.com/stdlib-js/array-base-filled/tree/esm

[@stdlib/array/base/filled2d-by]: https://github.com/stdlib-js/array-base-filled2d-by/tree/esm

[@stdlib/array/base/filled2d]: https://github.com/stdlib-js/array-base-filled2d/tree/esm

[@stdlib/array/base/filled3d-by]: https://github.com/stdlib-js/array-base-filled3d-by/tree/esm

[@stdlib/array/base/filled3d]: https://github.com/stdlib-js/array-base-filled3d/tree/esm

[@stdlib/array/base/filled4d-by]: https://github.com/stdlib-js/array-base-filled4d-by/tree/esm

[@stdlib/array/base/filled4d]: https://github.com/stdlib-js/array-base-filled4d/tree/esm

[@stdlib/array/base/filled5d-by]: https://github.com/stdlib-js/array-base-filled5d-by/tree/esm

[@stdlib/array/base/filled5d]: https://github.com/stdlib-js/array-base-filled5d/tree/esm

[@stdlib/array/base/fillednd-by]: https://github.com/stdlib-js/array-base-fillednd-by/tree/esm

[@stdlib/array/base/fillednd]: https://github.com/stdlib-js/array-base-fillednd/tree/esm

[@stdlib/array/base/first]: https://github.com/stdlib-js/array-base-first/tree/esm

[@stdlib/array/base/flatten-by]: https://github.com/stdlib-js/array-base-flatten-by/tree/esm

[@stdlib/array/base/flatten]: https://github.com/stdlib-js/array-base-flatten/tree/esm

[@stdlib/array/base/flatten2d-by]: https://github.com/stdlib-js/array-base-flatten2d-by/tree/esm

[@stdlib/array/base/flatten2d]: https://github.com/stdlib-js/array-base-flatten2d/tree/esm

[@stdlib/array/base/flatten3d-by]: https://github.com/stdlib-js/array-base-flatten3d-by/tree/esm

[@stdlib/array/base/flatten3d]: https://github.com/stdlib-js/array-base-flatten3d/tree/esm

[@stdlib/array/base/flatten4d-by]: https://github.com/stdlib-js/array-base-flatten4d-by/tree/esm

[@stdlib/array/base/flatten4d]: https://github.com/stdlib-js/array-base-flatten4d/tree/esm

[@stdlib/array/base/flatten5d-by]: https://github.com/stdlib-js/array-base-flatten5d-by/tree/esm

[@stdlib/array/base/flatten5d]: https://github.com/stdlib-js/array-base-flatten5d/tree/esm

[@stdlib/array/base/fliplr2d]: https://github.com/stdlib-js/array-base-fliplr2d/tree/esm

[@stdlib/array/base/fliplr3d]: https://github.com/stdlib-js/array-base-fliplr3d/tree/esm

[@stdlib/array/base/fliplr4d]: https://github.com/stdlib-js/array-base-fliplr4d/tree/esm

[@stdlib/array/base/fliplr5d]: https://github.com/stdlib-js/array-base-fliplr5d/tree/esm

[@stdlib/array/base/flipud2d]: https://github.com/stdlib-js/array-base-flipud2d/tree/esm

[@stdlib/array/base/flipud3d]: https://github.com/stdlib-js/array-base-flipud3d/tree/esm

[@stdlib/array/base/flipud4d]: https://github.com/stdlib-js/array-base-flipud4d/tree/esm

[@stdlib/array/base/flipud5d]: https://github.com/stdlib-js/array-base-flipud5d/tree/esm

[@stdlib/array/base/from-strided]: https://github.com/stdlib-js/array-base-from-strided/tree/esm

[@stdlib/array/base/getter]: https://github.com/stdlib-js/array-base-getter/tree/esm

[@stdlib/array/base/group-entries]: https://github.com/stdlib-js/array-base-group-entries/tree/esm

[@stdlib/array/base/group-indices]: https://github.com/stdlib-js/array-base-group-indices/tree/esm

[@stdlib/array/base/group-values]: https://github.com/stdlib-js/array-base-group-values/tree/esm

[@stdlib/array/base/incrspace]: https://github.com/stdlib-js/array-base-incrspace/tree/esm

[@stdlib/array/base/index-of]: https://github.com/stdlib-js/array-base-index-of/tree/esm

[@stdlib/array/base/last-index-of]: https://github.com/stdlib-js/array-base-last-index-of/tree/esm

[@stdlib/array/base/last]: https://github.com/stdlib-js/array-base-last/tree/esm

[@stdlib/array/base/linspace]: https://github.com/stdlib-js/array-base-linspace/tree/esm

[@stdlib/array/base/logspace]: https://github.com/stdlib-js/array-base-logspace/tree/esm

[@stdlib/array/base/map2d]: https://github.com/stdlib-js/array-base-map2d/tree/esm

[@stdlib/array/base/map3d]: https://github.com/stdlib-js/array-base-map3d/tree/esm

[@stdlib/array/base/map4d]: https://github.com/stdlib-js/array-base-map4d/tree/esm

[@stdlib/array/base/map5d]: https://github.com/stdlib-js/array-base-map5d/tree/esm

[@stdlib/array/base/mskbinary2d]: https://github.com/stdlib-js/array-base-mskbinary2d/tree/esm

[@stdlib/array/base/mskunary2d]: https://github.com/stdlib-js/array-base-mskunary2d/tree/esm

[@stdlib/array/base/mskunary3d]: https://github.com/stdlib-js/array-base-mskunary3d/tree/esm

[@stdlib/array/base/n-cartesian-product]: https://github.com/stdlib-js/array-base-n-cartesian-product/tree/esm

[@stdlib/array/base/one-to]: https://github.com/stdlib-js/array-base-one-to/tree/esm

[@stdlib/array/base/ones]: https://github.com/stdlib-js/array-base-ones/tree/esm

[@stdlib/array/base/ones2d]: https://github.com/stdlib-js/array-base-ones2d/tree/esm

[@stdlib/array/base/ones3d]: https://github.com/stdlib-js/array-base-ones3d/tree/esm

[@stdlib/array/base/ones4d]: https://github.com/stdlib-js/array-base-ones4d/tree/esm

[@stdlib/array/base/ones5d]: https://github.com/stdlib-js/array-base-ones5d/tree/esm

[@stdlib/array/base/onesnd]: https://github.com/stdlib-js/array-base-onesnd/tree/esm

[@stdlib/array/base/quaternary2d]: https://github.com/stdlib-js/array-base-quaternary2d/tree/esm

[@stdlib/array/base/quaternary3d]: https://github.com/stdlib-js/array-base-quaternary3d/tree/esm

[@stdlib/array/base/quaternary4d]: https://github.com/stdlib-js/array-base-quaternary4d/tree/esm

[@stdlib/array/base/quaternary5d]: https://github.com/stdlib-js/array-base-quaternary5d/tree/esm

[@stdlib/array/base/quinary2d]: https://github.com/stdlib-js/array-base-quinary2d/tree/esm

[@stdlib/array/base/quinary3d]: https://github.com/stdlib-js/array-base-quinary3d/tree/esm

[@stdlib/array/base/quinary4d]: https://github.com/stdlib-js/array-base-quinary4d/tree/esm

[@stdlib/array/base/quinary5d]: https://github.com/stdlib-js/array-base-quinary5d/tree/esm

[@stdlib/array/base/resolve-getter]: https://github.com/stdlib-js/array-base-resolve-getter/tree/esm

[@stdlib/array/base/setter]: https://github.com/stdlib-js/array-base-setter/tree/esm

[@stdlib/array/base/slice]: https://github.com/stdlib-js/array-base-slice/tree/esm

[@stdlib/array/base/strided2array2d]: https://github.com/stdlib-js/array-base-strided2array2d/tree/esm

[@stdlib/array/base/strided2array3d]: https://github.com/stdlib-js/array-base-strided2array3d/tree/esm

[@stdlib/array/base/strided2array4d]: https://github.com/stdlib-js/array-base-strided2array4d/tree/esm

[@stdlib/array/base/strided2array5d]: https://github.com/stdlib-js/array-base-strided2array5d/tree/esm

[@stdlib/array/base/take-indexed]: https://github.com/stdlib-js/array-base-take-indexed/tree/esm

[@stdlib/array/base/take]: https://github.com/stdlib-js/array-base-take/tree/esm

[@stdlib/array/base/take2d]: https://github.com/stdlib-js/array-base-take2d/tree/esm

[@stdlib/array/base/take3d]: https://github.com/stdlib-js/array-base-take3d/tree/esm

[@stdlib/array/base/ternary2d]: https://github.com/stdlib-js/array-base-ternary2d/tree/esm

[@stdlib/array/base/ternary3d]: https://github.com/stdlib-js/array-base-ternary3d/tree/esm

[@stdlib/array/base/ternary4d]: https://github.com/stdlib-js/array-base-ternary4d/tree/esm

[@stdlib/array/base/ternary5d]: https://github.com/stdlib-js/array-base-ternary5d/tree/esm

[@stdlib/array/base/to-accessor-array]: https://github.com/stdlib-js/array-base-to-accessor-array/tree/esm

[@stdlib/array/base/to-deduped]: https://github.com/stdlib-js/array-base-to-deduped/tree/esm

[@stdlib/array/base/unary2d-by]: https://github.com/stdlib-js/array-base-unary2d-by/tree/esm

[@stdlib/array/base/unary2d]: https://github.com/stdlib-js/array-base-unary2d/tree/esm

[@stdlib/array/base/unary3d]: https://github.com/stdlib-js/array-base-unary3d/tree/esm

[@stdlib/array/base/unary4d]: https://github.com/stdlib-js/array-base-unary4d/tree/esm

[@stdlib/array/base/unary5d]: https://github.com/stdlib-js/array-base-unary5d/tree/esm

[@stdlib/array/base/unarynd]: https://github.com/stdlib-js/array-base-unarynd/tree/esm

[@stdlib/array/base/unitspace]: https://github.com/stdlib-js/array-base-unitspace/tree/esm

[@stdlib/array/base/zero-to]: https://github.com/stdlib-js/array-base-zero-to/tree/esm

[@stdlib/array/base/zeros]: https://github.com/stdlib-js/array-base-zeros/tree/esm

[@stdlib/array/base/zeros2d]: https://github.com/stdlib-js/array-base-zeros2d/tree/esm

[@stdlib/array/base/zeros3d]: https://github.com/stdlib-js/array-base-zeros3d/tree/esm

[@stdlib/array/base/zeros4d]: https://github.com/stdlib-js/array-base-zeros4d/tree/esm

[@stdlib/array/base/zeros5d]: https://github.com/stdlib-js/array-base-zeros5d/tree/esm

[@stdlib/array/base/zerosnd]: https://github.com/stdlib-js/array-base-zerosnd/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
