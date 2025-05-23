declare module "protomux-rpc" {
  class ProtomuxRPC {
    constructor(conn: any);
    respond(name: string, fn: (...args: any[]) => any): void;
    request(name: string, ...args: any[]): Promise<any>;
  }

  export default ProtomuxRPC;
}
