// estas funciones son de ejemplo



//let titles = data.films.map(({title}) => title);
// console.log(titles);



export const filter = (filterSelected, filterClassName, datas) => {
  //console.log(filterSelected, filterClassName);
  let fail="Debes dar un nombre de director o producer o un año válido";
  let filterData = [];
    if(filterClassName==="director"){
      //console.log("director" + filterSelected);

      filterData = datas.filter(({director}) => director===filterSelected);
      //console.log(filterData);
     
    }else if(filterClassName==="producer"){
      //console.log("producer" + filterSelected);

      filterData = datas.filter(({producer}) => producer===filterSelected);
    //console.log(filterData);
      

    }else if(typeof filterSelected === "string" && filterClassName==="year") {
     // console.log(typeof filterSelected);
      filterSelected=filterSelected.split(','); 
      //console.log(filterSelected);
      
      let firstDate=filterSelected[0];
      let lastDate=filterSelected.slice(-1)[0].trim();
      filterData = datas.filter(({release_date}) => (release_date>=firstDate && release_date<=lastDate));

     
      //console.log(filterData);
      
        
    }else {
      return fail;
    }
    return filterData;

  }



  function upward(x, y){
    if (x.title < y.title) {return -1}
    if (x.title > y.title) {return 1}
    return 0;
  }

  // function downward(x, y){
  //   if (x.title > y.title) {return -1}
  //   if (x.title < y.title) {return 1}
  //   return 0;
  // }

  export const order = (orderSelected, datas) => {
    let orderData = [];

    if(orderSelected==="upward"){
      orderData = [...datas].sort((x, y) => upward(x, y));
      
    }else if(orderSelected==="downward"){
      orderData = [...datas].sort((x, y) => (x.title>y.title ? -1:1));  
     } console.log(datas)
     return orderData;  

  }







