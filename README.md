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

# base

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) array utilities.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { AccessorArray, accessorGetter, accessorSetter, accessors, arraylike2object, assert, broadcastArray, cartesianPower, cartesianProduct, cartesianSquare, copy, copyIndexed, filled, filled2d, filled2dBy, filled3d, filled4d, filled5d, filledBy, fillednd, flatten, flatten2d, flatten2dBy, flatten3d, flatten3dBy, flatten4d, flatten4dBy, flatten5d, flatten5dBy, getter, incrspace, last, linspace, logspace, nCartesianProduct, ones, ones2d, onesnd, setter, take, toAccessorArray, unitspace, zeroTo, zeros, zeros2d, zerosnd } from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base@deno/mod.js';
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
-   <span class="signature">[`cartesianPower( x, n )`][@stdlib/array/base/cartesian-power]</span><span class="delimiter">: </span><span class="description">return the Cartesian power.</span>
-   <span class="signature">[`cartesianProduct( x1, x2 )`][@stdlib/array/base/cartesian-product]</span><span class="delimiter">: </span><span class="description">return the Cartesian product.</span>
-   <span class="signature">[`cartesianSquare( x )`][@stdlib/array/base/cartesian-square]</span><span class="delimiter">: </span><span class="description">return the Cartesian square.</span>
-   <span class="signature">[`copyIndexed( x )`][@stdlib/array/base/copy-indexed]</span><span class="delimiter">: </span><span class="description">copy the elements of an indexed array-like object to a new "generic" array.</span>
-   <span class="signature">[`copy( x )`][@stdlib/array/base/copy]</span><span class="delimiter">: </span><span class="description">copy the elements of an array-like object to a new "generic" array.</span>
-   <span class="signature">[`filledBy( len, clbk[, thisArg] )`][@stdlib/array/base/filled-by]</span><span class="delimiter">: </span><span class="description">create a filled "generic" array according to a provided callback function.</span>
-   <span class="signature">[`filled( value, len )`][@stdlib/array/base/filled]</span><span class="delimiter">: </span><span class="description">create a filled "generic" array.</span>
-   <span class="signature">[`flatten( x, shape, colexicographic )`][@stdlib/array/base/flatten]</span><span class="delimiter">: </span><span class="description">flatten an n-dimensional nested array.</span>
-   <span class="signature">[`flatten2dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten2d-by]</span><span class="delimiter">: </span><span class="description">flatten a two-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten2d( x, shape, colexicographic )`][@stdlib/array/base/flatten2d]</span><span class="delimiter">: </span><span class="description">flatten a two-dimensional nested array.</span>
-   <span class="signature">[`flatten3dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten3d-by]</span><span class="delimiter">: </span><span class="description">flatten a three-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten3d( x, shape, colexicographic )`][@stdlib/array/base/flatten3d]</span><span class="delimiter">: </span><span class="description">flatten a three-dimensional nested array.</span>
-   <span class="signature">[`flatten4dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten4d-by]</span><span class="delimiter">: </span><span class="description">flatten a four-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten4d( x, shape, colexicographic )`][@stdlib/array/base/flatten4d]</span><span class="delimiter">: </span><span class="description">flatten a four-dimensional nested array.</span>
-   <span class="signature">[`flatten5dBy( x, shape, colexicographic, clbk[, thisArg] )`][@stdlib/array/base/flatten5d-by]</span><span class="delimiter">: </span><span class="description">flatten a five-dimensional nested array according to a callback function.</span>
-   <span class="signature">[`flatten5d( x, shape, colexicographic )`][@stdlib/array/base/flatten5d]</span><span class="delimiter">: </span><span class="description">flatten a five-dimensional nested array.</span>
-   <span class="signature">[`getter( dtype )`][@stdlib/array/base/getter]</span><span class="delimiter">: </span><span class="description">return an accessor function for retrieving an element from an indexed array-like object.</span>
-   <span class="signature">[`incrspace( start, stop, increment )`][@stdlib/array/base/incrspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array according to a provided increment.</span>
-   <span class="signature">[`last( x )`][@stdlib/array/base/last]</span><span class="delimiter">: </span><span class="description">return the last element of an array-like object.</span>
-   <span class="signature">[`linspace( start, stop, length )`][@stdlib/array/base/linspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array.</span>
-   <span class="signature">[`logspace( a, b, length )`][@stdlib/array/base/logspace]</span><span class="delimiter">: </span><span class="description">generate a logarithmically spaced numeric array.</span>
-   <span class="signature">[`nCartesianProduct( x1, x2[, ...xN] )`][@stdlib/array/base/n-cartesian-product]</span><span class="delimiter">: </span><span class="description">return the n-fold Cartesian product.</span>
-   <span class="signature">[`ones( len )`][@stdlib/array/base/ones]</span><span class="delimiter">: </span><span class="description">create a "generic" array filled with ones.</span>
-   <span class="signature">[`setter( dtype )`][@stdlib/array/base/setter]</span><span class="delimiter">: </span><span class="description">return an accessor function for setting an element in an indexed array-like object.</span>
-   <span class="signature">[`take( x, indices )`][@stdlib/array/base/take]</span><span class="delimiter">: </span><span class="description">take elements from an array.</span>
-   <span class="signature">[`toAccessorArray( arr )`][@stdlib/array/base/to-accessor-array]</span><span class="delimiter">: </span><span class="description">convert an array-like object to a minimal array-like object supporting the accessor protocol.</span>
-   <span class="signature">[`unitspace( start, stop )`][@stdlib/array/base/unitspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1.</span>
-   <span class="signature">[`zeroTo( n )`][@stdlib/array/base/zero-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from zero.</span>
-   <span class="signature">[`zeros( len )`][@stdlib/array/base/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled "generic" array.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base@deno/mod.js';

console.log( objectKeys( ns ) );
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

[@stdlib/array/base/accessor-getter]: https://github.com/stdlib-js/array-base-accessor-getter/tree/deno

[@stdlib/array/base/accessor-setter]: https://github.com/stdlib-js/array-base-accessor-setter/tree/deno

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/deno

[@stdlib/array/base/accessors]: https://github.com/stdlib-js/array-base-accessors/tree/deno

[@stdlib/array/base/arraylike2object]: https://github.com/stdlib-js/array-base-arraylike2object/tree/deno

[@stdlib/array/base/assert]: https://github.com/stdlib-js/array-base-assert/tree/deno

[@stdlib/array/base/cartesian-power]: https://github.com/stdlib-js/array-base-cartesian-power/tree/deno

[@stdlib/array/base/cartesian-product]: https://github.com/stdlib-js/array-base-cartesian-product/tree/deno

[@stdlib/array/base/cartesian-square]: https://github.com/stdlib-js/array-base-cartesian-square/tree/deno

[@stdlib/array/base/copy-indexed]: https://github.com/stdlib-js/array-base-copy-indexed/tree/deno

[@stdlib/array/base/copy]: https://github.com/stdlib-js/array-base-copy/tree/deno

[@stdlib/array/base/filled-by]: https://github.com/stdlib-js/array-base-filled-by/tree/deno

[@stdlib/array/base/filled]: https://github.com/stdlib-js/array-base-filled/tree/deno

[@stdlib/array/base/flatten]: https://github.com/stdlib-js/array-base-flatten/tree/deno

[@stdlib/array/base/flatten2d-by]: https://github.com/stdlib-js/array-base-flatten2d-by/tree/deno

[@stdlib/array/base/flatten2d]: https://github.com/stdlib-js/array-base-flatten2d/tree/deno

[@stdlib/array/base/flatten3d-by]: https://github.com/stdlib-js/array-base-flatten3d-by/tree/deno

[@stdlib/array/base/flatten3d]: https://github.com/stdlib-js/array-base-flatten3d/tree/deno

[@stdlib/array/base/flatten4d-by]: https://github.com/stdlib-js/array-base-flatten4d-by/tree/deno

[@stdlib/array/base/flatten4d]: https://github.com/stdlib-js/array-base-flatten4d/tree/deno

[@stdlib/array/base/flatten5d-by]: https://github.com/stdlib-js/array-base-flatten5d-by/tree/deno

[@stdlib/array/base/flatten5d]: https://github.com/stdlib-js/array-base-flatten5d/tree/deno

[@stdlib/array/base/getter]: https://github.com/stdlib-js/array-base-getter/tree/deno

[@stdlib/array/base/incrspace]: https://github.com/stdlib-js/array-base-incrspace/tree/deno

[@stdlib/array/base/last]: https://github.com/stdlib-js/array-base-last/tree/deno

[@stdlib/array/base/linspace]: https://github.com/stdlib-js/array-base-linspace/tree/deno

[@stdlib/array/base/logspace]: https://github.com/stdlib-js/array-base-logspace/tree/deno

[@stdlib/array/base/n-cartesian-product]: https://github.com/stdlib-js/array-base-n-cartesian-product/tree/deno

[@stdlib/array/base/ones]: https://github.com/stdlib-js/array-base-ones/tree/deno

[@stdlib/array/base/setter]: https://github.com/stdlib-js/array-base-setter/tree/deno

[@stdlib/array/base/take]: https://github.com/stdlib-js/array-base-take/tree/deno

[@stdlib/array/base/to-accessor-array]: https://github.com/stdlib-js/array-base-to-accessor-array/tree/deno

[@stdlib/array/base/unitspace]: https://github.com/stdlib-js/array-base-unitspace/tree/deno

[@stdlib/array/base/zero-to]: https://github.com/stdlib-js/array-base-zero-to/tree/deno

[@stdlib/array/base/zeros]: https://github.com/stdlib-js/array-base-zeros/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
