document.addEventListener('DOMContentLoaded', function() {
    // Получаем элемент h2
    const h2 = document.querySelector('h2');

    if (h2) {
        // Получаем текст внутри h2
        const text = h2.textContent || h2.innerText;

        // Определяем страницу по тексту
        let pageType;
        switch (text) {
            case 'Портфолио':
                pageType = 'Портфолио';
                select(pageType);
                break;
            case 'Блог':
                pageType = 'Блог';
                select(pageType);
                break;
            case 'Оставить заявку':
                pageType = 'Оставить заявку';
                setButton();
                calculate();
                break;
            default:
                pageType = 'Неизвестная страница';
                alert("Ошибка!");
        }

        // Выводим результат в консоль
        console.log(pageType);
    } else {
        console.log('Заголовок h2 не найден на странице');
    }
});

function select(type){
    let elem = '.post_container .post';
    
    if (type =='Портфолио'){
        elem = '.portfolio-gallery img';
    }
    const selector = document.getElementById('selector_type');
    const elems = document.querySelectorAll(elem);
        
    function update() {
    const selectedValue = selector.value;    
                    
    elems.forEach(element => {
        element.style.display = 'none';
    });
        
    const selectedItems = document.querySelectorAll(`${elem}.${selectedValue}`);
    selectedItems.forEach(item => {
        if (type =='Портфолио') {item.style.display = 'block';}
        else {item.style.display = 'flex';}
    });
    } 
    update();

    selector.addEventListener('change', update);
}

function calculate(){
    const priceElem = document.getElementsByClassName('price');
    const selector = document.getElementById('selector_type');
    let price = 0;

    function update() {
        const selectedValue = selector.value;    
        switch (selectedValue){
            case 'portrait':{
                price = '5.000';
                break;
            }
            case 'family':{
                price = '10.000';
                break;
            }
            case 'animal':{
                price = '15.000';
                break;
            }
            case 'wedding':{
                price = '50.000';
                break;
            }
        }
        priceElem[0].innerText = `Примерная стоимость съёмки = ${price}₽`;
        priceElem[0].style.display = 'block';
    }    

    selector.addEventListener('change', update);
}


function setButton(){
    const selectorType = document.getElementById('selector_type');
    const form = document.getElementById('request-form');
    const submitButton = document.getElementById('submit');
  
    submitButton.addEventListener('click', function (event) {
      event.preventDefault(); // Предотвращаем стандартное поведение отправки формы
  
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const name = document.getElementById('name').value;
      const type = selectorType.value;
      const comment = document.getElementById('comment').value;
      const agree = document.getElementById('agree').checked;
  
      // Валидация формы
      if (!email || !phone || !name || !type || !agree) {
        alert('Пожалуйста, заполните все обязательные поля и согласитесь на обработку данных.');
        return;
      }

      else alert('Спасибо за заявку!');
      window.location.reload();
    });
}