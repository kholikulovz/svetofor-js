let rec = new webkitSpeechRecognition();
const redCircle = document.querySelector('.red')
const yellowCircle = document.querySelector('.yellow')
const greenCircle = document.querySelector('.green')
const elTitle = document.querySelector('.title')
const elText = document.querySelector('.text')
rec.lang = 'uz-UZ';
rec.maxAlternatives = 1;

elTitle.addEventListener('click', function(){
elText.textContent = 'Ranglardan birini ayting: yashil, sariq, qizil'
    rec.start();
    rec.onerror = function(e){
        document.write = ('error')
    }
    rec.onend = function(e){
        document.write = ('aloqa tugadi')
    }
    rec.onresult = function(e){
        if(e.results[0][0].transcript == 'qizil'){
            yellowCircle.style.background = ''
            greenCircle.style.background = ''
            redCircle.style.background = 'red'
            elText.textContent = 'Qizil'
        }
        else if(e.results[0][0].transcript == 'sariq'){
            redCircle.style.background = ''
            greenCircle.style.background = ''
            yellowCircle.style.background = 'gold'
            elText.textContent = 'Sariq'
        }
        else if(e.results[0][0].transcript == 'yashil'){
            yellowCircle.style.background = ''
            redCircle.style.background = ''
            greenCircle.style.background = 'green'
            elText.textContent = 'Yashil'
        }
        
    }
})



