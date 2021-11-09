export default  {
    s(data: any, title?: string) {
        console.group(`${title} success`)
        console.log(data)
        console.groupEnd()
    },
    d(data: any, title?: string) {
        console.group(`${title} debug`)
        console.log(data)
        console.groupEnd()
    },
    e(data: any, title?: string) {
        console.group(`${title} error`)
        console.log(data)
        console.groupEnd()
    },
    i(data: any, title?: string) {
        console.group(`${title} info`)
        console.log(data)
        console.groupEnd()
    },
}
