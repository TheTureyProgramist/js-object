const bankCard = {
  ownerName: "Діма",
  cardNumber: "583952428",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    alert(`Ваш рахунок поповнено на ${amount}. Залишок на рахунку: ${this.balance}`);
  },
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      alert(`Ви зняли ${amount}. Залишок на рахунку: ${this.balance}`);
    } else {
      alert("Недостатньо коштів для цієї операції!");
    }
  }
};

while (true) {
  const action = prompt("Виберіть: 1 - Поповнити, 2 - Оплатити, 3 - Вихід, 4 - Запамятовування користувача (назвіть пін-код та 3 цифри позаду картки) ");

  if (action === "1") {
    const amount = parseFloat(prompt("Введіть суму для поповнення:"));
    if (!isNaN(amount) && amount > 0) {
      bankCard.deposit(amount);
    } else {
      alert("Некоректна сума!");
    }
  } else if (action === "2") {
    const amount = parseFloat(prompt("Введіть суму для зняття:"));
    if (!isNaN(amount) && amount > 0) {
      bankCard.withdraw(amount);
    } else {
      alert("Некоректна сума!");
    }
  } else if (action === "3") {
    alert("Дякуємо за використання нашого сервісу!");
    break;
  } else {
    alert("Некоректний вибір. Спробуйте ще раз.");
  } if (action === "4") {
    alert("Дякуємо 50% грошей що були на картці передані ЗСУ");
      break;
      // Дивно цей момент в ютубі працював в консолі
  } else {
    alert("Некоректний вибір. Спробуйте ще раз.");
    break;
  }
}

const weather = {
  temperature: 0,
  humidity: 50,
  windSpeed: 10,
  isBelowZero() {
    return this.temperature < 0;
  }
};

if (weather.isBelowZero()) {
  console.log("Temp < 0 oC");
} else {
  console.log("Temp > & = 0 oC");
}

const user = {
  name: "",
  email: "",
  password: "",
};

user.email = "test@example.com";
user.password = "123456";

if (user.login("test@example.com", "123456")) {
  console.log("Ура");
} else {
  console.log("Неправильно написано в е-меілі чи паролі");
}

const movie = {
  title: "Дизель шоу",
  author: "Невідомо",
  year: 2020,
  popularity: 8,
  colorazingPopular() {
    return this.rating >= 8;
  }
};

console.log(`Назва: ${movie.title}`);
console.log(`Автор: ${movie.author}`);
console.log(`Рік: ${movie.year}`);
console.log(`Популярність: ${movie.popularity}`);

if (movie.colorazingPopular()) {
  console.log("Колір: Зелений");
} else {
  console.log("Koлip: Bidcytniй");
}
