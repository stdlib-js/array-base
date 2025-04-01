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

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/array-base' );
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
-   <span class="signature">[`anyByRight( x, predicate[, thisArg] )`][@stdlib/array/base/any-by-right]</span><span class="delimiter">: </span><span class="description">test whether at least one element in an array passes a test implemented by a predicate function, while iterating from right to left.</span>
-   <span class="signature">[`anyBy( x, predicate[, thisArg] )`][@stdlib/array/base/any-by]</span><span class="delimiter">: </span><span class="description">test whether at least one element in an array passes a test implemented by a predicate function.</span>
-   <span class="signature">[`any( x )`][@stdlib/array/base/any]</span><span class="delimiter">: </span><span class="description">test whether at least one element in an array is truthy.</span>
-   <span class="signature">[`arraylike2object( x )`][@stdlib/array/base/arraylike2object]</span><span class="delimiter">: </span><span class="description">convert an array-like object to an object likely to have the same "shape".</span>
-   <span class="signature">[`assert`][@stdlib/array/base/assert]</span><span class="delimiter">: </span><span class="description">base array assertion utilities.</span>
-   <span class="signature">[`at( x, index )`][@stdlib/array/base/at]</span><span class="delimiter">: </span><span class="description">return an element from an array.</span>
-   <span class="signature">[`at2d( x, i0, i1 )`][@stdlib/array/base/at2d]</span><span class="delimiter">: </span><span class="description">return an element from a two-dimensional nested array.</span>
-   <span class="signature">[`at3d( x, i0, i1, i2 )`][@stdlib/array/base/at3d]</span><span class="delimiter">: </span><span class="description">return an element from a three-dimensional nested array.</span>
-   <span class="signature">[`at4d( x, i0, i1, i2, i3 )`][@stdlib/array/base/at4d]</span><span class="delimiter">: </span><span class="description">return an element from a four-dimensional nested array.</span>
-   <span class="signature">[`at5d( x, i0, i1, i2, i3, i4 )`][@stdlib/array/base/at5d]</span><span class="delimiter">: </span><span class="description">return an element from a five-dimensional nested array.</span>
-   <span class="signature">[`atnd( x, i0[, ...indices] )`][@stdlib/array/base/atnd]</span><span class="delimiter">: </span><span class="description">return an element from an n-dimensional nested array.</span>
-   <span class="signature">[`bifurcateEntriesBy( x, predicate[, thisArg] )`][@stdlib/array/base/bifurcate-entries-by]</span><span class="delimiter">: </span><span class="description">split element entries into two groups according to a predicate function.</span>
-   <span class="signature">[`bifurcateEntries( x, filter )`][@stdlib/array/base/bifurcate-entries]</span><span class="delimiter">: </span><span class="description">split array element entries into two groups.</span>
-   <span class="signature">[`bifurcateIndicesBy( x, predicate[, thisArg] )`][@stdlib/array/base/bifurcate-indices-by]</span><span class="delimiter">: </span><span class="description">split element indices into two groups according to a predicate function.</span>
-   <span class="signature">[`bifurcateIndices( x, filter )`][@stdlib/array/base/bifurcate-indices]</span><span class="delimiter">: </span><span class="description">split array element indices into two groups.</span>
-   <span class="signature">[`bifurcateValuesBy( x, predicate[, thisArg] )`][@stdlib/array/base/bifurcate-values-by]</span><span class="delimiter">: </span><span class="description">split element values into two groups according to a predicate function.</span>
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
-   <span class="signature">[`bquaternary3d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-quaternary3d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four broadcasted input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`bquaternary4d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-quaternary4d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four broadcasted input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`bquaternary5d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-quaternary5d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four broadcasted input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`bquinary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-quinary2d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five broadcasted nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bquinary4d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-quinary4d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five broadcasted input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`bternary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-ternary2d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three broadcasted nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bternary3d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-ternary3d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three broadcasted nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`bternary4d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-ternary4d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three broadcasted nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`bternary5d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-ternary5d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three broadcasted nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`bunary2d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary2d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`bunary3d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary3d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`bunary4d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary4d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`bunary5d( arrays, shapes, fcn )`][@stdlib/array/base/broadcasted-unary5d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a broadcasted nested input array and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`cartesianPower( x, n )`][@stdlib/array/base/cartesian-power]</span><span class="delimiter">: </span><span class="description">return the Cartesian power.</span>
-   <span class="signature">[`cartesianProduct( x1, x2 )`][@stdlib/array/base/cartesian-product]</span><span class="delimiter">: </span><span class="description">return the Cartesian product.</span>
-   <span class="signature">[`cartesianSquare( x )`][@stdlib/array/base/cartesian-square]</span><span class="delimiter">: </span><span class="description">return the Cartesian square.</span>
-   <span class="signature">[`copyIndexed( x )`][@stdlib/array/base/copy-indexed]</span><span class="delimiter">: </span><span class="description">copy the elements of an indexed array-like object to a new "generic" array.</span>
-   <span class="signature">[`copy( x )`][@stdlib/array/base/copy]</span><span class="delimiter">: </span><span class="description">copy the elements of an array-like object to a new "generic" array.</span>
-   <span class="signature">[`countFalsy( x )`][@stdlib/array/base/count-falsy]</span><span class="delimiter">: </span><span class="description">count the number of falsy elements in an array.</span>
-   <span class="signature">[`countIf( x, predicate[, thisArg] )`][@stdlib/array/base/count-if]</span><span class="delimiter">: </span><span class="description">count the number of elements in an array which pass a test implemented by a predicate function.</span>
-   <span class="signature">[`countSameValueZero( x, value )`][@stdlib/array/base/count-same-value-zero]</span><span class="delimiter">: </span><span class="description">count the number of elements in an array that are equal to a specified value.</span>
-   <span class="signature">[`countSameValue( x, value )`][@stdlib/array/base/count-same-value]</span><span class="delimiter">: </span><span class="description">count the number of elements in an array that are equal to a specified value.</span>
-   <span class="signature">[`countTruthy( x )`][@stdlib/array/base/count-truthy]</span><span class="delimiter">: </span><span class="description">count the number of truthy elements in an array.</span>
-   <span class="signature">[`cuany( x )`][@stdlib/array/base/cuany]</span><span class="delimiter">: </span><span class="description">cumulatively test whether at least one element in a provided array is truthy.</span>
-   <span class="signature">[`cuevery( x )`][@stdlib/array/base/cuevery]</span><span class="delimiter">: </span><span class="description">cumulatively test whether every element in a provided array is truthy.</span>
-   <span class="signature">[`cunone( x )`][@stdlib/array/base/cunone]</span><span class="delimiter">: </span><span class="description">cumulatively test whether every element in a provided array is falsy.</span>
-   <span class="signature">[`dedupe( x, limit, equalNaNs )`][@stdlib/array/base/dedupe]</span><span class="delimiter">: </span><span class="description">remove consecutive duplicated values.</span>
-   <span class="signature">[`everyByRight( x, predicate[, thisArg] )`][@stdlib/array/base/every-by-right]</span><span class="delimiter">: </span><span class="description">test whether all elements in an array pass a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="signature">[`everyBy( x, predicate[, thisArg] )`][@stdlib/array/base/every-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in an array pass a test implemented by a predicate function.</span>
-   <span class="signature">[`every( x )`][@stdlib/array/base/every]</span><span class="delimiter">: </span><span class="description">test whether all elements in an array are truthy.</span>
-   <span class="signature">[`fancySliceAssign( x, y, s, strict )`][@stdlib/array/base/fancy-slice-assign]</span><span class="delimiter">: </span><span class="description">assign element values from a broadcasted input array to corresponding elements in an output array.</span>
-   <span class="signature">[`fancySlice( x, s, strict )`][@stdlib/array/base/fancy-slice]</span><span class="delimiter">: </span><span class="description">return a shallow copy of a portion of an array.</span>
-   <span class="signature">[`fillBy( x, start, end, fcn[, thisArg] )`][@stdlib/array/base/fill-by]</span><span class="delimiter">: </span><span class="description">fill all elements within a portion of an array according to a callback function.</span>
-   <span class="signature">[`fill( x, value, start, end )`][@stdlib/array/base/fill]</span><span class="delimiter">: </span><span class="description">fill all elements within a portion of an array with a specified value.</span>
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
-   <span class="signature">[`filter( x, predicate[, thisArg] )`][@stdlib/array/base/filter]</span><span class="delimiter">: </span><span class="description">return a shallow copy of an array containing only those elements which pass a test implemented by a predicate function.</span>
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
-   <span class="signature">[`groupEntriesBy( x, indicator[, thisArg] )`][@stdlib/array/base/group-entries-by]</span><span class="delimiter">: </span><span class="description">group element entries according to an indicator function.</span>
-   <span class="signature">[`groupEntries( x, groups )`][@stdlib/array/base/group-entries]</span><span class="delimiter">: </span><span class="description">group element entries as arrays associated with distinct keys.</span>
-   <span class="signature">[`groupIndicesBy( x, indicator[, thisArg] )`][@stdlib/array/base/group-indices-by]</span><span class="delimiter">: </span><span class="description">group element indices according to an indicator function.</span>
-   <span class="signature">[`groupIndices( x, groups )`][@stdlib/array/base/group-indices]</span><span class="delimiter">: </span><span class="description">group element indices as arrays associated with distinct keys.</span>
-   <span class="signature">[`groupValuesBy( x, indicator[, thisArg] )`][@stdlib/array/base/group-values-by]</span><span class="delimiter">: </span><span class="description">group element values according to an indicator function.</span>
-   <span class="signature">[`groupValues( x, groups )`][@stdlib/array/base/group-values]</span><span class="delimiter">: </span><span class="description">group elements as arrays associated with distinct keys.</span>
-   <span class="signature">[`incrspace( start, stop, increment )`][@stdlib/array/base/incrspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array according to a provided increment.</span>
-   <span class="signature">[`indexOfSameValue( x, searchElement, fromIndex )`][@stdlib/array/base/index-of-same-value]</span><span class="delimiter">: </span><span class="description">return the index of the first element which equals a provided search element according to the SameValue Algorithm.</span>
-   <span class="signature">[`indexOf( x, searchElement, fromIndex )`][@stdlib/array/base/index-of]</span><span class="delimiter">: </span><span class="description">return the index of the first element which equals a provided search element.</span>
-   <span class="signature">[`indicesComplement( N, indices )`][@stdlib/array/base/indices-complement]</span><span class="delimiter">: </span><span class="description">return the complement of a list of array indices.</span>
-   <span class="signature">[`join( x, separator )`][@stdlib/array/base/join]</span><span class="delimiter">: </span><span class="description">return a string created by joining array elements using a specified separator.</span>
-   <span class="signature">[`lastIndexOfSameValue( x, searchElement, fromIndex )`][@stdlib/array/base/last-index-of-same-value]</span><span class="delimiter">: </span><span class="description">return the index of the last element which equals a provided search element according to the SameValue Algorithm.</span>
-   <span class="signature">[`lastIndexOf( x, searchElement, fromIndex )`][@stdlib/array/base/last-index-of]</span><span class="delimiter">: </span><span class="description">return the index of the last element which equals a provided search element.</span>
-   <span class="signature">[`last( x )`][@stdlib/array/base/last]</span><span class="delimiter">: </span><span class="description">return the last element of an array-like object.</span>
-   <span class="signature">[`linspace( start, stop, length )`][@stdlib/array/base/linspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array.</span>
-   <span class="signature">[`logspace( a, b, length )`][@stdlib/array/base/logspace]</span><span class="delimiter">: </span><span class="description">generate a logarithmically spaced numeric array.</span>
-   <span class="signature">[`map2d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map2d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a two-dimensional nested input array and assign results to elements in a new two-dimensional nested output array.</span>
-   <span class="signature">[`map3d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map3d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a three-dimensional nested input array and assign results to elements in a new three-dimensional nested output array.</span>
-   <span class="signature">[`map4d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map4d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a four-dimensional nested input array and assign results to elements in a new four-dimensional nested output array.</span>
-   <span class="signature">[`map5d( x, shape, fcn[, thisArg] )`][@stdlib/array/base/map5d]</span><span class="delimiter">: </span><span class="description">apply a function to elements in a five-dimensional nested input array and assign results to elements in a new five-dimensional nested output array.</span>
-   <span class="signature">[`minSignedIntegerDataType( value )`][@stdlib/array/base/min-signed-integer-dtype]</span><span class="delimiter">: </span><span class="description">determine the minimum array data type for storing a provided signed integer value.</span>
-   <span class="signature">[`minUnsignedIntegerDataType( value )`][@stdlib/array/base/min-unsigned-integer-dtype]</span><span class="delimiter">: </span><span class="description">determine the minimum array data type for storing a provided unsigned integer value.</span>
-   <span class="signature">[`mskbinary2d( arrays, shape, fcn )`][@stdlib/array/base/mskbinary2d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two two-dimensional nested input arrays according to elements in a two-dimensional nested mask array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`mskbinary3d( arrays, shape, fcn )`][@stdlib/array/base/mskbinary3d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two three-dimensional nested input arrays according to elements in a three-dimensional nested mask array and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`mskbinary4d( arrays, shape, fcn )`][@stdlib/array/base/mskbinary4d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two four-dimensional nested input arrays according to elements in a four-dimensional nested mask array and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`mskbinary5d( arrays, shape, fcn )`][@stdlib/array/base/mskbinary5d]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in two five-dimensional nested input arrays according to elements in a five-dimensional nested mask array and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`mskfilterMap( x, mask, clbk[, thisArg] )`][@stdlib/array/base/mskfilter-map]</span><span class="delimiter">: </span><span class="description">apply a mask and a callback function to a provided input array.</span>
-   <span class="signature">[`mskfilter( x, mask )`][@stdlib/array/base/mskfilter]</span><span class="delimiter">: </span><span class="description">apply a mask to a provided input array.</span>
-   <span class="signature">[`mskfilter2( x, y, mask )`][@stdlib/array/base/mskfilter2]</span><span class="delimiter">: </span><span class="description">apply a mask to two provided input arrays in a single pass.</span>
-   <span class="signature">[`mskfiltern( x, [...arrays,] mask )`][@stdlib/array/base/mskfiltern]</span><span class="delimiter">: </span><span class="description">apply a mask to one or more provided input arrays in a single pass.</span>
-   <span class="signature">[`mskput( x, mask, values, mode )`][@stdlib/array/base/mskput]</span><span class="delimiter">: </span><span class="description">replace elements of an array with provided values according to a provided mask array.</span>
-   <span class="signature">[`mskreject( x, mask )`][@stdlib/array/base/mskreject]</span><span class="delimiter">: </span><span class="description">apply a mask to a provided input array.</span>
-   <span class="signature">[`mskunary2d( arrays, shape, fcn )`][@stdlib/array/base/mskunary2d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a two-dimensional nested input array according to elements in a two-dimensional nested mask array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`mskunary3d( arrays, shape, fcn )`][@stdlib/array/base/mskunary3d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a three-dimensional nested input array according to elements in a three-dimensional nested mask array and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`mskunary4d( arrays, shape, fcn )`][@stdlib/array/base/mskunary4d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a four-dimensional nested input array according to elements in a four-dimensional nested mask array and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`mskunary5d( arrays, shape, fcn )`][@stdlib/array/base/mskunary5d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a five-dimensional nested input array according to elements in a five-dimensional nested mask array and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`nCartesianProduct( x1, x2[, ...xN] )`][@stdlib/array/base/n-cartesian-product]</span><span class="delimiter">: </span><span class="description">return the n-fold Cartesian product.</span>
-   <span class="signature">[`noneByRight( x, predicate[, thisArg] )`][@stdlib/array/base/none-by-right]</span><span class="delimiter">: </span><span class="description">test whether all elements in an array fail a test implemented by a predicate function, iterating from right to left.</span>
-   <span class="signature">[`noneBy( x, predicate[, thisArg] )`][@stdlib/array/base/none-by]</span><span class="delimiter">: </span><span class="description">test whether all elements in an array fail a test implemented by a predicate function.</span>
-   <span class="signature">[`none( x )`][@stdlib/array/base/none]</span><span class="delimiter">: </span><span class="description">test whether all elements in an array are falsy.</span>
-   <span class="signature">[`nulls( len )`][@stdlib/array/base/nulls]</span><span class="delimiter">: </span><span class="description">create a "generic" array filled with null values.</span>
-   <span class="signature">[`oneTo( n )`][@stdlib/array/base/one-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from one.</span>
-   <span class="signature">[`ones( len )`][@stdlib/array/base/ones]</span><span class="delimiter">: </span><span class="description">create a "generic" array filled with ones.</span>
-   <span class="signature">[`ones2d( shape )`][@stdlib/array/base/ones2d]</span><span class="delimiter">: </span><span class="description">create a two-dimensional nested array filled with ones.</span>
-   <span class="signature">[`ones3d( shape )`][@stdlib/array/base/ones3d]</span><span class="delimiter">: </span><span class="description">create a three-dimensional nested array filled with ones.</span>
-   <span class="signature">[`ones4d( shape )`][@stdlib/array/base/ones4d]</span><span class="delimiter">: </span><span class="description">create a four-dimensional nested array filled with ones.</span>
-   <span class="signature">[`ones5d( shape )`][@stdlib/array/base/ones5d]</span><span class="delimiter">: </span><span class="description">create a five-dimensional nested array filled with ones.</span>
-   <span class="signature">[`onesnd( shape )`][@stdlib/array/base/onesnd]</span><span class="delimiter">: </span><span class="description">create an n-dimensional nested array filled with ones.</span>
-   <span class="signature">[`place( x, mask, values, mode )`][@stdlib/array/base/place]</span><span class="delimiter">: </span><span class="description">replace elements of an array with provided values according to a provided mask array.</span>
-   <span class="signature">[`put( x, indices, values, mode )`][@stdlib/array/base/put]</span><span class="delimiter">: </span><span class="description">replace specified elements of an array with provided values.</span>
-   <span class="signature">[`quaternary2d( arrays, shape, fcn )`][@stdlib/array/base/quaternary2d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`quaternary3d( arrays, shape, fcn )`][@stdlib/array/base/quaternary3d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`quaternary4d( arrays, shape, fcn )`][@stdlib/array/base/quaternary4d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`quaternary5d( arrays, shape, fcn )`][@stdlib/array/base/quaternary5d]</span><span class="delimiter">: </span><span class="description">apply a quaternary callback to elements in four five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`quinary2d( arrays, shape, fcn )`][@stdlib/array/base/quinary2d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`quinary3d( arrays, shape, fcn )`][@stdlib/array/base/quinary3d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`quinary4d( arrays, shape, fcn )`][@stdlib/array/base/quinary4d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`quinary5d( arrays, shape, fcn )`][@stdlib/array/base/quinary5d]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to elements in five five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`reject( x, predicate[, thisArg] )`][@stdlib/array/base/reject]</span><span class="delimiter">: </span><span class="description">return a shallow copy of an array containing only those elements which fail a test implemented by a predicate function.</span>
-   <span class="signature">[`removeAt( x, index )`][@stdlib/array/base/remove-at]</span><span class="delimiter">: </span><span class="description">remove an element from an array.</span>
-   <span class="signature">[`resolveGetter( x )`][@stdlib/array/base/resolve-getter]</span><span class="delimiter">: </span><span class="description">return an accessor function for retrieving an element from an array-like object.</span>
-   <span class="signature">[`resolveSetter( x )`][@stdlib/array/base/resolve-setter]</span><span class="delimiter">: </span><span class="description">return an accessor function for setting an element in an array-like object.</span>
-   <span class="signature">[`reverse( x )`][@stdlib/array/base/reverse]</span><span class="delimiter">: </span><span class="description">reverse an array in-place.</span>
-   <span class="signature">[`scatterFilled( fill, len, indices, values, mode )`][@stdlib/array/base/scatter-filled]</span><span class="delimiter">: </span><span class="description">scatter a list of provided values to specified indices in a new filled "generic" array.</span>
-   <span class="signature">[`scattered( len, indices, values, mode )`][@stdlib/array/base/scattered]</span><span class="delimiter">: </span><span class="description">scatter a list of provided values to specified indices in a new zero-filled "generic" array.</span>
-   <span class="signature">[`setter( dtype )`][@stdlib/array/base/setter]</span><span class="delimiter">: </span><span class="description">return an accessor function for setting an element in an indexed array-like object.</span>
-   <span class="signature">[`slice( x, start, end )`][@stdlib/array/base/slice]</span><span class="delimiter">: </span><span class="description">return a shallow copy of a portion of an array.</span>
-   <span class="signature">[`strided2array2d( x, shape, strides, offset )`][@stdlib/array/base/strided2array2d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a two-dimensional nested array.</span>
-   <span class="signature">[`strided2array3d( x, shape, strides, offset )`][@stdlib/array/base/strided2array3d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a three-dimensional nested array.</span>
-   <span class="signature">[`strided2array4d( x, shape, strides, offset )`][@stdlib/array/base/strided2array4d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a four-dimensional nested array.</span>
-   <span class="signature">[`strided2array5d( x, shape, strides, offset )`][@stdlib/array/base/strided2array5d]</span><span class="delimiter">: </span><span class="description">convert a strided array to a five-dimensional nested array.</span>
-   <span class="signature">[`takeIndexed( x, indices )`][@stdlib/array/base/take-indexed]</span><span class="delimiter">: </span><span class="description">take elements from an indexed array.</span>
-   <span class="signature">[`takeIndexed2( x, y, indices )`][@stdlib/array/base/take-indexed2]</span><span class="delimiter">: </span><span class="description">take elements from two indexed arrays in a single pass.</span>
-   <span class="signature">[`take( x, indices, mode )`][@stdlib/array/base/take]</span><span class="delimiter">: </span><span class="description">take elements from an array.</span>
-   <span class="signature">[`take2d( x, indices, dimension, mode )`][@stdlib/array/base/take2d]</span><span class="delimiter">: </span><span class="description">take elements from a two-dimensional nested array.</span>
-   <span class="signature">[`take3d( x, indices, dimension, mode )`][@stdlib/array/base/take3d]</span><span class="delimiter">: </span><span class="description">take elements from a three-dimensional nested array.</span>
-   <span class="signature">[`ternary2d( arrays, shape, fcn )`][@stdlib/array/base/ternary2d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`ternary3d( arrays, shape, fcn )`][@stdlib/array/base/ternary3d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`ternary4d( arrays, shape, fcn )`][@stdlib/array/base/ternary4d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three four-dimensional nested input arrays and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`ternary5d( arrays, shape, fcn )`][@stdlib/array/base/ternary5d]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to elements in three five-dimensional nested input arrays and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`toAccessorArray( arr )`][@stdlib/array/base/to-accessor-array]</span><span class="delimiter">: </span><span class="description">convert an array-like object to a minimal array-like object supporting the accessor protocol.</span>
-   <span class="signature">[`toDeduped( x, limit, equalNaNs )`][@stdlib/array/base/to-deduped]</span><span class="delimiter">: </span><span class="description">copy elements to a new "generic" array after removing consecutive duplicated values.</span>
-   <span class="signature">[`toReversed( x )`][@stdlib/array/base/to-reversed]</span><span class="delimiter">: </span><span class="description">return a new array with elements in reverse order.</span>
-   <span class="signature">[`unary2dBy( arrays, shape, fcn, clbk[, thisArg] )`][@stdlib/array/base/unary2d-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element retrieved from a two-dimensional nested input array according to a callback function and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`unary2d( arrays, shape, fcn )`][@stdlib/array/base/unary2d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a two-dimensional nested input array and assign results to elements in a two-dimensional nested output array.</span>
-   <span class="signature">[`unary3dBy( arrays, shape, fcn, clbk[, thisArg] )`][@stdlib/array/base/unary3d-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element retrieved from a three-dimensional nested input array according to a callback function and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`unary3d( arrays, shape, fcn )`][@stdlib/array/base/unary3d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a three-dimensional nested input array and assign results to elements in a three-dimensional nested output array.</span>
-   <span class="signature">[`unary4dBy( arrays, shape, fcn, clbk[, thisArg] )`][@stdlib/array/base/unary4d-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element retrieved from a four-dimensional nested input array according to a callback function and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`unary4d( arrays, shape, fcn )`][@stdlib/array/base/unary4d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a four-dimensional nested input array and assign results to elements in a four-dimensional nested output array.</span>
-   <span class="signature">[`unary5dBy( arrays, shape, fcn, clbk[, thisArg] )`][@stdlib/array/base/unary5d-by]</span><span class="delimiter">: </span><span class="description">apply a unary function to each element retrieved from a five-dimensional nested input array according to a callback function and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`unary5d( arrays, shape, fcn )`][@stdlib/array/base/unary5d]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a five-dimensional nested input array and assign results to elements in a five-dimensional nested output array.</span>
-   <span class="signature">[`unarynd( arrays, shape, fcn )`][@stdlib/array/base/unarynd]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in an n-dimensional nested input array and assign results to elements in an n-dimensional nested output array.</span>
-   <span class="signature">[`unitspace( start, stop )`][@stdlib/array/base/unitspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1.</span>
-   <span class="signature">[`where( condition, x, y )`][@stdlib/array/base/where]</span><span class="delimiter">: </span><span class="description">take elements from either one of two arrays depending on a condition.</span>
-   <span class="signature">[`arrayWith( x, index, value )`][@stdlib/array/base/with]</span><span class="delimiter">: </span><span class="description">return a new array with the element at the specified index replaced with a provided value.</span>
-   <span class="signature">[`without( x, index )`][@stdlib/array/base/without]</span><span class="delimiter">: </span><span class="description">return a new array containing every element from an input array, except for the element at a specified index.</span>
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

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var ns = require( '@stdlib/array-base' );

// Create a zero-filled array:
var zeros = ns.zeros( 5 );
// returns [ 0, 0, 0, 0, 0 ]

// Create an array filled with a specific value:
var filled = ns.filled( 7, 4 );
// returns [ 7, 7, 7, 7 ]

// Create a linearly spaced array:
var linear = ns.linspace( 0, 1, 5 );
// returns [ 0, 0.25, 0.5, 0.75, 1 ]

// Create a two-dimensional array:
var arr2d = ns.ones2d( [ 2, 3 ] );
// returns [ [ 1, 1, 1 ], [ 1, 1, 1 ] ]

// Map a function over a 2D array:
var squared = ns.map2d( arr2d, [ 2, 3 ], randu );
// e.g., returns [ [ ~0.123, ~0.789, ~0.456 ], [ ~0.321, ~0.654, ~0.987 ] ]
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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[deno-readme]: https://github.com/stdlib-js/array-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/array/base/accessor-getter]: https://github.com/stdlib-js/array-base-accessor-getter

[@stdlib/array/base/accessor-setter]: https://github.com/stdlib-js/array-base-accessor-setter

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@stdlib/array/base/accessors]: https://github.com/stdlib-js/array-base-accessors

[@stdlib/array/base/any-by-right]: https://github.com/stdlib-js/array-base-any-by-right

[@stdlib/array/base/any-by]: https://github.com/stdlib-js/array-base-any-by

[@stdlib/array/base/any]: https://github.com/stdlib-js/array-base-any

[@stdlib/array/base/arraylike2object]: https://github.com/stdlib-js/array-base-arraylike2object

[@stdlib/array/base/assert]: https://github.com/stdlib-js/array-base-assert

[@stdlib/array/base/at]: https://github.com/stdlib-js/array-base-at

[@stdlib/array/base/at2d]: https://github.com/stdlib-js/array-base-at2d

[@stdlib/array/base/at3d]: https://github.com/stdlib-js/array-base-at3d

[@stdlib/array/base/at4d]: https://github.com/stdlib-js/array-base-at4d

[@stdlib/array/base/at5d]: https://github.com/stdlib-js/array-base-at5d

[@stdlib/array/base/atnd]: https://github.com/stdlib-js/array-base-atnd

[@stdlib/array/base/bifurcate-entries-by]: https://github.com/stdlib-js/array-base-bifurcate-entries-by

[@stdlib/array/base/bifurcate-entries]: https://github.com/stdlib-js/array-base-bifurcate-entries

[@stdlib/array/base/bifurcate-indices-by]: https://github.com/stdlib-js/array-base-bifurcate-indices-by

[@stdlib/array/base/bifurcate-indices]: https://github.com/stdlib-js/array-base-bifurcate-indices

[@stdlib/array/base/bifurcate-values-by]: https://github.com/stdlib-js/array-base-bifurcate-values-by

[@stdlib/array/base/bifurcate-values]: https://github.com/stdlib-js/array-base-bifurcate-values

[@stdlib/array/base/binary2d]: https://github.com/stdlib-js/array-base-binary2d

[@stdlib/array/base/binary3d]: https://github.com/stdlib-js/array-base-binary3d

[@stdlib/array/base/binary4d]: https://github.com/stdlib-js/array-base-binary4d

[@stdlib/array/base/binary5d]: https://github.com/stdlib-js/array-base-binary5d

[@stdlib/array/base/binarynd]: https://github.com/stdlib-js/array-base-binarynd

[@stdlib/array/base/broadcast-array]: https://github.com/stdlib-js/array-base-broadcast-array

[@stdlib/array/base/broadcasted-binary2d]: https://github.com/stdlib-js/array-base-broadcasted-binary2d

[@stdlib/array/base/broadcasted-binary3d]: https://github.com/stdlib-js/array-base-broadcasted-binary3d

[@stdlib/array/base/broadcasted-binary4d]: https://github.com/stdlib-js/array-base-broadcasted-binary4d

[@stdlib/array/base/broadcasted-binary5d]: https://github.com/stdlib-js/array-base-broadcasted-binary5d

[@stdlib/array/base/broadcasted-quaternary2d]: https://github.com/stdlib-js/array-base-broadcasted-quaternary2d

[@stdlib/array/base/broadcasted-quaternary3d]: https://github.com/stdlib-js/array-base-broadcasted-quaternary3d

[@stdlib/array/base/broadcasted-quaternary4d]: https://github.com/stdlib-js/array-base-broadcasted-quaternary4d

[@stdlib/array/base/broadcasted-quaternary5d]: https://github.com/stdlib-js/array-base-broadcasted-quaternary5d

[@stdlib/array/base/broadcasted-quinary2d]: https://github.com/stdlib-js/array-base-broadcasted-quinary2d

[@stdlib/array/base/broadcasted-quinary4d]: https://github.com/stdlib-js/array-base-broadcasted-quinary4d

[@stdlib/array/base/broadcasted-ternary2d]: https://github.com/stdlib-js/array-base-broadcasted-ternary2d

[@stdlib/array/base/broadcasted-ternary3d]: https://github.com/stdlib-js/array-base-broadcasted-ternary3d

[@stdlib/array/base/broadcasted-ternary4d]: https://github.com/stdlib-js/array-base-broadcasted-ternary4d

[@stdlib/array/base/broadcasted-ternary5d]: https://github.com/stdlib-js/array-base-broadcasted-ternary5d

[@stdlib/array/base/broadcasted-unary2d]: https://github.com/stdlib-js/array-base-broadcasted-unary2d

[@stdlib/array/base/broadcasted-unary3d]: https://github.com/stdlib-js/array-base-broadcasted-unary3d

[@stdlib/array/base/broadcasted-unary4d]: https://github.com/stdlib-js/array-base-broadcasted-unary4d

[@stdlib/array/base/broadcasted-unary5d]: https://github.com/stdlib-js/array-base-broadcasted-unary5d

[@stdlib/array/base/cartesian-power]: https://github.com/stdlib-js/array-base-cartesian-power

[@stdlib/array/base/cartesian-product]: https://github.com/stdlib-js/array-base-cartesian-product

[@stdlib/array/base/cartesian-square]: https://github.com/stdlib-js/array-base-cartesian-square

[@stdlib/array/base/copy-indexed]: https://github.com/stdlib-js/array-base-copy-indexed

[@stdlib/array/base/copy]: https://github.com/stdlib-js/array-base-copy

[@stdlib/array/base/count-falsy]: https://github.com/stdlib-js/array-base-count-falsy

[@stdlib/array/base/count-if]: https://github.com/stdlib-js/array-base-count-if

[@stdlib/array/base/count-same-value-zero]: https://github.com/stdlib-js/array-base-count-same-value-zero

[@stdlib/array/base/count-same-value]: https://github.com/stdlib-js/array-base-count-same-value

[@stdlib/array/base/count-truthy]: https://github.com/stdlib-js/array-base-count-truthy

[@stdlib/array/base/cuany]: https://github.com/stdlib-js/array-base-cuany

[@stdlib/array/base/cuevery]: https://github.com/stdlib-js/array-base-cuevery

[@stdlib/array/base/cunone]: https://github.com/stdlib-js/array-base-cunone

[@stdlib/array/base/dedupe]: https://github.com/stdlib-js/array-base-dedupe

[@stdlib/array/base/every-by-right]: https://github.com/stdlib-js/array-base-every-by-right

[@stdlib/array/base/every-by]: https://github.com/stdlib-js/array-base-every-by

[@stdlib/array/base/every]: https://github.com/stdlib-js/array-base-every

[@stdlib/array/base/fancy-slice-assign]: https://github.com/stdlib-js/array-base-fancy-slice-assign

[@stdlib/array/base/fancy-slice]: https://github.com/stdlib-js/array-base-fancy-slice

[@stdlib/array/base/fill-by]: https://github.com/stdlib-js/array-base-fill-by

[@stdlib/array/base/fill]: https://github.com/stdlib-js/array-base-fill

[@stdlib/array/base/filled-by]: https://github.com/stdlib-js/array-base-filled-by

[@stdlib/array/base/filled]: https://github.com/stdlib-js/array-base-filled

[@stdlib/array/base/filled2d-by]: https://github.com/stdlib-js/array-base-filled2d-by

[@stdlib/array/base/filled2d]: https://github.com/stdlib-js/array-base-filled2d

[@stdlib/array/base/filled3d-by]: https://github.com/stdlib-js/array-base-filled3d-by

[@stdlib/array/base/filled3d]: https://github.com/stdlib-js/array-base-filled3d

[@stdlib/array/base/filled4d-by]: https://github.com/stdlib-js/array-base-filled4d-by

[@stdlib/array/base/filled4d]: https://github.com/stdlib-js/array-base-filled4d

[@stdlib/array/base/filled5d-by]: https://github.com/stdlib-js/array-base-filled5d-by

[@stdlib/array/base/filled5d]: https://github.com/stdlib-js/array-base-filled5d

[@stdlib/array/base/fillednd-by]: https://github.com/stdlib-js/array-base-fillednd-by

[@stdlib/array/base/fillednd]: https://github.com/stdlib-js/array-base-fillednd

[@stdlib/array/base/filter]: https://github.com/stdlib-js/array-base-filter

[@stdlib/array/base/first]: https://github.com/stdlib-js/array-base-first

[@stdlib/array/base/flatten-by]: https://github.com/stdlib-js/array-base-flatten-by

[@stdlib/array/base/flatten]: https://github.com/stdlib-js/array-base-flatten

[@stdlib/array/base/flatten2d-by]: https://github.com/stdlib-js/array-base-flatten2d-by

[@stdlib/array/base/flatten2d]: https://github.com/stdlib-js/array-base-flatten2d

[@stdlib/array/base/flatten3d-by]: https://github.com/stdlib-js/array-base-flatten3d-by

[@stdlib/array/base/flatten3d]: https://github.com/stdlib-js/array-base-flatten3d

[@stdlib/array/base/flatten4d-by]: https://github.com/stdlib-js/array-base-flatten4d-by

[@stdlib/array/base/flatten4d]: https://github.com/stdlib-js/array-base-flatten4d

[@stdlib/array/base/flatten5d-by]: https://github.com/stdlib-js/array-base-flatten5d-by

[@stdlib/array/base/flatten5d]: https://github.com/stdlib-js/array-base-flatten5d

[@stdlib/array/base/fliplr2d]: https://github.com/stdlib-js/array-base-fliplr2d

[@stdlib/array/base/fliplr3d]: https://github.com/stdlib-js/array-base-fliplr3d

[@stdlib/array/base/fliplr4d]: https://github.com/stdlib-js/array-base-fliplr4d

[@stdlib/array/base/fliplr5d]: https://github.com/stdlib-js/array-base-fliplr5d

[@stdlib/array/base/flipud2d]: https://github.com/stdlib-js/array-base-flipud2d

[@stdlib/array/base/flipud3d]: https://github.com/stdlib-js/array-base-flipud3d

[@stdlib/array/base/flipud4d]: https://github.com/stdlib-js/array-base-flipud4d

[@stdlib/array/base/flipud5d]: https://github.com/stdlib-js/array-base-flipud5d

[@stdlib/array/base/from-strided]: https://github.com/stdlib-js/array-base-from-strided

[@stdlib/array/base/getter]: https://github.com/stdlib-js/array-base-getter

[@stdlib/array/base/group-entries-by]: https://github.com/stdlib-js/array-base-group-entries-by

[@stdlib/array/base/group-entries]: https://github.com/stdlib-js/array-base-group-entries

[@stdlib/array/base/group-indices-by]: https://github.com/stdlib-js/array-base-group-indices-by

[@stdlib/array/base/group-indices]: https://github.com/stdlib-js/array-base-group-indices

[@stdlib/array/base/group-values-by]: https://github.com/stdlib-js/array-base-group-values-by

[@stdlib/array/base/group-values]: https://github.com/stdlib-js/array-base-group-values

[@stdlib/array/base/incrspace]: https://github.com/stdlib-js/array-base-incrspace

[@stdlib/array/base/index-of-same-value]: https://github.com/stdlib-js/array-base-index-of-same-value

[@stdlib/array/base/index-of]: https://github.com/stdlib-js/array-base-index-of

[@stdlib/array/base/indices-complement]: https://github.com/stdlib-js/array-base-indices-complement

[@stdlib/array/base/join]: https://github.com/stdlib-js/array-base-join

[@stdlib/array/base/last-index-of-same-value]: https://github.com/stdlib-js/array-base-last-index-of-same-value

[@stdlib/array/base/last-index-of]: https://github.com/stdlib-js/array-base-last-index-of

[@stdlib/array/base/last]: https://github.com/stdlib-js/array-base-last

[@stdlib/array/base/linspace]: https://github.com/stdlib-js/array-base-linspace

[@stdlib/array/base/logspace]: https://github.com/stdlib-js/array-base-logspace

[@stdlib/array/base/map2d]: https://github.com/stdlib-js/array-base-map2d

[@stdlib/array/base/map3d]: https://github.com/stdlib-js/array-base-map3d

[@stdlib/array/base/map4d]: https://github.com/stdlib-js/array-base-map4d

[@stdlib/array/base/map5d]: https://github.com/stdlib-js/array-base-map5d

[@stdlib/array/base/min-signed-integer-dtype]: https://github.com/stdlib-js/array-base-min-signed-integer-dtype

[@stdlib/array/base/min-unsigned-integer-dtype]: https://github.com/stdlib-js/array-base-min-unsigned-integer-dtype

[@stdlib/array/base/mskbinary2d]: https://github.com/stdlib-js/array-base-mskbinary2d

[@stdlib/array/base/mskbinary3d]: https://github.com/stdlib-js/array-base-mskbinary3d

[@stdlib/array/base/mskbinary4d]: https://github.com/stdlib-js/array-base-mskbinary4d

[@stdlib/array/base/mskbinary5d]: https://github.com/stdlib-js/array-base-mskbinary5d

[@stdlib/array/base/mskfilter-map]: https://github.com/stdlib-js/array-base-mskfilter-map

[@stdlib/array/base/mskfilter]: https://github.com/stdlib-js/array-base-mskfilter

[@stdlib/array/base/mskfilter2]: https://github.com/stdlib-js/array-base-mskfilter2

[@stdlib/array/base/mskfiltern]: https://github.com/stdlib-js/array-base-mskfiltern

[@stdlib/array/base/mskput]: https://github.com/stdlib-js/array-base-mskput

[@stdlib/array/base/mskreject]: https://github.com/stdlib-js/array-base-mskreject

[@stdlib/array/base/mskunary2d]: https://github.com/stdlib-js/array-base-mskunary2d

[@stdlib/array/base/mskunary3d]: https://github.com/stdlib-js/array-base-mskunary3d

[@stdlib/array/base/mskunary4d]: https://github.com/stdlib-js/array-base-mskunary4d

[@stdlib/array/base/mskunary5d]: https://github.com/stdlib-js/array-base-mskunary5d

[@stdlib/array/base/n-cartesian-product]: https://github.com/stdlib-js/array-base-n-cartesian-product

[@stdlib/array/base/none-by-right]: https://github.com/stdlib-js/array-base-none-by-right

[@stdlib/array/base/none-by]: https://github.com/stdlib-js/array-base-none-by

[@stdlib/array/base/none]: https://github.com/stdlib-js/array-base-none

[@stdlib/array/base/nulls]: https://github.com/stdlib-js/array-base-nulls

[@stdlib/array/base/one-to]: https://github.com/stdlib-js/array-base-one-to

[@stdlib/array/base/ones]: https://github.com/stdlib-js/array-base-ones

[@stdlib/array/base/ones2d]: https://github.com/stdlib-js/array-base-ones2d

[@stdlib/array/base/ones3d]: https://github.com/stdlib-js/array-base-ones3d

[@stdlib/array/base/ones4d]: https://github.com/stdlib-js/array-base-ones4d

[@stdlib/array/base/ones5d]: https://github.com/stdlib-js/array-base-ones5d

[@stdlib/array/base/onesnd]: https://github.com/stdlib-js/array-base-onesnd

[@stdlib/array/base/place]: https://github.com/stdlib-js/array-base-place

[@stdlib/array/base/put]: https://github.com/stdlib-js/array-base-put

[@stdlib/array/base/quaternary2d]: https://github.com/stdlib-js/array-base-quaternary2d

[@stdlib/array/base/quaternary3d]: https://github.com/stdlib-js/array-base-quaternary3d

[@stdlib/array/base/quaternary4d]: https://github.com/stdlib-js/array-base-quaternary4d

[@stdlib/array/base/quaternary5d]: https://github.com/stdlib-js/array-base-quaternary5d

[@stdlib/array/base/quinary2d]: https://github.com/stdlib-js/array-base-quinary2d

[@stdlib/array/base/quinary3d]: https://github.com/stdlib-js/array-base-quinary3d

[@stdlib/array/base/quinary4d]: https://github.com/stdlib-js/array-base-quinary4d

[@stdlib/array/base/quinary5d]: https://github.com/stdlib-js/array-base-quinary5d

[@stdlib/array/base/reject]: https://github.com/stdlib-js/array-base-reject

[@stdlib/array/base/remove-at]: https://github.com/stdlib-js/array-base-remove-at

[@stdlib/array/base/resolve-getter]: https://github.com/stdlib-js/array-base-resolve-getter

[@stdlib/array/base/resolve-setter]: https://github.com/stdlib-js/array-base-resolve-setter

[@stdlib/array/base/reverse]: https://github.com/stdlib-js/array-base-reverse

[@stdlib/array/base/scatter-filled]: https://github.com/stdlib-js/array-base-scatter-filled

[@stdlib/array/base/scattered]: https://github.com/stdlib-js/array-base-scattered

[@stdlib/array/base/setter]: https://github.com/stdlib-js/array-base-setter

[@stdlib/array/base/slice]: https://github.com/stdlib-js/array-base-slice

[@stdlib/array/base/strided2array2d]: https://github.com/stdlib-js/array-base-strided2array2d

[@stdlib/array/base/strided2array3d]: https://github.com/stdlib-js/array-base-strided2array3d

[@stdlib/array/base/strided2array4d]: https://github.com/stdlib-js/array-base-strided2array4d

[@stdlib/array/base/strided2array5d]: https://github.com/stdlib-js/array-base-strided2array5d

[@stdlib/array/base/take-indexed]: https://github.com/stdlib-js/array-base-take-indexed

[@stdlib/array/base/take-indexed2]: https://github.com/stdlib-js/array-base-take-indexed2

[@stdlib/array/base/take]: https://github.com/stdlib-js/array-base-take

[@stdlib/array/base/take2d]: https://github.com/stdlib-js/array-base-take2d

[@stdlib/array/base/take3d]: https://github.com/stdlib-js/array-base-take3d

[@stdlib/array/base/ternary2d]: https://github.com/stdlib-js/array-base-ternary2d

[@stdlib/array/base/ternary3d]: https://github.com/stdlib-js/array-base-ternary3d

[@stdlib/array/base/ternary4d]: https://github.com/stdlib-js/array-base-ternary4d

[@stdlib/array/base/ternary5d]: https://github.com/stdlib-js/array-base-ternary5d

[@stdlib/array/base/to-accessor-array]: https://github.com/stdlib-js/array-base-to-accessor-array

[@stdlib/array/base/to-deduped]: https://github.com/stdlib-js/array-base-to-deduped

[@stdlib/array/base/to-reversed]: https://github.com/stdlib-js/array-base-to-reversed

[@stdlib/array/base/unary2d-by]: https://github.com/stdlib-js/array-base-unary2d-by

[@stdlib/array/base/unary2d]: https://github.com/stdlib-js/array-base-unary2d

[@stdlib/array/base/unary3d-by]: https://github.com/stdlib-js/array-base-unary3d-by

[@stdlib/array/base/unary3d]: https://github.com/stdlib-js/array-base-unary3d

[@stdlib/array/base/unary4d-by]: https://github.com/stdlib-js/array-base-unary4d-by

[@stdlib/array/base/unary4d]: https://github.com/stdlib-js/array-base-unary4d

[@stdlib/array/base/unary5d-by]: https://github.com/stdlib-js/array-base-unary5d-by

[@stdlib/array/base/unary5d]: https://github.com/stdlib-js/array-base-unary5d

[@stdlib/array/base/unarynd]: https://github.com/stdlib-js/array-base-unarynd

[@stdlib/array/base/unitspace]: https://github.com/stdlib-js/array-base-unitspace

[@stdlib/array/base/where]: https://github.com/stdlib-js/array-base-where

[@stdlib/array/base/with]: https://github.com/stdlib-js/array-base-with

[@stdlib/array/base/without]: https://github.com/stdlib-js/array-base-without

[@stdlib/array/base/zero-to]: https://github.com/stdlib-js/array-base-zero-to

[@stdlib/array/base/zeros]: https://github.com/stdlib-js/array-base-zeros

[@stdlib/array/base/zeros2d]: https://github.com/stdlib-js/array-base-zeros2d

[@stdlib/array/base/zeros3d]: https://github.com/stdlib-js/array-base-zeros3d

[@stdlib/array/base/zeros4d]: https://github.com/stdlib-js/array-base-zeros4d

[@stdlib/array/base/zeros5d]: https://github.com/stdlib-js/array-base-zeros5d

[@stdlib/array/base/zerosnd]: https://github.com/stdlib-js/array-base-zerosnd

<!-- </toc-links> -->

</section>

<!-- /.links -->
