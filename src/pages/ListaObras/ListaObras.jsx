import React from "react";
import Obras from "../../Componentes/Obras/Obras";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer"
export default function ListaObras(){    
    return (
        <div>
            <Header></Header>
            <h1>Pixel Art</h1>
            <div className='lista'>

            </div>
            <div>
                <Obras nome="Pixel Village" texto="Pixel Art enviroment" image={'https://i.pinimg.com/564x/c0/7f/86/c07f866b9084f1c2b869e12a3ae1c701.jpg'}></Obras>
                <Obras nome="Pixel florest " texto="Pixel Art enviroment" image={'https://i.pinimg.com/564x/09/e7/45/09e745ca4b4265227d6a4fd5e22482b9.jpg'}></Obras>
                <Obras nome="Pixel mountains " texto="Pixel Art enviroment" image={'https://i.pinimg.com/236x/e7/3c/e0/e73ce066ed0ed9caa69fc10dae0fb281.jpg'}></Obras> 
                <Obras nome="Pixel mountains " texto="Pixel Art enviroment" image={'https://i.pinimg.com/564x/05/06/36/050636089a4e108356253c933f97148e.jpg'}></Obras> 
                <Obras nome="Pixel mountains " texto="Pixel Art enviroment" image={'https://i.pinimg.com/564x/54/f8/5c/54f85cd62599819a4095265651e17c1f.jpg'}></Obras> 
                <Obras nome="Pixel mountains " texto="Pixel Art enviroment" image={'https://i.pinimg.com/564x/96/27/eb/9627eb7e97173783910eaaa86912a762.jpg'}></Obras> 
                <Obras nome="Pixel mountains " texto="Pixel Art enviroment" image={'https://i.pinimg.com/564x/81/4c/56/814c56176773def6a2f94b1b78b41b4c.jpg'}></Obras> 

            </div>
            <Footer></Footer>
        </div>
    );
}
