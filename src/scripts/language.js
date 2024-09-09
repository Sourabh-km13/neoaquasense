
const a=fetch('https://ipapi.co/json/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  }).then(res=>res.json())
    .then((dat)=>{
      console.log(dat);
  
      return dat.region 
    })
  
  a.then((data)=>{
      let str=data
      str= str.toLowerCase()
      str = str.replace(/\s/g, '');
      console.log(str);
      return(regionallangs[str]);
      
  }).then((lang)=>{
  
      setTimeout(function() {
          var selectElement = document.querySelector('select.goog-te-combo');
          if (selectElement) {
            selectElement.value = lang; 
            selectElement.dispatchEvent(new Event('change')); 
          }
        }, 1000);
    
  })
  
  
      const regionallangs={nationalcapitalterritoryofdelhi:"hi", maharashtra:'mr',karnataka:'kn',andhrapradhesh:'te',telangana:'te',odisha:'or',westbengal:'bn'}