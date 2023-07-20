import { useState } from "react";
import PropTypes from 'prop-types'

const AgeCalculatorForm = ({calculateAge}:any) => {
    const [birthDay,setBirthDay]= useState("");
    console.log(birthDay)
    const handleChangeDate=(e:any)=>{
   setBirthDay(e.target.value)
    }
    const handleSubmit =(e:any)=>{
   e.preventDefault();
   calculateAge(birthDay)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="date" value={birthDay} onChange={handleChangeDate}></input>
        <button disabled={!birthDay} type="submit">Calculate Age</button>
    </form>
  )
}
AgeCalculatorForm.propTypes={
    calculateAge:PropTypes.func.isRequired,
}

export default AgeCalculatorForm