import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import packageJson from './package.json' assert { type: 'json' };
import { defineConfig } from 'rollup';

const rollupConfig = defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: `dist/${packageJson.main}`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: `dist/${packageJson.module}`,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions: ['.ts', '.js'] }),
    copy({
      targets: [
        { src: 'package.json', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
      ],
    }),
    typescript(),
    terser(),
  ],
});

export default rollupConfig;
