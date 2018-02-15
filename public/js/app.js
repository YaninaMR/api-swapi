
  const responseContainer = document.getElementById('response-container');
  let images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFNgS3LJuAqmK0xBcoXxyjGEMkNLBj2u6jMT3cgq2pKq3i4im3A',
  'http://celebrationsoxford.co.uk/2101-large_default/gravekeeper-hooded-cloak.jpg', 
  'http://www.fotogramas.es/var/ezflow_site/storage/images/cinefilia/star-wars-mujeres-personajes-femeninos/leia-organa/123062234-1-esl-ES/Leia-Organa_ampliacion.jpg',
  'https://i.pinimg.com/736x/ef/0c/6a/ef0c6a7a8756482936443faadae15ecb--icon-png-free-icon.jpg',
  'https://target.scene7.com/is/image/Target/51297192?wid=520&hei=520&fmt=pjpeg',
  'https://s-media-cache-ak0.pinimg.com/originals/33/94/ba/3394ba75cd8a47dfa8e0f37f3472a464.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/41LYY79u35L.jpg',
  'https://pm1.narvii.com/6030/cb80b9a679f4bd67bca1354c8cdf77d4cd28f24b_128.jpg',
  'data:image/jpeg;base64,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',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebuHTVccHi3rfltfR7IvV_mM8eVN8ZAmmjyVMODp26ATm4lvd',
];
    
  window.addEventListener('load',function(e){
    e.preventDefault();
    responseContainer.innerHTML = '';
   fetch(`https://swapi.co/api/people/`)
    .then(handleErrors)
    .then(parseJSON)
    .then(addNews)
    .catch(displayErrors);
  });

  function handleErrors(res){
    console.log('Se ha presentado un error');
    if(!res.ok){
     throw Error(res.status);
    }
     return res;
  }

  function parseJSON(res){
    return res.json()
      .then(function(parsedData){
        console.log(parsedData);
        console.log(parsedData.results);
      return parsedData.results;

    })
  }

  function addNews(response){
     $.each(response, function(index) {
          console.log(index);
          let div = document.createElement('div');
          let img = document.createElement('img');
          div.className = 'warsClass';
          responseContainer.appendChild(div); 
          div.appendChild(img);
          img.setAttribute('src',images[index]);
          img.setAttribute('class','img-responsive'); 
          img.setAttribute('class','small');        
     });
    
     $('.warsClass').each(function (i, itemdiv) {
            $(itemdiv).on('click',function(event){
               
               alert('soy: ' + response[i].name + "\n"+
                     'Color de cabello: '+ response[i].hair_color + "\n"+
                     'Peso:'+ response[i].mass + 'kg.' + "\n" +
                     'Talla'+  response[i].height + 'm.'+ "\n" +
                     'Piel: ' + response[i].skin_color);
                event.preventDefault();
             });        
     }); 
  }

  function displayErrors(err){
  console.log("INSIDE displayErrors!");
  console.log(err);
  }
