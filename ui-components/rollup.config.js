import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.js',
  output: {
    filename: 'bundle.js',
    dir: path.resolve(__dirname, 'dist'),
    format: 'umd',
    name: 'MyComponent',
  },
  plugins: [
    resolve(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    babel({
      exclude: '**/node_modules/**',
    }),
    commonjs(),
  ],
  external: ['vue'],
};
