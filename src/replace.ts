import {curry} from "flow-static-land/lib/Fun";

/**
 * Returns a new Array with the result of having replaced the elements at the
 * given index with the ones specified.
 */
const replaceF = <Element>(
  index: number,
  elements: Array<Element>,
  array: Array<Element>
): Array<Element> => [
  ...array.slice(0, index),
  ...elements,
  ...array.slice(index + elements.length)
];

const replace = curry(replaceF)

export default replace;
