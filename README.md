# CSS in Depth, 2nd edition

Code listings from [CSS In Depth](https://manning.com/books/css-in-depth) by Keith J. Grant

Note: this repository is still a work in progress; many listings are copied from the first edition and are not yet updated.

At first glance, it may appear that some listings are missing—Because working examples requires both HTML and CSS, I have put most listings in an HTML file, using `<style>` tags for the CSS. This means that both an HTML listing and CSS listing are combined in one file in the repository.

For example, in Chapter 1, listing 1.1 is HTML code and listing 1.2 is CSS that is meant to be applied to that HTML. I have included these both in the repository in the file named ch01/listing-1.2.html. Changes are made to this CSS in ch01/listing 1.3; these are included in ch01/listing-1.3.html, along with the corresponding HTML from listing 1.1.

Contents:

Chapter 01: Cascade, specificity, and inheritence

Summary

- Keep selector specificity under control.
- Don’t confuse cascade with inheritance.
- Certain properties are inherited, including those for text, lists, and table borders.
- Don’t confuse initial and auto values.
- Stay out of TRouBLe with shorthand properties.

Chapter 02 : Working with realtive units

This chapter covers

- The versatility of relative units
- How to use ems and rems, without letting them drive you mad
- Using viewport-relative units
- An introduction to CSS variables

Summary

- Embrace the use of relative units, allowing the page’s structure to determine the meaning of your styles.
- Favor the use of rems for font size, but selectively use ems for simple scaling of components on the page.
- You can make your entire page scale responsively without any media queries.
- Use unitless values when specifying line height.
- You can start getting familiar with one of CSS’s newest features, custom properties.

Chapter 03: Mastering the box model

This chapter covers

- Practical advice for element sizing
- Vertical centering
- Columns of equal height
- Negative margins and margin collapsing
- Consistent spacing of components on the page

Summary

- Always use a universal border-box fix for predictable element sizing.
- Avoid explicitly setting the height of an element to avoid overflow issues.
- Use modern layout techniques like display: table or a flexbox to produce columns of equal height or to vertically center content.
- If your margins behave oddly, take steps to prevent margins from collapsing.
- Consider using the lobotomized owl selector on your page to globally apply margins between stacked elements. (That is, it selects all elements on the page that aren’t the
first child of their parent, so margin can be apply)

Chapter 04: Making sense of floats

This chapter covers

- How floats work and how to avoid common pitfalls
- Container collapsing and the clearfix
- The media object and double container pattern
- Block formatting contexts
- How to build and understand a grid system

Summary

- Floats exist to allow text to wrap around an element—but that’s not often the effect you want.
- Use a clearfix to contain floated elements.
- Understand the three tricks of a block formatting context: containing floats, preventing margin collapse, and preventing document flow from wrapping around a floated element.
- Use the double container pattern to center page contents.
- Use the media object pattern to position descriptive text alongside an image.
- Use a grid system to create a wide array of page layouts.

Chapter 05: Flexbox

This chapter covers

- Flex containers and flex items
- Main axis and cross axis
- Element sizes in flexbox
- Element alignment in flexbox

Summary

- Use flexbox for versatile, easy-to-control layout of page content.
- Autoprefixer can simplify flexbox support for older browsers.
- Use flex to specify almost any imaginable combination of flex item sizes.
- Use nested flexboxes to piece together more complicated layouts and to fill the heights of naturally sized boxes.
- Flexbox automatically creates columns of equal height.
- Use align-items or align-self to vertically center a flex item inside its flex container.

Chapter 06: Grid Layout

This chapter covers

- Using CSS’ first true layout system—grid
- Understanding grid layout options
- Laying out items on a grid
- Using flexbox and grid together to build a cohesive web page layout

Summary

- Grid is excellent for a high-level layout of the web page (but it is not limitedto that).
- You can use grid in conjunction with flexbox for a complete layout system.
- You should use whichever syntax (numbered grid lines, named grid lines, or named grid areas) is the most intuitive for you and the given situation.
- You can use auto-fill/auto-fit and the implicit grid for layouts with a large or unknown number of grid items.
- You can use feature queries for progressive enhancement.

Chapter 07: Positioning and stacking contexts

This chapter covers

- The types of element positioning: fixed, relative, and absolute
- Building modal dialogs and dropdown menus
- CSS triangles
- Understanding z-index and stacking contexts
- A new type of positioning: sticky

Summary

- Use fixed positioning for modal dialogs.
- Use absolute positioning for dropdown menus, tooltips, and other dynamic interactions.
- Be aware of accessibility concerns when building these features.
- There are two gotchas of z-index: it only works on positioned elements and using it creates a new stacking context.
- Be aware of the potential pitfalls when creating multiple stacking contexts on a page.
- Keep an eye out for better browser support of sticky positioning.

Chapter 08: Responsive design

This chapter covers

- Building web pages for multiple devices and screen sizes
- Using media queries to alter your design based on viewport size
- Taking the “mobile first” approach
- Responsive images

Summary

- Always build your designs mobile first.
- Use media queries to progressively enhance the page at larger and larger viewports.
- Use fluid layouts that fit the screen at any browser size.
- Use responsive images to fit the bandwidth limitation of mobile devices.
- Don’t forget to include your meta viewport tag.

Chapter 09: Modular CSS

This chapter covers

- Emerging problems as a project grows
- Organizing CSS into modules
- Preventing escalating selector specificity
- Surveying popular CSS methodologies

Summary

- Break your CSS up into small, reusable modules.
- Never write styles that reach into another module and change its appearance.
- Use variant classes to provide multiple versions of the same module.
- Divide large constructs into smaller modules; build your pages by piecing together a number of modules.
- Group all rules for a module together in your stylesheet.
- Use a naming convention such as double-hyphens and double-underscores to make your modules’ structure easier to understand at a glance.

Chapter 10: Pattern Libraries

This chapter covers

- Building a pattern library to document your modules
- Incorporating a pattern library into your development process
- Applying a CSS First approach to writing styles
- Safely editing and deleting CSS
- Utilizing CSS frameworks such as Bootstrap

Summary

- Use a tool such as KSS to document and inventory your modules.
- Use a pattern library to document markup examples, module variants, and JavaScript for your modules.
- Develop your modules “CSS First.”
- Consider the API your CSS defines, taking care to never break it unpredictably.
- Version your CSS using semver.
- Don’t blindly add a CSS framework to your page; selectively take only the pieces you need.

Chapter 11: Backgrounds, shadows, and blend modes

This chapter covers

- Linear and radial gradients
- Box shadows and text shadows
- Sizing and positioning background images
- Using blend modes to combine backgrounds and content

Summary

- Use gradients and shadows to add the appearance of depth to the page.
- Even basic flat designs can benefit from some subtle shadows or gradients.
- Use gradients with explicit color stops to add stripes to an element.
- A subtle background gradient rather than a flat color provides a little more complexity to the design.
- Use blend modes to colorize or texture an image.

Chapter 12: Contrast, color, and spacing

This chapter covers

- Converting a designer mockup into HTML and CSS
- Using contrast to draw attention to the right parts of a page
- Selecting colors
- Leveraging white space
- Working with line height

Summary

- Use contrast selectively to draw attention to important parts of the page.
- Use HSL color to make working with colors easier and more understandable at a glance.
- Trust your designer when they get picky about nitty gritty details.
- Take the time to fine-tune spacing.
- Remember that line height can impact your vertical spacing.

Chapter 13: Typograhpy

This chapter covers

- How web fonts can give your page a unique feel
- Using the Google Fonts API
- Tuning font spacing (tracking and leading)
- Web font performance concerns and optimizations
- Dealing with FOUT and FOIT

Summary

- Use a font provider such as Google Fonts for easy web font integration.
- Strictly limit the number of web fonts you add to the page to keep page size under control.
- Use @font-face rules when hosting your own fonts.
- Take the time to adjust line-height and letter-spacing to set your page apart.
- Use Font Face Observer or other JavaScript to help control loading behavior and prevent invisible text problems.
- Keep an eye out for font-display support in the future.

Chapter 14: Transitions

This chapter covers

- Bringing motion to the page with transitions
- Understanding timing functions and choosing the right one
- Coordinating with JavaScript

Summary

- You can use transitions to smooth sudden changes in the page.
- To catch the user’s attention, use an accelerating motion.
- To show the user that their action has taken effect, use a decelerating motion.
- You can use JavaScript to coordinate transitions with class name changes when CSS alone cannot do what you need.

Chapter 15: Transforms

This chapter covers

- Manipulating elements using transforms for performant transitions and animations
- Adding a “bounce” effect to a transition
- The browser’s rendering pipeline
- Looking at 3D transforms and perspective
