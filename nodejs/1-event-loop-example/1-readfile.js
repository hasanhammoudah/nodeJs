// const _ = require('lodash')

// const items = [1, [2, [3, [4]]]]

// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("hello world")


const { readFile } = require('fs')

console.log('started a first task')

// CHECK FILE PATH
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})

console.log('starting next task')
