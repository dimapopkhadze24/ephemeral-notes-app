declare module "hyperswarm" {
  interface HyperswarmOptions {
    keyPair: string;
  }

  class Hyperswarm {
    constructor(options: HyperswarmOptions);
    destroy(): Promise<void>;
    on(event: string, callback: (...args: any[]) => void): this;
    join(topic: string, options: { server: boolean; client: boolean }): any;
  }

  export default Hyperswarm;
}
