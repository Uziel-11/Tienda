import React from "react";
import Header from "../recursos/Header"


class Home extends React.Component{
    render(){
        return(
            <>
                <div>
                    <Header/>
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <form className="d-flex">
                                <a className="navbar-brand">CONSIGUE UN 15% DE DESCUENTO EN TU PRIMER PEDIDO</a>
                                <a className="navbar-brand">ENVIO GRATUITO A EL PAIS</a>
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>

                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/recursos/images/Picture2.png" className="d-block w-100" alt="IMG1"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://img.ltwebstatic.com/images3_ach/2021/03/15/16157763514ccee7ff6d883eb887ffcad9a7dda20c.webp" className="d-block w-100" alt="IMG2"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://img.ltwebstatic.com/images3_ach/2021/03/15/1615776323062b62943106e6cfaf4c85f0f75fd766.jpg" className="d-block w-100" alt="IMG3"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <br/>
                <p>OFERTAS FLASH</p>

                <div className="card-group">
                    <div className="card">
                        <img src="https://img.ltwebstatic.com/images3_pi/2021/01/13/16105143105e072659dd0f9244013dac6f5802a0ac_thumbnail_405x552.webp" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">$MXN266.00</h5>
                                <p className="card-text">Vestido de tirantes con nudo girante delantero con estampado floral de margarita.</p>
                            </div>
                    </div>
                    <div className="card">
                        <img src="https://img.ltwebstatic.com/images3_pi/2021/01/13/1610523034a59d5b789d0137828b714a25df8946ac_thumbnail_600x.webp" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">$MXN305.00</h5>
                                <p className="card-text">Vestido Nudo floral de margarita Bohemio.</p>
                            </div>
                    </div>
                    <div className="card">
                        <img src="https://img.ltwebstatic.com/images3_pi/2021/01/19/1611027106a481bbe28a41854a0f578cdd8df7d6d6_thumbnail_405x552.webp" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">$MXN170.00</h5>
                                <p className="card-text">Vestido con estampado floral ribete en forma de lechuga de hombros descubiertos.</p>
                            </div>
                    </div>
                    <div className="card">
                        <img src="https://img.ltwebstatic.com/images3_pi/2021/01/18/1610950757d803097f049559ae187543f7f12b71a2_thumbnail_600x.webp" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">$MXN318.00</h5>
                                <p className="card-text">Vestido slip floral de margarita con cordón lateral cruzado ribete con fruncido.</p>
                    </div>
                    </div>
                    <div className="card">
                        <img src="https://img.ltwebstatic.com/images3_pi/2021/03/10/1615364342fbfd7c6884d605ec31170b8bb737b48d_thumbnail_405x552.webp" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">$MXN131.00</h5>
                                <p className="card-text">Vestido slip de espalda baja con estampado floral.</p>
                            </div>
                    </div>                    <div className="card">
                        <img src="https://img.ltwebstatic.com/images3_pi/2021/01/15/161067456640e423b05c7cdf3ece9ae406a844519e_thumbnail_600x.webp" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">$MXN326.00</h5>
                            <p className="card-text">Vestido floral de margarita con fruncido delantero de manga farol.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    agregarCarrito(e){

        let arrayCarrito

        e.preventDefault()
    }

}

export default Home;