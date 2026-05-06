import {Fragment, useState} from "react";
import {GridBooksComponent} from "../components/Products/GridBooksComponent.jsx";
import "./Products.css"
import {useBooks} from "../customHooks/useBooks.js";
export function Products()
{
    const [pageNum,setPage]  =useState(1);
    const [filterId,setFilter] =useState("any");

   const {booksPaged,allBooks, metaData, loading,error } =useBooks(filterId,pageNum);
return(
        <Fragment>
        <div className="products_body">
            <GridBooksComponent booksPaged={booksPaged}
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