# Glixy

## Motivation

After spending couple of years building with PixiJS, I got some better understanding how powerful and painful this technology can be. Why?

- memory leaks, manual cleanup, you will always miss something anyway
- pain-in-the-ass memory debugging experience
- rendered text performance
- general performance

With PixiJS release 8 I got my faith back. I can't express how much I admire contributors of this release. But PixiJS on its own is painful to use - entities management, etc. Yet there are no wrappers for it that'd support v8 and be ultra performant (because that's what we all want) and support newest Svelte 5 release with chad runes.

That's how idea about joining Svelte - the best DX framework for UI - and PixiJS was born ❤️

### Repository structure

- /apps
  - [/docs - glixy documentation (glixy.dev)](/apps/docs/README.md)
  - [/lib - glixy npm package (meat)](/apps/lib/README.md)
