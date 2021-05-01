import {IAR, icApp} from 'ic-app/src/main-esm.js'
import './index.scss'
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
					{t: 'span', cl: 'a', txt: 'WIP'},
					{t: 'span', cl: 'c', txt: '(Work In Progress)'},
					{t: 'img', at: {src: 'https://media1.tenor.com/images/636fe0ec39f1238257eb5eb85c98271e/tenor.gif?itemid=16052602'}},
					{t: 'span', cl: 'b', txt: 'This website is not ready,\nCome back later.'}
				]},
				foot()
			]}
		])
	}
}
new site().mount('#root')
