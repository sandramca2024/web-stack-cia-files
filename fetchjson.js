fetch(' https://sandramca2024.github.io/cia-dog-json/dogs.json')
    .then(response => response.json())
    .then(data => {
        const breedDetails = document.getElementById('breedDetails');
        data.forEach(breed => {
            breedDetails.innerHTML += `
                <div class="breed">
                    <h3>${breed.breedName}</h3>
                    <img src="${breed.imageUrl}" alt="${breed.breedName}">
                    <p>${breed.description}</p>
                    <p><strong>Size:</strong> ${breed.size}</p>
                    <p><strong>Lifespan:</strong> ${breed.lifespan}</p>
                    <p><strong>Origin:</strong> ${breed.origin}</p>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error loading breed data:', error));
