const phone = '+917093011926',
    inventory = require('inventory'),
    quantities = { q3: '250g', q4: '500g' },
    multipliers = { q1: 0.05, q2: 0.1, q3: 0.25, q4: 0.5, q5: 1 },
    kiloRateId = 'q5',
    categories = ['dryfruit', 'spices', 'grocery'],
    categoryDisplayNames = {
        dryfruit: 'Dry Fruits',
        spices: 'Spices',
        grocery: 'Groceries'
    };
function initialise(data) {
    const accordionContainer = document.getElementById('accordion');
    (accordionContainer.innerHTML = ''),
        categories.forEach((category, index) => {
            const acc = generateAccordionData(data, category, index);
            acc && accordionContainer.appendChild(acc);
        });
}
function generateAccordionData(data, category, index) {
    const products = data
        .filter((item) => item.type === category)
        .map(transform);
    if (0 === products.length) return null;
    const accordion = getAccordionElement(category, index);
    return (
        generateTableHeader(accordion),
        generateTableBody(products, category, accordion),
        accordion
    );
}
function getAccordionElement(category, index) {
    const cardDiv = document.createElement('div');
    return (
        (cardDiv.className = 'card'),
        (cardDiv.innerHTML = `\n            <div class="card-header" data-toggle="collapse" data-target="#collapse_${index}">\n                ${getCategoryDisplayName(
            category
        )}\n            </div>\n            <div\n                id="collapse_${index}"\n                class="collapse"\n                data-parent="#accordion"\n            >\n                <div class="card-body">\n                    <table id="table_${category}" class="tg table table-bordered">\n                        <thead id="thead_${category}"></thead>\n                        <tbody id="tbody_${category}"></tbody>\n                    </table>\n                </div>\n            </div>\n    `),
        cardDiv
    );
}
function generateTableHeader(accordion) {
    const header = accordion.querySelector('thead'),
        tr = document.createElement('tr');
    tr.appendChild(getTableHeaderCell('Name')),
        Object.values(quantities).forEach((quantity) => {
            tr.appendChild(getTableHeaderCell(quantity));
        }),
        tr.appendChild(getTableHeaderCell('Bulk (in Kg)')),
        header.appendChild(tr);
}
function generateTableBody(products, category, accordion) {
    const tbody = accordion.querySelector('tbody');
    products.forEach((item) => {
        const row = document.createElement('tr');
        (row.innerHTML = `\n\t\t\t<td class="table-data-item">${item.name}</td>\n\t\t`),
            Object.keys(item.prices).forEach((price) => {
                quantities.hasOwnProperty(price) &&
                    (row.innerHTML += `\n\t\t\t<td class="table-data-item">\n\t\t\t\t<div class="form-check">\n\t\t\t\t\t<label class="form-check-label">\n\t\t\t\t\t\t<input\n                            class="form-check-input "\n                            type="radio"\n                            ${
                        getCheckedForRadio(item.id, price) ? 'checked' : ''
                    }\n                            id="${
                        item.id
                    }_${price}"\n                            name="${
                        item.id
                    }"\n                            value="${
                        item.prices[price]
                    }"\n                            onclick="toggleRadio(this) "\n                            onchange="updateCheckBoxOrder(\n                            \t${
                        item.id
                    },\n                            \t${getQuantityMultiplier(
                        price
                    )},\n                            \t${
                        item.prices.q5
                    },\n                            \tthis.checked)"\n                        >\n                        ${
                        item.prices[price]
                    }\n\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</td>`);
            }),
            (row.innerHTML += `\n            <td class="table-data-item">\n                <div class="bulk-order">\n                    <input\n                        id="bulk_${
                item.id
            }"\n                        type="number"\n                        value="${getValueForBulkInput(
                item.id
            )}"\n                        onchange="updateBulkOrder(${
                item.id
            },this.value,${
                item.prices.q5
            }) "\n                        onkeyup="updateBulkOrder(${
                item.id
            },this.value,${
                item.prices.q5
            }) "\n                    >\n                    <div id="total_${
                item.id
            }" class="total-amount">\n                        0\n                    </div>\n                </div>\n            </td>\n            `),
            tbody.appendChild(row);
    });
}
function getTableHeaderCell(name) {
    const th = document.createElement('th');
    return (th.innerText = name), th;
}
$(document).ready(function () {
    (window.currentOrders = []), initialise(inventory.getAll());
});
const transform = (item) => ({
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
    }),
    getCategoryDisplayName = (name) => categoryDisplayNames[name];
