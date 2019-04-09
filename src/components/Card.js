import React from 'react'
let card ="credit card"
let cardHolder="Cardholder"
function testName(value){
return (value.replace(/[^a-z] [ ]/g,'')).toUpperCase().slice(0,16)
}
function testDate(value){
    let table=[]
    let str=value.replace(/[^0-9]/g,'')
    for(let i=0;i<str.length;i=i+2){
        table.push(str.slice(i,i+2))
        if(table[0]>12){
            table[0]=12
    }
        if(table[1]<18){
            table[1]=18
        }
    }
    return table.join('/').slice(0,5)
    }
    function testNumber(value){
        let table=[]
        let str=value.replace(/[^0-9]/g,'')
        for(let i=0;i<str.length;i=i+4){
            table.push(str.slice(i,i+4))
        }
        return table.join(' ').slice(0,19)
    }
    class CreditCard extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: "",
                date:"",
                numberCard:"**** **** **** ****"
            }
        }
        nameFct=(event) => {
            this.setState({
                name: testName(event.target.value)
            })
        }
        dateFct=(event) => {
            this.setState({
                date: testDate(event.target.value)
            })
        }
        numberFct=(event) => {
            this.setState({
                numberCard: testNumber(event.target.value)
            })
        }
          render() {
            return <div>
                <div className="credit-card">
                    <h1 className="title-card">{cardHolder}</h1>
                    <div className="card-sim"></div>
                    <div className="group-infos">
                        <div className="line-space">
                            <h1 className="number-card styleNumber">{this.state.numberCard}</h1>
                            <div className="group-infos">
                                <h2 className="styleNumber">5422</h2>
                                <div className="footer-block">   
                                    <div>
                                        <h3 className="text">VALID</h3>
                                        <h3 className="text">THRU</h3>
                                    </div>
                                    <p className="fleche"></p>
                                    <div className="text">
                                        <p className="month-year">MONTH/YEAR</p>
                                        <h2 className="date">{this.state.date}</h2>
                                    </div>
                                </div>
                            </div>
                            <h2 className="footer-card">{this.state.name}</h2>
                        </div>
                        <h1 className="card-visa"></h1>
                    </div>
                </div>
                <div>
                    <div className="block-input">
                    <table>
                        <tr>
                            <td><h2 className="holder-name">Name</h2></td>
                            <td><h2 className="holder-name">:</h2></td>
                            <td><input className="input-item" type="text" placeholder="Name" onChange={this.nameFct.bind(this)} /></td>
                        </tr>
                        <tr>
                            <td><h2 className="holder-name">Date</h2></td>
                            <td><h2 className="holder-name">:</h2></td>
                            <td><input className="input-item" placeholder="Date" onChange={this.dateFct.bind(this)}  /></td>
                        </tr>
                        <tr>
                            <td><h2 className="holder-name">Number</h2></td>
                            <td><h2 className="holder-name">:</h2></td>
                            <td><input className="input-item" placeholder="Number Card" onChange={this.numberFct.bind(this)}/></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        }
    }
export default CreditCard;