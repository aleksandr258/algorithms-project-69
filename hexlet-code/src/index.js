let search = (arr, strToFind) => {
    let result = [];
    let strForRegexp = strToFind.split(' ').map(word => `\\b${word}\\b`).join('|');
    console.log(strForRegexp)

    let regexep = new RegExp(strForRegexp, 'g');
    for (const doc of arr){
        let resultRegexp = doc.text.match(regexep);
        if (resultRegexp !== null){
            console.log(resultRegexp)
            result.push({
                count: resultRegexp.length,
                id: doc.id
            })
        }
    }
    // arr.reduce((prev, current) => {
    //     let match = current.text.match(regexep);
    //     if (match){
    //         let matchLength = match.length;
    //     }
    //     if (matchLength > prev){
    //         prev = matchLength;
    //         result.push(current.id)
    //     }
    //     return result;

    // }, {})
    // findCountArr = arr.map(e => {
    //     let textOfArr = e.text.match(regexep)
    //     if (textOfArr !== null){
    //         return {
    //             count: textOfArr.length,
    //             id: e.id
    //         }
    //     } 
    //     else return {
    //         count: 0,
    //         id: e.id
    //     }   
    // })
    // console.log(findCountArr)
    // let result = findCountArr.sort((a,b) => a.count - b.count);
    result.sort((a,b) => b.count - a.count);
    console.log(result)
    return result.map(e => e.id)
}
// src/index.js
// const search = (documents, searchString) => {
//     return document
//       .filter(doc => doc.text.includes(searchString))
//       .map(doc => doc.name);
//   };
  
  

module.exports = search;