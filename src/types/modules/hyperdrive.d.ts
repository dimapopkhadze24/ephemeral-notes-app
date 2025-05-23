declare module "hyperdrive" {
  import { CorestoreI } from "corestore";

  interface WatchOptions {
    recursive?: boolean;
  }

  interface Snapshot {
    version: number;
  }

  interface Watcher {
    ready(): Promise<void>;
    destroy(): Promise<void>;
    [Symbol.asyncIterator](): AsyncIterator<[Snapshot, Snapshot]>;
  }

  class Hyperdrive {
    constructor(corestore: CorestoreI, key?: string);
    exists(path: string): Promise<boolean>;
    get(path: string): Promise<string | null>;
    put(path: string, data: Buffer): Promise<void>;
    ready(): Promise<void>;
    watch(path: string, options?: WatchOptions): Watcher;
    key: Buffer;
  }

  export default Hyperdrive;
}
