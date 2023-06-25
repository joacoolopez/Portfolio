const getRecluiters = async(token, setRecluiter) => {

    var myHeaders = new Headers();
    myHeaders.append("jwt",token);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode:'cors'
      };
      
      let response = await fetch("http://localhost:8080/api/mail/getMails", requestOptions);
      let jsonData = await response.json();
      setRecluiter(jsonData);
    
}
export default getRecluiters;