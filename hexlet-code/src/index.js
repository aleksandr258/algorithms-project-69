let search = (arr, strToFind) => {
    let result = [];
    for (const doc of arr){
        let subArr = doc.text.split(' ');
        console.log(subArr)
        
        if (subArr.includes(e => e === strToFind)){
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