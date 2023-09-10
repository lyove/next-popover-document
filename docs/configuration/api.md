---
sidebar_position: 1
---

# API

### Config

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `trigger` | `HTMLElement ` | | `Required`. The trigger element |
| `content` | `HTMLElement \| string \| number` | | `Required`. The content element to be popped up |
| `appendTo` | `HTMLElement` | `document.body` | The element to append the popover to. |
| `placement` | `PlacementType` | `PlacementType.Top` | The placement of the popover. |
| `showArrow` | `Boolean` | `true` | Whether to show arrow |
| `emit` | `EmitType` | `EmitType.Click` | Trigger emit type |
| `autoUpdate` | `boolean` | `true` | Whether to automatically update the position when the mount container, content, or trigger size changes. |
| `open` | `boolean` |  | Whether to open the popover box by default |
| `openDelay` | `number` | `100` | Open delay |
| `closeDelay` | `number` | `100` | Close delay |
| `enterable` | `boolean` | `true` | When `emit` is set to `hover`, can the mouse enter the popover |
| `disabled` | `boolean` | | Disabled |
| `clickOutsideClose` | `boolean` | `true` | Automatically close the popover when clicking outside |
| `closeOnScroll` | `boolean` | | Whether to automatically close the popover when the trigger element is scrolled. |
| `triggerOpenClass` | `string` | | The `class` added to the `trigger` when the popover is opened. |
| `wrapperClass` | `string` | | The `class` added to the `popoverWrapper`. |
| `animationClass` | `string` | | The CSS animation class name. |
| `onBeforeEnter` | `() => void` | | Called before the CSS enter animation starts. |
| `onEntered` | `() => void` | | 	Called when the CSS enter animation ends. |
| `onBeforeExit` | `() => void` | | Called before the CSS exit animation starts. |
| `onExited` | `() => void` | | Called when the CSS exit animation ends. |
| `onOpen` | `() => void` | | Called when the popover is opened. |
| `onClose` | `() => void` | |Called when the popover is closed. |
| `onClickOutside` | `() => void` | | When the popover is closed. |

### Instance properties

| Name | Type | Description |
| -- | -- | -- |
| `config` | `PopoverConfig` | Popover configuration object |
| `popoverRoot` | `HTMLElement` | The popover root element |
| `popoverWrapper` | `HTMLElement` | The popover wrapper element |
| `popoverContent` | `HTMLElement` | The popover Content element |
| `arrowElement` | `HTMLElement` | The popover arrow element |
| `opened` | `boolean` | Indicates whether the popover is currently displayed |