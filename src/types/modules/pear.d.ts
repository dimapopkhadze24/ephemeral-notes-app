declare namespace Pear {
  interface Config {
    app: {
      name: string;
      version: string;
      description?: string;
      author?: string;
      license?: string;
    };
    storage: string;
  }

  interface App {
    key: Buffer;
    version: string;
    name: string;
  }

  const config: Config;
  const app: App;

  function teardown(callback: () => Promise<void>): void;
  function versions(): { app: App; core: string };
}

declare const Pear: typeof Pear;
