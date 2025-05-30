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
    get(
      path: string,
      options?: { follow?: boolean; timeout?: number }
    ): Promise<string | null>;
    list(folder: string): {
      key: string;
      value: {
        blob: {};
      };
    }[];
    readdir(folder: string): Promise<string[]>;
    put(path: string, data: Buffer): Promise<void>;
    ready(): Promise<void>;
    watch(path: string, options?: WatchOptions): Watcher;
    del(path: string): Promise<void>;
    key: Buffer;
  }

  export default Hyperdrive;
}
