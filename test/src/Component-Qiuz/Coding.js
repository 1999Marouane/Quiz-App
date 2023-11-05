import { BrowserRouter as  Redirect, Route,  Routes ,useNavigate  } from 'react-router-dom';
import React, { useState } from 'react'
import Play from './Play'
import Data from '../DataQuestions/Data.json'
import Result from './Result';


const Coding = () => {

  const [count, setCount] = useState(1);
  const [resoltcount, setresoltCount] = useState(0);

  const Navigete = useNavigate()

  console.log(Data[0]);



  let text = Data[count].question;
  const answer1 = (e) => {
    if (e.target.value === Data[count].correctAnswer) {
      setresoltCount(resoltcount + 1)
    }
    setCount(count + 1);
    if (count == 18) {
      console.log("this resolet", resoltcount);

       Navigete('/resolt')
    }

  };
  
   


  return (
    
    <div>

<Routes>
        <Route path="/" element={<Play
              question={text}
              answer1={(e) => (answer1(e))}
              answer2={(e) => (answer1(e))}
              answer3={(e) => (answer1(e))}
              answer4={(e) => (answer1(e))}
              showanswer1={Data[count].options[0]}
              showanswer2={Data[count].options[1]}
              showanswer3={Data[count].options[2]}
              showanswer4={Data[count].options[3]}
              textvalue1={Data[count].options[0]}
              textvalue2={Data[count].options[1]}
              textvalue3={Data[count].options[2]}
              textvalue4={Data[count].options[3]}
              numper={count}
            />} />
            <Route path='/resolt' element={<Result resnump={resoltcount} />}/>
            
        </Routes>
   
          
           

      </div>
    
  )
}

export default Coding