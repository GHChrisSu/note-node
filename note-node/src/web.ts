import { WebPlugin } from '@capacitor/core';
import { NoteNodePlugin } from './definitions';

export class NoteNodeWeb extends WebPlugin implements NoteNodePlugin {
  constructor() {
    super({
      name: 'NoteNode',
      platforms: ['web']
    });
  }

  async startNode(): Promise<{}> {
    console.log('Web started!!!');
    return {}
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const NoteNode = new NoteNodeWeb();

export { NoteNode };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(NoteNode);
