import { useHistory } from "react-router-dom";
const Form = () => {
    const history = useHistory();

    const patientClickHandler = () => {
        history.push("/addPatient")
    }
    const administerClickHandler = () => {
        history.push("/addVaccinations")
    }

    return(
        <div className="container">
            <div className="col-8 offset-2">
                <div className="card">
            <div className="text-center">
          <div className="card-header">
          <h2><u> Welcome To Vaccination Schedule System</u></h2>
          <img src="https://www.kemhospitalpune.org/wp-content/uploads/2021/03/covid-19.jpeg" alt="" />
          </div>
          
          <div className="card-body">
              <form>
                    <div className="text-center">
                        <div className="card-body">
                            <button className="btn btn-block btn-info" onClick={patientClickHandler}>Add Patient</button>
                            
                        </div>
                        
                        <div className="card-body">
                            <button className="btn btn-block btn-info" onClick={administerClickHandler}>Administer Vaccinations</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
            </div>
        </div>
    )
}
export default Form;