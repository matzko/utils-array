// @flow

import {curry} from "flow-static-land/lib/Fun";

/**
 * Returns true if given index is the last one or false otherwise.
 */
const isLastIndexF = (array: Array<any>, index: number): boolean =>
  index === array.length - 1;

const isLastIndex = curry(isLastIndexF)
export default isLastIndex;
