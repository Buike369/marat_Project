import React ,{useState} from 'react'
import ReactPaginate from 'react-paginate';
import "./styles/paginate.css"

const Pagination = () => {


    
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const [itemsPerPage,setItemsPerPage] = useState(6)
const [itemOffset, setItemOffset] = useState(0);



  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
          <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={`previous`}
        renderOnZeroPageCount={null}
        className='paginate'
        onClick={handlePageClick}
      />

    </div>
  )
}

export default Pagination