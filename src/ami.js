import {IAR, icApp} from 'ic-app/src/main-esm.js'
import './ami.scss'
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
				{t: 'div', cl: ['cont', 'doc'], at: {id:'main', role:'main'}, ch: [
					{t: 'h1', cl: 'title', txt: 'Ami'},
					{t: 'div', cl: 'img', s: {'background-image': 'url(/images/ami-0.jpg)'}},
					{t: 'p', cl: 'intro', nodes: 1, ch: [
						{t: 'b', txt: 'Project name:'}, ' Ami',
						{t: 'br'},
						{t: 'b', txt: 'Alternative Names:'}, ' 202007211224',
						{t: 'br'},
						{t: 'b', txt: 'Character:'}, ' Ami Kawashima (川嶋 亜美)',
						{t: 'br'},
						{t: 'b', txt: 'Type:'}, ' bot',
						{t: 'br'},
						{t: 'b', txt: 'Access:'}, ' private',
						{t: 'br'},
						{t: 'b', txt: 'Project status:'}, ' fail-end',
						{t: 'br'},
						{t: 'b', txt: 'Program status:'}, ' experimental'
					]},
					{t: 'h3', at: {id: 'description'}, txt: 'Description'},
					{t: 'p', cl: 'disc', txt: "Ami is the first experimental AI system I (Imesh Chamara) made. first all basic experiments are ended well but in the end I didn't had enough data to finish the project. everything is very basic, project is useless and worthless but it's a start."},
					{t: 'h3', at: {id: 'faq'}, txt: 'FAQ'},
					{t: 'p', cl: 'faq', ch: [
						{t: 'span', cl: 'que', txt: "Does Ami is an AI?"},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "Yes. but not an advanced AI."},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: "What can Ami do?"},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "Nothing, just responds to basic messages."},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: "Does Ami still working?"},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "No."},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: "Can I see her? / Can I chat with her?"},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "No."},
					]},
					{t: 'h3', at: {id: 'more'}, txt: 'More'},
					{t: 'div', ch: 'links', ch: [
						['Contact or Questions', 'mailto:imesh1chamara@gmail.com'],
					].map(a => ({t: 'a', at: {href: a[1]}, txt: a[0]}))}
				]},
				foot()
			]}
		])
	}
}
new site().mount('#root')
