const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="app-container py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-heading font-semibold mb-3">DecoraHaus</h3>
          <p className="text-text-secondary">
            Modern furniture & décor to make your home feel like you.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-text-secondary">
            <li>Sofas</li>
            <li>Lighting</li>
            <li>Tables</li>
            <li>Rugs</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-text-secondary">
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Warranty</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <p className="text-text-secondary mb-3">
            Get 5% off your first order.
          </p>
          <div className="flex gap-2">
            <input
              className="flex-1 h-10 rounded-lg border border-border px-3 text-sm"
              placeholder="Your email"
            />
            <button className="h-10 px-4 rounded-lg bg-primary text-white text-sm font-semibold">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-text-secondary">
        © {new Date().getFullYear()} DecoraHaus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
