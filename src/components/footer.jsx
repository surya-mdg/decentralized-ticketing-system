import { siteConfig } from "@/utils/site-config";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4  border-t-2  pb-10 mt-8 ">
      <aside>
        <p>Copyright © 2024 - All right reserved by {siteConfig.name} </p>
      </aside>
    </footer>
  );
};

export default Footer;
