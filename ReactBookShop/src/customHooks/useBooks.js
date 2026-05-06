import {useState, useEffect} from "react";
import {allItems, getProductsMock} from "../data/books.js";

export function useBooks(filterId,page)
{
    const [allBooks, setAllBooks] = useState([]);
    const [booksPaged, setBooksPaged] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [metaData, setMetadata] = useState({});


    useEffect(()=>{
        setLoading(true);
        const timer = setTimeout(()=>
        {
            try
            {
                setAllBooks(allItems);
                setLoading(false);

            }catch(e)
            {
                setError("Book not found");
            }

        },900)

        return ()=>clearInterval(timer);
    },[])

    useEffect(()=>{
        if(allBooks.length === 0) return;

        if(page!==0)
        {
            if(filterId === "any")
            {   let metaD,bookD;

                [metaD, bookD] = [getProductsMock(page).metadata , getProductsMock(page).items];
                setBooksPaged(bookD);
                setMetadata(metaD);
            }
            else
            {
                let metaD,bookD;
                [metaD, bookD] = [getProductsMock(page).metadata , getProductsMock(page).items.filter((f) => f.Category === filterId)];
                setBooksPaged(bookD);
                setMetadata(metaD);
            }

        }

    })
    return {booksPaged,allBooks, metaData, loading,error }
}

