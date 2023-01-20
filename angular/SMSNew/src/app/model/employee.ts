import { Department } from "./department"
import { Designation } from "./designation"

export class Employee {
    emp_id = 0

    emp_name = ""

    father_name = ""

    dob = ""

    doj = ""

    designation: Designation = new Designation()

    dept:Department=new Department()

    address = ""

    paddress = ""

    photo = ""

    mobile = ""

    email = ""

    salary = 0.0

    emppass = ""

}
