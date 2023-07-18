<script lang="ts">
  export let position1: { x: number, y: number };
  export let position2: { x: number, y: number };
</script>

<line x1={position1.x} y1={position1.y} x2={position2.x} y2={position2.y} class="stroke-black"/>
