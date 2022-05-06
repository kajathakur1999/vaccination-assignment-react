import { gql, useLazyQuery, useQuery, useMutation } from "@apollo/client";
import React, { useState  } from "react";

const Administervaccination = () => {

    const submitClickhandler = (event : React.FormEvent) => {
        event.preventDefault();
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card-header">
                    <h4 className="text-center"><u>Administer Vaccination</u></h4>
                    </div>

                    <div className="card-body">
                        <form>
                            {/* name */}
                            <div className="form-group">
                            <label htmlFor="name">Name Of Patient :</label>
                            <input type="text" name="name" id="name" className="form-control" />
                            </div>

                            {/* DateOfBirth */}
                            <div className="form-group ">
                            <label htmlFor="name">Date Of Birth :</label>
                            <input className="form-control" name="DOB"/>
                            </div>

                            {/* vaccination */}
                            <div className="form-group">
                                <label htmlFor="vaccination">Vaccine :</label>
                                <select name="vaccine" className="form-control">
                                <option value="Dose1">Dose 1</option>
                                <option value="Dose2">Dose 2</option>
                                </select>
                            </div>

                            {/* brand name */}
                            <div className="form-group">
                            <label htmlFor="brand">Brand Name :</label>
                            <select name="brand" id="brand" className="form-control">
                                <option value="covaccine">Covaccine</option>
                                <option value="covishield">Covishield</option>
                            </select>
                            </div>

                            {/* hospital name */}
                            <div className="form-control">
                                <label htmlFor="hospital">Dose Given at hospital :</label>
                                <input type="text" name="hospital" id="hospital" className="form-control"/>
                            </div>

                            {/* buttons */}
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="form-control btn-success" onClick={submitClickhandler}>Submit</button>
                                </div>
                                <div className="col-6">
                                    <button type="button" className="form-control btn-warning">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div><hr />
            <div className="container">
                <div className="form-control">
                    <div className="card-header">
                    <h4 className="text-center"><u> Vaccination Card</u></h4>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default Administervaccination;