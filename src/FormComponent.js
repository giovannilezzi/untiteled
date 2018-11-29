import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'

class FormComponent extends React.Component{

    state = {
        response: null
    }

    componentWillMount() {
        axios.get(`http://172.18.50.67:8065/plugins/com.mattermost.server-apiwithparameters`)
            .then(res => {
                const response = res.data;
                alert("Risposta: " + response)
            })
    }

    render() {
        alert(this.state.response)
        return (
        <div>
            <div style={{ marginBottom: '5px' }}>Value: {this.props.name + " " +this.props.surname}</div>
            <div>
                <label>
                    Change me:
                    <input
                        type="text"
                        name="form"
                        value="prova"
                    />
                    <input
                        type="text"
                        name="form"
                        value="prova"
                    />
                </label>
                <Button id ="app" name="Button" >Go to APP</Button>

                <Button id="imm" name="Button" > Go to Topics </Button>

                <Button id="imm" name="Button"> Prova </Button>

            </div>
        </div>
        ) ;
    }
}

export default FormComponent;
