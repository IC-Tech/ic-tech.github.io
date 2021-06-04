import {IAR, icApp} from 'ic-app/src/main-esm.js'
import './404.scss'
import { foot } from './comp'
class site extends IAR {
	constructor() {
		super()
		this.data = {
			ui: 0
		}
	}
	didMount() {
		this.update({ui: 1})
	}
	render() {
		return ([
			{s: {display: this.data.ui == 0 ? 'flex' : 'none'}},
			{s: {display: this.data.ui == 1 ? 'block' : 'none'}, t:'div', cl: 'main', ch: [
				{t: 'div', cl: 'cont', at: {id:'main', role:'main'}, ch: [
					{t: 'span', cl: 'a', txt: '404'},
					{t: 'span', cl: 'b', txt: 'Page Not Found'}
				]},
				foot()
			]}
		])
	}
}
new site().mount('#root')
