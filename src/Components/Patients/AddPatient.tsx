import { useState  } from "react";
import classes from './AddPatient.module.css';
import { gql, useMutation } from "@apollo/client";
import { useHistory } from 'react-router-dom'
import moment from "moment";

const AddPatient = () => {

    const history = useHistory();

    const CREATE_Patient_MUTATION = gql`
mutation onCreatePatientMutation($name : String!, $DOB : String!, $POB : String! , $gender : String! ,$BloodGrp : String! ,$height : Int ,$weight : Int) {
  createPatient(data:{
    name : $name
    DOB : $DOB
    gender : $gender
    POB : $POB
    BloodGrp : $BloodGrp
    height : $height
    weight : $weight
  }){
    name , DOB, POB, BloodGrp, gender ,height ,weight
  }
}`


    const [enteredName , setEnteredName] = useState<string>('');
    const [enteredDOB , setEnteredDOB] = useState<string>('');
    const [enteredPOB , setEnteredPOB] = useState<string>('');
    const [enteredGender , setEnteredGender] = useState<string>('');
    const [enteredBloodGrp , setEnteredBloodGrp] = useState<string>('');
    const [enteredHeight , setEnteredHeight] = useState<number>(0);
    const [enteredWeight , setEnteredWeight] = useState<number>(0);


    let [createPatientCallback , {loading , error , data}] = useMutation(CREATE_Patient_MUTATION ,{
            variables : {
                name : '',
                DOB : '',
                gender : '',
                POB : '',
                BloodGrp : '',
                height : 0,
                weight : 0
            }
    })


    const createPatientHandler =  (event : React.FormEvent) => {
            event.preventDefault()
            
                createPatientCallback({
                    variables : {
                    name : enteredName,
                    DOB : enteredDOB,
                    gender : enteredGender,
                    POB : enteredPOB,
                    BloodGrp : enteredBloodGrp,
                    height : enteredHeight,
                    weight : enteredWeight
                    }
                }).then(res => {
                    history.replace("/")
                    alert("Patient details have been saved successfully!")
                }).catch(err => {
                    alert("Enter correct patient details")
                })
                
            console.log(enteredName, enteredDOB , enteredPOB , enteredGender , enteredBloodGrp , enteredHeight ,enteredWeight );
         
         
            // console.log("inside create patient handler");
    }

    const [nameInputBlur, setNameInputBlur] = useState<boolean>(false); 
    const [gender , setGender ] = useState<boolean>(false); 
    const [pobInputBlur, setPobInputBlur] = useState<boolean>(false); 
    const [bloodgrp , setBloodGrp ] = useState<boolean>(false); 

    let formClass = 'form-control'; 
    let nameClass = 'form-control'; 
    let genderClass = 'form-control';
    let pobClass = 'form-control';
    let bloodgrpClass ='form-control';
   

    let nameIsValid = enteredName.trim() !== '';
    let nameIsValidAndBlurred = !nameIsValid ;
    let genderIsValid = enteredGender  !== "-";
    let pobIsValid = enteredPOB.trim() !== '';
    let pobIsValidAndBlurred = !pobIsValid ;
    let bloodgrpIsValid = enteredBloodGrp !== "-";
    
    const genderBlurHandler = () => {
        setGender(true)
    }

    const bloodgrpBlurHandler = () => {
        setBloodGrp(true)
    }
    
   const pobBlurHandler = () => {
       setPobInputBlur(true)
   }

    const nameBlurHandler = () => {
        setNameInputBlur(true)
    }

    const nameChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEnteredName(event.target.value)
    }

    const dobChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEnteredDOB(event.target.value)
    }

    const pobChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEnteredPOB(event.target.value)
    }

    const heightChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEnteredHeight(event.target.valueAsNumber)
    }

    const weightChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEnteredWeight(event.target.valueAsNumber)
    }

    const cancelEventHandler : React.FormEventHandler = (event) => {
        event.preventDefault()
        history.replace("/")
    }

