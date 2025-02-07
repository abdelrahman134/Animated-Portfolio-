import Link from "next/link";
import {FaGithub,FaLinkedinIn} from "react-icons/fa"
const socials = [
  {
    icons: <FaGithub />,
    path: "https://github.com/abdelrahman134?tab=repositories",
  },
  {
    icons: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/abdelrahman-mahmoud-223a73222/",
  },
];
export default function Socials({containerStyles,iconStyles}) {
  return (
    <div className={containerStyles}>
        {
            socials.map((social, index) => (
                <Link target="_blank" className={iconStyles} href={social.path}>{social.icons}</Link>
            ))
        }

    </div>
  )
}
