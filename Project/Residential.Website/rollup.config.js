import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/residential.js',
    output: {
        dir: './dist/',
        format: 'umd'
    },
    plugins: [
        nodeResolve(),
        babel({ babelHelpers: 'bundled' })
    ]
};