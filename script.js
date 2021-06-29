const API_URL = "http://localhost:7000/api/posts";
const BASE_URL = "http://localhost:7000/"

const getPosts = () => {
    fetch(API_URL, {
        method: "GET"
    }).then( (response) => {
return response.json();
    }).then( (data) => {
        //console.log(data.name);
        return showData(data.results);
    })
}
getPosts();
const showData = (data) => {
    let dataDiv = "";
    data.forEach((datum) => {
        const userName = datum.name;
        const userGender = datum.gender;
        const userPlace = datum.place;
        dataDiv += 
        `
        <div>
            <h3>${userName}</h3>
        </div>
        <div>
            <p>${userGender}</p>
        </div>
        <div>
            <p>${userPlace}</p>
        </div>
        `
   
       
    });
    const wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = dataDiv;
}

const submitbutton = document.querySelector('#submit');
console.log(submitbutton);

const getvalue = () => {
    const name = document.querySelector('#name').value;
    const gender = document.querySelector('#gender').value;
    const place = document.querySelector('#place').value;

    if(name == "" || gender == "" || place == "") {
        //return false;
        console.log("false");
    }
    else {
        let data = new FormData();
        console.log(name,gender,place);
        data.append("name", name);
        data.append("gender", gender);
        data.append("place", place);

        fetch(API_URL, {
            method: "POST",
            body: data
         }).then( () => {
            setTimeout( ()=> {
                location.reload();
            }, 5000)
        });
    }

}

submitbutton.addEventListener('click',getvalue);