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

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import arraylike2object = require( '@stdlib/array-base-arraylike2object' );
import copy = require( '@stdlib/array-base-copy' );
import filled = require( '@stdlib/array-base-filled' );
import filledBy = require( '@stdlib/array-base-filled-by' );
import incrspace = require( '@stdlib/array-base-incrspace' );
import linspace = require( '@stdlib/array-base-linspace' );
import logspace = require( '@stdlib/array-base-logspace' );
import ones = require( '@stdlib/array-base-ones' );
import unitspace = require( '@stdlib/array-base-unitspace' );
import zeros = require( '@stdlib/array-base-zeros' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
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
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var obj = ns.arraylike2object( x );
	* // returns {...}
	*/
	arraylike2object: typeof arraylike2object;

	/**
	* Copies the elements of an array-like object to a new "generic" array.
	*
	* @param x - array length
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
}

/**
* Base (i.e., lower-level) array utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
