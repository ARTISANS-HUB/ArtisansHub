
export const categoryData = [
    {
        name:"Worker1",
        expertise:"cleaner",
        link:"/booking",
        img:"../../../uploads/bg.jpeg",
        desc:"This command will add the library to your project."
    },

    {
        name:"Worker2",
        expertise:"welder",
        link:"/booking",
        img:"../../../uploads/bg.jpeg",
        desc:"This command will add the library to your project."
    },
    {
        name:"Worker3",
        expertise:"carpenter",
        link:"/booking",
        img:"../../../uploads/bg.jpeg",
        desc:"This command will add the library to your project."
    },
    {
        name:"Worker4",
        expertise:"shoemaker",
        link:"/booking",
        img:"../../../uploads/bg.jpeg",
        desc:"This command will add the library to your project."
    },
    {
        name:"Worker5",
        expertise:"shoemaker",
        link:"/booking",
        img:"../../../uploads/bg.jpeg",
        desc:"This command will add the library to your project."
    },

]


export const cartCategories = [
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'Cleaning',
      expertise:"Cleaning",
      bgColor:"#f5f0ea"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'welder',
      expertise:"welder",
      bgColor:"#e5eee5"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'Cooking',
      expertise:"Cooking",
      bgColor:"#f2f2cc"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'Coding',
      expertise:"Coding",
      bgColor:"#f2f2cc"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'reading',
      expertise:"reading",
      bgColor:"#f2f2cc"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'carpenter',
      expertise:"Carpenter",
      bgColor:"#f2f2cc"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'electrician',
      expertise: 'electrician',
      bgColor:"#f7f7ea"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'washing',
      expertise: 'washing',
      bgColor:"#f1f4ff"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'plumber',
      expertise: 'plumber',
      bgColor:"#f1f4ff"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'shoe maker',
      expertise: 'shoe maker',
      bgColor:"#f5f0ea"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'tailor',
      expertise: 'tailor',
      bgColor:"#f2f2cc"
    },
    {
      icon: <i class="fas fa-utensils"></i>,
      title: 'Tv Repairer',
      expertise: 'Tv Repairer'
    },
  ]


  export const artisanData = [
    {
      name:"Daniel",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link:"/service-provider",
      img:"../../../uploads/bg.jpeg"
    },
    {
      name:"Richard",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link:"#",
      img:"../../../uploads/bg.jpeg",
    },
    {
      name:"Doris",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link:"#",
      img:"../../../uploads/bg.jpeg"
    },
    {
      name:"Bismark",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link:"#",
      img:"../../../uploads/bg.jpeg"
    },
    {
      name:"Bismark",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link:"#",
      img:"../../../uploads/bg.jpeg"
    },
    {
      name:"Bismark",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link:"#",
      img:"../../../uploads/bg.jpeg"
    },
  ]



export const buyerValidate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length <= 8) {
      errors.password = 'Must be 8 characters or more';
    }
  
    if (!values.usermail) {
      errors.usermail = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.usermail)) {
      errors.usermail = 'Invalid email address';
    }

    if (!values.tel) {
        errors.tel = 'Required';
      } else if (values.tel.length = 10) {
        errors.tel = 'Must be 10 characters';
      }
    if (!values.other_tel) {
        errors.other_tel = 'Required';
      } else if (values.other_tel.length = 10) {
        errors.other_tel = 'Must be 10 characters';
      }
    if (!values.location) {
        errors.location = 'Required';
      } else if (values.location.length = 0) {
        errors.location = 'Must not be empty';
      }
  
    return errors;
  };