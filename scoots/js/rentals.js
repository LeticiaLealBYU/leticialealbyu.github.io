const requestURL = '/rentals.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rentals = jsonObject['rentals'];
        rentals.forEach(rent => {
            if (rent.type == "Honda Metro Scooter" || rent.type == "Honda Dio Scooter" || rent.type == "Honda PCX150 Scooter" || rent.type == "Honda Pioneer ATV" || rent.type == "Jeep Wrangler - 4 door with a/c"  || rent.type == "Jeep Wrangler - 2 door"){
                let card = document.createElement('section')
                let div = document.createElement('div')
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('h3');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('h3');
                let p6 = document.createElement('p');
                let p7 = document.createElement('p');
                let image = document.createElement('img');
                let link = document.createElement('a');
                let textLink = document.createElement('p');

                div.setAttribute('class', 'rentData')
                h2.textContent = rent.type;
                p1.textContent = "Max. Persons: " + rent.maxPeople;
                p2.textContent = "Price under Reservation"
                p3.textContent = "Half Day (3hrs): " + rent.reservationsHD;
                p4.textContent = "Full Day: " + rent.reservationsFD;
                p5.textContent = "Walk-In Prices"
                p6.textContent = "Half Day (3hrs): " + rent.walkingHD;
                p7.textContent = "Full Day: " + rent.walkingFD;
                image.setAttribute('src', `./images/${rent.image}`);
                image.setAttribute('alt', rent.type);

                div.appendChild(h2);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                div.appendChild(p5);
                div.appendChild(p6);
                div.appendChild(p7);
                card.appendChild(div);
                card.appendChild(image);

                document.querySelector('div.Rent').appendChild(card);
            }
        });

    });
