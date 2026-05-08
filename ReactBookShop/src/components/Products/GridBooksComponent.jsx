import {CardBookComponent} from "./CardBookComponent.jsx";
import './GridBooksComponent.css'
import { useState, useEffect } from "react";
export function GridBooksComponent({loading,error,booksPaged,searchedBooks})
{
    const [resultMsg, setResultMsg] = useState("");

    if(loading) {
        return (
            <section className="BookGrid">
                <p>Loading...</p>
            </section>
        )
    }

    return (

        <section className="BookGrid">
            {searchedBooks.length>1? searchedBooks.map((book)=>(
                <CardBookComponent key={book.Id} book={book}/> )) : booksPaged.map((book)=>(
                <CardBookComponent key={book.Id} book={book}/>
            ))
            }

        </section>
    )
}