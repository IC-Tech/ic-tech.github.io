import {IAR, icApp} from 'ic-app/src/main-esm.js'
import './kotori.scss'
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
					{t: 'h1', cl: 'title', txt: 'Kotori'},
					{t: 'div', cl: 'img', s: {'background-image': 'url(https://i.imgur.com/eUYPYEL.jpg)'}},
					{t: 'p', cl: 'intro', nodes: 1, ch: [
						{t: 'b', txt: 'Project name:'}, ' Kotori',
						{t: 'br'},
						{t: 'b', txt: 'Alternative Names:'}, ' 202009081747, 202103222221',
						{t: 'br'},
						{t: 'b', txt: 'Character:'}, ' Kotori Itsuka (五河 琴里) also known as Efreet',
						{t: 'br'},
						{t: 'b', txt: 'Type:'}, ' bot',
						{t: 'br'},
						{t: 'b', txt: 'Access:'}, ' private',
						{t: 'br'},
						{t: 'b', txt: 'Project status:'}, ' maintaining',
						{t: 'br'},
						{t: 'b', txt: 'Program status:'}, ' unstable'
					]},
					{t: 'h3', at: {id: 'description'}, txt: 'Description'},
					{t: 'p', cl: 'disc', txt: 'Kotori is an assistant bot made by me (Imesh Chamara). project kotori is different than all the project I have created because it\'s not just a project, it\'s a concept. I got that concept by Iron-man, I wanted my own Jarvis, I wanted my own assistant program. the first versions of kotori, she got little AI system but I couldn\'t train the database properly and now she looks like a command bot. she got lots of features and I still adding more.'},
					{t: 'h3', at: {id: 'plans'}, txt: 'Plans'},
					{t: 'p', cl: 'plan', txt: 'I need to train the AI database and make her more human friendly.\nI also have a plan to made her voice controllable (like google assistant).\n(and more private plans.)'},
					{t: 'h3', at: {id: 'cores'}, txt: 'Cores (Systems/Features)'},
					{t: 'table', ch: [
						{t: 'thead', ch: [
							{t: 'tr', ch: ['Codename', 'State'].map(a => ({t: 'th', txt: a}))}
						]},
						{t: 'tbody', ch: [
							['NLP (AI)', '⛔ removed'],
							['FLP (Fake AI)', '❌ incomplete'],
							['YT', '❌ incomplete'],
							['SC', '🆗 OK'],
							['NICO', '🆗 OK'],
							['DISCO', '🆗 OK'],
							['TASK', '🆗 OK'],
							['TG', '⛔ restoring'],
						].map(a => ({t: 'tr', ch: a.map(a => ({t: 'td', txt: a}))}))}
					]},
					{t: 'h3', at: {id: 'credits'}, txt: 'Credits'},
					{t: 'p', txt: 'I created the everything on her, only me. there are no others to credit.'},
					{t: 'h3', at: {id: 'faq'}, txt: 'FAQ'},
					{t: 'p', cl: 'faq', ch: [
						{t: 'span', cl: 'que', txt: 'Does Kotori is an AI?'},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "No, She does not have any AI parts anymore."},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: 'What can Kotori do?'},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "Actually not much. I wanted to make her like she could do anything but plan changed."},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: 'Does Kotori still working?'},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "Yes and No, Kotori is not a single program. some parts of her still online, some parts does not. after her power supply got burned, Most parts of her remain inactive until I activate them manually."},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: "Why source code is not public?"},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "I know usually I post codes public but,\n1. I do not like to share such a valuable project on public\n2. I do not want others to find problems (security reasons)\n3. some codes of her might not allowed to post public. I have seen similar codes taken-down from websites"},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: 'Why do I receive messages from Kotori?'},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "I might told her to do it."},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: 'Will Kotori take over our world?'},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "No."},
						{t: 'br'},
						{t: 'span', cl: 'que', txt: 'Can I see her? / Can I chat with her?'},
						{t: 'br'},
						{t: 'span', cl: 'ans', txt: "No. She has no physical form. She is a personal bot, she only listen to me."},
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
