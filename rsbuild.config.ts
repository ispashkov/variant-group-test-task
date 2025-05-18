import * as path from 'node:path';
import { defineConfig } from '@rsbuild/core';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact(), pluginNodePolyfill()],
  tools: {
    htmlPlugin: {
      favicon: path.join(__dirname, 'public', 'favicon.svg'),
      title: process.env.PUBLIC_APP_NAME,
    },
  },
});
