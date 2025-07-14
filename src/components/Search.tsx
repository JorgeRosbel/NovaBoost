import { CiSearch } from "react-icons/ci";
import React, { useState, useEffect } from "react";
import Fuse from 'fuse.js';
import { ImSpinner9 } from "react-icons/im";

interface ISearch {
  title: string;
  description:string;
  pubDate:string;
  path:string;
}



interface IModal {
    handleVisible:() => void;
}

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const queryFn = async():Promise<ISearch[]> => {
    try{
        const search_index = await fetch("/search-index.json");
        const response = await search_index.json() as ISearch[]

        return response;
    
    }catch(error){
        console.error(error)
        throw error
    }
}

const Results:React.FC<{data:ISearch[]}> = ({data}) => {


    return(
        <div>
        <strong className="py-3">{data.length} results</strong>
        <div className="py-3 flex flex-col gap-3 items-center justify-start w-full h-full max-h-[80vh] overflow-y-scroll menu-bar">
            {
                data.map((item,index) => 
                    <a href={`${item.path}`} key={index}>
                        <div className="w-full p-2 bg-white rounded group dark:bg-dark-surface dark:border dark:border-dark-text/10">
                            <p className="group-hover:text-buttons-bg transition-all duration-200 font-semibold text-xl 
                            border-b border-b-light-text/30 pb-1 dark:border-b-dark-text/30 text-light-text dark:text-dark-text">{item.title}</p>
                            <p className="inline-flex w-full items-center justify-start gap-1 py-1 text-light-text/60 dark:text-dark-text/60 ">
                                <span className="text-[0.9rem] p-0">{item.pubDate}</span>
                            </p>
                            <p className="pt-2 italic text-light-text dark:text-dark-text">"{item.description}"</p>
                        </div>
                     </a>
                    
                )
            }

        </div>
        </div>
    )



}


export function useSearch(content: string) {
  // 1) estado donde guardamos los resultados
  const [results, setResults] = useState<ISearch[]>([]);
  // 2) estado para indicar si estamos cargando
  const [loading, setLoading] = useState<boolean>(false);
  // opcional: estado para errores
  const [error, setError] = useState<string | null>(null);

  // debounce para no disparar la búsqueda en cada pulsación
  const text = useDebounce(content, 1000);

  
  useEffect(() => {
    // si el texto está vacío, reiniciamos
    if (!text || text.length === 0) {
      setResults([]);
      return;
    }

    // función asíncrona interna
    const doSearch = async () => {
      setLoading(true);
      setError(null);

      try {
        const searchIndex = await queryFn();
        const fuse = new Fuse<ISearch>(searchIndex, { threshold: 0.4,  keys: ['title', 'description', 'pubDate'],ignoreLocation: true, // permite que el match esté en cualquier parte del string
  useExtendedSearch: true, });
        const out = fuse.search(text).map(res => res.item);
        setResults(out);
        if(out.length === 0) { setError("There are no results") }
      } catch (err) {
        setError("Failed");
        console.error(err)
      } finally {
        setLoading(false);
      }
    };

    doSearch();
  }, [text]);


  return { results, loading, error };
}

const Modal: React.FC<IModal> = ({ handleVisible }) => {

    const [inputText,setInputText] = useState<string>("");
    const {results,loading,error} = useSearch(inputText)

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputText(value)
    }


    return (
      <>
        <div className={`fixed top-0 left-0 min-h-screen bg-slate-100 dark:bg-dark-bg w-full z-50 py-6 px-6 overflow-hidden lg:w-[600px] lg:h-[80vh]`}>
            <div className="flex items-center justify-between relative">
                <input
                    onChange={handleInput}
                    value={inputText}
                    autoFocus
                    className="py-1 bg-white px-3 border border-light-text/80 dark:border-dark-text/80 rounded outline-none text-start 
                    transition-all duration-200 focus:border-buttons-bg dark:bg-dark-surface"
                    placeholder="Search for posts..."
                    type="text" />

                { loading && <ImSpinner9 className="animate-spin text-2xl text-buttons-bg" /> }
                <button onClick={handleVisible} className="bg-buttons-bg text-white px-3 py-1 rounded cursor-pointer" >
                    Cancel
                </button>
            </div>

            {(!loading && results.length > 0) &&   <Results data={results} />}

            {error && <p>{error}</p>}
        </div>
         <div className="bg-black/30 fixed top-0 left-0 w-[100vw] h-[100vh] z-10 backdrop-blur-[3px]"></div>
         </>
    )
}

export const Search:React.FC = () => {
    const [shownModal, setShownModal] = useState<boolean>(false);
    

    const handleModal = () => {
        setShownModal(prev => !prev);
    };

    return(
        <div className="family">
            <button 
            aria-label="Buscar"
            onClick={handleModal}
            className="flex relative  bg-light-bg dark:bg-dark-bg items-center z-0 justify-between gap-2 py-2 px-3 border border-light-text/30 hover:border-light-text
             dark:border-dark-text/80 rounded w-min md:w-[240px] transition-all duration-200 cursor-pointer dark:hover:border-dark-text">
                <div className="flex items-center justify-center gap-1">
                    <CiSearch className="text-[1.2rem]" />
                    <span className="text-light-text/70 dark:text-dark-text/70 hidden md:block">Search</span>
                </div>
                <div className="bg-slate-100 dark:bg-dark-surface px-1 rounded
                border border-light-text/20 hidden md:block
                 dark:border dark:border-dark-text/20">
                    <span className="text-[0.8rem] text-light-text/70 dark:text-dark-text/70">Ctrl K</span>
                </div>
            </button>

            {
                shownModal && <Modal handleVisible={handleModal} />
            }

        
        </div>
    )
}