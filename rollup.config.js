import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import cleaner from 'rollup-plugin-cleaner'
import packageModule from './package.json'
const external = Object.keys(packageModule.dependencies)
const extend = ['mithril/stream']
extend.forEach(item => {
    external.push(item)
});


export default {
    input: './src/entry.js',
    output: {
        file: './plugin/js/dist.bundle.js',
        format: 'cjs'
    },
    plugins: [
        cleaner({
            targets: [
                './plugin/'
            ]
        }),
        resolve(),
        postcss({
            minimize: true,
            modules: {
                generateScopedName: "[hash:base64:5]",
            },
            extract: './plugin/css/styles.css'
        }),
        commonjs()
    ],
    external: external
};