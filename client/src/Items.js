import React, { Component } from 'react';
import './App.css';

class Items extends Component {

    constructor(props) {
        super(props);

        const formatter = new Intl.DateTimeFormat('in', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });


        const status_ref = [];
        status_ref.push({ status: "0", label: "Available", style: "btn btn-success btn-sm btn-block p-3", next_status: "1" });
        status_ref.push({ status: "1", label: "Last few items", style: "btn btn-warning btn-sm btn-block p-3", next_status: "2" });
        status_ref.push({ status: "2", label: "Out of stock", style: "btn btn-danger btn-sm btn-block p-3", next_status: "0" });
        status_ref.push({ status: "3", label: "No update", style: "btn btn-primary btn-sm btn-block p-3", next_status: "0" });

        this.state = {
            available: true,
            last_few: false,
            not_available: false,
            btn_class: "btn btn-success btn-sm btn-block p-3",
            btn_text: "Available",
            last_updated: "No recent update on product availability",
            item_category: [],
            item_states: [],
            status_ref,
            items: []
        }
    }

    componentDidMount() {
        //Load all items from database
        fetch('/categories')
            .then(res => res.json())
            .then(item_category => this.setState({ item_category }));

        fetch('/items')
            .then(res => res.json())
            .then(item_states => this.setState({ item_states }));

    }

    update_status = (index) => {

        const { item_states } = this.state;
        const { status_ref } = this.state;


        var curr_status = item_states[index].status;
        var new_status = status_ref[curr_status].next_status;

        //Make a waiting call to update the status and fetch the updated time        
        const request = async () => {
            const response = await fetch('/item/' + item_states[index].item_code + '/update/status/' + new_status);
            const item = await response.json();
            item_states[index].status = item.status;
            item_states[index].last_updated = item.last_updated;
            this.setState({ item_states });
        }
        request();
    }

    render() {

        return (

            <div>
                <section>
                    <div>
                        <div class="container">
                            {this.state.item_category.map((category, c_index) => (
                                <div>
                                    <br></br>
                                    <h3 class="text-white bg-dark margin-1">{category.name}</h3>
                                    <div class="row">
                                        {this.state.item_states.map((item, index) => (
                                            <div>
                                                {(item.category_code === category.category_code) &&
                                                    <div class="col-md">
                                                        <div class="bg-light">
                                                            <h5>{item.name}</h5>
                                                            <span class="text-white">{"".padStart(20, "-")}</span>
                                                            <div class="text-muted" >
                                                                {" " + item.last_updated}
                                                                <button id={item.item_code} type="button"
                                                                    class={this.state.status_ref[item.status].style}
                                                                    onClick={() => this.update_status(index)}><b class="text-white">{this.state.status_ref[item.status].label}</b></button>
                                                            </div>
                                                        </div>
                                                        <br></br>
                                                    </div>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Items;
