export default function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Ramesh Kaviyamudan • Built with React & Vite
        <br />
        <span style={{fontSize: '0.8rem', opacity: 0.7}}>
          Crafted with ❤️ and lots of ☕
        </span>
      </p>
    </footer>
  )
}