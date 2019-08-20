import _ from 'lodash';

const loader {
	install(Vue, options){
		let component_directory = options.dir;
		if(component_directory === undefined){

			component_directory = './components';
		}

		const files = require.context(component_directory, true, /\.vue$/i);
			files.keys().map(key => {
			let name = _.kebabCase(key.split('/').pop().split('.')[0]);
			let component = files(key).default;
			Vue.component(name, component);
		}

		
	}
}

export default loader;

if(typeof window !== 'undefined' && window.Vue){
	window.Vue.use(loader);
}
