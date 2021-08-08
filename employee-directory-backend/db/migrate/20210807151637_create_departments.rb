class CreateDepartments < ActiveRecord::Migration[6.0]
  def change
    create_table :departments do |t|
      t.string :department_name, limit: 50, null: false

      t.timestamps
    end
  end
end
