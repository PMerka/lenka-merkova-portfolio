declare module '*.md' {
    const html: string;
    const attributes: Record<string, unknown>;
    
    export { html, attributes };
  }

  declare module '*.json' {
    const value: any;
    export default value;
  }