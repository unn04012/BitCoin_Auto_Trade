import express from 'express';
import axios from 'axios';

export default class Index {
    path = '/';
    router = express.Router();
    url = 'https://api.upbit.com/v1/market/all?isDetails=true';
    priceUrl = 'https://api.upbit.com/v1/ticker?markets=KRW-BTC';
    option = { headers: { Accept: 'application/json' } };

    constructor() {
        this.router.get('/', this.index);
        this.router.get('/price', this.currentPrice);
    }
    showList = async () => {
        try {
            const result = await axios.get(this.url, this.option);
            return result.data;
        } catch (err) {
            console.error('error : ', err);
        }
    }

    currentPrice = async (market = 'KRW-BTC') => {
        try {
            const result = await axios.get(this.priceUrl, this.option);
            console.log(result.data[0].trade_price);
            return result.data[0].trade_price;
        } catch (err) {
            console.error('error : ', err);
        }
    }
    getLastDay = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = ("0" + (1 + date.getMonth())).slice(-2);
        let day = ("0" + (date.getDate())).slice(-2);

        return year + "-" + month + "-" + day + 'T00:00:00.000Z';
    }



    lastDayCandle = async (market = 'KRW-BTC', time = this.getLastDay()) => {
        try {
            let url = `https://api.upbit.com/v1/candles/days?market=${market}&to=${time}`;
            const { data } = await axios.get(url, this.option);
            console.log(data);
        } catch (err) {
            console.error(err)
        }
    }

    index = async (req, res, next) => {
        console.log(this.getLastDay())
        this.lastDayCandle();
        let lists = await this.showList();
        res.render('index', { lists })
    }


}
