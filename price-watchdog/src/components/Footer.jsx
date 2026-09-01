import '../App.css'

export default function Footer() {
    let currentYear = new Date().getFullYear();

    return (
        <footer>
            <div>&copy; {currentYear} Abi Athmakuri All Rights Reserved | <a href="https://www.linkedin.com/in/abiathmakuri/">LinkedIn</a></div>
        </footer>
    );
}
