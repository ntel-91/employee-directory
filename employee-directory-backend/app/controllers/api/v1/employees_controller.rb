class Api::V1::EmployeesController < ApplicationController

    def index
        
        employees = []
        if params[:jobTitle] == nil
            employees = Employee.all
        else
            jobTitleId = params[:jobTitle] == "null" ? nil : params[:jobTitle]
            departmentId = params[:department] == "null" ? nil : params[:department]
            if jobTitleId && departmentId
                employees = Employee.where("department_id = #{departmentId} and job_title_id = #{jobTitleId}").all
            elsif jobTitleId
                employees = Employee.where(job_title_id: jobTitleId)
            elsif departmentId
                employees = Employee.where(department_id: departmentId)  
            end
        end
        
        render json: employees.sort_by{|e| e[:last_name]}
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
