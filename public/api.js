const axios = require('axios');
const keyword = "해방";
const api_key = "yOvnV8S9LBzTVGvmEqSs4LnFIo9IluHT";
const url = `https://api.neople.co.kr/df/items?itemName=${keyword}&wordType=full&limit=5&apikey=${api_key}`;
console.log("asd");
async function getItemData() {
  try {
    const response = await axios.get(url);
    console.log(response['rows']);
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
    return null;
  }
}

getItemData(url)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

// async function getOpenApiData() {
//     try {
//       const keyword = document.getElementById('search').value;
//       var api_key = "yOvnV8S9LBzTVGvmEqSs4LnFIo9IluHT";
//       if(keyword != ""){
//       const openApiUrl = `https://api.neople.co.kr/df/auction-sold?itemName=${keyword}&wordType=front&wordShort=true&limit=100`;
//       const responseorg = await fetch(openApiUrl,{apikey: api_key});
//       const response = await responseorg.json();
//       server = response.data['rows']
      
//       server.forEach(item => {
//         var searchFindAll = document.getElementById("finditem")
//         searchFindAll.innerHTML += `<h3> 아이템이름: ${item['itemName']} itemId : ${item['itemId']} </h3>`
//       });

//       }
//     } catch (error) {
//       console.error(`Error: ${error}`);
//       return null;
//     }
//   }
// window.onload = function() {
// document.getElementById('searchButton').addEventListener('click', getOpenApiData)// 검색버튼 클릭 시, 검색 함수실행
// }