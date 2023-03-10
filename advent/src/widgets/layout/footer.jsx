import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <button type="button" class="relative inline-flex items-center px-5 py-2.5 mr-2 text-sm font-medium text-center   ">
  <span class="sr-only">Call</span>
  <a href="sms:+254707486233">
          Call:<i className="text-blue-300">+254705720669</i>
        </a>
        </button>
        <section type="button" class="relative inline-flex items-center px-5 py-2.5 mr-2 text-sm font-medium text-center   ">
  <span class="sr-only">Notifications</span>
  <a href="sms:+254707486233">
          Text: <i className="text-blue-300">+254705720669</i>
        </a>
        </section>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Fragment>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Terms & Conditions</DialogHeader>
        <DialogBody divider>
<ol>
  <li>1.Cash payments are not allowed. Company will not take responsibility if conned. 
</li>
  <li>2. Transactions only through Company's CEO or Accountant payable through our playbill or Bank account.
</li>

  <li>3. Fines apply failure to Honor the Contract moreso on PNPL
</li>
  <li>4. 5 to 10% on referrals payable immediately the client pays first desposit. 
</li>
  <li>5. Backdoor Favors or Transactions with Advent Pictures team is illegal. 
</li>
  <li>6.  Free audio albums Must be recorded within the same year and after all payments have been made
</li>
  <li>7. Book Atleast 14 to 21 days earlier. 
</li>
<li>8. Album listening party provided. 
</li>

</ol>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="green"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Agree</span>
          </Button>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          
          
        </DialogFooter>
      </Dialog>
    </Fragment>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          
          <div className="mx-auto w-full px-4 text-center">
        
      
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
                   <button onClick={handleOpen} className="underline text-blue-800" >Terms & Conditions </button>
                   < br />

              {copyright}
              
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Advent Films",
  description:
    "Connect with us.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "#",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "#",
    },
    {
      color: "purple",
      name: "instagram",
      path: "#",
    },
    
    {
      color: "red",
      name: "youtube",
      path: "#",
    },
    
  ],
  menus: [

  ],
  copyright: (
    <>

      Copyright © {year}{" "}
     
        Advent Films. 
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
