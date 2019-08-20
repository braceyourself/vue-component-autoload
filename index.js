import Vue from 'vue';
import _ from 'lodash';

module.exports = function(dir){
	const files = require.context(dir, true, /\.vue$/i);
	files.keys().map(key => {
		let name = _.kebabCase(key.split('/').pop().split('.')[0]);
		let component = files(key).default;
		Vue.component(name, component);
	}
}
