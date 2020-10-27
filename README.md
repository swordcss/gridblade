<h1 align="center">GridBlade</h1>
<h2 align="center">A simple CSS grid framework built with SwordCSS and SCSS</h2>

### Installation

`npm install --save gridblade`

### Usage

#### Creating a Grid

The maximum number of columns and the maximum number of rows is 24. You can create a grid with

```html
<div class="gb-container-<no. of columns>-<no. of rows>"></div>
```

where you fill in the number of columns and the number of rows.

#### Creating Items

Creating an item for a grid is relatively simple:

```html
<div class="gb-item">This is an item</div>
```

You of course have to keep the items inside the grid tag.

### Size

GridBlade does have a somewhat large size. It is recommended to optimize it with PurgeCSS and not to just insert it into `<head />` tag.

### Supporters

[![Stargazers repo roster for @swordcss/gridblade](https://reporoster.com/stars/swordcss/gridblade)](https://github.com/swordcss/gridblade/stargazers)

[![Forkers repo roster for @swordcss/gridblade](https://reporoster.com/forks/swordcss/gridblade)](https://github.com/swordcss/gridblade/network/members)
