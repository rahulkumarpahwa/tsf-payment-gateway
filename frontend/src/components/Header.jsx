const Header = () => {
  return (
    <div className="flex items-center justify-between shadow p-4">
      <a href="/" className="w-40">
        <img src="/PaymentGateway.png" className="w-full" />
      </a>
      <ul className="flex items-center justify-center gap-5">
        <li>
          <a href="/about">About</a>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
