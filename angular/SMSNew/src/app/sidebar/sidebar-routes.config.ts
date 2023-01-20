export const ROUTES = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
  {
    path: '#employee', id: 'employee', title: 'Employees', icon: 'person', children: [
      { path: 'admin/addemployee', title: 'Add Employee', icon: 'person_add' }

    ]
  },
  {
    path: '#leave', id: 'leave', title: 'Leaves', icon: 'book', children: [
      { path: 'leave/applyleave', title: 'Apply Leave', icon: 'fiber_new' },
      { path: 'leave/viewleaves', title: 'View Leave', icon: 'list_alt' }

    ]
  },
  {
    path: '#attendance', id: 'attendance', title: 'Attendance', icon: 'import_contacts', children: [
      { path: 'attendance/addattendance', title: 'Add Attendance', icon: 'fiber_new' },
      { path: 'attendance/viewattendance', title: 'View Attendance', icon: 'list_alt' }

    ]
  }
];
