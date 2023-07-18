<script>
  import ThreadNode from '$lib/components/ThreadNode.svelte';
  import ThreadLink from '$lib/components/ThreadLink.svelte';

  import { nodes } from '$lib/nodes';

  let newPos = { x: 0, y: 80 }
  let addVisible = false
  function handleMouseMove(event) {
    newPos.x = event.clientX - 30
    if (Math.abs(event.clientY - 80) < 40) {
      addVisible = true
    } else {
      addVisible = false
    }
  }

  function handleClick() {
    nodes.update(items => {
      items.set("new guy", {
        thread: "main",
        position: { x: 550, y: 80 },
        downstream: ["operations"]
      })
      return items
    })
  }
  
  let threadLinks = []
  for (let node of $nodes.entries()) {
    console.log(node)
    if (node[1].downstream.length > 0) {
      let dsNodes = node[1].downstream
      for (let dsNode of dsNodes) {
        let downstreamNode = $nodes.get(dsNode)
        console.log("downstream node: ", downstreamNode)
        let position1 = node[1].position
        let position2 = downstreamNode?.position
        threadLinks.push([position1, position2])
      }
    }
  }
</script>

<main class="w-screen h-screen bg-black grid justify-center">
  <div class="bg-white w-[1200px] h-[320px] gap-4" on:mousemove={handleMouseMove} on:click={handleClick}>
    <svg viewBox="0 0 1200 320" class="group">
      {#each $nodes.entries() as node}
        <ThreadNode position={node[1].position} />
        <text x={node[1].position.x} y={node[1].position.y + 30}>{node[1].downstream}</text>
      {/each}
      {#if addVisible}
        <ThreadNode position={newPos} divClass="group-hover:flex hidden" />
      {/if}
      {#each threadLinks as link}
        <ThreadLink position1={link[0]} position2={link[1]}/>
      {/each}
    </svg>
  </div>
</main>


