import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const bun = {
    input: 'src/script.ts',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'umd',
            name: 'MyApp',
            sourcemap: true,
        },
        {
            file: 'dist/bundle.esm.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [
        typescript(),
        nodeResolve({
            browser: true,
        }),
        commonjs(),
        terser({
            compress: {
                dead_code: true,
                conditionals: true,
                collapse_vars: true
            },
            mangle: {
                keep_classnames: true,
                keep_fnames: true
            },
            format: {
                comments: false,
                beautify: false
            },
            ecma: 2015
        }),
    ],
};

const run = {
    input: 'src/run.ts',
    output: [
        {
            file: 'dist/run.esm.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    plugins: [
        typescript(),
        nodeResolve({
            browser: false,
        }),
        commonjs(),
        terser({
            compress: {
                dead_code: true,
                conditionals: true,
                collapse_vars: true
            },
            mangle: {
                keep_classnames: true,
                keep_fnames: true
            },
            format: {
                comments: false,
                beautify: false
            },
            ecma: 2015
        }),
    ],
};


export default [ bun, run ];
