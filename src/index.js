import _ from 'lodash'

const loader = {
    install(Vue, options) {
        if (options === undefined) {
            options = {};
        }

        let opts = Object.assign(options,{
            dir:'./components',
        });


        const files = require.context(opts.dir, true, /\.vue$/i);
        files.keys().map(key => {
            let name = _.kebabCase(key.split('/').pop().split('.')[0]);
            let component = files(key).default;
            Vue.component(name, component);
        })


    }
}


export default loader;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(loader);
}
