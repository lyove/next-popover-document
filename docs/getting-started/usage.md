---
sidebar_position: 2
---

# Usage

### Basic

```js
import Popover, { PlacementType, EmitType } from "next-popover";

const trigger = document.querySelector(".trigger");

const content = "Hello Next-Popover";
// or
// const content = document.createElement('div'); // You need to pop up the displayed content
// content.classList.add('content');
// content.innerHTML = "Hello Next-Popover";

const appendTo = document.querySelector(".mount-container"); // default: document.body

const popover = new Popover({
  trigger, // required
  content, // required
  appendTo,
  placement: PlacementType.Top, // Set the position of the popover
  emit: EmitType.Hover, // Set to open the popover when the mouse hovers over the trigger
});

trigger.onclick = () => {
  popover.toggle();
  // or
  // if (popover.opened) {
  //   popover.close();
  // } else {
  //   popover.open();
  // }
};

// if you don't need it anymore
popover.destroy();
```

:::tip My tip

If use CDN, use `new NextPopover.default({...})`, note `default`

:::

### CSS Animation

The animationClass parameter allows you to add CSS animations when showing and hiding the popover.

```js
const popover = new Popover({
  animationClass: "fade",
});
```

Popover will add the following 6 classes through the animationClass.

```js
`${animationClass}-enter-from` // Starts displaying and is removed in the next frame.
`${animationClass}-enter-active` // Added in the next frame and removed when the animation ends.
`${animationClass}-enter-to` // Added in the next frame and removed when the animation ends.
`${animationClass}-exit-from` // Starts hiding and is removed in the next frame.
`${animationClass}-exit-active` // Added in the next frame and removed when the animation ends.
`${animationClass}-exit-to` // Added in the next frame and removed when the animation ends.
`${animationClass}-${Placement}`; // Current popover placement
```

You can write CSS styles like this:

```css
.fade-enter-from,
.fade-exit-to {
  transform: scale(0.7);
  opacity: 0;
}
.fade-enter-active,
.fade-exit-active {
  transition: transform 0.1s ease, opacity 0.1s ease;
}
```

### Scroll

The closeOnScroll parameter controls whether the popover automatically closes when the trigger element is scrolled.

<!-- The hideOnInvisible parameter controls whether the popover automatically hides when the trigger element is not visible on the screen. -->

### AutoUpdate

The autoUpdate parameter controls whether the popover's position is automatically updated when the size of the mount container, content, or trigger element changes. This feature relies on the [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).

### Hook

Popover provides rich hook functions that can execute code during various stages of the popover's lifecycle.

```js
new Popover({
  onBeforeEnter() {
    // Executed before the CSS display animation starts.
  },
  onEntered() {
    // Executed after the CSS display animation completes.
  },
  onBeforeExit() {
    // Executed before the CSS hide animation starts.
  },
  onExited() {
    // Executed after the CSS hide animation completes.
  },
  onOpen() {
    // Executed when the popover is displayed.
  },
  onClose() {
    // Executed when the popover is closed.
  },
});
```
