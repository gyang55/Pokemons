export function filter(data, setFilteredData, name, attack) {
    const filtered = data.filter((pokemon) => {
        return pokemon.name.english.toLowerCase().includes(name.toLowerCase()) &&
            pokemon.base.Attack > attack
    });
    setFilteredData(filtered);
}

