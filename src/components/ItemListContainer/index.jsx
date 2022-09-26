import React, {useState, useEffect} from 'react';

import Title from '../Title';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';


const productos = [
    {"id":1,"title":"Americano","category":"caliente", "descripcion":" Café espresso combinado con agua al mejor estilo americano.", "calorias":243, "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FAmericano%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop", "price":500},
    {"id":2, "title":"Caramel Macchiato Helado ","category":"frio", "descripcion":`Hielo, vainilla y leche "manchada" con espresso, finalizada con el característico dibujo de caramelo.`, "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Caramel%20Macchiato%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "calorias":289, "price":600},
    {"id":3, "title":"Americano Helado","category":"frio", "descripcion":"Delicioso café espresso combinado con agua y hielo, al mejor estilo americano.", "calorias":295, "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Americano%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "price":700},
    {"id":4, "title":"Mocha Helado","category":"frio", "descripcion":"Intenso chocolate con café espresso, hielo y leche, coronado con crema batida.", "calorias":303, "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Mocha%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "price":800},
    {"id":5, "title":"Cappuccino Helado","category":"frio", "descripcion":"El balance perfecto entre nuestro café espresso, hielo, leche y abundante espuma de leche.", "calorias":310, "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FIced%20Cappuccino%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "price":900},
    {"id":6, "title":"Sweet Vainilla Brew","category":"frio", "descripcion":"Bebida helada a base de granos de café colombianos infusionados por 20 horas, endulzada con vainilla y finalizada con crema de leche.", "calorias":505, "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCold%20Brew%20Vainilla%20Sweet%20Cream%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2", "precio":1000},
    {"id":7, "title":"Mocha","category":"caliente", "descripcion":"Chocolate con café espresso y leche al vapor, con crema batida.", "calorias":505, "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMocha%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop", "precio":1000},
    {"id":8, "title":"Café del día con leche","category":"caliente", "descripcion":"Nuestras mezclas únicas de café en granos preparadas en sistema de filtrado, con una capa de leche vaporizada.", "calorias":505, "image":"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCortado%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop", "precio":1000},
    
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 250);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(productos => productos.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }


    }, [categoriaId])

    
    
    return (
        <>
            <Title greeting={texto}/>
            <div className='counter d-flex img-fluid justify-content-center mx-3 p-3'>
                <ItemList data={data}/> 
            </div>
            
        </>
    )
}

export default ItemListContainer;