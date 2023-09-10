---
sidebar_position: 2
---

# Methods


## Instance methods


### open()

Open the Popover instance.

```ts
open(): void;
```

### close()

Close the Popover instance.

```ts
close(): void;
```

### toggle()

Toggle the Popover instance open or close.

```ts
toggle(): void;
```

### openWithDelay()

Open the popover after `config.openDelay` time.

```ts
openWithDelay(): void;
```

### closeWithDelay()

Close the popover after `config.closeDelay` time.

```ts
closeWithDelay(): void;
```

### enable()

Enable.

```ts
enable(): void
```

### disable()

Disable and close popover.

```ts
disable(): void
```

### updateConfig()

Update config.

```ts
updateConfig(config: Partial<PopoverConfig>): void;
```

### destroy()

Destroy the Popover instance.

```ts
destroy(): void;
```

### onScroll()

Manually trigger the `onScroll` event.

```ts
onScroll(): void;
```

### update()

Manually update the position of the Popover instance.

```ts
update(): void;
```
