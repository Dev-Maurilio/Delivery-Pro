const CONFIG = {
    store: {
        name: "Pizzaria Premium",
        logoIcon: "fa-solid fa-pizza-slice", // FontAwesome Class
        whatsappNumber: "558494203878",
        instagram: "aaaa",
        address: {
            street: "Rua da Pizza, 123",
            neighborhood: "Centro",
            city: "São Paulo - SP"
        },
        operatingHours: {
            days: "Terça a Domingo",
            hours: "18:00 às 23:30",
            openHour: 18,
            closeHour: 23,
            closeMinute: 30,
            closedDays: [1] // 0=Dom, 1=Seg...
        }
    },
    business: {
        deliveryFee: 7.00,
        currencyLocale: 'pt-BR',
        currencyOptions: { style: 'currency', currency: 'BRL' }
    },
    categories: [
        { id: 'pizzas', name: 'Pizzas', icon: '🍕' },
        { id: 'sanduiches', name: 'Sanduíches', icon: '🍔' },
        { id: 'bebidas', name: 'Bebidas', icon: '🥤' }
    ],
    menu: [
        // PIZZAS
        {
            id: 'p1',
            name: "Calabresa",
            price: 35.00,
            category: "pizzas",
            description: "Calabresa defumada, cebola roxa e azeitonas.",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 'p2',
            name: "Frango c/ Catupiry",
            price: 42.00,
            category: "pizzas",
            description: "Frango desfiado e Catupiry original gratinado.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop"
        },
        // SANDUÍCHES
        {
            id: 's1',
            name: "X-Burguer",
            price: 22.00,
            category: "sanduiches",
            description: "Pão brioche, burger artesanal, queijo cheddar e molho especial.",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 's2',
            name: "X-Salada",
            price: 25.00,
            category: "sanduiches",
            description: "Burger artesanal, queijo prato, alface americana, tomate e maionese verde.",
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
        },
        // BEBIDAS
        {
            id: 'b1',
            name: "Coca-Cola 2L",
            price: 12.00,
            category: "bebidas",
            description: "Refrigerante Coca-Cola Garrafa 2 Litros.",
            image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 'b2',
            name: "Suco Natural",
            price: 8.00,
            category: "bebidas",
            description: "Suco de laranja natural, feito na hora (500ml).",
            image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop"
        }
    ]
};
