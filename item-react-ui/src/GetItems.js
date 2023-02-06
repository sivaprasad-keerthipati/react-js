import React, { useState, useEffect } from 'react';

//Invoking 'http://localhost:3333/rest/get/item/' GET REST API and rendering the response.
const GetItems = () => {
   const [items, setItems] = useState([]);
   //Invoking the REST API.
   useEffect(() => {
      fetch('http://localhost:3333/rest/get/item/', 
         {
            method:"GET",
            headers:
            {  
               "Content-Type":"application/json"
            },
         })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);

            //Set or update the state to 'items'.
            setItems(data.items);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

return (
    //Rendering the response.
    <div className="items-container">
      <table className='items-cotainer'>
         <tbody>
           <tr>
               <td>Item No</td>
               <td>Item Desc</td>
               <td>Due date</td>
               <td>Edit</td>
               <td>Delete</td>
            </tr>
            {
               items.map((item) => (
                  <tr id={item.itemNo}>
                     <td>{item.itemNo}</td>
                     <td>{item.itemDescription}</td>
                     <td>{item.dueDate}</td>
                     <td><button>Edit</button></td>
                     <td><button>Delete</button></td>
                  </tr>
               ))
            }
         </tbody>
      </table>
   </div>
   );
};

export default GetItems;