function searchTable(queryString) {
    initialise(inventory.getFilteredItems(queryString));
}
function generateCart() {
    const currentOrders = window.currentOrders;
    let message = `Hello, I'm ${
        document.getElementById('name').value
    } \nMy Address: ${
        document.getElementById('address').value
    } \nHere is the list of items I would like to purchase: \n`;
    if (
        (currentOrders.forEach((item) => {
            const name = inventory.getName(item.id);
            message += `${name} : ${item.quantity}Kg \n`;
        }),
        0 === currentOrders.length)
    )
        return window.confirm('There are no orders placed'), '';
    {
        if (!window.confirm('' + message)) return;
        const link = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
        window.open(link, '_blank');
    }
    return message;
}
function toggleRadio(ele) {
    ele.classList.contains('on')
        ? ((ele.checked = !1), ele.onchange(), ele.classList.remove('on'))
        : ele.classList.add('on');
}
function getQuantityMultiplier(qid) {
    return multipliers[qid];
}
function updateOrder(id, quantity, rate, needUpdateLocalOrder = !0) {
    const currentOrders = window.currentOrders,
        order = currentOrders.find((item) => item.id === id);
    if (order)
        quantity > 0
            ? (order.quantity = quantity)
            : currentOrders.splice(currentOrders.indexOf(order), 1);
    else {
        let newOrder = { id: id, quantity: quantity, rate: rate };
        currentOrders.push(newOrder);
    }
    needUpdateLocalOrder && updateLocalCounter(id), updateGlobalCounter();
}
function updateLocalCounter(id) {
    let localCounterElement = document.getElementById('total_' + id);
    const order = window.currentOrders.find((item) => item.id === id);
    localCounterElement.innerText = order
        ? (order.quantity * order.rate).toString()
        : '0';
}
function updateGlobalCounter() {
    const currentOrders = window.currentOrders;
    let total = 0;
    currentOrders.forEach((item) => {
        total += item.quantity * item.rate;
    }),
        (document.getElementById('counter').innerText = total);
}
function updateCheckBoxOrder(id, quantity, rate, checked) {
    updateOrder(id, checked ? quantity : 0, rate, !1),
        clearBulkOrderInputText(id);
}
function updateBulkOrder(id, quantity, rate) {
    clearQuantityInputRadio(id), updateOrder(id, quantity, rate);
}
function clearBulkOrderInputText(id) {
    document.getElementById('bulk_' + id).value = '';
}
function clearQuantityInputRadio(id) {
    $(`input[name = '${id}']`).each(function () {
        (this.checked = !1), this.classList.remove('on');
    });
}
function getCheckedForRadio(id, quantity) {
    const currentOrders = window.currentOrders;
    if (0 === currentOrders.length) return !1;
    const order = currentOrders.find(
        (order) => order.id.toString() === id.toString()
    );
    return !!order && getQuantityMultiplier(quantity) === order.quantity;
}
function getValueForBulkInput(id) {
    const currentOrders = window.currentOrders;
    if (0 === currentOrders.length) return '';
    const order = currentOrders.find(
        (order) => order.id.toString() === id.toString()
    );
    return order && order.quantity >= 1 ? order.quantity : '';
}
function formValidation() {
    const form = document.getElementById('user-form');
    form.checkValidity()
        ? generateCart()
        : form.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'nearest'
          }),
        form.classList.add('was-validated');
}
