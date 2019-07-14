let sizes = document.querySelectorAll( '.font-size' );

function delClass( array, strClass ) {
  array.forEach( (item) => {
    item.classList.remove( strClass );
  } );
}

function sizeSelect( event ) {
  event.preventDefault();
  delClass( sizes, 'font-size_active' );
  event.currentTarget.classList.add( 'font-size_active' );

  if ( event.currentTarget.dataset.size ) {
    let book = event.currentTarget.closest( '.book' );
    book.className = `book book_fs-${event.currentTarget.dataset.size}`;
  } else {
    book.className = 'book';
  }
}

sizes.forEach( (item) => {
  item.addEventListener( 'click', sizeSelect );
});
