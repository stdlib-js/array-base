/*
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

// TypeScript Version: 4.1

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import AccessorArray = require( '@stdlib/array-base-accessor' );
import accessorGetter = require( '@stdlib/array-base-accessor-getter' );
import accessorSetter = require( '@stdlib/array-base-accessor-setter' );
import accessors = require( '@stdlib/array-base-accessors' );
import arraylike2object = require( '@stdlib/array-base-arraylike2object' );
import assert = require( '@stdlib/array-base-assert' );
import broadcastArray = require( '@stdlib/array-base-broadcast-array' );
import cartesianPower = require( '@stdlib/array-base-cartesian-power' );
import cartesianProduct = require( '@stdlib/array-base-cartesian-product' );
import cartesianSquare = require( '@stdlib/array-base-cartesian-square' );
import copy = require( '@stdlib/array-base-copy' );
import copyIndexed = require( '@stdlib/array-base-copy-indexed' );
import filled = require( '@stdlib/array-base-filled' );
import filledBy = require( '@stdlib/array-base-filled-by' );
import filled2d = require( '@stdlib/array-base-filled2d' );
import filled2dBy = require( '@stdlib/array-base-filled2d-by' );
import filled3d = require( '@stdlib/array-base-filled3d' );
import filled3dBy = require( '@stdlib/array-base-filled3d-by' );
import filled4d = require( '@stdlib/array-base-filled4d' );
import filled4dBy = require( '@stdlib/array-base-filled4d-by' );
import filled5d = require( '@stdlib/array-base-filled5d' );
import filled5dBy = require( '@stdlib/array-base-filled5d-by' );
import fillednd = require( '@stdlib/array-base-fillednd' );
import flatten = require( '@stdlib/array-base-flatten' );
import flattenBy = require( '@stdlib/array-base-flatten-by' );
import flatten2d = require( '@stdlib/array-base-flatten2d' );
import flatten2dBy = require( '@stdlib/array-base-flatten2d-by' );
import flatten3d = require( '@stdlib/array-base-flatten3d' );
import flatten3dBy = require( '@stdlib/array-base-flatten3d-by' );
import flatten4d = require( '@stdlib/array-base-flatten4d' );
import flatten4dBy = require( '@stdlib/array-base-flatten4d-by' );
import flatten5d = require( '@stdlib/array-base-flatten5d' );
import flatten5dBy = require( '@stdlib/array-base-flatten5d-by' );
import getter = require( '@stdlib/array-base-getter' );
import incrspace = require( '@stdlib/array-base-incrspace' );
import last = require( '@stdlib/array-base-last' );
import linspace = require( '@stdlib/array-base-linspace' );
import logspace = require( '@stdlib/array-base-logspace' );
import nCartesianProduct = require( '@stdlib/array-base-n-cartesian-product' );
import oneTo = require( '@stdlib/array-base-one-to' );
import ones = require( '@stdlib/array-base-ones' );
import ones2d = require( '@stdlib/array-base-ones2d' );
import ones3d = require( '@stdlib/array-base-ones3d' );
import ones4d = require( '@stdlib/array-base-ones4d' );
import ones5d = require( '@stdlib/array-base-ones5d' );
import onesnd = require( '@stdlib/array-base-onesnd' );
import setter = require( '@stdlib/array-base-setter' );
import take = require( '@stdlib/array-base-take' );
import toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
import unitspace = require( '@stdlib/array-base-unitspace' );
import zeroTo = require( '@stdlib/array-base-zero-to' );
import zeros = require( '@stdlib/array-base-zeros' );
import zeros2d = require( '@stdlib/array-base-zeros2d' );
import zeros3d = require( '@stdlib/array-base-zeros3d' );
import zeros4d = require( '@stdlib/array-base-zeros4d' );
import zeros5d = require( '@stdlib/array-base-zeros5d' );
import zerosnd = require( '@stdlib/array-base-zerosnd' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Accessor array constructor.
	*
	* @param arr - input array
	* @returns accessor array
	*
	* @example
	* var arr = new ns.AccessorArray( [ 1, 2, 3 ] );
	* // returns <ns.AccessorArray>
	*
	* var v = arr.get( 0 );
	* // returns 1
	*/
	AccessorArray: typeof AccessorArray;

	/**
	* Returns an accessor function for retrieving an element from an array-like object supporting the get/set protocol.
	*
	* @param dtype - data type
	* @returns accessor function
	*
	* @example
	* var arr = [ 1, 2, 3, 4 ];
	*
	* function aget( idx ) {
	*    return arr[ idx ];
	* }
	*
	* function aset( value, idx ) {
	*    arr[ idx ] = value;
	* }
	*
	* arr.get = aget;
	* arr.set = aset;
	*
	* var get = ns.accessorGetter( 'foo' );
	* var v = get( arr, 2 );
	* // returns 3
	*/
	accessorGetter: typeof accessorGetter;

	/**
	* Returns an accessor function for setting an element in an array-like object supporting the get/set protocol.
	*
	* @param dtype - data type
	* @returns accessor function
	*
	* @example
	* var arr = [ 1, 2, 3, 4 ];
	*
	* function aget( idx ) {
	*    return arr[ idx ];
	* }
	*
	* function aset( value, idx ) {
	*    arr[ idx ] = value;
	* }
	*
	* arr.get = aget;
	* arr.set = aset;
	*
	* var set = ns.accessorSetter( 'foo' );
	* set( arr, 2, 10 );
	*
	* var v = arr.get( 2 );
	* // returns 3
	*/
	accessorSetter: typeof accessorSetter;

	/**
	* Returns element accessors for a provided array-like object.
	*
	* ## Notes
	*
	* -   The intent of this function is to provide a minimal abstraction over how elements are accessed when operating on indexed (i.e., array-like objects supporting element accesss via integer indices using bracket `[]` syntax) and accessor (i.e., array-like objects supporting the get/set protocol in which explicit `get` and `set` methods are used for element access) array-like objects.
	*
	* @param x - input array
	* @returns object containing accessor data
	*
	* @example
	* var x = {
	*     '0': 1,
	*     '1': 2,
	*     '2': 3,
	*     '4': 4,
	*     'length': 4
	 };
	* var obj = ns.accessors( x );
	* // returns {...}
	*
	* var bool = obj.accessorProtocol;
	* // returns false
	*
	* var fcns = obj.ns.accessors;
	* // returns [ <Function>, <Function> ]
	*
	* var v = fcns[ 0 ]( x, 2 );
	* // returns 3
	*/
	accessors: typeof accessors;

	/**
	* Converts a one-dimensional array-like object to an object likely to have the same "shape".
	*
	* ## Notes
	*
	* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding array data to ensure that internal functions operating on arrays are provided consistent argument "shapes".
	*
	* @param x - input array
	* @returns object containing array data
	*
	* @example
	* var x = {
	*     '0': 1,
	*     '1': 2,
	*     '2': 3,
	*     '4': 4,
	*     'length': 4
	 };
	* var obj = ns.arraylike2object( x );
	* // returns {...}
	*
	* var bool = obj.accessorProtocol;
	* // returns false
	*
	* var fcns = obj.accessors;
	* // returns [ <Function>, <Function> ]
	*
	* var v = fcns[ 0 ]( x.data, 2 );
	* // returns 3
	*/
	arraylike2object: typeof arraylike2object;

	/**
	* Base array assertion utilities.
	*/
	assert: typeof assert;

	/**
	* Broadcasts an array to a specified shape.
	*
	* ## Notes
	*
	* -   The broadcasted array shares the same data as the input array. As more than one element of a broadcasted array may refer to the same memory location, writing to the broadcasted array may affect multiple elements. If you need to write to the broadcasted array, copy the array before performing operations which may mutate elements.
	* -   The function throws an error if a provided input shape is incompatible with a provided output shape.
	*
	* @param x - input array
	* @param inShape - input array shape
	* @param outShape - output array shape
	* @throws input array cannot have more dimensions than the desired shape
	* @throws input array dimension sizes must be `1` or equal to the corresponding dimension in the provided output shape
	* @returns broadcast object
	*
	* @example
	* var x = [ 1, 2 ];
	*
	* var out = ns.broadcastArray( x, [ 2 ], [ 2, 2 ] );
	* // returns {...}
	*
	* var shape = out.shape;
	* // returns [ 2, 2 ]
	*
	* var strides = out.strides;
	* // returns [ 0, 1 ]
	*
	* var ref = out.ref;
	* // returns [ 1, 2 ]
	*
	* var bool = ( x === ref );
	* // returns true
	*
	* var data = out.data;
	* // returns [ [ 1, 2 ] ]
	*
	* @example
	* var x = [ 1, 2 ];
	*
	* var out = ns.broadcastArray( x, [ 2 ], [ 2, 1, 2 ] );
	* // returns {...}
	*
	* var data = out.data;
	* // returns [ [ [ 1, 2 ] ] ]
	*
	* var strides = out.strides;
	* // returns [ 0, 0, 1 ]
	*
	* @example
	* var x = [ [ 1 ], [ 2 ] ];
	*
	* var out = ns.broadcastArray( x, [ 2, 1 ], [ 3, 2, 2 ] );
	* // returns {...}
	*
	* var data = out.data;
	* // returns [ [ [ 1 ], [ 2 ] ] ]
	*
	* var strides = out.strides;
	* // returns [ 0, 1, 0 ]
	*/
	broadcastArray: typeof broadcastArray;

	/**
	* Returns the Cartesian power.
	*
	* ## Notes
	*
	* -   If provided an empty array, the function returns an empty array.
	* -   If `n` is less than or equal to zero, the function returns an empty array.
	*
	* @param x - input array
	* @param n - power
	* @returns Cartesian product
	*
	* @example
	* var x = [ 1, 2 ];
	*
	* var out = ns.cartesianPower( x, 2 );
	* // returns [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
	*/
	cartesianPower: typeof cartesianPower;

	/**
	* Returns the Cartesian product.
	*
	* ## Notes
	*
	* -   If provided one or more empty arrays, the function returns an empty array.
	*
	* @param x1 - first input array
	* @param x2 - second input array
	* @returns Cartesian product
	*
	* @example
	* var x1 = [ 1, 2, 3 ];
	* var x2 = [ 4, 5 ];
	*
	* var out = ns.cartesianProduct( x1, x2 );
	* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
	*/
	cartesianProduct: typeof cartesianProduct;

	/**
	* Returns the Cartesian square.
	*
	* ## Notes
	*
	* -   If provided an empty array, the function returns an empty array.
	*
	* @param x - input array
	* @returns Cartesian product
	*
	* @example
	* var x = [ 1, 2 ];
	*
	* var out = ns.cartesianSquare( x );
	* // returns [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
	*/
	cartesianSquare: typeof cartesianSquare;

	/**
	* Copies the elements of an array-like object to a new "generic" array.
	*
	* @param x - input array
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.copy( x );
	* // returns [ 1, 2, 3 ]
	*/
	copy: typeof copy;

	/**
	* Copies the elements of an indexed array-like object to a new "generic" array.
	*
	* @param x - array length
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.copyIndexed( x );
	* // returns [ 1, 2, 3 ]
	*/
	copyIndexed: typeof copyIndexed;

	/**
	* Returns a filled "generic" array.
	*
	* @param value - fill value
	* @param len - array length
	* @returns output array
	*
	* @example
	* var out = ns.filled( 0.0, 3 );
	* // returns [ 0.0, 0.0, 0.0 ]
	*
	* @example
	* var out = ns.filled( 'beep', 3 );
	* // returns [ 'beep', 'beep', 'beep' ]
	*/
	filled: typeof filled;

	/**
	* Returns a filled "generic" array according to a provided callback function.
	*
	* @param len - array length
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( `@stdlib/utils/constant-function` );
	*
	* var arr = ns.filledBy( 5, constantFunction( 1.0 ) );
	* // returns [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	*/
	filledBy: typeof filledBy;

	/**
	* Returns a filled two-dimensional nested array.
	*
	* @param value - fill value
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.filled2d( 0.0, [ 1, 3 ] );
	* // returns [ [ 0.0, 0.0, 0.0 ] ]
	*
	* @example
	* var out = ns.filled2d( 'beep', [ 1, 3 ] );
	* // returns [ [ 'beep', 'beep', 'beep' ] ]
	*/
	filled2d: typeof filled2d;

	/**
	* Returns a filled two-dimensional nested array according to a provided callback function.
	*
	* @param shape - array shape
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( `@stdlib/utils/constant-function` );
	*
	* var arr = ns.filled2dBy( [ 1, 5 ], constantFunction( 1.0 ) );
	* // returns [ [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ]
	*/
	filled2dBy: typeof filled2dBy;

	/**
	* Returns a filled three-dimensional nested array.
	*
	* @param value - fill value
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.filled3d( 0.0, [ 1, 1, 3 ] );
	* // returns [ [ [ 0.0, 0.0, 0.0 ] ] ]
	*
	* @example
	* var out = ns.filled3d( 'beep', [ 1, 1, 3 ] );
	* // returns [ [ [ 'beep', 'beep', 'beep' ] ] ]
	*/
	filled3d: typeof filled3d;

	/**
	* Returns a filled three-dimensional nested array according to a provided callback function.
	*
	* @param shape - array shape
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( `@stdlib/utils/constant-function` );
	*
	* var arr = ns.filled3dBy( [ 1, 1, 5 ], constantFunction( 1.0 ) );
	* // returns [ [ [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ] ]
	*/
	filled3dBy: typeof filled3dBy;

	/**
	* Returns a filled four-dimensional nested array.
	*
	* @param value - fill value
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.filled4d( 0.0, [ 1, 1, 1, 3 ] );
	* // returns [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ]
	*
	* @example
	* var out = ns.filled4d( 'beep', [ 1, 1, 1, 3 ] );
	* // returns [ [ [ [ 'beep', 'beep', 'beep' ] ] ] ]
	*/
	filled4d: typeof filled4d;

	/**
	* Returns a filled four-dimensional nested array according to a provided callback function.
	*
	* @param shape - array shape
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( `@stdlib/utils/constant-function` );
	*
	* var arr = ns.filled4dBy( [ 1, 1, 1, 5 ], constantFunction( 1.0 ) );
	* // returns [ [ [ [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ] ] ]
	*/
	filled4dBy: typeof filled4dBy;

	/**
	* Returns a filled five-dimensional nested array.
	*
	* @param value - fill value
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.filled5d( 0.0, [ 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ]
	*
	* @example
	* var out = ns.filled5d( 'beep', [ 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ 'beep', 'beep', 'beep' ] ] ] ] ]
	*/
	filled5d: typeof filled5d;

	/**
	* Returns a filled five-dimensional nested array according to a provided callback function.
	*
	* @param shape - array shape
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns output array
	*
	* @example
	* var constantFunction = require( `@stdlib/utils/constant-function` );
	*
	* var arr = ns.filled5dBy( [ 1, 1, 1, 1, 5 ], constantFunction( 1.0 ) );
	* // returns [ [ [ [ [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ] ] ] ]
	*/
	filled5dBy: typeof filled5dBy;

	/**
	* Returns a filled n-dimensional nested array.
	*
	* @param value - fill value
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.fillednd( 0.0, [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ [ [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ] ] ] ] ] ]
	*
	* @example
	* var out = ns.fillednd( 'beep', [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ [ [ [ [ [ [ 'beep', 'beep', 'beep' ] ] ] ] ] ] ] ] ] ]
	*/
	fillednd: typeof fillednd;

	/**
	* Flattens an n-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten( x, [ 2, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten( x, [ 2, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten: typeof flatten;

	/**
	* Flattens an n-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flattenBy( x, [ 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flattenBy( x, [ 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flattenBy: typeof flattenBy;

	/**
	* Flattens a two-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten2d( x, [ 2, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten2d( x, [ 2, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten2d: typeof flatten2d;

	/**
	* Flattens a two-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten2dBy( x, [ 2, 2 ], false, scale );
	* // returns [ 2, 4, 6, 8 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = ns.flatten2dBy( x, [ 2, 2 ], true, scale );
	* // returns [ 2, 6, 4, 8 ]
	*/
	flatten2dBy: typeof flatten2dBy;

	/**
	* Flattens a three-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];
	*
	* var out = ns.flatten3d( x, [ 2, 1, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];
	*
	* var out = ns.flatten3d( x, [ 2, 1, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten3d: typeof flatten3d;

	/**
	* Flattens a three-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var out = ns.flatten3dBy( x, [ 2, 1, 2 ], false, scale );
	* // returns [ 2, 4, 6, 8 ]
	*
	* @example
	* var x = [ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ];
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var out = ns.flatten3dBy( x, [ 2, 1, 2 ], true, scale );
	* // returns [ 2, 6, 4, 8 ]
	*/
	flatten3dBy: typeof flatten3dBy;

	/**
	* Flattens a four-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = ns.flatten4d( x, [ 2, 1, 1, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = ns.flatten4d( x, [ 2, 1, 1, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten4d: typeof flatten4d;

	/**
	* Flattens a four-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = ns.flatten4dBy( x, [ 2, 1, 1, 2 ], false, scale );
	* // returns [ 2, 4, 6, 8 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ] ] ], [ [ [ 3, 4 ] ] ] ];
	*
	* var out = ns.flatten4dBy( x, [ 2, 1, 1, 2 ], true, scale );
	* // returns [ 2, 6, 4, 8 ]
	*/
	flatten4dBy: typeof flatten4dBy;

	/**
	* Flattens a five-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
	*
	* var out = ns.flatten5d( x, [ 2, 1, 1, 1, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
	*
	* var out = ns.flatten5d( x, [ 2, 1, 1, 1, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten5d: typeof flatten5d;

	/**
	* Flattens a five-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
	*
	* var out = ns.flatten5dBy( x, [ 2, 1, 1, 1, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
	*
	* var out = ns.flatten5dBy( x, [ 2, 1, 1, 1, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	flatten5dBy: typeof flatten5dBy;

	/**
	* Returns an accessor function for retrieving an element from an indexed array-like object.
	*
	* @param dtype - data type
	* @returns accessor function
	*
	* @example
	* var dtype = require( `@stdlib/array/dtype` );
	*
	* var arr = [ 1, 2, 3, 4 ];
	*
	* var get = ns.getter( dtype( arr ) );
	* var v = get( arr, 2 );
	* // returns 3
	*/
	getter: typeof getter;

	/**
	* Generates a linearly spaced numeric array according to a provided increment.
	*
	* @param x1 - first array value
	* @param x2 - array element bound
	* @param increment - increment
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.incrspace( 0, 11, 2 );
	* // returns [ 0, 2, 4, 6, 8, 10 ]
	*/
	incrspace: typeof incrspace;

	/**
	* Returns the last element of an array-like object.
	*
	* @param arr - input array
	* @returns last element
	*
	* @example
	* var arr = [ 1, 2, 3 ];
	*
	* var out = ns.last( x );
	* // returns 3
	*/
	last: typeof last;

	/**
	* Generates a linearly spaced numeric array.
	*
	* @param x1 - first array value
	* @param x2 - last array value
	* @param len - length of output array
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.linspace( 0, 100, 6 );
	* // returns [ 0, 20, 40, 60, 80, 100 ]
	*/
	linspace: typeof linspace;

	/**
	* Generates a logarithmically spaced numeric array.
	*
	* @param a - exponent of start value
	* @param b - exponent of end value
	* @param len - length of output array
	* @returns logarithmically spaced numeric array
	*
	* @example
	* var arr = ns.logspace( 0, 2, 6 );
	* // returns [ 1, ~2.5, ~6.31, ~15.85, ~39.81, 100 ]
	*/
	logspace: typeof logspace;

	/**
	* Returns the n-fold Cartesian product.
	*
	* ## Notes
	*
	* -   If provided one or more empty arrays, the function returns an empty array.
	*
	* @param x1 - first input array
	* @param x2 - second input array
	* @param xN - additional input arrays
	* @returns Cartesian product
	*
	* @example
	* var x1 = [ 1, 2, 3 ];
	* var x2 = [ 4, 5 ];
	*
	* var out = ns.nCartesianProduct( x1, x2 );
	* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
	*/
	nCartesianProduct: typeof nCartesianProduct;

	/**
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
	*
	* @param n - number of elements
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.oneTo( 6 );
	* // returns [ 1, 2, 3, 4, 5, 6 ]
	*/
	oneTo: typeof oneTo;

	/**
	* Returns a "generic" array filled with ones.
	*
	* @param len - array length
	* @returns output array
	*
	* @example
	* var out = ns.ones( 3 );
	* // returns [ 1.0, 1.0, 1.0 ]
	*/
	ones: typeof ones;

	/**
	* Returns a two-dimensional nested array filled with ones.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.ones2d( [ 1, 3 ] );
	* // returns [ [ 1.0, 1.0, 1.0 ] ]
	*/
	ones2d: typeof ones2d;

	/**
	* Returns a three-dimensional nested array filled with ones.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.ones3d( [ 1, 1, 3 ] );
	* // returns [ [ [ 1.0, 1.0, 1.0 ] ] ]
	*/
	ones3d: typeof ones3d;

	/**
	* Returns a four-dimensional nested array filled with ones.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.ones4d( [ 1, 1, 1, 3 ] );
	* // returns [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ]
	*/
	ones4d: typeof ones4d;

	/**
	* Returns a five-dimensional nested array filled with ones.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.ones5d( [ 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ]
	*/
	ones5d: typeof ones5d;

	/**
	* Returns an n-dimensional nested array filled with ones.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.onesnd( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ [ [ [ [ [ [ 1.0, 1.0, 1.0 ] ] ] ] ] ] ] ] ] ]
	*/
	onesnd: typeof onesnd;

	/**
	* Returns an accessor function for setting an element in an indexed array-like object.
	*
	* @param dtype - data type
	* @returns accessor function
	*
	* @example
	* var dtype = require( `@stdlib/array/dtype` );
	*
	* var arr = [ 0, 0, 0, 0 ];
	*
	* var set = ns.setter( dtype( arr ) );
	* set( arr, 2, 3 );
	*
	* var v = arr[ 2 ];
	* // returns 3
	*/
	setter: typeof setter;

	/**
	* Takes element from an array.
	*
	* ## Notes
	*
	* -   The function does **not** perform bounds checking. If an index is less than zero or greater than the maximum index of `x`, the value of the corresponding element in the output array is undefined.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = ns.take( x, [ 1, 3 ] );
	* // returns [ 2, 4 ]
	*/
	take: typeof take;

	/**
	* Converts an array-like object to a minimal array-like object supporting the accessor protocol.
	*
	* ## Notes
	*
	* -   If a provided array-like object already supports the accessor protocol, the function returns the provided array-like object; otherwise, the function wraps the provided value in a object which uses accessors for getting and setting elements.
	*
	* @param arr - input array
	* @returns accessor array
	*
	* @example
	* var arr = ns.toAccessorArray( [ 1, 2, 3 ] );
	* // returns <AccessorArray>
	*
	* var v = arr.get( 0 );
	* // returns 1
	*
	* @example
	* var Complex128Array = require( `@stdlib/array/complex128` );
	*
	* var arr = ns.toAccessorArray( new Complex128Array( 10 ) );
	* // returns <Complex128Array>
	*/
	toAccessorArray: typeof toAccessorArray;

	/**
	* Generates a linearly spaced numeric array whose elements increment by 1.
	*
	* @param x1 - first array value
	* @param x2 - array element bound
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.unitspace( 0, 6 );
	* // returns [ 0, 1, 2, 3, 4, 5 ]
	*/
	unitspace: typeof unitspace;

	/**
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero.
	*
	* @param n - number of elements
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.zeroTo( 6 );
	* // returns [ 0, 1, 2, 3, 4, 5 ]
	*/
	zeroTo: typeof zeroTo;

	/**
	* Returns a zero-filled "generic" array.
	*
	* @param len - array length
	* @returns output array
	*
	* @example
	* var out = ns.zeros( 3 );
	* // returns [ 0.0, 0.0, 0.0 ]
	*/
	zeros: typeof zeros;

	/**
	* Returns a zero-filled two-dimensional nested array.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.zeros2d( [ 1, 3 ] );
	* // returns [ [ 0.0, 0.0, 0.0 ] ]
	*/
	zeros2d: typeof zeros2d;

	/**
	* Returns a zero-filled three-dimensional nested array.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.zeros3d( [ 1, 1, 3 ] );
	* // returns [ [ [ 0.0, 0.0, 0.0 ] ] ]
	*/
	zeros3d: typeof zeros3d;

	/**
	* Returns a zero-filled four-dimensional nested array.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.zeros4d( [ 1, 1, 1, 3 ] );
	* // returns [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ]
	*/
	zeros4d: typeof zeros4d;

	/**
	* Returns a zero-filled five-dimensional nested array.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.zeros5d( [ 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ]
	*/
	zeros5d: typeof zeros5d;

	/**
	* Returns a zero-filled n-dimensional nested array.
	*
	* @param shape - array shape
	* @returns output array
	*
	* @example
	* var out = ns.zerosnd( [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3 ] );
	* // returns [ [ [ [ [ [ [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ] ] ] ] ] ]
	*/
	zerosnd: typeof zerosnd;
}

/**
* Base (i.e., lower-level) array utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;