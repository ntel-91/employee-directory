# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Department.all.delete_all
JobTitle.all.delete_all
Employee.all.delete_all

data = [
	{
		department: "Engineering",
		job_titles: [
			{
				title: "Software Engineer",
				count: 10
			},
			{
				title: "Sr. Software Engineer",
				count: 4
			},
			{
				title: "Director of Engineer",
				count: 2
			},
			{
				title: "Tech Lead",
				count: 2
			},
			{
				title: "VP of Engineering",
				count: 1
			}
		]
	},
	{
		department: "Product",
		job_titles: [
			{
				title: "Product Manager",
				count: 7
			},
			{
				title: "Sr. Product Manager",
				count: 3
			},
			{
				title: "Director of Product",
				count: 2
			},
			{
				title: "VP of Product",
				count: 1
			}
		]
	},
	{
		department: "Analytics",
		job_titles: [
			{
				title: "Data Anaylst",
				count: 7
			},
			{
				title: "Sr. Data Analyst",
				count: 3
			},
			{
				title: "Director of Analytics",
				count: 2
			}
		]
	},
	{
		department: "Operations",
		job_titles: [
			{
				title: "Operations Analyst",
				count: 5
			},
			{
				title: "Sr. Operations Analyst",
				count: 3
			},
			{
				title: "Director of Operations",
				count: 2
			},
			{
				title: "VP of Operations",
				count: 1
			}
		]
	},
]

data.each do |department|
	currDepartment = Department.create(department_name: department[:department])
	jobs = department[:job_titles]

	jobs.each do |job|
		job_title = JobTitle.create(job_title: job[:title])
		
		i = 0
		while i < job[:count] do
			employee = Employee.new(
				first_name: Faker::Name.male_first_name,
				last_name: Faker::Name.last_name,
				photo: Faker::Avatar.image(size: "200x200"),
				bio: Faker::Company.bs,
				year_joined: 2021 -  Faker::Number.between(from: 0, to: 5)
			)

			employee.department = currDepartment
			employee.job_title = job_title

			employee.save!
			i += 1
		end
	end
end