import Link from "next/link";
import { FaFigma } from "react-icons/fa";
import {
  SiAdobexd,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";

const socials = [
  { icon: <FaFigma />, path: "" },
  { icon: <SiAdobexd />, path: "" },
  { icon: <SiAdobepremierepro />, path: "" },
  { icon: <SiAdobeaftereffects />, path: "" },
  { icon: <SiAdobeillustrator />, path: "" },
  { icon: <SiAdobephotoshop />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
