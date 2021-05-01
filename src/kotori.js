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
						{t: 'b', txt: 'Project status'}, ' maintaining',
						{t: 'br'},
						{t: 'b', txt: 'Program status'}, ' unstable'
					]},
					{t: 'h3', txt: 'Description'},
					{t: 'p', cl: 'disc', txt: 'Kotori is an assistant bot made by me (Imesh Chamara). project kotori is different than all the project I have created because it\'s not just a project it\'s a concept. I got that concept by Iron-man, I wanted my own Jarvis, I wanted my own assistant program. the first versions of kotori, she got little AI system but I couldn\'t train the database properly and now she looks like a command bot. she got lots of features and I still adding more.'},
					{t: 'h3', txt: 'Plans'},
					{t: 'p', cl: 'plan', txt: 'I need to train the AI database and make her more human friendly.\nI also have a plan to made her voice controllable (like google assistant).\n(and more private plans.)'},
					{t: 'h3', txt: 'Cores (Systems/Features)'},
					{t: 'table', ch: [
						{t: 'thead', ch: [
							{t: 'tr', ch: ['Codename', 'State'].map(a => ({t: 'th', txt: a}))}
						]},
						{t: 'tbody', ch: [
							['NLP (AI)', '⛔ removed'],
							['YT', '❌ incomplete'],
							['SC', '🆗 OK'],
							['NICO', '🆗 OK'],
							['DISCO', '🆗 OK'],
							['TG', '⛔ removed'],
						].map(a => ({t: 'tr', ch: a.map(a => ({t: 'td', txt: a}))}))}
					]},
					{t: 'h3', txt: 'Credits'},
					{t: 'p', txt: 'I created the everything on her, only me. there are no others to credit.'},
					{t: 'h3', txt: 'More'},
					{t: 'div', ch: 'links', ch: [
						['Contact or Questions', 'https://ic-tech.now.sh/contact.html?product=Kotori'],
					].map(a => ({t: 'a', at: {href: a[1]}, txt: a[0]}))}
				]},
				foot()
			]}
		])
	}
}
new site().mount('#root')
