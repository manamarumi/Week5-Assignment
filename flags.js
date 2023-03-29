fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countries = document.getElementById('countries');
    data.forEach(country => {
      const div = document.createElement('div');
      div.className = 'country';
      
      const name = document.createElement('h2');
      name.className = 'name';
      name.textContent = country.name.common;
      div.appendChild(name);
      
      const img = document.createElement('img');
      img.className = 'flag';
      img.src = country.flags.svg;
      div.appendChild(img);
      
      const population = document.createElement('p');
      population.className = 'population';
      population.textContent = `Population: ${country.population}`;
      div.appendChild(population);
      
      countries.appendChild(div);
    });
  });