import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'Scripts/commercial.js',
    output: {
        dir: '../../dist/',
        format: 'esm'
    },
    plugins: [
        nodeResolve(),
        babel({ babelHelpers: 'bundled' })]
};