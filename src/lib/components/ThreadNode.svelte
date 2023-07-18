<script lang="ts">
  export let position: { x: number, y: number };
  export let divClass = ""
</script>

<circle cx={position.x} cy={position.y} r="10" class="fill-white stroke-black stroke-[4px] hover:fill-gray-200 {divClass}" />
