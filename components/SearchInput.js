export default function SearchInputComponent({ searchInput, setSearchInput }) {
    return(
        <>
            <label> Search for a Breaking Bad character
                <input 
                    autoFocus
                    type="search" 
                    value={searchInput} 
                    onChange={e => setSearchInput(e.target.value)}
                    placeholder="Walter White"
                />
            </label>
        </>
    )
}