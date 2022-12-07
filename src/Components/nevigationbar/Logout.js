import React from 'react'


function Logout() {

  // downloadTxtFile = () => {
  // const element = document.createElement("a");
  // const file = new Blob([document.getElementById('input').value],    
  //             {type: 'text/plain;charset=utf-8'});
  // element.href = URL.createObjectURL(file);
  // element.download = "myFile.txt";
  // document.body.appendChild(element);
  // element.click();
  // }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").value], {
      type: "text/plain;charset=utf-8}"
    });
    element.href = "./Files/one.csv";
    element.download = "one.csv";
    element.click();
  };
  return (
    <div>
       {/* <input id="input" />
      <button onClick={downloadTxtFile}>Download</button> */}
      {/* <DownloadLink
        label="download"
        filename="One.txt"
        exportFile={() => File}
      />
      <DownloadLink
        label="downloadCSVFile"
        filename="One.csv"
        exportFile={() => One}
      /> */}
      {/* <input id="input" />
    <button onClick={downloadTxtFile}>Download</button> */}
      </div>
  )
}

export default Logout