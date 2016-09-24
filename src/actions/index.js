// action creator
export function selectBook(book){
  // returns an action: an object with a type property and a payload property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

