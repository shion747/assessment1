import './App.css';
import React from 'react';
import axios from 'axios';


function App() {
   function storeAuthor(){
    var author = document.getElementById("authorname").value;
    var authorList = document.getElementById("authorList");
    var authorElement = document.createElement("li");
    authorElement.appendChild(document.createTextNode(author));
    authorList.appendChild(authorElement);
  }
  
  const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data;
      const nameList = document.getElementById("name");
      users.forEach(user => {
        const nameElement = document.createElement("li");
        nameElement.appendChild(document.createTextNode(user.name));
        nameList.appendChild(nameElement);
      });
    });
  }
  return (
    <div className="App">
      <header className="App-header">
          
      </header>
      <body>
        <p>
          Input author's name
        </p>
        <input type="text" id="authorname" name="authorname"/>
        <button onClick={storeAuthor}>Submit</button>
        <p>
          List of authors
        </p> 
         <ul id="authorList"></ul>
        <p>
          List of users
        </p>
        <button onClick={fetchData}>Fetch Data</button>
        <ul id="name"></ul>



        


        




        
      </body>
    </div>
  );
}


export default App;
