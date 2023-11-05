let a = document.getElementsByTagName('div')[0]

// a.innerHTML =a.innerHTML +  '<h1>Hello World</h1>'

// let div = document.createElement('div')
// div.innerHTML = '<h1>Hello Duniya!!</h1>'
// a.appendChild (div)

let p = document.createElement('div')
p.innerHTML = '<h1>Hello Doston</h1>'
// a.append(p)
// a.before(p)
a.replaceWith(p)