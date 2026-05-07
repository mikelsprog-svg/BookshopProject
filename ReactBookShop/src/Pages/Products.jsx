import {Fragment, useState} from "react";
import {GridBooksComponent} from "../components/Products/GridBooksComponent.jsx";
import "./Products.css"
import {useBooks} from "../customHooks/useBooks.js";
export function Products()
{
    const [pageNum,setPage]  =useState(1);
    const [filterId,setFilter] =useState("any");
    const [searchVal,setSearchVal] =useState("las");


   const {booksPaged,allBooks,searchedBooks, metaData, loading,error } =useBooks(filterId,pageNum,searchVal,-1);
return(
        <Fragment>
        <div className="products_body">
            <GridBooksComponent booksPaged={booksPaged}
                                searchedBooks={searchedBooks}
                                loading={loading}
                                error={error} />

        </div>
        <div className="products_footer">
            <button className="pageButton" onClick={()=>setPage(pageNum-1)}>
                {" < "}  </button>
            <p> {pageNum} </p>
            <button className="pageButton" onClick={()=>setPage(pageNum+1)}>
                {" > "}
            </button>
        </div>
        </Fragment>
    )
}