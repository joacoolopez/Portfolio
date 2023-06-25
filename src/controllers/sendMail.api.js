const sendMail = async (name,lastname,email,phone,comment) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name": name,
      "lastname": lastname,
      "email": email,
      "nrotelefono": phone,
      "comentario": comment,
      "estado": true
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode:'cors'
    };
    
    let response = await fetch("http://localhost:8080/api/mail/create", requestOptions);
    let jsonData = await response.json();
    return jsonData;
}

export default sendMail;