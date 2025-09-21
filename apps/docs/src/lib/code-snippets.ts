export const STAGE_CODE_SNIPPET = `<script>
  import { Stage, Sprite } from 'glixy';
  
  let host: HTMLElement | null = $state(null);
</script>

<div bind:this={host} class="w-full h-96">
  {#if host}
    <Stage {host}>
      <Sprite texture="/image.png" x={100} y={100} />
    </Stage>
  {:else}
    <div>Loading stage...</div>
  {/if}
</div>`;

export const GETTING_STARTED_CODE_SNIPPET = (
	imports: string,
	children: string,
	scripts?: string,
) => `<script lang="ts">
  import { ${imports} } from 'glixy';

  let host: HTMLElement | null = $state(null);${scripts ? `\n  ${scripts}` : ''}
</script>

<div bind:this={host} style="background-color: #111111;">
  {#if host}
    <Stage {host} background="#111111">
      ${children}
    </Stage>
  {:else}
    <div>Loading stage...</div>
  {/if}
</div>`;

export const CONTAINER_CODE_SNIPPET = `<script>
  import { Stage, Container, Sprite } from 'glixy';
  
  let host: HTMLElement | null = $state(null);
</script>

<div bind:this={host} class="w-full h-96">
  {#if host}
    <Stage {host}>
      <Container x={100} y={100} rotation={0.5}>
        <Sprite texture="/image1.png" x={0} y={0} />
        <Sprite texture="/image2.png" x={50} y={50} />
      </Container>
    </Stage>
  {:else}
    <div>Loading stage...</div>
  {/if}
</div>`;

export const SPRITE_CODE_SNIPPET = `<script>
  import { Stage, Sprite } from 'glixy';
  
  let host: HTMLElement | null = $state(null);
</script>

<div bind:this={host} class="w-full h-96">
  {#if host}
    <Stage {host}>
      <Sprite 
        texture="/image.png" 
        x={100} 
        y={100} 
        width={200}
        height={150}
      />
    </Stage>
  {:else}
    <div>Loading stage...</div>
  {/if}
</div>`;

export const TEXT_CODE_SNIPPET = `<script>
  import { Stage, Text } from 'glixy';
  
  let host: HTMLElement | null = $state(null);
</script>

<div bind:this={host} class="w-full h-96">
  {#if host}
    <Stage {host}>
      <Text 
        text="Hello, Glixy!" 
        x={100} 
        y={100}
        style={{
          font: 'Arial',
          size: 24,
          color: 0x333333
        }}
      />
    </Stage>
  {:else}
    <div>Loading stage...</div>
  {/if}
</div>`;

export const VIDEO_CODE_SNIPPET = `<script>
  import { Stage, Video } from 'glixy';
  
  let host: HTMLElement | null = $state(null);
</script>

<div bind:this={host} class="w-full h-96">
  {#if host}
    <Stage {host}>
      <Video 
        texture="/video.mp4" 
        x={100} 
        y={100} 
        width={320}
        height={240}
        loop={true}
        muted={true}
      />
    </Stage>
  {:else}
    <div>Loading stage...</div>
  {/if}
</div>`;

export const RECTANGLE_CODE_SNIPPET = `<script>
  import { Stage, Rectangle } from 'glixy';
  
  let host: HTMLElement | null = $state(null);
</script>

<div bind:this={host} class="w-full h-96">
  {#if host}
    <Stage {host}>
      <Rectangle
        x={100}
        y={100}
        width={200}
        height={150}
        background={{ color: 0xac4de5, opacity: 1 }}
        border={{ color: 0xfdc02a, width: 2, opacity: 1, rounded: true }}
        cornerRadius={5}
      />
    </Stage>
  {:else}
    <div>Loading stage...</div>
  {/if}
</div>`;

export const STAR_CODE_SNIPPET = `<script>
  import { Stage, Star } from 'glixy';
  
  let host: HTMLElement | null = $state(null);
</script>

<div bind:this={host} class="w-full h-96">
  {#if host}
    <Stage {host}>
      <Star 
        x={200} 
        y={200} 
        points={5}
        size={100}
        innerSize={40}
        background={{color: 0xffdd00, opacity: 1}}
        border={{color: 0xff6600, width: 3, opacity: 1}}
      />
    </Stage>
  {:else}
    <div>Loading stage...</div>
  {/if}
</div>`;
