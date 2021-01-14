export default function SearchInputComponent({ searchInput, setSearchInput }) {

    return(
        <>
            <input 
                type="search" 
                value={searchInput} 
                onChange={e => setSearchInput(e.target.value)}
            />
        </>
    )
}