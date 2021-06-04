import {IAR, icApp} from 'ic-app/src/main-esm.js'
import './megumi.scss'
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
					{t: 'h1', cl: 'title', txt: 'Megumi'},
					{t: 'div', cl: 'img', s: {'background-image': 'url(/images/megumi-0.png)'}},
					{t: 'p', cl: 'intro', nodes: 1, ch: [
						{t: 'b', txt: 'Project name:'}, ' Megumi',
						{t: 'br'},
						{t: 'b', txt: 'Alternative Names:'}, ' 202000032040',
						{t: 'br'},
						{t: 'b', txt: 'Character:'}, ' Megumi Amatsuka (天使 恵)',
						{t: 'br'},
						{t: 'b', txt: 'Type:'}, ' bot',
						{t: 'br'},
						{t: 'b', txt: 'Access:'}, ' public, open-source',
						{t: 'br'},
						{t: 'b', txt: 'Project status:'}, ' finished',
						{t: 'br'},
						{t: 'b', txt: 'Program status:'}, ' stable'
					]},
					{t: 'h3', at: {id: 'description'}, txt: 'Description'},
					{t: 'p', cl: 'disc', txt: "Megumi bot was open-source and totally free to use. She was specially made for Roleplay but she also had other commands too. she contained more than 59 commands. I had to shutdown the project because I didn't had enough resources to continue (money issues). before I shutdown, she had ~2000 users in ~10 servers. Personally, I really liked the project and it was fun to work on that."},
					{t: 'h3', at: {id: 'faq'}, txt: 'FAQ'},
					{t: 'p', cl: 'faq', ch: [
						{t: 'span', cl: 'que', txt: "Does Megumi is an AI?"},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "No, She never had AI systems."},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: "What can Megumi do?"},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "She was made for Roleplay, to have fun with friends."},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: "Does Megumi still working?"},
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
