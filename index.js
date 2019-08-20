import Vue from 'vue';
import _ from 'lodash';
let component_directory = './components';

const files = require.context(component_directory, true, /\.vue$/i);
	files.keys().map(key => {
	let name = _.kebabCase(key.split('/').pop().split('.')[0]);
	let component = files(key).default;
	Vue.component(name, component);
}
