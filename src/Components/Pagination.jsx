import React from 'react'

const Pagination = ({totalPosts, postPerPage, setCurrentPage, currentPage}) => {

    const pagenumber = [];
    
    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
        pagenumber.push(i)
    }
  return (
    <>
    {pagenumber.map((page,index) => (
       <button key={index} className={`py-2 px-4 border border-black mx-2 my-1 ${currentPage === page ? "bg-black text-white animate-bounce" : null}`} onClick={() => setCurrentPage(page)}>{page}</button> 
    ))}
    </>
  )
}

export default Pagination