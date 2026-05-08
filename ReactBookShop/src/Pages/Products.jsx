import {Fragment, useState} from "react";
import {GridBooksComponent} from "../components/Products/GridBooksComponent.jsx";
import "./Products.css"
import {useBooks} from "../customHooks/useBooks.js";
import { useSearchParams } from "react-router-dom";
export function Products()
{
    const [searchParams] = useSearchParams();

    const filterId = searchParams.get("filterId");
    const searchVal = searchParams.get("searchVal");


    const [pageNum,setPage]  =useState(1);


    console.log(filterId);
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