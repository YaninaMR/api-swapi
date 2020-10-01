
const responseContainer = document.getElementById('response-container');
let images = [
  'https://static.vecteezy.com/system/resources/previews/000/688/159/non_2x/executive-woman-in-office-cartoon-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/000/688/159/non_2x/executive-woman-in-office-cartoon-vector.jpg', 
  'https://static.vecteezy.com/system/resources/previews/000/688/159/non_2x/executive-woman-in-office-cartoon-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/000/688/159/non_2x/executive-woman-in-office-cartoon-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/000/688/159/non_2x/executive-woman-in-office-cartoon-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/000/688/159/non_2x/executive-woman-in-office-cartoon-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/000/688/159/non_2x/executive-woman-in-office-cartoon-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/000/688/159/non_2x/executive-woman-in-office-cartoon-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/000/688/159/non_2x/executive-woman-in-office-cartoon-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/000/688/159/non_2x/executive-woman-in-office-cartoon-vector.jpg',
];
    
window.addEventListener('load', function(e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  fetch('https://swapi.co/api/people/')
    .then(handleErrors)
    .then(parseJSON)
    .then(addNews)
    .catch(displayErrors);
});

function handleErrors(res) {
  console.log('Se ha presentado un error');
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
}

function parseJSON(res) {
  return res.json()
    .then(function(parsedData) {
      console.log(parsedData);
      console.log(parsedData.results);
      return parsedData.results;
    });
}
$('#modal-sm').modal();
function addNews(response) {
  $.each(response, function(index) {
    console.log(index);
    let div = document.createElement('div');
    let img = document.createElement('img');
    responseContainer.appendChild(div); 
    div.classList.add('warsClass');
    div.classList.add('modal-trigger');
    div.setAttribute('data-target', 'modal-sm'); 
    div.appendChild(img);
    img.setAttribute('src', images[index]);
    img.setAttribute('class', 'img-responsive'); 
    img.classList.add('small');
  });
    
  $('.warsClass').each(function(i, itemdiv) {
    $(itemdiv).on('click', function(event) {
      $('.img-star').attr('src', images[i]);
      $('.name-star').text(': ' + response[i].name);
      $('.hair-star').text(' Color de Cabello: ' + response[i].hair_color);
      $('.mass-star').text(' Peso: ' + response[i].mass + ' kg');
      $('.height-star').text(' Talla: ' + parseInt(response[i].height) * 0.01 + ' m');
      $('.skin-star').text('Color de Piel: ' + response[i].skin_color);
      $('.phone-star').text('Celular: ' + '999' + i + '5687' + i);
      event.preventDefault();
    });        
  }); 
}

function displayErrors(err) {
  console.log('INSIDE displayErrors!');
  console.log(err);
}
