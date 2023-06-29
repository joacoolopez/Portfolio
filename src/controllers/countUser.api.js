const countUser =  async (setIsLoggedIn) => {
    
    var myHeaders = new Headers();    
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode:'cors'
      };
      
      let response = await fetch("http://localhost:8080/api/user/cant", requestOptions);
      let jsonData = await response.json();
      
      setIsLoggedIn(!jsonData.estadoCountUser);
    
}
export default countUser;