import _ from 'lodash'
import pluralize from 'pluralize'

const fieldPath = (field) => {
    return compact(field.meta.form + "." + field.input.name).replace(/\[\d\]/g, "")
}

const compact = (path) => {
    let removeIndice = []
    const ary = _.split(path, ".", -1)
    for(let i = 0; i < ary.length - 1; i ++){
        if(ary[i].match(new RegExp(pluralize(ary[i+1])+'\\[\\d\\]')) || ary[i]==ary[i+1]){
            removeIndice.push(i+1)
        }
    }

    _.remove(ary, function(n,index){return _.includes(removeIndice, index)})

    return _.join(ary, ".")
}

export default fieldPath
export { compact }