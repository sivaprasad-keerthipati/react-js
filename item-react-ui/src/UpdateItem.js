import React, { useState, useEffect } from 'react';
import GetItems from './GetItems';

//Invoking 'http://localhost:3333/rest/update/item/' PUT REST API to update the item.
const UpdateItem = () => {
   const [itemNo, setItemNo] = useState();
   const [itemDescription, setItemDesc] = useState();
   const [dueDate, setDueDate] = useState();
   const [show, setShow] = useState(false);

   const update = async() => {
      //Invoking the REST API.
      // useEffect(() => {
        await fetch('http://localhost:4444/rest/update/item/'+itemNo, 
            {
               method:"PUT",
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

   const handleUpdateItem = (e) => {
      e.preventDefault();
      update();
      GetItems();
   };    

return (
    //Rendering the response.
    <div className='test'>
    {
    show?
    <div className="update-item">
        <form onSubmit={handleUpdateItem}>
          <table>
            <thead>
              Edit Item - {itemNo}:
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
          <button type="submit">Update</button>
       </form>  
   </div> :null
    }
   </div>
   );
};

export default UpdateItem;