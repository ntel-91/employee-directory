class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.belongs_to :department, null: false
      t.belongs_to :job_title, null: false
      t.string :first_name, limit: 50, null: false
      t.string :last_name, limit: 50, null: false
      t.string :photo
      t.text :bio, limit: 200
      t.integer :year_joined

      t.timestamps
    end
  end
end
