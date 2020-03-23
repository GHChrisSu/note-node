<template>
  <q-page class="flex flex-center">
    <q-btn icon="create" label="New item" @click="startN" />
  </q-page>
</template>

<script>
import { Plugins } from "@capacitor/core";
const { NoteNode } = Plugins;

export default {
  name: "PageIndex",
  methods: {
    startN() {
      NoteNode.startNode()
    }
  }
};
</script>
