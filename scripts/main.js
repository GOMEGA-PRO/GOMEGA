const phone = '+917093011926';
const inventory = require('inventory');
const quantities = {
    // q1: '50g',
    // q2: '100g',
    q3: '250g',
    q4: '500g'
    // q5: '1000g'
};
const multipliers = {
    q1: 0.05,
    q2: 0.1,
    q3: 0.25,
    q4: 0.5,
    q5: 1
};
const kiloRateId = 'q5';
const categories = ['dryfruit', 'spices', 'grocery'];
const categoryDisplayNames = {
    dryfruit: 'Dry Fruits',
    spices: 'Spices',
    grocery: 'Groceries'
};

$(document).ready(function () {
    window.currentOrders = [];
    // initialization code goes here
    initialise(inventory.getAll());
});

function initialise(data) {
    const accordionContainer = document.getElementById('accordion');
    accordionContainer.innerHTML = '';
    categories.forEach((category, index) => {
        const acc = generateAccordionData(data, category, index);
        if (acc) {
            accordionContainer.appendChild(acc);
        }
    });
}

function generateAccordionData(data, category, index) {
    const products = data
        .filter((item) => item.type === category)
        .map(transform);

    if (products.length === 0) return null;

    const accordion = getAccordionElement(category, index);
    generateTableHeader(accordion);
    generateTableBody(products, category, accordion);

    return accordion;
}

function getAccordionElement(category, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `
            <div class="card-header" data-toggle="collapse" data-target="#collapse_${index}">
                ${getCategoryDisplayName(category)}
            </div>
            <div
                id="collapse_${index}"
                class="collapse show"
                data-parent="#accordion"
            >
                <div class="card-body">
                    <table id="table_${category}" class="tg table table-bordered">
                        <thead id="thead_${category}"></thead>
                        <tbody id="tbody_${category}"></tbody>
                    </table>
                </div>
            </div>
    `;

    return cardDiv;
}

function generateTableHeader(accordion) {
    const header = accordion.querySelector('thead');
    const tr = document.createElement('tr');
    tr.appendChild(getTableHeaderCell('Name'));
    Object.values(quantities).forEach((quantity) => {
        tr.appendChild(getTableHeaderCell(quantity));
    });
    tr.appendChild(getTableHeaderCell('Bulk (in Kg)'));
    // tr.appendChild(getTableHeaderCell('Total'));

    header.appendChild(tr);
}

function generateTableBody(products, category, accordion) {
    const tbody = accordion.querySelector('tbody');

    products.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
			<td class="table-data-item">${item.name}</td>
		`;

        //quantities
        Object.keys(item.prices).forEach((price) => {
            if (!quantities.hasOwnProperty(price)) return;
            row.innerHTML += `
			<td class="table-data-item">
				<div class="form-check">
					<label class="form-check-label">
						<input
                            class="form-check-input "
                            type="radio"
                            ${
                                getCheckedForRadio(item.id, price)
                                    ? 'checked'
                                    : ''
                            }
                            id="${item.id}_${price}"
                            name="${item.id}"
                            value="${item.prices[price]}"
                            onclick="toggleRadio(this) "
                            onchange="updateCheckBoxOrder(
                            	${item.id},
                            	${getQuantityMultiplier(price)},
                            	${item.prices[kiloRateId]},
                            	this.checked)"
                        >
                        ${item.prices[price]}
					</label>
					
				</div>
			</td>`;
        });
        //bulk orders input text
        row.innerHTML += `
            <td class="table-data-item">
                <div class="bulk-order">
                    <input
                        id="bulk_${item.id}"
                        type="number"
                        value="${getValueForBulkInput(item.id)}"
                        onchange="updateBulkOrder(${item.id},this.value,${
            item.prices[kiloRateId]
        }) "
                        onkeyup="updateBulkOrder(${item.id},this.value,${
            item.prices[kiloRateId]
        }) "
                    >
                    <div id="total_${item.id}" class="total-amount">
                        0
                    </div>
                </div>
            </td>
            `;
        tbody.appendChild(row);
    });
}

function getTableHeaderCell(name) {
    const th = document.createElement('th');
    th.innerText = name;

    return th;
}

const transform = (item) => {
    return {
        name: item.name,
        id: item.id,
        type: item.type,
        prices: {
            q1: item.q1,
            q2: item.q2,
            q3: item.q3,
            q4: item.q4,
            q5: item.q5
        }
    };
};

const getCategoryDisplayName = (name) => {
    return categoryDisplayNames[name];
};

function searchTable(queryString) {
    const filteredInventory = inventory.getFilteredItems(queryString);
    initialise(filteredInventory);
}

function generateCart() {
    const currentOrders = window.currentOrders;

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    let message = `Hello, I'm ${name} \nMy Address: ${address} \nHere is the list of items I would like to purchase: \n`;
    currentOrders.forEach((item) => {
        const name = inventory.find(
            (product) => product.id === item.id.toString()
        ).name;
        message += `${name} : ${item.quantity}Kg \n`;
    });
    if (currentOrders.length === 0) {
        window.confirm('There are no orders placed');
        return '';
    } else {
        result = window.confirm(`${message}`);
        if (result === false) {
            return;
        }
        const link = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
        window.open(link, '_blank');
    }

    return message;
}

