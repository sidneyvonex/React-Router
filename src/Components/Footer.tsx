import './Footer.css'
export const Footer = () => {
  return (
    <footer className="footer">
        <span>
            &copy; {new Date().getFullYear()}
            My App - All Rights Reserved
        </span>
    </footer>
  )
}
