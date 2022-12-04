const order = {
 customer : {
    address : {
        city : "Rossano"
    }
 }
};

if (order.customer?.address?.city) {
  console.log("Success")}
  else{
    console.log("City required")
  }
