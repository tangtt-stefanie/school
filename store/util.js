export const promise = (func,params)=>{
    return new Promise((resolve, reject) => {
        func(params).then(data => {
            resolve(data)
        }).catch(error => {
            reject(error)
        })
    })
}