import {curry} from "flow-static-land/lib/Fun";

/**
 * Returns a new Array with the result of having removed the specified amount
 * (count) of elements at the given index.
 */
const removeF = function(
  index: number,
  count: number,
  array: Array<Element>
): Array<Element> {
  return [...array.slice(0, index), ...array.slice(index + count)]
}

const remove = curry(removeF)

export { remove };
