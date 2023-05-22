type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]

};

export const routes: Route[] = [
  {
    title: "Portfolio",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  
  // {
  //   title: "Designs",
  //   path: "/designs",
  // },
  
  {
    title: "About",
    path: "/About",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Portfolio",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
      
        // {
        //   name: "Designs",
        //   link: "/designs",
        //   leavesWebsite: false,
        // },
        {
          name: "About",
          link: "/About",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Contact",
      links: [
     
        {
          name: "LinkedIn",
          link: "linkedin.com/in/weiran-zhou-685110238",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
    
        {
          name: "Email",
          link: "mailto:zhouweiran.zwr@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],

};
