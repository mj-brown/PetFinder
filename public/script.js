// Fetch pets data and render cards
const fetchAndRenderPets = () => {
  fetch("/api/v1/pets")
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementById("cardContainer");
      // Clear previous content
      cardContainer.innerHTML = "";

      // Iterate through each pet in the data
      data.forEach((pet) => {
        // Create card container
        const card = document.createElement("div");
        card.classList.add("card");

        // Create card content
        const cardContent = `
                    <h2>${pet.name}</h2>
                    <p><span>Breed:</span> ${pet.breed}</p>
                    <p><span>Age:</span> ${pet.age}</p>
                    <p><span>Owner:</span> ${pet.owner}</p>
                    <p><span>Telephone:</span> ${pet.telephone}</p>
                `;

        // Set card content
        card.innerHTML = cardContent;

        // Append card to container
        cardContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching pets:", error));
};

// Add event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchAndRenderPets);
