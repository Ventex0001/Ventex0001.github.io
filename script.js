fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Use the data to update your web page
  })
  .catch(error => {
    console.error('Error:', error);
  });