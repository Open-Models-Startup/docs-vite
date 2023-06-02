
In your browser's console, you may see the following error:
> RangeError: WebAssembly.instantiate(): Out of memory: wasm memory

When too much memory is allocated to browser processes, browsers will run out of memory. This can happen if you open too many OpenModels projects at the same time. This includes our editor, iEcho IDE, and Web Publisher - or if a page features too many OpenModels embeds running at the same time.

**To free up memory, close other OpenModels projects in other tabs or windows, and refresh the page.**
