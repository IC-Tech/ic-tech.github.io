# ic-app
ic-app is a simple powerful client-render framework. I notice that when build webpage with react or vue, page size about 100-400KB. when I use ic-app, page size was 10KB-50KB. When I make the ic-app, I removed all the useless stuff that I don't need. I'm not recommending ic-app to use instead of react or vue. I made this for simple projects, advanced websites should not use something like this. whether should used or not depend on the project.

## Usage
it's very simple to use, you have to target a root element of the page and leave ic-app to handle creation and updates of it. ic-app can use of handle `attributes`, `styles`, `child elements`, `style classes`, `data attributes` and more. using it might be little bit difficult because, I made it *simple and complex* syntax to reduce the file size.  
You might think what is my problem with the file size, basically I don't like huge webpages. However, for the best of everyone, we need to reduce the file size. It will make pages load faster. It will reduce the memory (ram) usage of the browser. It will make page work faster. you must heard *"simple is the best"*.

## Example
*This website also rendered using the ic-app.*<br>
The following is a simple example of a "clock". I create empty webpage and target the `body` of the page.
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<title>sample</title>
		<script type="module">
import {IAR} from 'https://cdn.jsdelivr.net/gh/IC-Tech/ic-app/build/ic-app.min.js'
class sample extends IAR {
	constructor() {
		super()
		this.data = { time: '' }
	}
	didMount() {
		setInterval(() => {
			var time = new Date()
			this.update({time: time.toString()})
		}, 500)
	}
	render() {
		return ([
			{t: 'p', s: {color: 'red'}, txt: this.data.time}
		])
	}
}
new sample().mount('body')
		</script>
	</head>
	<body></body>
</html>
```
*(want to test this, checkout [jsbin](https://jsbin.com/zofosej), [codepen](https://codepen.io/ImeshChamara/pen/KKmPedZ), [jsfiddle](https://jsfiddle.net/IC_Tech/g9pt2seq/))*

## Links
source code: [Github](https://github.com/IC-Tech/ic-app), [Gitlab](https://gitlab.com/IC-Tech/ic-app)<br>
npm package: [npmjs](https://www.npmjs.com/package/ic-app)<br>
CDN link (**not recommended**): <https://cdn.jsdelivr.net/gh/IC-Tech/ic-app/build/ic-app.js><br>
Minified CDN link (**recommended**): <https://cdn.jsdelivr.net/gh/IC-Tech/ic-app/build/ic-app.min.js>

## FAQ
**What is `ic-app`?**
> it's a client-render framework, JavaScript library and a npm package.

**What can it do?**
> it can create and update your website simple and fast.

**What is so special about `ic-app`?**
> nothing, it just a simple library.

**Why should I use it?**
> you should not (unless if you want to use something very simple).

### More
[Contact or Questions](mailto:imesh1chamara@gmail.com)
