
import ProposeItem from './../components/ProposeItem';
const ProposePage = () => {
  const propose = {
    type: 'offer',
    items: [
        {
            name: 'Xa lach',
            price: 20000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
        {
            name: 'Kim tree',
            price: 30000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
        {
            name: 'UyenNhi',
            price: 40000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
        {
            name: 'Rau den',
            price: 1060000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
        {
            name: 'Bap cai',
            price: 90000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
        {
            name: 'Ca tua',
            price: 80000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
        {
            name: 'Carrot',
            price: 70000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
        {
            name: 'Fern',
            price: 60000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
        {
            name: 'Nhi',
            price: 60000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
        {
            name: 'Khoa',
            price: 10000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
        {
            name: 'Uyen',
            price: 110000,
            discountPercent: 0.4,
            expired: 106,
            image: 'https://c4.wallpaperflare.com/wallpaper/803/817/124/genshin-impact-yae-miko-genshin-impact-hd-wallpaper-preview.jpg'
        },
    ]
}
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-full bg-[#FFF4EE] gap-16">
        <nav className='py-10'>
           NAVBAR: home, stock, statistic, offer, login
        </nav>
      <ProposeItem type={propose.type} items={propose.items}/>
      <ProposeItem type='bonus' items={propose.items}/>
      <ProposeItem type='expired' items={propose.items}/>
    </div>
  )
}

export default ProposePage
