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
      delete: '/profiles/myprofile/delete',
    },
  },
};

export default paths;
