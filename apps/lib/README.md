# Glixy

`glixy` is a Svelte library for building WebGL applications with ease. It provides delightful abstraction over the PixiJS in Svelte, to create and manage WebGL contexts, containers, and sprites.

### [Live demo](https://glixy.dev)

## Installation

To install the package:

```sh
pnpm i glixy
```

## Usage

### Stage

The `Stage` component sets up the WebGL stage.

```svelte
<script lang="ts">
	import { Stage } from 'glixy';
</script>

<Stage>
	<!-- Your WebGL content here -->
</Stage>
```

### Container

The `Container` component is used to group and position other WebGL elements.

```svelte
<script lang="ts">
	import { Container } from 'glixy';
</script>

<Container x={100} y={100}>
	<!-- Your WebGL elements here -->
</Container>
```

### Sprite

The `Sprite` component is used to render images in the WebGL context.

```svelte
<script lang="ts">
	import { Sprite } from 'glixy';
</script>

<Sprite
	texture="https://pixijs.com/assets/bunny.png"
	x={150}
	y={150}
	scale={{ x: 1, y: 1 }}
	rotation={0}
/>
```

## Components

### Stage

- Under the hood it's using PixiJS Application, [See API](https://pixijs.download/dev/docs/app.ApplicationOptions.html)

### Container

- **props**:
  - `x`: X position of the container.
  - `y`: Y position of the container.

### Sprite

- **props**:
  - `texture`: URL of the image to be used as the texture.
  - `x`: X position of the sprite.
  - `y`: Y position of the sprite.
  - `scale`: Scale of the sprite.
  - `rotation`: Rotation of the sprite.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.
