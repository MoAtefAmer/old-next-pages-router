import headerStyles from '../styles/Header.module.css'
function Header() {
    return ( 
    // inline styles in jsx
    <div>
        <h1 className={headerStyles.title}><span>WebDev</span>News</h1>
     
    </div> );
}

export default Header;