import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import '../Styles/Footer.css'
const Footer =()=>{
    return(
        <div className='footer'>
        <h3>HealthTrack</h3>
        <p>Track your health every day</p>
        <InstagramIcon/><FacebookIcon/><TwitterIcon/>
        </div>
    )
}
export default Footer;
