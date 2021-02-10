export default function SearchInputComponent({ searchInput, setSearchInput }) {
    return(
        <>
            <label> Say my name.
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