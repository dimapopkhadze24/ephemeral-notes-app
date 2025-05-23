declare module "hyperbee" {
  import { CorestoreI } from "corestore";

  class Hyperbee {
    constructor(core: CorestoreI, options?: HyperbeeOptions);
    get(key: string): Promise<any>;
    put(key: string, value: any): Promise<void>;
    createReadStream(): AsyncIterableIterator<{ key: string; value: any }>;
  }

  export default Hyperbee;
}
