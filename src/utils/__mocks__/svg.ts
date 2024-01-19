/**
 * <svg> elements do not have an `alt` attribute (ref: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg)
 *  Instead, they use the <title> tag to define their accessible name (ref: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title)
 *
 * It seems that using `title` as an attribute generates the accessible name when testing on chrome, however, this is not officially supported (ref: https://www.w3.org/TR/svg-aam-1.0/)
 *  Therefore, we use the `aria-label` attribute to make SVG images accessible.
 */

const SVGIcon = 'svg';

export default SVGIcon;
