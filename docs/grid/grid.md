# Grid
Assembly is based on a 12-column, [8-point](https://blog.prototypr.io/the-8pt-grid-consistent-spacing-in-ui-design-with-sketch-577e4f0fd520) grid system.  In our opinion, an 8-point system is optimal for spacing, and not only looks good but sets a consistent base for spacing and sizing across the board.

## Responsiveness
The grid system built into Assembly is also responsive, meaning it can adapt to any screen size appropriately.  This includes desktop, tablet, and mobile.  Read more on [breakpoints in Assembly](./breakpoints.md).

## Flexbox
The Assembly grid system is built using CSS3 `flexbox`.  [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) is a modern display type that allows for easy scaling, sizing, and resizing of content based on the viewport and the parent container.

# Usage
Basic usage is fairly straight forward.  The grid itself is always responsive.  If you want to align it to a specific width, you will need to put it inside a [container](./containers.md).

## Rows
To initialize the grid, simply create a `<div>` with the attribute `class="row"`.  This will allow you to put flexbox columns inside.
```html
<div class="row">
  // columns will go here
</div>
```

## Columns
Once you've created your `row`, you'll need to create a few columns to finish up the grid.  Columns are made up of two classes: `col` and `w-*` where * is replaced by a number 1-12.  The sum of the `w-*` classes should equal 12 to create a full-width row.  The exception to this is if you have used an [offset](#offset) class.  More on that later.

For example, a grid with 3 equal columns would be marked up like this:
```html
// create our row
<div class="row">
  // create 3 divisions that are 4 columns wide (totaling 12 columns)
  <div class="col w-4">Column Content</div>
  <div class="col w-4">Column Content</div>
  <div class="col w-4">Column Content</div>
</div>
```

#### Offsets
There may be cases where you'll want to push your content over without creating extra empty columns (empty columns are bad for accessibility).  To do this, you'll need to add an `offset` class.  Take that 3 column example we just did.  If we wanted to get rid of the first column but keep columns two and three in place, we would do this:
```html
// create our row
<div class="row">
  // create 2 divisions that are 4 columns wide and offset by 4 columns (totaling 12 columns)
  <div class="col w-4 o-4">Column Content</div>
  <div class="col w-4">Column Content</div>
</div>
```