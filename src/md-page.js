import {IAR, icApp} from 'ic-app/src/main-esm.js'
import { foot } from './comp'
const page = md => {
	class site extends IAR {
		constructor() {
			super()
			this.data = {
				ui: 0
			}
			new icApp(document.body).sa('theme', 'dark')
		}
		didMount() {
			this.update({ui: 1})
		}
		render() {
			return ([
				{s: {display: this.data.ui == 0 ? 'flex' : 'none'}},
				{s: {display: this.data.ui == 1 ? 'block' : 'none'}, t:'div', cl: 'main', ch: [
					{t: 'div', cl: ['cont', 'doc'], at: {id:'main', role:'main'}, ch: md},
					foot()
				]}
			])
		}
	}
	new site().mount('#root')
}
export default page
