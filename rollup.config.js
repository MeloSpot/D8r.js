import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    {
      file: 'dist/bundle.min.js',
      format: 'umd',
      name: 'D8r',
      plugins: [terser()]
    }
  ],
  plugins: [typescript()]
}; 