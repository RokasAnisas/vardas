import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json')

export default {
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
    resolve(),
    copy({
      targets: [{ src: 'package.json', dest: 'dist' }],
    }),
    typescript(),
    terser(),
  ],
};
