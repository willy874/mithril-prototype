import m from 'mithril'
import stream from 'mithril/stream'


// const vnode = stream(m('div',<div>Hello World</div>))
const vnode = stream(m('div','Hello World'))

m.render(document.body,vnode)
