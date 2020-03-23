import { WebPlugin } from '@capacitor/core';
import { NoteNodePlugin } from './definitions';
export declare class NoteNodeWeb extends WebPlugin implements NoteNodePlugin {
    constructor();
    startNode(): Promise<{}>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const NoteNode: NoteNodeWeb;
export { NoteNode };
