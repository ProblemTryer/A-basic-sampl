import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import Router from './router'


const { CosmosClient } = require("@azure/cosmos");
const endpoint = "https://mydomain.documents.azure.com:443/";
const key = "A valid key";
const client = new CosmosClient({ endpoint, key });
const database = client.database("dairyfarm");

async function QueryCow() {
    const cowContainer = await database.container("cow");
    const { resources: items } = await cowContainer.items.readAll().fetchAll();
}

class Index extends Component{
    render(){
        return (
            <div>
                <div class="buttons" onClick={QueryCow}>                           
                    <a class="button is-primary">
                        <strong>test</strong>
                    </a>
                </div>
            </div>
        )
    }
}

export default Index;

ReactDOM.render(<Router/>, document.getElementById('root'));