import React, { Component } from 'react'
import style from "./Swap.module.css"
import Select from "../form-components/Select"
import Input from "../form-components/Input"

class Swap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input_currency: "USD",
            output_currency: "EUR",
            input_amount: "",
            output_amount: "",
            rate: "",
            error: "",
            currencyOptions: [
                { id: "AED", value: "AED" },
                { id: "ARS", value: "ARS" },
                { id: "AUD", value: "AUD" },
                { id: "BGN", value: "BGN" },
                { id: "BRL", value: "BRL" },
                { id: "BSD", value: "BSD" },
                { id: "CAD", value: "CAD" },
                { id: "CHF", value: "CHF" },
                { id: "CLP", value: "CLP" },
                { id: "CNY", value: "CNY" },
                { id: "COP", value: "COP" },
                { id: "CZK", value: "CZK" },
                { id: "DKK", value: "DKK" },
                { id: "DOP", value: "DOP" },
                { id: "EGP", value: "EGP" },
                { id: "EUR", value: "EUR" },
                { id: "FJD", value: "FJD" },
                { id: "GBP", value: "GBP" },
                { id: "GTQ", value: "GTQ" },
                { id: "HKD", value: "HKD" },
                { id: "HRK", value: "HRK" },
                { id: "HUF", value: "HUF" },
                { id: "IDR", value: "IDR" },
                { id: "ILS", value: "ILS" },
                { id: "INR", value: "INR" },
                { id: "ISK", value: "ISK" },
                { id: "JPY", value: "JPY" },
                { id: "KRW", value: "KRW" },
                { id: "KZT", value: "KZT" },
                { id: "MXN", value: "MXN" },
                { id: "MYR", value: "MYR" },
                { id: "NOK", value: "NOK" },
                { id: "NZD", value: "NZD" },
                { id: "PAB", value: "PAB" },
                { id: "PEN", value: "PEN" },
                { id: "PHP", value: "PHP" },
                { id: "PKR", value: "PKR" },
                { id: "PLN", value: "PLN" },
                { id: "PYG", value: "PYG" },
                { id: "RON", value: "RON" },
                { id: "RUB", value: "RUB" },
                { id: "SAR", value: "SAR" },
                { id: "SEK", value: "SEK" },
                { id: "SGD", value: "SGD" },
                { id: "THB", value: "THB" },
                { id: "TRY", value: "TRY" },
                { id: "TWD", value: "TWD" },
                { id: "UAH", value: "UAH" },
                { id: "USD", value: "USD" },
                { id: "UYU", value: "UYU" },
                { id: "VND", value: "VND" },
                { id: "ZAR", value: "ZAR" }
            ],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        // const input_currency1 = this.state.input_currency;
        let output_currency1 = this.state.output_currency;

        fetch(`https://api.exchangerate-api.com/v4/latest/${this.state.input_currency}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.setState({
                    rate: json.rates[output_currency1],
                    isLoaded: true,
                    [name]: value,
                },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                );
            },
            )
    }

    handleClick = (e) => {
        var temp = this.state.input_currency;
        let output_currency1 = this.state.output_currency;

        fetch(`https://api.exchangerate-api.com/v4/latest/${this.state.input_currency}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.setState({
                    rate: json.rates[output_currency1],
                    isLoaded: true,
                    input_currency: this.state.output_currency,
                    output_currency: temp
                },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                );
            },
            )
    }

    componentDidMount() {
        let output_currency1 = this.state.output_currency;
        fetch(`https://api.exchangerate-api.com/v4/latest/${this.state.input_currency}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.setState({
                    rate: json.rates[output_currency1],
                    isLoaded: true,
                },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                );
            },
            )
    }

    render() {
        const { input_amount, rate } = this.state;
        let output_amount = input_amount * rate;

        //output_amount = input_amount * rates

        return (
            <div className={style.containerswap} >
                <div className={style.currency}>

                    <Select
                        id={"input_currency"}
                        name={"input_currency"}
                        options={this.state.currencyOptions}
                        value={this.state.input_currency}
                        handleChange={this.handleChange}
                    />

                    <Input
                        id={"input_amount"}
                        name={"input_amount"}
                        type={"number"}
                        value={this.state.input_amount}
                        handleChange={this.handleChange}
                        placeholder={"0"}
                    />
                </div>
                <button id={style.exchange} onClick={this.handleClick}>
                    ↕
                </button>
                <div className={style.currency}>

                    <Select
                        id={"output_currency"}
                        name={"output_currency"}
                        options={this.state.currencyOptions}
                        value={this.state.output_currency}
                        handleChange={this.handleChange}
                    />

                    <Input
                        id={"output_amount"}
                        name={"output_amount"}
                        type={"number"}
                        value={output_amount}
                        handleChange={this.handleChange}
                        placeholder={"0"}
                    />
                </div>
                <div className={style.result}>
                    <div>
                        <button className={`${style.custombtnn} ${style.btnn}`}>Swap</button>
                    </div>
                    <div className={style.rate} id={style.rate}>
                        1 {this.state.input_currency} = {this.state.rate} {this.state.output_currency}
                    </div>
                </div>

            </div >)
    }


}

export default Swap;