import React, { Component } from 'react';
import axios from 'axios';
//import $ from 'jquery';

class App extends Component {

    state = {
        response: "null",
        isLoading: true
    }

    componentWillMount() {

        var url = 'http://localhost:3001/saveImage'
        var array = new Uint32Array(1024)
        array = [1, 2, 3 ,4]
        const requestBody = {
             Name:'Pippo',
             File: window.btoa(array)
        }
        console.log("Json: " + JSON.stringify(requestBody))
        /*
        const config = {
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded'
                'Content-Type': 'application/json'
            }
        }*/

        /*
        //Send Json
        $.ajax({
            //url: 'http://localhost:3000/say',
            url,
            type: 'post',
            //headers: {'Content-Type': 'application/json; charset=utf-8'},
            config,
            /*
            non conosce this.setState
            success: function (data) {
                console.log(data)
                alert(data);
                this.setState({data})
            },
            */
        /*
            data: JSON.stringify(requestBody)
            //data: requestBody
        }).then(function (data) {
                console.log("Sono nel then")
                console.log(data)
                alert(data);
                this.setState({data})
            });
            */

        // Send application/x-www-form-urlencoded

        /*
        $.ajax({
            //url: 'http://localhost:3000/say',
            url,
            type: 'post',
            //headers: {'Content-Type': 'application/json; charset=utf-8'},
            config,
            /* non conosce this.setState
            success: function (data) {
                console.log(data)
                alert(data);
                this.setState({data})
            },*/
            /*
            //data: JSON.stringify(requestBody)
            data: requestBody
        }).then(function (data) {
            console.log("Sono nel then")
            console.log(data)
            alert(data);
            this.setState({data})
        });
        */


        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data;
                console.log("Risposta: " + response.Response)
                const obj = response.Response
                this.setState({
                    response: obj,
                    isLoading: false
                })
                console.log("Loading: " + this.state.response)
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })



        /*
        axios.post('http://localhost:3000/say', {params: {
            name: 'bar'
        }})
            .then(res => {
                const response = res.data;
                console.log(response)
                alert(response);
                this.setState({response})
            }).catch(function (error) {
            // handle error
            console.log(error);
        })*/
    }

    componentDidMount() {
        console.log("Response: " + this.state.response)
    }

    render() {
        if (this.state.isLoading){
            return(this.state.isLoading &&
                <i className="fa fa-spinner fa-spin"></i>
            )
        }else
            return(!this.state.isLoading &&
                <div className="App">
                <header className="App-header">
                  <p>
                    {this.state.response}
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            );
  }
}

export default App;
