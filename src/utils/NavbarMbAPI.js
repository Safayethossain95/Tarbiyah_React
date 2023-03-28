import React from 'react'


const navbarmbAPI = [
    {
        id:1,
        heading:"Courses",
        dropdwn:true,
        dropdowndata:[
            {
                heading:"Courses",
                link:"/courses",
                id:1,
                img:"/assets/images/NavbarMb/Dropdownitems/1.png",
                head:"Course Title 1",
                para:"Lorem ipsum dolor sit amet consectetur. Neque mauris lorem ipsum dolor sit amet consectetur  nmauris"
            },
            {
                heading:"Courses",
                link:"/courses",
                id:2,
                img:"/assets/images/NavbarMb/Dropdownitems/1.png",
                head:"Course Title 2",
                para:"Lorem ipsum dolor sit amet consectetur. Neque mauris lorem ipsum dolor sit amet consectetur  nmauris"
            },
        ]
    },
    {
        id:2,
        dropdwn:false,
        link:"/aboutus",
        heading:"About us",
        dropdowndata:[]
    },
    {
        id:3,
        dropdwn:false,
        heading:"Services",
        link:'/services',
        dropdowndata:[]
    },
]

const NavbarMbAPI = () => {
  return (
    <>
    
    </>
  )
}

export {navbarmbAPI}

export default NavbarMbAPI