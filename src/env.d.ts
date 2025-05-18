/// <reference types="@rsbuild/core/types" />

// @rsbuild/plugin-svgr declarations
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.svg?react' {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

global {
  interface ImportMetaEnv {
    readonly PUBLIC_APP_TITLE: string;
    readonly PUBLIC_APPLICATION_COUNT_REQUIRED: number;
    readonly PUBLIC_APPLICATION_COMMENT_MAX_LENGTH: number;
    readonly PUBLIC_APPLICATION_CREATE_DELAY_MS: number;
    readonly PUBLIC_OPEN_AI_API_KEY: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
