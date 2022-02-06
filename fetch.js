var public_key="38cd79b5f2b2486d86f562e3c43034f8";
var private_key="8e49ff607b1f46e1a5e8f6ad5d312a80";

var elem=document.getElementById('h2');
var div=document.getElementById('div');


//Получаем список заказов 
function Get_data(access_token){
   let URL_Order_list='http://localhost:8080/http://api.pixlpark.com/orders?oauth_token='+access_token;
   fetch(URL_Order_list,{
    method: 'Get',
}).then(response => response.ok ? response : Promise.reject(response))
.then(response => response.json())
.then(json => {
    console.log(json);
    div.innerHTML=JSON.stringify(json);
})
}

//Получаем токен для доступа(AccessToken) 
function Get_AccessToken(method, url){
   fetch(url,{
        method: method,
    }).then(response => response.ok ? response : Promise.reject(response))
    .then(response => response.json())
    .then(json => {
        console.log(json);
        elem.innerHTML="Токен доступа: "+json.AccessToken;
      Get_data(json.AccessToken)
    })

}


/*
const URL_Request_Token = 'http://localhost:8080/http://api.pixlpark.com/oauth/requesttoken';

//Получаем токен для запроса(RequestToken) 
function Get_RequestToken(method, url){
fetch(url,{
        method: method,
    }).then(response => response.ok ? response : Promise.reject(response))
    .then(response => response.json())
    .then(json => {
        console.log(json.RequestToken);
    })
}
   

  try {
    Get_RequestToken('GET',URL_Request_Token);
  } catch(err) {
    alert(err); 
  }  
  */

var Request_Token='5f293dc2292847f6bf164626dc5ce8a5';

//Хешируем Request Token и Private Key(этот процесс был сделан онлайн хэшированием)
var SHA1='49B7E98D5DFFC61D7F7279C148C5336BCA5C0DB8';

const URL_access_token='http://localhost:8080/http://api.pixlpark.com/oauth/accesstoken?oauth_token='+Request_Token+'&grant_type=api&username='+public_key+'&password='+SHA1;


  try {
    Get_AccessToken('GET',URL_access_token);
  } catch(err) {
    alert(err); 
  }  