if(error) {
   
    return <h2>Incorrect values entered.
        Please enter correct details...
    </h2>
            
}

    return (
        <div className="row">
        
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h4 className="text-center"><u>Patient Registration Form</u></h4>
                    </div>
                    <div className="card-body">
                        <form  >
                            {/* name */}
                            <div className="form-group">
                                <label htmlFor="name">Name Of Patient :</label>
                                <input type="text" 
                                placeholder="enter your name"
                                className={nameClass}
                                value={enteredName}
                                onChange={nameChangeHandler}
                                onBlur={nameBlurHandler}/>
                                {nameInputBlur && nameIsValidAndBlurred && <p className="alert alert-danger">Please enter your name.</p>}
                            </div>
                            
                            {/* DOB */}
                            <div className="form-group">
                                <label htmlFor="dob">Date Of Birth :</label>
                                <input type="date"
                                 max={moment().format("YYYY-MM-DD")}
                                 className={formClass}
                                 onChange={dobChangeHandler}/>
                            </div>
                            
                            {/* gender */}
                            <div className="form-group">
                                <label htmlFor="gender">Gender :</label>
                                <select id="gender" name="gender" 
                                    className={genderClass}
                                    onChange={e => setEnteredGender(e.currentTarget.value)}
                                    onBlur={genderBlurHandler}>
                                    <option value="-">-</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                {/* { !genderIsValid && <p className="alert alert-danger">Gender is required.</p>} */}
                            </div>
                                
                                 {/* pob */}
                                <div className="form-group">
                                <label htmlFor="pob">Place Of Birth :</label>
                                <input type="text" 
                                 placeholder="enter place of birth"
                                 className={pobClass}
                                 value={enteredPOB}
                                 onChange={pobChangeHandler}
                                 onBlur={pobBlurHandler}/>
                                 {/* {pobInputBlur && pobIsValidAndBlurred && <p className="alert alert-danger">Please enter your place of birth.</p>} */}
                            </div>
                            
                            {/* blood group */}
                            <div className="form-group">
                                <label htmlFor="bloodGroup">Blood Group :</label>
                                <select id="bloodgrp" name="bloodgrp" 
                                className={bloodgrpClass} 
                                onChange={e => setEnteredBloodGrp(e.currentTarget.value)}
                                onBlur={bloodgrpBlurHandler}>
                                     <option value="-">-</option>
                                     <option value="A+">A+</option>
                                     <option value="A-">A-</option>
                                     <option value="B+">B+</option>
                                     <option value="B-">B-</option>
                                     <option value="O+">O+</option>
                                     <option value="O-">O-</option>
                                     <option value="AB+">AB+</option>
                                     <option value="AB-">AB-</option>
                                </select>
                                { !bloodgrpIsValid && <p className="alert alert-danger">Blood Group is required.</p>}
                            </div>
                                
                            {/* height */}
                            <div className="form-group">
                                <label htmlFor="height">Height :</label>
                                <input type="number"  
                                placeholder="enter your height"
                                className={formClass}
                                value={enteredHeight}
                                onChange={heightChangeHandler}/>
                            </div>
                            
                            {/* weight */}
                            <div className="form-group">
                                <label htmlFor="weight">Weight :</label>
                                <input type="number" 
                                placeholder="enter your weight"
                                className={formClass}
                                value={enteredWeight}
                                onChange={weightChangeHandler}/>
                            </div><br />

                            {/* buttons */}
                            <div className="row">
                            <div className="col-6">
                                <button type="submit" className="form-control btn-success" onClick={createPatientHandler}>Add Patient</button>
                            </div>
                            <div className="col-6">
                                <button type="button" className=" form-control btn btn-block btn-secondary"  onClick={cancelEventHandler}>Cancel</button>
                            </div>
                            </div>
                        </form>
                       
                    </div>
                  
                </div>
                </div>
               
                </div>
                
          
    )
}

export default AddPatient;