# Getting Started

## Installation

```
npm install --save gridblade
```

## Usage

Every GridBlade class is prefixed with `gb-` to make it easier to use with other CSS frameworks.

### Creating a Grid

Every grid class begins with `grid-` along with the `gb-` prefix. Following that is `<# of columns>-` and `<# of rows>`.

### Creating a Grid Item

There is only one grid item class, `gb-item`, which automatically changes it's position to fit with the grid and all the other items within the grid.

### Example

```html
<div class="gb-grid-4-3">
    <div class="gb-item">This is one item!</div>
    <div class="gb-item">This is another item!</div>
</div>
```