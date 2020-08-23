const paths = {
  signup: {
    main: '/signup',
  },
  signin: {
    main: '/signin',
  },
  home: {
    main: '/home',
  },
  posts: {
    delete: '/posts/delete/:id',
    detail: '/posts/detail/:id',
    edit: '/posts/edit/:id',
  },
  profiles: {
    detail: '/profiles/detail/:id',
    myprofile: {
      main: '/profiles/myprofile',
      edit: '/profiles/myprofile/edit',
      avatar: '/profiles/myprofile/edit/avatar',
      delete: '/profiles/myprofile/delete',
    },
  },
  dm: {
    create: '/dm/create',
    detail: '/dm/detail/:id',
  },
  friends: {
    main: '/friends',
  },
};

export default paths;
