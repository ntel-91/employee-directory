class Api::V1::EmployeesController < ApplicationController

    def index
        employees = Employee.all
        render json: employees
    end

    def update

        updatedData = params[:currentEmployee]
        employee = Employee.find(params[:id].to_i)

        employee.update(
            department_id: updatedData[:department_id],
            job_title_id: updatedData[:job_title_id],
            first_name: updatedData[:first_name],
            last_name: updatedData[:last_name],
            photo: updatedData[:photo],
            bio: updatedData[:bio]
        )

        render json: {employee: employee, status: 200}

    end
end
