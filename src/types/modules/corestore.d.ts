declare module "corestore" {
  type CorestoreOptions = string;

  interface GetOptions {
    name?: string;
    key?: string | Buffer;
    [key: string]: any;
  }

  interface GetHelperOptions {}

  export interface CorestoreI {
    createKeyPair(name: string): Promise<string>;
    replicate(conn: any): void;
    get(
      keyOrOptions: string | Buffer | GetOptions,
      options?: GetHelperOptions
    ): any;
  }

  class Corestore implements CorestoreI {
    constructor(options: CorestoreOptions);
    createKeyPair(name: string): Promise<string>;
    replicate(conn: any): void;
    get(
      keyOrOptions: string | Buffer | GetOptions,
      options?: GetHelperOptions
    ): any;
  }

  export default Corestore;
}
