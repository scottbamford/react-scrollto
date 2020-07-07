# react-scrollto
React component that can scroll to itself using scrollInView when its shouldScrollTo prop is true.

## Installation

Install react-scrollto locally within your project folder, like so:

```shell
npm install @scottbamford/react-scrollto
```

Or with yarn:

```shell
yarn add @scottbamford/react-scrollto
```

## Basic Usage

Add <ScrollTo /> to the place you want to scroll to automatically.

When you have multiple areas you may want to scroll to under different conditions, use the shouldScrollTo prop, the page will be scrolled to the component that has shouldScrollTo set to true.

Scrolling will take place only on first render.

### Typescript
```ts
import { ScrollTo } from '@scottbamford/react-scrollto';

// Basic usage
<ScrollTo />

// Usage with children
<ScrollTo>
    <div>
       You will scroll here.
    </div>
</ScrollTo>

// Usage with a condition or a loop
{
    items.map(item => (
        <ScrollTo key={item.id} shouldScrollTo={item.id === idToScrollTo}>
            {item.name}
        </ScrollTo>
        )
}

```

### Javascript
```js
import { ScrollTo } from '@scottbamford/react-scrollto';

// Basic usage
<ScrollTo />

// Usage with children
<ScrollTo>
    <div>
       You will scroll here.
    </div>
</ScrollTo>

// Usage with a condition or a loop
{
    items.map(item => (
        <ScrollTo key={item.id} shouldScrollTo={item.id === idToScrollTo}>
            {item.name}
        </ScrollTo>
        )
}

```

## CSS and Styling

<ScrollTo> renders as a div with a CSS class of scroll-to-active when the we have scrolled to that element.  This
allows you to style its children using CSS.  For example to put a orange border around a Card found within the the active ScrollTo in order to highlight it from other cards in a loop:

``css
.scroll-to-active > .card {
    border-color: orange;
}
``

## Typescript
This package is written in typescript and comes with its own bindings.

## License

Licensed under the MIT license.
