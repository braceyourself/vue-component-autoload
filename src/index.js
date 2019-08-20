import _ from 'lodash'

const loader = {
    install(Vue, options) {
        let opts = Object.assign(options,{
            dir:'./components',
        });

        let component_directory = opts.dir;

        const files = require.context(component_directory, true, /\.vue$/i);
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
