---
title: Testing Markdown Styles
include: [pagehead]
date: 2024-08-13
tags: [test1, test2]
description: There are lots of styles I might end up applying to a Markdown article, which all need to be designed coherently. This post uses pretty much all of them, so I can check they're working nicely.
---


## General body content

Typical body content will just be long paragraphs like this, wihthout any specialised presentation. Within those, there are a number of decorations for text that need to be considered. Text could be *emphasised*, **strong**, ~struck through~, |marked|, "quoted", or inline `code`.

Designers should have a strong handle on core CSS concepts like the box model, selectors, specificity and inheritance.

> Here's a block quote, to test how these are presented. It's quite long, so hopefully it'll run over a couple of a lines, but I could always add some more.

> Within these, the same set of formatting could take place as in regular body content: Text could be *emphasised*, **strong**, ~~struck through~~, |marked|, "quoted", or inline `code`.

## More specific blocks

### Images
One specialised type of content that needs presenting is images. Really, we also need to test how captions etc. will work.

### Code blocks
Another type is code blocks, which probably have a lot of their own styling challenges.

``` js .blue
function toggleAttr(el, name, flag) {
  flag ? el.setAttribute(name, 1) :  el.removeAttribute(name)
}

function restoreTabs(flags) {
  const panels = $$('[role=tabpanel]')

  $$('[role=tab]').forEach((el, i) => {
    toggleAttr(el, 'aria-selected', flags[i])
    toggleAttr(panels[i], 'hidden', !flags[i])
  })
}
```

## Conclusion

In conclusion, thoughtfully naming CSS classes, IDs, and other selectors is an important part of keeping stylesheets scalable and maintainable. Use semantic, descriptive names that communicate what a selector is styling. Implement methodical naming conventions and structures for better organization.


```css .pink
.pink {
  background-image: linear-gradient(#e879f9, #ec4899);
  padding: 3em 0 0 3em;
  border-radius: .8em;
  overflow: hidden;
  margin: 1.5em 0 2em;

  pre {
    padding: 2em;
    margin: 0;
  }
}
```

Avoid repetitive and overly specific names by separating structural styles from visual ones. And don’t be afraid to chain multiple classes together for more modular and flexible selectors.
