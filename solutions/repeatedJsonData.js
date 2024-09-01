// 50 or any random items and 83 to display in JSON how to repeat in js for in or map function



const jsonData = [
    { id: 1, imageUrl: 'image1.jpg' },
    { id: 2, imageUrl: 'image2.jpg' },
    { id: 1, imageUrl: 'image1.jpg' },
    { id: 2, imageUrl: 'image2.jpg' },
    { id: 1, imageUrl: 'image1.jpg' },
    { id: 2, imageUrl: 'image2.jpg' },
    { id: 1, imageUrl: 'image1.jpg' },
    { id: 2, imageUrl: 'image2.jpg' },
    { id: 1, imageUrl: 'image1.jpg' },
    { id: 2, imageUrl: 'image2.jpg' },
    // Add more image data as needed
  ];
  
  const numCards = 83;
  
  const repeatedJsonData = Array.from({ length: Math.ceil(numCards / jsonData.length) }, () => jsonData)
    .flat()
    .slice(0, numCards)
    .map((item, index) => ({ ...item, id: index + 1 }));
  
    console.log(repeatedJsonData);
    console.log("------------------------------------");
    console.log(Math.ceil(numCards / jsonData.length));
  
  