const search = require('../src/index')

test('should return an array of document IDs containing the search string', () => {
    const documents = [
      { id: 1, text: 'Lorem ipsum dolor sit amet' },
      { id: 2, text: 'consectetur adipiscing elit' },
      { id: 3, text: 'sed do eiusmod tempor incididunt ut labore' },
    ];
  
    const result = search(documents, 'elit');
  
    expect(result).toEqual([2]);
  });
  
  test('should handle multiple occurrences of the search string in a document', () => {
    const documents = [
      { id: 1, text: 'Lorem ipsum dolor sit amet' },
      { id: 2, text: 'elit sed elit' },
      { id: 3, text: 'sed do eiusmod elit tempor incididunt ut labore' },
    ];
  
    const result = search(documents, 'elit');
  
    expect(result).toEqual([2, 3]);
  });
  
  test('should return an empty array if the search string is not found in any document', () => {
    const documents = [
      { id: 1, text: 'Lorem ipsum dolor sit amet' },
      { id: 2, text: 'consectetur adipiscing elit' },
      { id: 3, text: 'sed do eiusmod tempor incididunt ut labore' },
    ];
  
    const result = search(documents, 'nonexistent');
  
    expect(result).toEqual([]);
  });