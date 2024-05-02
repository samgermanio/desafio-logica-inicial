let pokemons = [];

// Adiciona pokemons ao array
pokemons.push({ nome: "poocheyna", nivel: 2, sexo: "M", hp: 13 });
pokemons.push({ nome: "zigzagoon", nivel: 2, sexo: "F", hp: 13 });
pokemons.push({ nome: "dragonite", nivel: 5, sexo: "M", hp: 25 });
pokemons.push({ nome: "dragonite", nivel: 5, sexo: "F", hp: 24 });
pokemons.push({ nome: "dragonite", nivel: 5, sexo: "F", hp: 24 });
pokemons.push({ nome: "poocheyna", nivel: 3, sexo: "F", hp: 15 });
pokemons.push({ nome: "wurmple", nivel: 2, sexo: "M", hp: 14 });

// Exibe mensagem de saída para cada pokemon
pokemons.forEach(pokemon => {
console.log(`${pokemon.nome} Cadastrado com sucesso`);
});