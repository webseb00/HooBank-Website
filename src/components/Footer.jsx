import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants/index'

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10">
        <img src={logo} alt="Logo" className="w-[266px] h-[72px] object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((link, index) => (
          <div key={index} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] text-white leading-[27px] mb-6">{link.title}</h4>
            <ul>
              {link.links.map((el, index) => (
                <li key={el.name} className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-3">
                  <a href={el.link} target="_blank">{el.name}</a>
                </li>
              ))}
            </ul>
          </div>  
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright &copy; 2021 HooBank. All Rights Reserved.
      </p>
      
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((item, index) => (
          <a key={item.id} href={item.link}>
            <img src={item.icon} alt={item.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length ? 'mr-6' : 'mr-0'}`} />
          </a>
        ))}          
      </div>
    </div>
  </footer>
)

export default Footer