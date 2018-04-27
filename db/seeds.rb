normal = User.create(email: 'user@sample.com', password: 'password')
superadmin = User.create(email: 'super@sample.com', password: 'password')

superadmin.add_role(User::ROLE_SUPER_ADMIN)

MyData.create(string_test: "Iona", integer_test: 2, boolean_test: true)
MyData.create(string_test: "Izanami", integer_test: 231, boolean_test: false)
MyData.create(string_test: "Hikari", integer_test: 1, boolean_test: false)
MyData.create(string_test: "Akiyama", integer_test: 0, boolean_test: true)
MyData.create(string_test: "Eve", integer_test: 0, boolean_test: true)
MyData.create(string_test: "Naomi", integer_test: 703, boolean_test: true)
MyData.create(string_test: "Ichigo", integer_test: 15, boolean_test: true)
MyData.create(string_test: "Nanami", integer_test: 73, boolean_test: false)
MyData.create(string_test: "Nanami4444", integer_test: 44473, boolean_test: false)

MyHome.create(name: "Nanami",sex: "Male",age: 20,address:"14/2",skill:"Java",likecode:"yes",dead: false)
