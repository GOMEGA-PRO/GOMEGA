const phone = "+919908036660";
// Todo : Complete this object to get all the items
const inventory = [
	{
		id : '0',
		name : "Elaichi",
		prices : {
			q1 : 340,
			q2 : 680,
			q3 : 1700
		}
	},
	{
		id : '3',
		name : "Lavang",
		prices : {
			q1 : 90,
			q2 : 180,
			q3 : 450
		}
	},
	{
		id : '4',
		name : "Shajeera",
		prices : {
			q1 : 90,
			q2 : 180,
			q3 : 450
		}
	},
	{
		id : '5',
		name : "Jaifhal",
		prices : {
			q1 : 120,
			q2 : 240,
			q3 : 600
		}
	},
	{
		id : '6',
		name : "Javatri",
		prices : {
			q1 : 30,
			q2 : 60,
			q3 : 150
		}
	},
	{
		id : '7',
		name : "Jeera",
		prices : {
			q1 : 24,
			q2 : 48,
			q3 : 120
		}
	},
	{
		id : '8',
		name : "Dhaniya",
		prices : {
			q1 : 18,
			q2 : 36,
			q3 : 90
		}
	},
	{
		id : '9',
		name : "Rai",
		prices : {
			q1 : 8,
			q2 : 16,
			q3 : 40
		}
	},
	{
		id : '10',
		name : "Mehti",
		prices : {
			q1 : 11,
			q2 : 22,
			q3 : 55
		}
	},
	{
		id : '11',
		name : "Tilli",
		prices : {
			q1 : 14,
			q2 : 28,
			q3 : 70
		}
	},
	{
		id : '12',
		name : "Khuskus",
		prices : {
			q1 : 140,
			q2 : 280,
			q3 : 700
		}
	},
	{
		id : '13',
		name : "Khopra",
		prices : {
			q1 : 22,
			q2 : 44,
			q3 : 110
		}
	},
	{
		id : '14',
		name : "Palli",
		prices : {
			q1 : 12,
			q2 : 24,
			q3 : 60
		}
	},
	{
		id : '15',
		name : "Sabudhana",
		prices : {
			q1 : 8,
			q2 : 16,
			q3 : 40
		}
	},
	{
		id : '16',
		name : "Kali Mirchi",
		prices : {
			q1 : 58,
			q2 : 116,
			q3 : 290
		}
	},
	{
		id : '17',
		name : "Sonth",
		prices : {
			q1 : 58,
			q2 : 116,
			q3 : 290
		}
	},
	{
		id : '18',
		name : "Mota Saunf",
		prices : {
			q1 : 25,
			q2 : 50,
			q3 : 125
		}
	}
];

const quantities = {
	q1: "100g",
	q2: "200g",
	q3: "500g"
};

$(document).ready(function() {
	// initialization code goes here
	console.log(inventory);
	const tbody = $("tbody")[0];
	inventory.map(item => {
		const row = document.createElement('tr');
		const name = createBlock('td', 'table-data-item', item.name);
		row.appendChild(name);
		Object.keys(item.prices).map(price => {
			const td = createBlock('td','table-data-item');
			const div = createBlock('div', 'form-check');
			const checkbox = createCheckbox(`${item.id}_${price}`, item.prices[price]);
			div.appendChild(checkbox);
			td.appendChild(div);
			row.appendChild(td);
		});
		
		tbody.appendChild(row);
		
	});
	
	function createBlock(type, className, data) {
		const element = document.createElement(type);
		if (className)
			element.className = className;
		if (data)
			element.innerText = data;
		
		return element;
	}
	
	function createCheckbox(id, quantity) {
		const label = createBlock('label', 'form-check-label');
		const input = createBlock('input', 'form-check-input');
		input.type = 'checkbox';
		input.id = id;
		input.value = quantity;
		label.appendChild(input);
		const q = document.createTextNode(quantity);
		label.appendChild(q);
		
		return label;
	}
});

function generateCart() {
	const selectedItems = $("input:checked");
	const cartData = [];
	Object.values(selectedItems).forEach(item => {
		if (!item.id)
			return;
		
		const id = item.id.split("_")[0];
		const qID = item.id.split("_")[1];
		const name = inventory.find(product => product.id === id).name;
		const quantity = quantities[qID];
		cartData.push({
			name: name,
			quantity: quantity
		});
	});
	let message = `Hello, here is the list of items I would like to purchase: \n`;
	cartData.forEach(item => message += `${item.name} : ${item.quantity} \n`);
	
	return message;
}



function sendOrder(){
	const message = encodeURI(generateCart());
	const link = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
	window.open(link,"_blank");
}
