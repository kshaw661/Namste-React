import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1", { id: "Hello" }, "Namste Kunal Shaw");
      const heading2 = React.createElement("h3", { id: "Hello" }, "Extenstions for VSCode");
      const list = React.createElement("ul", { id: "listUL"},
       React.createElement("li", {},"Better Comments"),
       React.createElement("li", {},"Bracket Pair Colorization Toggler"),  
       React.createElement("li", {},"GitLens"),
       React.createElement("li", {},"HTML CSS Support"),
       React.createElement("li", {},"Prettier"),
       React.createElement("li", {},"Emmet"), 
      );
      const Question1 = React.createElement("h4",{},"Diffrence Between Librariy and Frameworks?");
      const Question1Ans = React.createElement("p",{id:"ques1Ans"},"Library has some specific functionlities, on the other hand Framework have all features, like routing, pages, components,file handling and error handling etc.");
      const Question2 = React.createElement("h4",{},"Why is React called React?");
      const Question2Ans = React.createElement("p",{id:"ques2Ans"},"React was developed by the facebook developer for View component onf MVC structure. Which intent was load the data 'instantly' after uses acts on the page. ");
      const container = React.createElement("div", { id: "container"},[heading1,heading2,list,Question1,Question1Ans,Question2,Question2Ans]);
      
      
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(container);