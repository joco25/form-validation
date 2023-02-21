import { useState } from 'react'
import './App.css'
import Card from './components/card/Card';
import CustomInput from './components/inputs/CustomInput'
import { ICourse } from './components/inputs/helpers/course.interface';

function App() {
  const [course, setCourse] = useState<ICourse|null>(null);
  const [errorMessage, setErrorMessage] = useState("")
  const onSubmit = (value:ICourse)=>{
    if(value.isValid){
      setCourse(value);
    }else{
      setErrorMessage(value.errorMsg);
    }
  }
  
  const handleFocus = ()=>{
    setCourse(null);
    if(errorMessage){
      setErrorMessage("");
    }
  }

  return (
    <div className='app'>
      <CustomInput  
        {...{
          onSubmit,
          label:'Course', 
          placeholder:'Enter Text',
          errorMessage,
          handleFocus
        }}
      />
      {
        course?.details &&
          (
            <Card {...{...course.details}} />
          )
      }
    </div>
  );
}

export default App;