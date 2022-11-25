let viber = document.querySelector('#viber')
let telegram = document.querySelector('#telegram')
let token = 'https://testikigor.bitrix24.ru/rest/1/idadkvdihkocven8/'
let method = ["crm.deal.get.json?", 'crm.contact.get.json?'] 
let res = document.querySelector('#buttons')


let url = new URL (document.location.href)
let pathName = url.pathname
let idDeal = ''
console.log(pathName)

for (let i = 18; i < pathName.length-1; i++) {
    idDeal += pathName[i]
}

async () => {

    let result = await fetch(`${token}${method[0]}ID=${idDeal}`);
    let deal =  await result.json();

    let idContact = deal.result.CONTACT_ID


        let newResult = await fetch(`${token}${method[0]}ID=${idContact}`)
        let contact = await newResult.json()
    
        let phone = contact.result.PHONE[VALUE]
    
        console.log(phone);
    
    res.innerHTML += `<form action="https://viber.click/${phone}" method="post">
                        <button id="viber">Viber</button>
                    </form>
                    <form action="https://t.me/${phone}" method="post">
                        <button id="telegram">Telegram</button>
                    </form>` 

}
