document.getElementById('searchButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    fetch('https://api.api-onepiece.com/v2/characters/en')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Para verificar la estructura de los datos
            const charactersContainer = document.getElementById('characters');
            charactersContainer.innerHTML = ''; // Limpiamos el contenedor

            data.forEach(character => { // Recorremos los datos obtenidos
                if (character.name && character.name.toLowerCase().includes(name.toLowerCase())) {
                    const characterDiv = document.createElement('div'); // Creamos un div por cada personaje
                    characterDiv.className = 'character';   // Agregamos la clase 'character' al div
                    characterDiv.innerHTML = ` 
                        <h3>Nombre: ${character.name || 'Sin nombre'}</h3>
                        <h2>Tamaño: ${character.size || 'Sin tamaño'}</h2>
                        <h2>Edad: ${character.age || 'Sin edad'}</h2>
                        <h4>Recompensa: ${character.bounty || 'Sin recompensa'}</h4>
                        `;

                    charactersContainer.appendChild(characterDiv); 
                }
            });
        })
        .catch(error => console.error('Error al consumir la API:', error)); // Manejamos el error en caso de que ocurra
});