// // Function to generate the array of objects with dynamically changing type
// function generateArrayOfObjects(props) {
//     // Define your logic to determine the type dynamically
//     const {data}=props;
//     let typeForSUM_weight = "SomeNewType";
//     let typeForTotal = data;
  
//     // Generate the array of objects with dynamically changing types
//     let arrayOfObjects = [
//       { name: "SUM_revenue", caption: "revenue", type: "PercentageOfGrandTotal" },
//       { name: "SUM_weight", caption: "weight", type: typeForSUM_weight },
//       { name: "Total", caption: "Total Units %", type: typeForTotal }
//     ];
  
//     return arrayOfObjects;
//   }
  
//   // Usage example
//   let arrayOfObjects = generateArrayOfObjects( data='arraydata');
//   console.log(arrayOfObjects);



const arrayOfObjects = [
    { name: "SUM_revenue", caption: "revenue", type: "PercentageOfGrandTotal" },
    { name: "SUM_weight", caption: "weight" },
    { name: "Total", caption: "Total Units %" }
  ];
  
  // Define the value you want to assign to the type key
  const newTypeValue = "the change index";
  
  // Loop through each object in the array and add the type key with the new value
//   arrayOfObjects.forEach(obj => {
//     obj.type = newTypeValue;
//   });


// change only index 0
for (let i = 0; i < arrayOfObjects.length; i++) {
    arrayOfObjects[i].type = newTypeValue;
  }
  
  console.log(arrayOfObjects);
  