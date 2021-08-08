class CreateJobTitles < ActiveRecord::Migration[6.0]
  def change
    create_table :job_titles do |t|
      t.string :job_title, limit: 50, null: false

      t.timestamps
    end
  end
end
