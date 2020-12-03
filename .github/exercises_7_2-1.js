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

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // const address = 'address';
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order['name'];
  const customerPhone = order['phoneNumber'];
  const street = order['address'].street;
  const number = order['address'].number;
  const apartment = order['address'].apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, ${street}, Nº${number}, AP: ${apartment}.`);
}

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = 'Luiz Silva';
  const pizza1 = 'muzzarella';
  const pizza2 = 'calabreza';
  const customerRefri = order['drinks']['coke'].type;
  const customerValue = order['payment'].total;
  customerValue = '50,00';


  console.log(`Olá ${name}, o total do seu pedido de ${pizza1}, ${pizza2} e ${customerRefri} é R$ ${customerValuevalue}.`);
}

orderModifier(order);