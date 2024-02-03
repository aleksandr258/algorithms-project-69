let search = (arr, strToFind) => {
    let result = [];
    let regexep = new RegExp(strToFind)
    for (const doc of arr){
        let resultRegexp = doc.text.match(regexep);
        if (resultRegexp !== null){
            result.push(doc.id)
        }
    }
    return result
}
// src/index.js
// const search = (documents, searchString) => {
//     return documents
//       .filter(doc => doc.text.includes(searchString))
//       .map(doc => doc.name);
//   };
  
  

module.exports = search;