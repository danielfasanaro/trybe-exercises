const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const flavors = Object.keys(order.order.pizza);
  // const flavors = ['margherita', 'margherita', 'margherita', 'margherita', 'margherita']
  let allFlavors = '';
  for (let index = 0; index < flavors.length; index += 1) {
    if (allFlavors){
      allFlavors = `${allFlavors}, ${flavors[index]}`
    }
    else {
      allFlavors = flavors[index];
    }
  }
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  // console.log(allFlavors);
  console.log(`Olá ${order.name}, o total do seu pedido de ${allFlavors} e ${order.order.drinks.coke.type} é R$ ${order.payment.total.toFixed(2)}`);
}

orderModifier(order);