function toggleRadio(ele) {
    if (ele.classList.contains('on')) {
        ele.checked = false;
        ele.onchange();
        ele.classList.remove('on');
    } else {
        ele.classList.add('on');
    }
}

function getQuantityMultiplier(qid) {
    return multipliers[qid];
}

function updateOrder(id, quantity, rate) {
    const currentOrders = window.currentOrders;
    const order = currentOrders.find((item) => item.id === id);
    if (order) {
        if (quantity > 0) {
            order.quantity = quantity;
        } else {
            currentOrders.splice(currentOrders.indexOf(order), 1);
        }
    } else {
        let newOrder = {
            id: id,
            quantity: quantity,
            rate: rate
        };
        currentOrders.push(newOrder);
    }
    updateLocalCounter(id);
    updateGlobalCounter();
}

function updateLocalCounter(id) {
    let localCounterElement = document.getElementById(`total_${id}`);
    const order = window.currentOrders.find((item) => item.id === id);
    if (order) {
        localCounterElement.innerText = (
            order.quantity * order.rate
        ).toString();
    } else {
        localCounterElement.innerText = '0';
    }
}

function updateGlobalCounter() {
    const currentOrders = window.currentOrders;
    let total = 0;
    currentOrders.forEach((item) => {
        total = total + item.quantity * item.rate;
    });
    let counterElement = document.getElementById('counter');
    counterElement.innerText = total;
}

function updateCheckBoxOrder(id, quantity, rate, checked) {
    if (checked) {
        updateOrder(id, quantity, rate);
    } else {
        updateOrder(id, 0, rate);
    }
    clearBulkOrderInputText(id);
}
function updateBulkOrder(id, quantity, rate) {
    clearQuantityInputRadio(id);
    updateOrder(id, quantity, rate);
}
function clearBulkOrderInputText(id) {
    document.getElementById(`bulk_${id}`).value = '';
}
function clearQuantityInputRadio(id) {
    $(`input[name = '${id}']`).each(function () {
        this.checked = false;
        this.classList.remove('on');
    });
}

function getCheckedForRadio(id, quantity) {
    const currentOrders = window.currentOrders;
    if (currentOrders.length === 0) return false;

    const order = currentOrders.find(
        (order) => order.id.toString() === id.toString()
    );
    if (order) {
        return getQuantityMultiplier(quantity) === order.quantity;
    }

    return false;
}

function getValueForBulkInput(id) {
    const currentOrders = window.currentOrders;
    if (currentOrders.length === 0) return '';

    const order = currentOrders.find(
        (order) => order.id.toString() === id.toString()
    );
    if (order && order.quantity >= 1) return order.quantity;

    return '';
}

function formValidation() {
    const form = document.getElementById('user-form');

    if (form.checkValidity()) {
        generateCart();
    }

    form.classList.add('was-validated');
}
