var app = new Vue({
  el: '#app',
  data: {
    FirstNumber: 0,
    operator: null,
    SecondNumber: 0,
    waitingForOperand: false,
  },
  methods: {
    addNumber: function(number) {
      if (this.waitingForOperand) {
        this.FirstNumber = number;
        this.waitingForOperand = false;
      } else {
        this.FirstNumber = this.FirstNumber * 10 + number;
      }
    },
    addOperator: function(operator) {
      this.operator = operator;
      this.SecondNumber = this.FirstNumber;
      this.waitingForOperand = true;
    },
    calculate: function() {
      switch (this.operator) {
        case '+':
          this.FirstNumber = this.FirstNumber + this.SecondNumber;
          break;
        case '-':
          this.FirstNumber = this.SecondNumber - this.FirstNumber;
          break;
        case '*':
          this.FirstNumber = this.FirstNumber * this.SecondNumber;
          break;
        case '/':
          this.FirstNumber = this.SecondNumber / this.FirstNumber;
          break;
      }
      this.operator = null;
      this.waitingForOperand = true;
    },
    clear: function() {
      this.FirstNumber = 0;
      this.operator = null;
      this.SecondNumber = 0;
      this.waitingForOperand = false;
    },
  },
});

let app1 = new Vue({
  el: '#auto-table',
  data: {
      items: []
  },
  created: function() {
      fetch('data.json') 
          .then(response => response.json())
          .then(data => {
              this.items = data;
          });
  }
});



let Hover = document.getElementById("myDiv");
Hover.addEventListener("mouseover", function() {
Hover.style.backgroundColor = "yellow";
});
Hover.addEventListener("mouseout", function() {
Hover.style.backgroundColor = "";
});

const form = document.querySelector('#myForm');
form.onsubmit = function() {
alert('Ваши данные отправлены')
};

document.onkeydown = function(event) {
if (event.keyCode === 13) {
  alert('Вы нажали ENTER!!!')
}
};

new Vue({
el: '#FirstVue',
methods: {
  doSomething(){
    alert('Вы нажали на кнопку, но это сообщение вывело Vue')
  },
  DoubleClick(){
    alert('Хватит в меня тыкать!')
  }
}
})

new Vue({
el: '#SecondVue',
methods:{
  handleMouseover(){
    console.log('Положи 100 рублей и уходи!!!')
  },
  handleMouseleave(){
    console.log('А где 100 рублей не понял -_-')
  }
}
})

Vue.component('button-counter', {
data: function () {
  return {
    count: 0
  }
},
template:`<div>
            <button v-on:click="count++">Счётчик кликов — {{ count }}</button>
            <hello-world></hello-world>
          </div>`,

})
Vue.component('hello-world',{
template:'<h3>Привет мир!</h3>',
})

new Vue({ 
el: '#components',
})