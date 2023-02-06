import React, { useState, useEffect } from 'react';
import GetItems from './GetItems';

//Invoking 'http://localhost:3333/rest/add/item/' POST REST API to add the item.
const AddItem = () => {
   const [itemNo, setItemNo] = useState();
   const [itemDescription, setItemDesc] = useState();
   const [dueDate, setDueDate] = useState();

   const add = async() => {
      //Invoking the REST API.
      // useEffect(() => {
        await fetch('http://localhost:2222/rest/add/item', 
            {
               method:"POST",
               headers:
               {  
                  "Content-Type":"application/json",
                  "Accept":"application/json"
               },
               body: JSON.stringify({
                  "itemNo": itemNo,
                  "itemDescription": itemDescription,
                  "dueDate": dueDate
               }),
            })
            .then((response) => response.json())
            .then((data) => {
               console.log(data);
            })
            .catch((err) => {
               console.log(err.message);
            });
      // }, []);
   };

   const handleAddItem = (e) => {
      e.preventDefault();
      add();
      GetItems();
   };    

return (
    //Rendering the response.
    <div className="add-item">
        <form onSubmit={handleAddItem}>
          <table>
            <thead>
              Add New Item:
            </thead>
            <tbody>
            <tr>
                <td align='left'>Item ID:</td>
                <td><input type="text" value={itemNo} onChange={(e) => setItemNo(e.target.value)} /></td>
            </tr>
            <tr>
                <td align='left'>Item Description:</td>
                <td><input type="text" value={itemDescription} onChange={(e) => setItemDesc(e.target.value)} /> </td>
            </tr>
            <tr>
                <td align='left'>Due Date:</td>
                <td><input type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)} /> </td>
            </tr>
            </tbody>
          </table>
          <button type="submit">Add</button>
       </form>  
   </div>
   );
};

export default AddItem;