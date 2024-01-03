import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css'
import { children } from 'react';

function CabecalhoLink(url) {
 return(
    <Link to={url} className={styles.Link}>
    </Link>
 )   
}

export default CabecalhoLink;