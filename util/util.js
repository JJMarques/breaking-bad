export async function getAllCharacters() {
    const res = await fetch('https://www.breakingbadapi.com/api/characters/')
    .then(r => r.json())

    return res
}

export async function getSpecificCharacter(query) {
    const res = await fetch(`https://www.breakingbadapi.com/api/characters/?name=${query}`)
    .then(r => r.json())

    return res
}