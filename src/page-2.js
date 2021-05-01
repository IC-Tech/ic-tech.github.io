import {IAR, icApp} from 'ic-app/src/main-esm.js'
import './page-1.scss'
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
				{t: 'div', cl: 'head', ch: [
					{t: 'span', txt: 'Web Template'}
				]},
				{t: 'div', cl: 'cont', ch: [
					{t: 'span', txt: "Welcome to page 02\nyou did go the page 1 before came here, didn't you?"},
					{t: 'div', cl: 'btns', ch: [
						{t: 'a', at:{href: '/'}, txt: 'Home'},
						{t: 'a', at:{href: 'page-01.html'}, txt: 'Page 01'}
					]}
				]}
			]}
		])
	}
}
new site().mount('#root')
