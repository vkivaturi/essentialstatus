
const initialTime = "---";
const status_list = ["0", "1", "2", "3"];

var item_category = [];
item_category.push({ category_code: "1", name: "Vegetables" });
item_category.push({ category_code: "6", name: "Fruits" });

// item_category.push({ category_code: "2", name: "Dairy products" });
// item_category.push({ category_code: "3", name: "Cereals" });
// item_category.push({ category_code: "4", name: "Pulses" });
// item_category.push({ category_code: "5", name: "Other essentials" });

var item_states = [];
item_states.push({ item_code: "10001", category_code: "1", name: "Oninon", status: "3", last_updated: initialTime });
item_states.push({ item_code: "10002", category_code: "1", name: "Potato", status: "3", last_updated: initialTime });
item_states.push({ item_code: "10003", category_code: "1", name: "Tomato", status: "3", last_updated: initialTime });
item_states.push({ item_code: "10004", category_code: "1", name: "Leafy veggies", status: "3", last_updated: initialTime });
item_states.push({ item_code: "10005", category_code: "1", name: "Lady finger", status: "3", last_updated: initialTime });
item_states.push({ item_code: "10006", category_code: "1", name: "Brinjal", status: "3", last_updated: initialTime });
item_states.push({ item_code: "10007", category_code: "1", name: "Carrot", status: "3", last_updated: initialTime });
item_states.push({ item_code: "10008", category_code: "1", name: "Chillies", status: "3", last_updated: initialTime });
item_states.push({ item_code: "10009", category_code: "1", name: "Lemon", status: "3", last_updated: initialTime });

// item_states.push({ item_code: "200001", category_code: "2", name: "Milk", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "200002", category_code: "2", name: "Curd", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "200003", category_code: "2", name: "Paneer", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "200004", category_code: "2", name: "Butter milk", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "200005", category_code: "2", name: "Cheese", status: "3", last_updated: initialTime });

// item_states.push({ item_code: "30001", category_code: "3", name: "Normal rice", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "30002", category_code: "3", name: "Premium rice", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "30003", category_code: "3", name: "Wheat", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "30004", category_code: "3", name: "Maida", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "30005", category_code: "3", name: "Sooji", status: "3", last_updated: initialTime });

// item_states.push({ item_code: "40001", category_code: "4", name: "Toor daal", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "40002", category_code: "4", name: "Chana daal", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "40003", category_code: "4", name: "Rajma", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "40004", category_code: "4", name: "Urad daal", status: "3", last_updated: initialTime });

// item_states.push({ item_code: "50001", category_code: "5", name: "Eggs", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "50002", category_code: "5", name: "Water", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "50003", category_code: "5", name: "Fruit juice", status: "3", last_updated: initialTime });
// item_states.push({ item_code: "50004", category_code: "5", name: "Bread", status: "3", last_updated: initialTime });

item_states.push({ item_code: "60001", category_code: "6", name: "Orange", status: "3", last_updated: initialTime });
item_states.push({ item_code: "60002", category_code: "6", name: "Banana", status: "3", last_updated: initialTime });
item_states.push({ item_code: "60003", category_code: "6", name: "Apple", status: "3", last_updated: initialTime });
item_states.push({ item_code: "60004", category_code: "6", name: "Water melon", status: "3", last_updated: initialTime });
item_states.push({ item_code: "60005", category_code: "6", name: "Grapes", status: "3", last_updated: initialTime });
item_states.push({ item_code: "60006", category_code: "6", name: "Pear", status: "3", last_updated: initialTime });
item_states.push({ item_code: "60007", category_code: "6", name: "Papaya", status: "3", last_updated: initialTime });
item_states.push({ item_code: "60008", category_code: "6", name: "Berries", status: "3", last_updated: initialTime });

//const formatter = new Intl.DateTimeFormat('in', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
const options = {timeZone: "Asia/Calcutta", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"};

const getCategories = () => {

    return item_category;

}

const getItems = () => {

    return item_states;

}

const fetchItem = (item_code) => {
    for (let i = 0; i < item_states.length; i++) {
        if (item_states[i].item_code == item_code) {
            return item_states[i];
        }
    }
}

const updateItem = (updItem) => {
    for (let i = 0; i < item_states.length; i++) {
        if (item_states[i].item_code == updItem.item_code) {

            //Update status only if valid value is provided. 
            if(status_list.includes(updItem.status)) {
                item_states[i].status = updItem.status;
                item_states[i].last_updated = new Date().toLocaleString("en-US", options);
            }else{
                item_states[i].status = "3";
                item_states[i].last_updated = initialTime;
            }
            return item_states[i];
        }
    }
}

module.exports = {
    getCategories,
    getItems,
    updateItem,
    fetchItem,
}
