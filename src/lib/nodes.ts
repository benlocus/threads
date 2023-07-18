import { writable } from "svelte/store"

type Id = string;

export interface ThreadNode {
  thread: string
  position: { x: number, y: number },
  downstream: Array<Id>
} 

export let nodes = writable<Map<Id, ThreadNode>>(new Map([
    ["concept", {
      thread: "main",
      position: { x: 50, y: 80 },
      downstream: ["operations"]
    }],
    ["operations", {
      thread: "main",
      position: { x: 1150, y: 80 },
      downstream: []
    }]
]))
