import React from 'react';
import Style from './Discover.module.css';
import Link from 'next/link';

const Discover = () => {

  //DISCOVER NAVIGATION MENU

  const discover = [
    {
      name:"Collection",
      link:"collection"
    },
    {
      name:"Search",
      link:"searchpage"
    },
    {
      name:"Author",
      link:"author"
    },
    {
      name:"Project Details",
      link:"NFT-details"
    },
    {
      name:"Account Setting",
      link:"account"
    },
    {
      name:"Connect Wallet",
      link:"connectWallet"
    },
    {
      name:"Blog",
      link:"blog"
    },

  ];
  return (
    <div>
      {discover.map((el, i)=> (
        <div key={i + 1} className={Style.discover}>
          <Link href={{pathname: `${el.link}`}}>{el.name}</Link></div> 
      ))}
    </div>
  )
}

export default Discover
