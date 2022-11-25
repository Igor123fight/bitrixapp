let viber = document.querySelector('#viber')
let telegram = document.querySelector('#telegram')
let token = 'https://testikigor.bitrix24.ru/rest/1/idadkvdihkocven8/'
let method = "crm.deal.get" 
let urlPage = document.location.href

for(var pair of urlPage.searchParams.entries()) {
   console.log(pair[0]+ ', '+ pair[1]); 
}

console.log(urlPage);
