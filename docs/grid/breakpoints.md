# Breakpoints
Assembly has four responsive breakpoints.  They can be accessed directly in `SCSS` by calling each variable as shown below.
```scss
$size-mobile:        480px;
$size-tablet-small:  768px;
$size-tablet-large:  991px;
$size-desktop:       1199px;
```

Each component-level `SCSS` file has a set of `@media` queries at the bottom utilizing these breakpoints.  Component-level files are indicated with an underscore like `_%filename%.scss` but do not have the `conf-` prefix.

Rather than making changes to these component-level `@media` queries, we recommend setting any customizations (including to `@media` queries) in the `_custom.scss` file.