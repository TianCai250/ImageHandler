import ts from 'rollup-plugin-typescript2';
import path from 'path';
import dts from 'rollup-plugin-dts';
export default [
    {
        // 入口文件
        input: './src/index.ts',
        output: [
            // 打包esmodule
            {
                file: path.resolve(__dirname, './dist/index.esm.js'),
                format: 'es',
            },
            // 打包commonjs
            {
                file: path.resolve(__dirname, './dist/index.cjs.js'),
                format: 'cjs',
            },
            // 打包amd cmd umd
            {
                input: './src/index.ts',
                file: path.resolve(__dirname, './dist/index.js'),
                format: 'umd',
                name: 'imageHandler',
            },
        ],
        // 配置ts
        plugins: [ts()],
    },
    {
        // 打包声明文件
        input: './src/index.ts',
        output: {
            file: path.resolve(__dirname, './dist/index.d.ts'),
            format: 'es',
        },
        plugins: [dts()],
    },
];
