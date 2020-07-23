import babel from '@rollup/plugin-babel';

export default {
    input: 'Scripts/residential.js',
    output: {
        dir: '../../dist/',
        format: 'umd'
    },
    plugins: [babel({ babelHelpers: 'bundled' })]
};