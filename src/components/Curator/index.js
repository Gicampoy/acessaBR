import React from 'react'
import './curator.scss'
import curatorPhoto from '../../images/matheus-cardoso.jpg'

function CuratorItem() {

    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador Matheus Cardoso" />
            </div>  
            <div className="curator__details">
                <div>
                    <h3>Matheus Cardoso</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea molestias repudiandae voluptates quas odit fugiat vero aliquam.</p>
            </div>
        </div>
    )

}

export default CuratorItem