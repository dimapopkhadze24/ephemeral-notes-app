declare module "hypercore-id-encoding" {
  function decode(id: string | Buffer): string;
  function encode(id: string | Buffer): string;

  export { decode, encode };
}
