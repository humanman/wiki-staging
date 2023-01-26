import React from 'react';
import NavCard from '../NavCard';
import styles from './styles.module.css';
import LogoSVG from '@site/static/img/near_logo.svg';
import logo from '@site/static/img/near_logo.svg';
const cardData = {

  chooseYourPath: [
    {
      title: 'User',
      icon: require('@site/static/img/icons/icon_user.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
          (where should this link?)
        </>
      ),
      link: '/',
      level: 'easy'
    },
    {
      title: 'Developer',
      icon: require('@site/static/img/icons/icon_dev.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
          (where should this link?)
        </>
      ),
      link: '/',
      level: 'easy'
    },
    {
      title: 'Founder',
      icon: require('@site/static/img/icons/icon_founder.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
          (where should this link?)
        </>
      ),
      link: '/',
      level: 'easy'
    },
  ],
  browseByDomain: [
    {
      title: 'Governance',
      icon: require('@site/static/img/icons/icon_governance.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/governance/near-forum/near-forum-guidelines',
      level: 'easy'
    },
    {
      title: 'Education',
      icon: require('@site/static/img/icons/icon_edu.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/support/hr-education-resources',
      level: 'easy'
    },
    {
      title: 'dApps',
      icon: require('@site/static/img/icons/icon_dapps.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/ecosystem/dapps',
      level: 'easy'
    },
    {
      title: 'Essential tools',
      icon: require('@site/static/img/icons/icon_etools.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/overview/essential-tools',
      level: 'easy'
    },
    {
      title: 'Developer tools',
      icon: require('@site/static/img/icons/icon_devtools.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/support/tools-infrastructure',
      level: 'easy'
    },
    {
      title: 'Grants & Funding',
      icon: require('@site/static/img/icons/icon_funding.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/support/funding',
      level: 'easy'
    },
  ],
  browseByProduct: [
    {
      title: 'NEAR Wallet',
      icon: require('@site/static/img/icons/icon_wallet.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/overview/creating-a-near-wallet',
      level: 'easy'
    },
    {
      title: 'Governance forum',
      icon: require('@site/static/img/icons/icon_forum.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/governance/near-forum/near-forum-guidelines',
      level: 'easy'

    },
    {
      title: 'Astro DAO',
      icon: require('@site/static/img/icons/icon_astro.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/governance/dao-guide/astrodao',
      level: 'easy'
    },
    {
      title: 'NEAR CLI',
      icon: require('@site/static/img/icons/icon_cli.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/support/tools-infrastructure#wallets',
      level: 'easy'
    },
    {
      title: 'JS SDK',
      icon: require('@site/static/img/icons/icon_jssdk.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/support/tools-infrastructure#javascript-stack',
      level: 'easy'
    },
    {
      title: 'RUST SDK',
      icon: require('@site/static/img/icons/icon_rust.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/support/tools-infrastructure#rust-stack',
      level: 'easy'
    },
    {
      title: 'NEAR Explorer',
      icon: require('@site/static/img/icons/icon_explorer.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/overview/near-explorer',
      level: 'easy'
    },
    {
      title: 'NEAR Staking',
      icon: require('@site/static/img/icons/icon_staking.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: '/support/tools-infrastructure#explorers--indexers',
      level: 'easy'
    },
    {
      title: 'Documentation',
      icon: require('@site/static/img/icons/icon_docs.svg').default,
      text: (
        <>
          Crypto ipsum ethereum bitcoin litecoin dogecoin, crypto ipsum
        </>
      ),
      link: 'https://docs.near.org',
      level: 'easy'
    },
  ]
}

function CardContainer(dataObj) {
  return (
    <div className={styles.cards_container}>
      {/* <div className={styles.card__row }> */}
        {dataObj.map((props, idx) => (
          <NavCard key={idx} {...props} />
        ))}
      {/* </div> */}
    </div>
  );
}

export function ChooseYourPath(){
  return CardContainer(cardData.chooseYourPath)
}
export function BrowseByDomain(){
  return CardContainer(cardData.browseByDomain)
}
export function BrowseByProduct(){
  return CardContainer(cardData.browseByProduct)
}


