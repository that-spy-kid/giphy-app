import React, {useState,useEffect} from "react";
import axios from "axios";
import Loader from "./Loader";
import Paginate from "./paginate";

const Home = (props) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false); 
    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage]= useState(1);
    const [itemsPerPage]=useState(10);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = data.slice(indexOfFirstItem,indexOfLastItem);




    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            
            try {
                const results = await axios("https://api.giphy.com/v1/gifs/trending",{
                    params: {
                       api_key:'GlVGYHkr3WSBnllca54iNt0yFbjz7L65',
                       limit:100  
                    }
                });
                console.log(results);
                setData(results.data.data);
            } catch (err){
               setIsError(true);
              setTimeout(()=> setIsError(false), 4000)
            }
    
            setIsLoading(false);
        };

        fetchData();
    },[]);
    
   const displayGifs = () => {
   
        if(isLoading){
            return <Loader/>
        }

   
    return currentItem.map(ele => {
        return (
            <div key={ele.id} className="gif">
                <img src={ele.images.fixed_height.url} alt="" />
            </div>
        )
    })
   }
       
      const renderError = () => {
        if(isError){
            return (
                <div className="alert alert-danger 
                alert-dismissible fade show error-pin" role="alert">
                    Unable to get Gifs, Please try again in a few minutes.
                </div>
            );
        };
      };


      const handleSearchChange = (event) => {
        setSearch(event.target.value);
      };

      const handlesubmit = async event => {

        event.preventDefault();
         
        setIsError(false);
        setIsLoading(true);

        try {
            const results = await axios("https://api.giphy.com/v1/gifs/search" , {
                params: {
                    api_key:'GlVGYHkr3WSBnllca54iNt0yFbjz7L65',
                    q: search,
                    limit: 100

                 }
            });
            setData(results.data.data);

        }catch(err){
            setIsError(true);
            setTimeout(()=> setIsError(false), 4000)
        }
   
            
            
            setIsLoading(false);
      }

      const pageSelected = (pageNumber) => {
        setCurrentPage(pageNumber);


      }


    return (
        <div className="m-2">
        
        <section className="home">
            <nav>
                <h2>Welcome</h2>
                <button onClick={props.handleLogout}>Logout</button>
            </nav>
            {renderError()}
            <form value={search} className="form-inline justify-content-center m-2">
                <input onChange={handleSearchChange} type="text" placeholder="search" className="form-control m-2"/>
                <button onClick={handlesubmit} type="submit" className="btn btn-primary m-2 go">Go</button>
            </form>
            <Paginate currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={data.length} pageSelected={pageSelected} />
            <div className="container gifs">{displayGifs()}</div>
        </section>
        </div>
    )

}

export default Home;