import React, {Component} from 'react';
import style from './Mks.module.css'
import {GoogleApiWrapper} from "google-maps-react";


class Mks extends Component {

    state = {
        coorLong: 0,
        coorLat: 0,
        people: {},
        time: '',
        date: '',
        stop: null,
        updater: true
    };


    getData() {
        let getAllData = async () => {
            try {
                let response = await fetch('http://api.open-notify.org/iss-now.json')
                let data = await response.json()

                this.setState({
                    coorLat: data.iss_position.latitude
                });

                this.setState({
                    coorLong: data.iss_position.longitude
                });

                let myLatLng = {lat: +this.state.coorLat, lng: +this.state.coorLong};

                let map = new this.props.google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: myLatLng
                });

                new this.props.google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Hello World!'
                });

            } catch (error) {
                console.log('Пожалуйста дайте прогармме загрузится')
                console.log(error)

                // throw new Error(error)
            }

            try {
                let response = await fetch('https://api.open-notify.org/astros.json')
                let data = await response.json();
                this.setState({
                    people: data.people
                })
            } catch (error) {
                console.log('Пожалуйста дайте прогармме загрузится')
                console.log(error)
                // throw new Error(error)
            }
            let t = new Date();
            this.setState({
                time: `${t.getUTCHours()}:${t.getUTCMinutes()}:${t.getUTCSeconds()}`
            });

            this.setState({
                date: `${t.getUTCDate()}.${t.getUTCMonth() + 1}.${t.getUTCFullYear()}`
            })

        };

        getAllData()

        let timerId = setInterval(getAllData, 5000);

        this.setState({
            stop: timerId
        })
    }


    componentDidMount() {
        this.getData()
    }

    componentWillUnmount() {
        clearTimeout(this.state.stop);

    }

    stop = () => {
        clearTimeout(this.state.stop);
        this.setState({updater: false})
    };

    start = () => {
        this.getData();
        this.setState({updater: true})
    }


    render() {
        return (
            <>
                <div className={style.main}>
                    <div className={style.block1}>
                        <div>
                            <div>
                                <strong>
                                    Текущие координаты МКС (Обновляются каждые несколкьо секунд)
                                </strong>
                            </div>
                            <div>
                                Ширина: <span className={style.lat}>{this.state.coorLat}</span>,
                                Долгота: <span className={style.long}>{this.state.coorLong}</span>
                                <div>
                                    {this.state.updater ? <button onClick={this.stop}>Остановить</button> :
                                        <button onClick={this.start}>Запустить</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.block2}>
                        <div>
                            <div>
                                <strong>
                                    Время и дата получения координат:
                                </strong>
                            </div>
                            <div>
                                <div>Время - <span className={style.time}>{this.state.time}</span></div>
                                <div>Дата - <span className={style.date}>{this.state.date}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.block3}>

                        <div id='map'>

                        </div>

                    </div>
                    <div className={style.block4}>
                        <div>
                            <h3>Члены экипажа МКС (в реальном времени)</h3>
                        </div>
                        <div className={style.profiles}>
                            {this.state.people.length > 0 ? this.state.people.map(item =>
                                <div className={style.profile}>
                                    <div className={style.photo}>
                                        <img
                                            className={style.imgPersonal}
                                            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/ISS_Expedition_14_patch.svg"
                                            alt=""/>
                                    </div>
                                    <div className={style.name}>{item.name}</div>
                                </div>
                            ) : ''}
                        </div>
                        <div className={style.people}>
                            <div>
                                Всего человек <span className={style.total}>{this.state.people.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyB1dVUizyqVQnOHhcBgieXR1S_cChyPzyk')
})(Mks);
