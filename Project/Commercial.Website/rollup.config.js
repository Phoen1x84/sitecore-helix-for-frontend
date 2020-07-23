import babel from '@rollup/plugin-babel';

export default {
    input: 'Scripts/commercial.js',
    output: {
        dir: '../../dist/',
        format: 'esm'
    },
    plugins: [babel({ babelHelpers: 'bundled' })]
};