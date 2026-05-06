import {useState, useEffect} from "react";
import {allItems, getProductsMock} from "../data/books.js";

export function useBooks()
{
    const [allBooks, setAllBooks] = useState([]);
    const [booksPaged, setBooksPaged] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState("any");
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
            if(filter === "any")
                setBooksPaged(getProductsMock(page).items)
            else setBooksPaged(getProductsMock(page).items.filter((f)=>f.Category===filter));

        }




    })
}

