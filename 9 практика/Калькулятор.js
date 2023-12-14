var vue = new Vue({
  el:'#app',
  data: {
      result: '',
      numbers:[1,2,3,4,5,6,7,8,9,0],
      operations:['+','-','*','/']
  },
  methods: {
      input:function(char){
          this.result = this.result.tostring();
          this.result+=char;
      },
      reset: function(){
          this.result = '';
      },
      calc: function(){
          this.result = eval(this.result);
      }
  }
});

let app1 = new Vue({
    el: '#auto-table',
    data: {
        items: []
    },
    created: function() {
        fetch('calcul.json')
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