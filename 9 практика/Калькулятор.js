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
      console.log('Навёл курсор')
    },
    handleMouseleave(){
      console.log('')
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
  template:'<h3>Кушать надо вкусно</h3>',
})

new Vue({ 
  el: '#components',
})
