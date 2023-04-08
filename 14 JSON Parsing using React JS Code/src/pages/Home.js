import "../App.css";
import { useState, useEffect } from 'react';

const Home = () => {


   const JsonSampleObjData = {"key" : "Sample value"};
   const JsonNameObjData = {"name" : "Sam"};
   const JsonArrayData = [{"name" : "Sam"}, {"name" : "Ganesh"}]

   const [JsonArray, setJsonArray] = useState(JsonArrayData);
   const [JsonNameObj, setJsonName] = useState(JsonNameObjData);
   const [JsonSampleObj, setSampleObjData] = useState(JsonSampleObjData);

   return (
      <>
      Sample JSON Data Before  Parsing <b>JsonSampleObj</b> =  &#123; "key" : "Sample value"&#125; <br /><br />
      Real Data JSON Data Before  Parsing <b>JsonNameObj</b> = &#123; "name" : "Sam"&#125;<br /><br />
      Array Before Parsing  <b>JsonNameObj</b><br />[<br />&#123;"name" : "Sam"&#125;, <br />&#123;"name" : "Ganesh"&#125;<br />]<br /><br />

####################### <br /><br />
      <div className='margin10'>Sample JSON Data After Parsing : <b>{JsonSampleObj.key}</b> // "&#10627;JsonSampleObj.key&#10628;"</div>
      <div className='margin10'>Real Data  After Parsing  : <b>{JsonNameObj.name}</b>// "&#10627;JsonNameObj.name&#10628;"</div>
      <div className='margin10'>First JSON Array Elements  After Parsing : <b>{JsonArray[0].name}</b>// "&#10627;JsonArray[0].name&#10628;"</div>
      <div className='margin10'>Second JSON Array Elements  After Parsing : <b>{JsonArray[1].name}</b>// "&#10627;JsonArray[1].name&#10628;"</div>
      </>
   );
};

export default Home;