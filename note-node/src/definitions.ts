declare module "@capacitor/core" {
  interface PluginRegistry {
    NoteNode: NoteNodePlugin;
  }
}

export interface NoteNodePlugin {
  startNode(): Promise<{}>;
  echo(options: { value: string }): Promise<{value: string}>;
}
