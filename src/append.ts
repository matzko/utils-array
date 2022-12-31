import {curry} from "flow-static-land/lib/Fun";

/**
 * Returns a new Array with elements appended to the one given.
 */
function appendF(
  elements: Array<Element>,
  array: Array<Element>
): Array<Element> {
   return [...array, ...elements];
}

const append = curry(appendF)

export default append
