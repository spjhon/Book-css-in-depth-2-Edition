# CSS in Depth, 2nd edition

Code listings from [CSS In Depth](https://manning.com/books/css-in-depth) by Keith J. Grant

Note: this repository is still a work in progress; many listings are copied from the first edition and are not yet updated.

At first glance, it may appear that some listings are missing—Because working examples requires both HTML and CSS, I have put most listings in an HTML file, using <style> tags for the CSS. This means that both an HTML listing and CSS listing are combined in one file in the repository.

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


