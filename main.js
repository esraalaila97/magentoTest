const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const axios = require('axios').default;
app.get('/magentoTest', (req, res) => {
    axios({
        method: 'get',
        url: 'https://royalph.com/rest/all/V1/products-render-info?searchCriteria%5BfilterGroups%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bfield%5D=name&searchCriteria%5BfilterGroups%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bcondition_type%5D=eq&searchCriteria%5BfilterGroups%5D%5B0%5D%5Bfilters%5D%5B0%5D%5Bvalue%5D=Ultra Gas-Go 45 Tab&storeId=1&currencyCode=EGP',
        responseType: 'text/json',
      })
        .then(function (response) {
        res.send(JSON.parse(response.data));

          //console.log(JSON.stringify(response.data));
        })
        .catch(function(err) {
            console.log(err.message);
        })
        .finally(
            function() {
                console.log('finally');
            }
        )
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});