/*Desenvolvido por Lucas Moraes
--É necessario ter uma chave de acesso do Google Api Vision
--Ter Instalado o Node.js, Npm e de preferencia um editor de codigo
--Ter instalado como Dependencia Google Cloud Vision, Express e Nodemon*/

const express = require ('express')
const app = express();

    // Importando a Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Criando um client
    const client = new vision.ImageAnnotatorClient({
        //Chave de acesso da api, colocar com o nome de "key.json"
        keyFilename: 'key.json'
    });
  
    //client
    client
        //Componente da Api que detecta rotulos da imagem e classficia todos com o Label Annoations
        //Segue imagens para testes na pasta image, basta adicionar no campo .labelDetection
        .labelDetection('./image/carros.jpg')
        .then(results => {
            const labels = results[0].labelAnnotations;

            
            //Exibindo os rotulos capturadas da imagem 
            //usando o componente description da Api Vision
            console.log('Rotulos Encontrados: \n');
            labels.forEach(label => console.log(label.description));

        })
        .catch(err => {
            //Mensagem a exibir caso não haja detecção
            console.error('ERROR:' , err);
        });
    
  
//Executando o servidor na porta 5000 e no IP 127.0.0.1
  app.listen(5000, '127.0.0.1', ()=> console.log('Server Running'))