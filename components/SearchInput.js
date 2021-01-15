export default function SearchInputComponent({ searchInput, setSearchInput }) {
    return(
        <>
            <input 
                autoFocus
                type="search" 
                value={searchInput} 
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Walter White"
            />
        </>
    )
}